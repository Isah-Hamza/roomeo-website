import React from 'react'
import logo from './assets/images/logo.png';
import { FaFacebook } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='custom-container border-t pt-14 mb-5'>
            <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-10">
                <div className="mb-5 sm:mb-0">
                    <img src={logo} alt="" className='w-40 mx-auto sm:mx-[unset]' />
                    <p className='mt-2 text-sm max-w-72 text-center sm:text-left'>Our mission is to provide trusted access for people seeking to build wealth in real estate</p>
                </div>
                <div className='grid grid-cols-3 sm:flex text-sm gap-16 lg:gap-20'>
                    <div className=''>
                        <p className='!font-fellixSemibold mb-5'>Brands</p>
                        <ul className='flex flex-col gap-1'>
                            <li>CleanOut</li>
                            <li>Freeze</li>
                            <li>Egone</li>
                        </ul>
                    </div>
                    <div className=''>
                        <p className='!font-fellixSemibold mb-5'>Company</p>
                        <ul className='flex flex-col gap-1'>
                            <li>About Us</li>
                            <li>Projects</li>
                            <li>Blog</li>
                            <li>Contact Us</li>
                            <li>FAQs</li>
                        </ul>
                    </div>
                    <div className=''>
                        <p className='!font-fellixSemibold mb-5'>Legal</p>
                        <ul className='flex flex-col gap-1'>
                            <li>Privacy</li>
                            <li>Terms</li>
                            <li>Security</li>
                        </ul>
                    </div>
                </div>
                <div className=" text-center sm:text-right col-span-3 sm:col-span-[unset] ">
                    <div className="flex justify-center sm:justify-end items-center gap-5 mb-3" >
                        <FaFacebook className='text-primary-red' size={20} />
                        <GrTwitter className='text-primary-red' size={20} />
                        <FaSquareInstagram className='text-primary-red' size={20} />
                    </div>
                    <p>41 Voyage Close Kaura District <br />
                        Abuja Nigeria.</p>
                    <p className='my-2'>contact@roomeo.ng</p>
                    <p>+234 (909) 060 6099</p>
                </div>
            </div>
            <p className="text-center mt-16 text-sm">Copyright © 2024 Roomeo</p>
        </div>
    )
}

export default Footer
