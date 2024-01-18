import React from 'react'
import logo from './assets/images/logo.png';
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
    return (
        <header>
            <div className="custom-container flex items-center gap-10 justify-between py-7">
                <img src={logo} alt="" />
                <ul className='hidden lg:flex items-center gap-10'>
                    <li className='font-medium'>Home</li>
                    <li>About Us</li>
                    <li>Real Series</li>
                    <li>Resources</li>
                    <li>FAQs</li>
                    <li className='block lg:hidden'>Create Account</li>
                </ul>
                <button className='hidden lg:block text-white bg-primary-red px-5 py-2.5 rounded-3xl'>
                    Create Free Account
                </button>
                <button className='block lg:hidden'>
                    <RxHamburgerMenu size={25}/>
                </button>
            </div>
        </header>
    )
}

export default Header
