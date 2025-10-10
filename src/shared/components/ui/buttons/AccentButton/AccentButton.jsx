import React from 'react';

const AccentButton = ({ text = "hello" }) => {
    return (
        <button className='work-sans cursor-pointer text-lg font-semibold text-primary-content py-3 xl:py-[18px] px-4 xl:px-7 border border-[#13131330] rounded-lg'>{text}</button>
    );
};

export default AccentButton;