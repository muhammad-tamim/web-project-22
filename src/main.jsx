// main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import './index.css'
import { RouterProvider } from 'react-router';
import { AppRoutes } from './routes/AppRoutes/AppRoutes';
import ReadListProvider from './features/books/providers/ReadListProvider/ReadListProvider';
import WishListProvider from './features/books/providers/WishListProvider/WishListProvider';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReadListProvider>
      <WishListProvider>
        <RouterProvider router={AppRoutes}></RouterProvider>
      </WishListProvider>
    </ReadListProvider>
  </StrictMode>,
)