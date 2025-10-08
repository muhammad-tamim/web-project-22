// main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import './index.css'

// Import React Router dependencies
import { createBrowserRouter, RouterProvider } from 'react-router';


const router = createBrowserRouter([
  {
    path: '/',
    element: <h1 className='text-primary'>Welcome to the Home Page</h1>,

  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)