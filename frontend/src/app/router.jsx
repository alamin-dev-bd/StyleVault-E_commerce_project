import { createBrowserRouter } from 'react-router-dom'

import HomePage from '@/pages/shop/HomePage'
import NotFoundPage from '@/pages/NotFoundPage'
import Login from '@/pages/auth/Login'
import Signup from '@/pages/auth/Signup'

// Add routes here as pages are built. Later this becomes nested routes with layouts:
//   { element: <MainLayout />, children: [ { path: '/', element: <HomePage /> }, ... ] }
export const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '*', element: <NotFoundPage /> },
  { path:'/login', element: <Login  />} ,
  { path:'/signup', element: <Signup  />} 
])