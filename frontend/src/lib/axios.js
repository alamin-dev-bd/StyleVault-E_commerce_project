import axios from 'axios'
import { tokenStorage } from '@/lib/storage'

// Value comes from frontend/.env  ->  VITE_API_BASE_URL=http://localhost:8000/api/v1
const baseURL = import.meta.env.VITE_API_BASE_URL

const api = axios.create({
  baseURL,
  timeout: 15000, // fail after 15 s instead of hanging forever
  headers: { 'Content-Type': 'application/json' },
})

// 1) REQUEST: attach the access token to every call
api.interceptors.request.use((config) => {
  const token = tokenStorage.getAccess()
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

// 2) RESPONSE: if the access token expired (401), get a new one ONCE and retry the request
let refreshPromise = null // shared, so five parallel 401s trigger only ONE refresh call

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const original = error.config
    const status = error.response?.status
    const isAuthCall =
      original?.url?.includes('/auth/login/') || original?.url?.includes('/auth/token/refresh/')

    if (status === 401 && !original._retry && !isAuthCall && tokenStorage.getRefresh()) {
      original._retry = true // never retry the same request twice
      try {
        refreshPromise =
          refreshPromise ??
          axios
            .post(`${baseURL}/auth/token/refresh/`, { refresh: tokenStorage.getRefresh() })
            .finally(() => {
              refreshPromise = null
            })
        const { data } = await refreshPromise
        tokenStorage.set({ access: data.access, refresh: data.refresh })
        original.headers.Authorization = `Bearer ${data.access}`
        return api(original) // replay the original request with the new token
      } catch (refreshError) {
        tokenStorage.clear()
        // The auth slice listens for this event and logs the user out of the UI.
        window.dispatchEvent(new Event('auth:logout'))
        return Promise.reject(refreshError)
      }
    }
    return Promise.reject(error)
  },
)

export default api