import React from 'react'
import logo from '../assets/images/logo.png';
import growth from '../assets/images/growth.png';
import design_right from '../assets/images/design-right.png';
import design_left from '../assets/images/design-left.png';
import dynamite from '../assets/images/dynamite.png';
import female from '../assets/images/Female.png';
import real_estate from '../assets/images/real-estate.png';

const CreateAccount = () => {
    return (
        <div className='w-full flex h-screen justify-center  overflow-hidden'>
            <div className="w-[450px] p-5 sm:p-10 pb-3 flex flex-col">
                <img className='w-32' src={logo} alt="logo" />
                <div className="flex items-center gap-2 mt-8">
                    <p className='text-lg text=[#041549]'>Create Your Account</p>
                    <img src={growth} alt="" className='w-5' />
                </div>
                <p className="mt-3 text-sm">
                    We need a few personal details to set an account.
                </p>
                <div className="text-sm grid grid-cols-2 gap-5 mt-10">
                    <div className="group border rounded-lg p-2 grid overflow-x-hidden">
                        <label htmlFor="first_name">First Name</label>
                        <input type="text" className='active:group:border-primary outline-none border-none' />
                    </div>
                    <div className="group border rounded-lg p-2 grid overflow-x-hidden">
                        <label htmlFor="last_name">Last Name</label>
                        <input type="text" className='active:group:border-primary outline-none border-none' />
                    </div>
                    <div className="group border rounded-lg col-span-2">
                        <input type="text" className='w-full p-3 py-3.5 active:group:border-primary outline-none border-none' placeholder='Email Address' />
                    </div>
                    <div className="group border rounded-lg col-span-2">
                        <input type="text" className='w-full p-3 py-3.5 active:group:border-primary outline-none border-none' placeholder='New Password' />
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <input type="checkbox" className='accent-primary-red' id='agree' />
                        <label htmlFor='agree' className='whitespace-nowrap text-xs'>I agree to Roomeo <span className='text-primary-red'>Terms & Conditions</span>  and <span className='text-primary-red'>Privacy Policy</span> </label>
                    </div>
                    <button className='mt-5 col-span-2 block text-white text-base bg-primary-red px-5 py-3.5 rounded-xl'>
                        Join Waitlist
                    </button>
                </div>
                <div className="mt-auto">
                    <p className="text-center mt-16 text-sm">Copyright © 2024 Roomeo</p>

                </div>
            </div>
            <div className="hidden md:block flex-1 bg-faint-red relative overflow-hidden p-5 pt-20">
                <img className='absolute top-0 right-0 w-96' src={design_right} alt="right" />
                <img className='absolute bottom-0 left-10 w-96' src={design_left} alt="left" />
                <div className="relative w-fit z-20">
                    <p className='!font-fellixSemibold text-2xl'>
                        Owning property has <br /> been made easy.
                        <span className='text-primary-red !font-fellixSemibold'> <br />Buy. Earn. Monitor</span>
                    </p>
                    <p className='text-xs mt-2'>Don't be left out</p>
                    <img className='absolute top-1/2 -translate-y-1/2 -right-40' src={dynamite} alt="left" />
                </div>
                <img className='absolute bottom-0 right-0 max-w-[250px] lg:max-w-[350px] z-20' src={female} alt="left" />
                <img className='absolute bottom-0 right-[250px] lg:right-[350px] w-[300px] lg:w-[400px] z-10' src={real_estate} alt="left" />
            </div>
        </div>
    )
}

export default CreateAccount
