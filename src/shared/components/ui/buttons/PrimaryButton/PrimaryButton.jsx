import React from 'react';

const PrimaryButton = ({ text = "hello" }) => {
    return (
        <button className='work-sans cursor-pointer text-lg font-semibold text-white py-[18px] px-7 bg-primary rounded-lg'>{text}</button>
    );
};

export default PrimaryButton;