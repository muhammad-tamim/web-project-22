import React from 'react';
import { Link, NavLink } from 'react-router';
import PrimaryButton from '../../ui/buttons/PrimaryButton/PrimaryButton';
import SecondaryButton from '../../ui/buttons/SecondaryButton/SecondaryButton';
import { CiMenuFries } from 'react-icons/ci';

const Navbar = () => {
    const navItems = [
        { id: 1, value: "Home", to: "/" },
        { id: 2, value: "Listed Books", to: "listed-books" },
        { id: 3, value: "Pages to Read", to: "pages-to-read" },
    ]
    return (
        <div className="navbar work-sans py-5 lg:py-[50px] ">
            <div className="navbar-start">
                <a className="text-primary-content font-bold text-2xl lg:text-3xl">Book Vibe</a>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1 items-center gap-5 lg:gap-10">
                    {navItems.map((item) => <li key={item.id}><NavLink
                        className={({ isActive }) => isActive ? 'text-primary text-lg font-semibold py-[14px] px-5 border border-primary rounded-lg'
                            : "text-secondary-content text-lg"} to={item.to}>{item.value}</NavLink></li>)}
                </ul>
            </div>
            <div className="navbar-end">
                {/* drawer */}
                <div className="drawer justify-end drawer-end lg:hidden">
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer-4" className="btn"><CiMenuFries /></label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-base-200 text-base-content min-h-full w-52 p-4 ">
                            {/* Sidebar content here */}
                            {navItems.map((item) => <li key={item.id}><Link to={item.to}>{item.value}</Link></li>)}
                            <li><a href="">Sign In</a></li>
                            <li><a href="">Sign Up</a></li>
                        </ul>
                    </div>
                </div>
                {/* buttons */}
                <div className='gap-4 hidden lg:flex'>
                    <PrimaryButton text={"Sign In"}></PrimaryButton>
                    <SecondaryButton text={"Sign Up"}></SecondaryButton>
                </div>
            </div>
        </div >
    );
};

export default Navbar;