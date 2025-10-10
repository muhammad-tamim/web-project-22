// main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import './index.css'
import { RouterProvider } from 'react-router';
import { AppRoutes } from './routes/AppRoutes/AppRoutes';
import ReadListProvider from './features/books/providers/ReadListProvider/ReadListProvider';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReadListProvider>
      <RouterProvider router={AppRoutes}></RouterProvider>
    </ReadListProvider>
  </StrictMode>,
)