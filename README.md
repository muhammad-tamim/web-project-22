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

2. How to use a skeleton: 

```jsx
import React, { useEffect, useState } from 'react';
import BooksCard from './BooksCard/BooksCard';
import Skeleton from '../../../../shared/components/ui/spinners/Skeleton/Skeleton';

const Books = () => {
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('/booksData.json')
            .then(res => res.json())
            .then(data => setBooks(data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [])


    return (
        <div className='py-[100px]'>
            <h2 className='text-[40px] font-bold text-center pb-9'>Books</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
                {error && <p className='text-red-500 text-center col-span-full text-3xl'>{error.message}</p>}
                {loading && Array(6).fill(0).map((_, index) => <Skeleton key={index}></Skeleton>)}
                {books.map((book) => <BooksCard key={book.bookId} book={book}></BooksCard>)}
            </div>
        </div>
    );
};

export default Books;
```

```jsx
import React from 'react';
import Container from '../../../structure/Container/Container';

const Skeleton = () => {
    return (
        <Container>
            <div className="flex w-80 flex-col gap-4 pb-10">
                <div className="skeleton h-40 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
            </div>
        </Container>
    );
};

export default Skeleton;
```

3. React feature-based folder structure

## Challenges I faced while Building This Project:
1. I had a bit of trouble aligning the drawer icon to the right.

```jsx
{/* drawer */}
<div className="drawer justify-end drawer-end lg:hidden">
    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer-4" className="btn"><CiMenuFries /></label>
    </div>
    <div className="drawer-side">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-52 p-4 ">
            {/* Sidebar content here */}
            {navItems.map((item) => <li key={item.id}><Link to={item.to}>{item.value}</Link></li>)}
            <li><a href="">Sign In</a></li>
            <li><a href="">Sign Up</a></li>
        </ul>
    </div>
</div>
```

## Contact With Me: 

tamim.muhammad2005@gmail.com | +8801586090360 (WhatsApp)  

https://www.linkedin.com/in/tamim-muhammad
