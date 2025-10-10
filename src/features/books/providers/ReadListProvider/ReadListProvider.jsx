import React, { useState } from 'react';
import { ReadListContext } from '../../context/ReadListContext/ReadListContext';
import toast from 'react-hot-toast';

const ReadListProvider = ({ children }) => {
    const [readList, setReadList] = useState([]);


    const addToRead = (book) => {
        const clickedIt = readList.find((list) => list.bookId === book.bookId)
        if (clickedIt) {
            return toast.error("Sorry Your data already added once")
        }
        else {
            setReadList([...readList, book])
            toast.success("Hello")
        }
    };

    return (
        <ReadListContext.Provider value={{ addToRead, readList }}>
            {children}
        </ReadListContext.Provider>
    );
};

export default ReadListProvider;