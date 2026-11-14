import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { store } from '@/app/store'
import { router } from '@/app/router'
import '@/styles/index.css' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Redux makes the store available to every component */}
    <Provider store={store}>
      {/* React Router renders the page that matches the URL */}
      <RouterProvider router={router} />
      {/* Toast container: call toast.success('...') from anywhere */}
      <Toaster richColors position="top-right" />
    </Provider>
  </StrictMode>,
)