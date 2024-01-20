import React from 'react'
import logo from '../assets/images/logo.png';
import growth from '../assets/images/growth.png';

const CreateAccount = () => {
    return (
        <div className='w-full flex h-screen'>
            <div className="w-[450px] p-10 flex flex-col">
                <img className='w-32' src={logo} alt="logo" />
                <div className="flex items-center gap-2 mt-8">
                    <p className='text-lg text=[#041549]'>Create Your Account</p>
                    <img src={growth} alt="" className='w-5' />
                </div>
                <p className="mt-3 text-sm">
                    We need a few personal details to set an account.
                </p>
                <div className="text-sm grid grid-cols-2 gap-5 mt-10">
                    <div className="border rounded-lg p-2 grid overflow-x-hidden">
                        <label htmlFor="first_name">First Name</label>
                        <input type="text" className='outline-none border-none' />
                    </div>
                    <div className="border rounded-lg p-2 grid overflow-x-hidden">
                        <label htmlFor="last_name">Last Name</label>
                        <input type="text" className='outline-none border-none' />
                    </div>
                    <div className="border rounded-lg p-3 py-3.5 col-span-2">
                        <input type="text" className='outline-none border-none' placeholder='Email Address' />
                    </div>
                    <div className="border rounded-lg p-3 py-3.5 col-span-2">
                        <input type="text" className='outline-none border-none' placeholder='New Password' />
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <input type="checkbox" className='accent-primary-red' id='agree'/>
                        <label htmlFor='agree' className='whitespace-nowrap text-xs'>I agree to Roomeo <span className='text-primary-red'>Terms & Conditions</span>  and <span className='text-primary-red'>Privacy Policy</span> </label>
                    </div>
                    <button className='mt-5 col-span-2 block text-white bg-primary-red px-5 py-3.5 rounded-xl'>
                        Join Waitlist
                    </button>
                </div>
                <div className="mt-auto">
                    
                </div>
            </div>
            <div className="flex-1 bg-faint-red"></div>
        </div>
    )
}

export default CreateAccount
