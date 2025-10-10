import { createBrowserRouter } from "react-router";
import HomePage from "../../pages/HomePage/HomePage";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import BookDetailsPage from "../../features/books/pages/BookDetailsPage/BookDetailsPage";
import ListedBooksPage from "../../features/books/pages/ListedBooksPage/ListedBooksPage";

export const AppRoutes = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                Component: HomePage
            },
            {
                path: 'book-details/:id',
                Component: BookDetailsPage
            },
            {
                path: 'listed-books',
                Component: ListedBooksPage,
            },
        ]
    },
    {
        path: "*",
        element: <NotFoundPage></NotFoundPage>
    }
])