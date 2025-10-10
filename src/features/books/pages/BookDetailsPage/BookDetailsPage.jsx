import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import SecondaryButton from '../../../../shared/components/ui/buttons/SecondaryButton/SecondaryButton';
import AccentButton from '../../../../shared/components/ui/buttons/AccentButton/AccentButton';
import Skeleton from '../../../../shared/components/ui/spinners/Skeleton/Skeleton';

const BookDetailsPage = () => {

    const { id } = useParams()

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

    const parseId = parseInt(id)
    const filterBook = books.find((book) => book.bookId === parseId) || {}

    const { bookId, image, tags = [], bookName, author, category, rating, review, totalPages, publisher, yearOfPublishing } = filterBook

    console.log(filterBook)
    return (
        <>
            {loading && <div className='flex'>
                <Skeleton></Skeleton>
                <Skeleton></Skeleton>
            </div>}
            {error && <p className='text-red-500 text-center col-span-full text-3xl'>{error.message}</p>}
            {(!loading && error === null) && <div className='mb-[100px] flex flex-col xl:flex-row gap-10'>
                <div className='flex-1 p-[74px] rounded-2xl bg-[#13131305]'>
                    <img src={image} className='mx-auto xl:w-[426px] xl:h-[565px]' alt="" />
                </div>
                <div className='flex-1 text-center xl:text-start'>
                    <h1 className='font-bold text-[40px] pb-4'>{bookName}</h1>
                    <p className='work-sans text-secondary-content text-xl font-medium pb-6'>By: {author}</p>
                    <p className='work-sans text-secondary-content text-xl font-medium py-2 border-[#13131315] border-y mb-6'>{category}</p>
                    <p className='work-sans text-[#13131370] pb-6'>Review: {review}</p>
                    <div className='pb-6 flex gap-5 justify-center xl:justify-start'>Tag: {tags.map((tag, index) => <p key={index} className='work-sans font-medium text-primary'>#{tag}</p>)}</div>
                    <hr className='text-[#13131315] mb-6' />
                    <div className='pb-8 work-sans space-y-3 flex gap-[59px] justify-center xl:justify-start'>
                        <div>
                            <p><span className='text-secondary-content '>Number of Pages:</span></p>
                            <p><span className='text-secondary-content '>Publisher:</span></p>
                            <p><span className='text-secondary-content '>Year of Publishing:</span></p>
                            <p><span className='text-secondary-content '>Rating:</span></p>
                        </div>

                        <div>
                            <p><span className='font-semibold text-primary-content'>{totalPages}</span></p>
                            <p><span className='font-semibold text-primary-content'>{publisher}</span></p>
                            <p><span className='font-semibold text-primary-content'>{yearOfPublishing}</span></p>
                            <p><span className='font-semibold text-primary-content'>{rating}</span></p>
                        </div>
                    </div>
                    <div className='flex gap-4 justify-center xl:justify-start'>
                        <AccentButton text={"Read"}></AccentButton>
                        <SecondaryButton text={"WishList"}></SecondaryButton>
                    </div>
                </div>
            </div>}
        </>
    );
};

export default BookDetailsPage;