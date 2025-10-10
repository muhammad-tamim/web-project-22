import React from 'react';
import Hero from '../../shared/components/structure/Hero/Hero';
import Books from '../../features/books/components/Books/Books';

const HomePage = () => {
    return (
        <div>
            <Hero></Hero>
            <Books></Books>
        </div>
    );
};

export default HomePage;