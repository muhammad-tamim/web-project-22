import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useReadLits } from '../../hooks/useReadList';
import ListedCard from '../../components/Books/ListedCard/ListedCard';
import { FaAngleDown } from 'react-icons/fa';
import { useWithList } from '../../hooks/useWishList';

const ListedBooksPage = () => {

    const { readList } = useReadLits()
    const { wishList } = useWithList()


    const [sortType, setSortType] = useState('');

    const handleSort = (type) => {
        setSortType(type);
    };

    // Sort copies of both lists
    const sortedReadList = [...readList];
    const sortedWishList = [...wishList];

    if (sortType === 'pages') {
        sortedReadList.sort((a, b) => b.totalPages - a.totalPages);
        sortedWishList.sort((a, b) => b.totalPages - a.totalPages);
    } else if (sortType === 'ratings') {
        sortedReadList.sort((a, b) => b.rating - a.rating);
        sortedWishList.sort((a, b) => b.rating - a.rating);
    }


    return (
        <div className='mb-[100px]'>
            <h1 className='work-sans font-bold text-[28px] text-primary-content text-center py-8 bg-[#13131305] rounded-2xl mb-8'>Books</h1>
            <div className='text-center pb-[100px]'>
                <details className="dropdown dropdown-center">
                    <summary className="btn btn-primary text-white work-sans font-semibold text-lg py-[15px] px-5">Sort By <FaAngleDown /></summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={() => handleSort('pages')}><a>Pages</a></li>
                        <li onClick={() => handleSort('ratings')}><a>Ratings</a></li>
                        <li onClick={() => handleSort('')}><a>Default</a></li>
                    </ul>
                </details>
            </div>
            <div>
                <Tabs>
                    <TabList>
                        <Tab>Read Books</Tab>
                        <Tab>WishList Books</Tab>
                    </TabList>

                    <TabPanel>
                        {sortedReadList.length === 0 && <p className='text-primary-content pt-5 text-2xl font-semibold'>You didn't read any book yet</p>}
                        {sortedReadList.map(list => <ListedCard key={list.bookId} list={list}></ListedCard>)}
                    </TabPanel>
                    <TabPanel>
                        {sortedWishList.length === 0 && <p className='text-primary-content pt-5 text-2xl font-semibold'>You didn't wish any book yet</p>}
                        {sortedWishList.map(list => <ListedCard key={list.bookId} list={list}></ListedCard>)}
                    </TabPanel>
                </Tabs>
            </div>
        </div >
    );
};

export default ListedBooksPage;