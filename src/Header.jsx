import React, { useState } from 'react'
import logo from './assets/images/logo.png';
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink, useNavigate } from 'react-router-dom';
import { IoClose } from "react-icons/io5";
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {
    const navigate = useNavigate()
    const [sideBarOpen, setSideBarOpen] = useState(false);
    return (

        <header>
            <div className="relative custom-container flex items-center gap-10 justify-between py-7">
                <Link to={'/'}>
                    <img src={logo} alt="" />
                </Link>
                <ul className={`${sideBarOpen ? 'open' : 'left-full'} fixed lg:static flex items-center gap-10 `}>
                    <li onClick={() => setSideBarOpen(false)} className='!font-fellixSemibold'> <NavLink to={'/'} className={({ isActive }) => { isActive ? 'active' : '' }} >Home</NavLink> </li>
                    <li onClick={() => setSideBarOpen(false)} > <NavLink to={'/about'} className={({ isActive }) => { isActive ? 'active' : '' }} >About Us</NavLink> </li>
                    <li onClick={() => setSideBarOpen(false)} >REAL Series</li>
                    <li onClick={() => setSideBarOpen(false)} > <Link  to={'#faq'}>FAQs</Link> </li>
                    <li onClick={() => setSideBarOpen(false)} className='block lg:hidden'>
                        <NavLink to={'create-account'}> Create Account</NavLink>
                    </li>
                </ul>
                <button onClick={() => navigate('create-account')} className='hidden lg:block text-white bg-primary-red px-5 py-2.5 rounded-xl'>
                    Create Free Account
                </button>
                <button onClick={() => setSideBarOpen(!sideBarOpen)} className='block lg:hidden'>
                    <RxHamburgerMenu size={25} />
                </button>
                {sideBarOpen ? <button
                    onClick={() => setSideBarOpen(!sideBarOpen)} className='z-20 fixed top-7 right-5 block lg:hidden'>
                    <IoClose size={30} />
                </button> : null}
            </div>
        </header>
    )
}

export default Header
