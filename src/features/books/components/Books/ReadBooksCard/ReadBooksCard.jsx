import React from 'react';
import { useNavigate } from 'react-router';
import { CiLocationOn } from 'react-icons/ci';
import { IoBookOutline, IoPeopleOutline } from 'react-icons/io5';

const ReadBooksCard = ({ list }) => {

    const navigate = useNavigate()

    const handleClick = (id) => {
        navigate(`../book-details/${id}`)
    }

    return (
        <div key={list.bookId} className='border border-[#13131315] rounded-2xl p-6 my-8 flex flex-col lg:flex-row gap-6 text-center md:text-left'>
            <div className='bg-[#13131305] rounded-2xl py-[50px] px-7'>
                <img className='mx-auto w-[129px] h-[172px]' src={list.image} alt="" />
            </div>
            <div className='space-y-4'>
                <h2 className='font-bold text-2xl text-primary-content'>{list.bookName}</h2>
                <p className='work-sans font-medium text-secondary-content'>By: {list.author}</p>
                <div className='flex flex-col md:flex-row gap-4 items-center'>
                    <div className='flex gap-1 lg:gap-4 items-center'>
                        <p className='work-sand font-bold'>Tag</p>
                        {list.tags.map((tag, index) => <p key={index} className='text-primary font-medium bg-[#23BE0A05] rounded-[30px] py-2.5 px-4'>#{tag}</p>)}
                    </div>
                    <div className='text-secondary-content flex gap-3 items-center'>
                        <CiLocationOn />
                        <p>Year of Publishing: {list.yearOfPublishing}</p>
                    </div>
                </div>
                <div className='work-sans text-secondary-content flex items-center gap-4 text-sm'>
                    <div className='flex gap-1 lg:gap-2 items-center'>
                        <IoPeopleOutline />
                        <p>Publisher: {list.publisher}</p>
                    </div>
                    <div className='flex gap-1 lg:gap-2 items-center'>
                        <IoBookOutline />
                        <p>Page: {list.totalPages}</p>
                    </div>
                </div>
                <hr className='text-[#13131315]' />
                <div className='flex items-center gap-3 work-sans text-xs'>
                    <p className='text-[#328EFF] py-2 lg:py-[11px]  px-4 lg:px-[20px] rounded-[30px] bg-[#328EFF15]'>Category: {list.category}</p>
                    <p className='text-[#FFAC33] py-2 lg:py-[11px]  px-4 lg:px-[20px] rounded-[30px] bg-[#FFAC3315]'>Rating: {list.rating}</p>
                    <p onClick={() => handleClick(list.bookId)} className='text-white py-2 lg:py-[11px]  px-4 lg:px-[20px] rounded-[30px] bg-primary cursor-pointer'>View Details</p>
                </div>
            </div>
        </div>
    );
};

export default ReadBooksCard;