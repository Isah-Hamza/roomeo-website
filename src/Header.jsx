import React from 'react'
import logo from './assets/images/logo.png';
const Header = () => {
    return (
        <header>
            <div className="custom-container flex items-center gap-10 justify-between py-7">
                <img src={logo} alt="" />
                <ul className='flex items-center gap-10'>
                    <li className='font-medium'>Home</li>
                    <li>About Us</li>
                    <li>Real Series</li>
                    <li>Resources</li>
                    <li>FAQs</li>
                </ul>
                <button className='text-white bg-primary-red px-5 py-2.5 rounded-3xl'>
                    Create Free Account
                </button>
            </div>
        </header>
    )
}

export default Header
