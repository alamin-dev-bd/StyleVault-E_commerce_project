import { configureStore } from '@reduxjs/toolkit'

// Each feature adds its slice here as you build it, e.g.
//   import authReducer from '@/features/auth/authSlice'
//   reducer: { auth: authReducer, cart: cartReducer }
export const store = configureStore({
  reducer: {
    // Placeholder so Redux does not warn about an empty store. Delete when the first real slice exists.
    app: (state = { ready: true }) => state,
  },
})