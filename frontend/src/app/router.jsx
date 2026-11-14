import { createBrowserRouter } from 'react-router-dom'

import HomePage from '@/pages/shop/HomePage'

// Add routes here as pages are built. Later this becomes nested routes with layouts:
//   { element: <MainLayout />, children: [ { path: '/', element: <HomePage /> }, ... ] }
export const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '*', element: <div className="p-8">404 - Page not found</div> },
])