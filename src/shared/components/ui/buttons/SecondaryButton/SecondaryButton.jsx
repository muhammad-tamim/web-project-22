import React from 'react';

const SecondaryButton = ({ text, clickWish }) => {
    return (
        <button className={`work-sans ${clickWish ? 'cursor-not-allowed' : 'cursor-pointer'} text-lg font-semibold text-white py-3 xl:py-[18px] px-4 xl:px-7 bg-secondary rounded-lg`}>{text}</button>
    );
};

export default SecondaryButton;