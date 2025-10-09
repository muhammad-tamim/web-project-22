import React from 'react';
import { NavLink } from 'react-router';
import PrimaryButton from '../../ui/buttons/PrimaryButton/PrimaryButton';
import SecondaryButton from '../../ui/buttons/SecondaryButton/SecondaryButton';

const Navbar = () => {
    const navItems = [
        { id: 1, value: "Home", to: "/" },
        { id: 2, value: "Listed Books", to: "listed-books" },
        { id: 3, value: "Pages to Read", to: "pages-to-read" },
    ]
    return (
        <div className="navbar work-sans py-[50px]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navItems.map((item) => <li key={item.id}><NavLink className={({ isActive }) => isActive ? 'text-red-500' : "text-green-600"} to={item.to}>{item.value}</NavLink></li>)}
                    </ul>
                </div>
                <a className="text-primary-content font-bold text-3xl">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 items-center gap-10">
                    {navItems.map((item) => <li key={item.id}><NavLink
                        className={({ isActive }) => isActive ? 'text-primary text-lg font-semibold py-[14px] px-5 border border-primary rounded-lg'
                            : "text-secondary-content text-lg"} to={item.to}>{item.value}</NavLink></li>)}
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <PrimaryButton text={"Sign In"}></PrimaryButton>
                <SecondaryButton text={"Sign Up"}></SecondaryButton>
            </div>
        </div >
    );
};

export default Navbar;