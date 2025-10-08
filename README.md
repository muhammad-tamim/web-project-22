# Project Name: CS-Ticket System

## Project Description:  

## Live Site Link:

## Project Video:

## What I Learned New while Building This Project:
1. We can catch runtime error automatically with the help of react-router errorElement and useRouteError()

```jsx
import { createBrowserRouter } from "react-router";
import HomePage from "../../pages/HomePage/HomePage";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

export const AppRoutes = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                Component: HomePage
            }
        ]

    },
    {
        path: "*",
        element: <NotFoundPage></NotFoundPage>
    }
])
```

```jsx
import React from 'react';
import { Link, useRouteError } from 'react-router';

const ErrorPage = () => {
    const error = useRouteError();

    if (error.status === 404) {
        return <NotFoundPage />;
    }

    console.error(error);
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <h1 className="text-3xl font-bold mb-2">Something went wrong 😢</h1>
            <p className="mb-4 text-gray-600">{error?.status || "Unknown"}</p>
            <p className="mb-4 text-gray-600">{error?.statusText || "No status text"}</p>
            <p className="mb-4 text-gray-600">{error?.message || "No message provided"}</p>
            {error?.data && (
                <p className="mb-4 text-gray-600">{JSON.stringify(error.data)}</p>
            )}
            <Link to="/" className="text-blue-600 underline">
                Go Home
            </Link>
        </div>
    );
};

export default ErrorPage;
```
2. React feature-based folder structure

## Challenges I faced while Building This Project:

## Contact With Me: 

tamim.muhammad2005@gmail.com | +8801586090360 (WhatsApp)  

https://www.linkedin.com/in/tamim-muhammad
