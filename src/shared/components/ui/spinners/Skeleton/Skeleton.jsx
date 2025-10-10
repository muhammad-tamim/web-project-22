import React from 'react';
import Container from '../../../structure/Container/Container';

const Skeleton = () => {
    return (
        <Container>
            <div className="flex w-80 flex-col gap-4 pb-10">
                <div className="skeleton h-40 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
            </div>
        </Container>
    );
};

export default Skeleton;