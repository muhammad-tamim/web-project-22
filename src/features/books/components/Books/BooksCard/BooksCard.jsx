import React from 'react';
import { CiStar } from 'react-icons/ci';
import { Link } from 'react-router';

const BooksCard = ({ book }) => {
    const { bookId, image, tags, bookName, author, category, rating } = book || {}
    return (
        <Link to={`book-details/${bookId}`}>
            <div className='border border-[#13131315] rounded-2xl p-6'>
                <div className='py-8 px-24 bg-[#F3F3F3] rounded-2xl mb-6'>
                    <img className='mx-auto lg:w-[134px] lg:h-[166px]' src={image} alt="" />
                </div>
                <div className='flex gap-10 work-sans pb-4'>
                    {tags.map((tag, index) => <p key={index} className='text-primary'>{tag}</p>)}
                </div>
                <h3 className='text-primary-content font-black text-2xl pb-4'>{bookName}</h3>
                <p className='text-secondary-content pb-5'>By : {author}</p>
                <hr className='text-[#13131315] border-dashed pb-5 ' />
                <div className='flex justify-between text-secondary-content font-medium'>
                    <p>{category}</p>
                    <div className='flex items-center gap-3'>
                        <p>{rating}</p>
                        <CiStar className='cursor-pointer' />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BooksCard;