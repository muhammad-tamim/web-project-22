import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useReadLits } from '../../hooks/useReadList';
import ReadBooksCard from '../../components/Books/ReadBooksCard/ReadBooksCard';
import { FaAngleDown } from 'react-icons/fa';

const ListedBooksPage = () => {

    const { readList } = useReadLits()


    return (
        <div className='mb-[100px]'>
            <h1 className='work-sans font-bold text-[28px] text-primary-content text-center py-8 bg-[#13131305] rounded-2xl mb-8'>Books</h1>
            <div className='text-center pb-[70px]'>
                <details className="dropdown dropdown-center">
                    <summary className="btn btn-primary text-white work-sans font-semibold text-lg py-[15px] px-5">Sort By <FaAngleDown /></summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a>Pages</a></li>
                        <li><a>Ratings</a></li>
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
                        {readList.length === 0 && <p className='text-primary-content pt-5 text-2xl font-semibold'>You didn't read any book yet</p>}
                        {readList.map(list => <ReadBooksCard key={list.bookId} list={list}></ReadBooksCard>)}
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div >
    );
};

export default ListedBooksPage;