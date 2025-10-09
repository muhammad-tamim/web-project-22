import React from 'react';

const Container = ({ children }) => {
    return (
        <div className='max-w-[1920px] mx-auto px-2 md:px-4 xl:px-20'>
            {children}
        </div>
    );
};

export default Container;