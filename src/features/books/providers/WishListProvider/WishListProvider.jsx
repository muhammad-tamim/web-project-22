import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { WishListContext } from '../../context/WishListContext/WishListContext';

const WishListProvider = ({ children }) => {
    const [wishList, setWishList] = useState([]);


    const addToWish = (book) => {
        const clickedIt = wishList.find((list) => list.bookId === book.bookId)
        if (clickedIt) {
            return toast.error("Sorry Your data already wished once")
        }
        else {
            setWishList([...wishList, book])
            toast.success("Your WishList added")
        }
    };

    return (
        <WishListContext.Provider value={{ addToWish, wishList }}>
            {children}
        </WishListContext.Provider>
    );
};

export default WishListProvider;