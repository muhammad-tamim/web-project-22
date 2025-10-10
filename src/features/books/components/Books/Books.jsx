import React, { useEffect, useState } from 'react';
import BooksCard from './BooksCard/BooksCard';

const Books = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('/booksData.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    console.log(books)

    return (
        <div className='py-[100px]'>
            <h2 className='text-[40px] font-bold text-center pb-9'>Books</h2>
            <div className='grid grid-cols-3 gap-6'>
                {books.map((book) => <BooksCard key={book.bookId} book={book}></BooksCard>)}
            </div>
        </div>
    );
};

export default Books;