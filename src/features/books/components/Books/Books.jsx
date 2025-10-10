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