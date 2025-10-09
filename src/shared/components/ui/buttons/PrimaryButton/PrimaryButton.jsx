import React from 'react';

const PrimaryButton = ({ text = "hello" }) => {
    return (
        <button className='work-sans cursor-pointer text-lg font-semibold text-white py-3 xl:py-[18px] px-4 xl:px-7 bg-primary rounded-lg'>{text}</button>
    );
};

export default PrimaryButton;