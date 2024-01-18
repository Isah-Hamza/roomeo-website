import React from 'react'
import logo from './assets/images/logo.png';
import { FaFacebook } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='custom-container border-t pt-14 mb-5'>
            <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-10">
                <div className="">
                    <img src={logo} alt="" className='w-40' />
                </div>
                <div className='flex text-sm gap-16'>
                    <div className=''>
                        <p className='font-medium mb-5'>Brands</p>
                        <ul className='flex flex-col gap-1'>
                            <li>CleanOut</li>
                            <li>Freeze</li>
                            <li>Egone</li>
                        </ul>
                    </div>
                    <div className=''>
                        <p className='font-medium mb-5'>Company</p>
                        <ul className='flex flex-col gap-1'>
                            <li>Services</li>
                            <li>About Us</li>
                            <li>Blog</li>
                            <li>FAQs</li>
                        </ul>
                    </div>
                    <div className=''>
                        <p className='font-medium mb-5'>Legal</p>
                        <ul className='flex flex-col gap-1'>
                            <li>Privacy</li>
                            <li>Terms</li>
                            <li>Security</li>
                        </ul>
                    </div>
                    <div className="text-right">
                        <div className="flex justify-center sm:justify-end items-center gap-5 mb-3" >
                            <FaFacebook className='text-primary-red' size={20} />
                            <GrTwitter className='text-primary-red' size={20} />
                            <FaSquareInstagram className='text-primary-red' size={20} />
                        </div>
                        <p>41 Voyage CloseKaura District <br />
                            Abuja Nigeria.</p>
                        <p className='my-2'>contact@roomeo.ng</p>
                        <p>+234 (909) 060 6099</p>
                    </div>
                </div>
            </div>
            <p className="text-center mt-16 text-sm">Copyright © 2024 Roomeo</p>
        </div>
    )
}

export default Footer
