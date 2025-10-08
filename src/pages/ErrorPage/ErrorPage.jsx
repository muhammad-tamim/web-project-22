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