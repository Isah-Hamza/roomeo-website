import React from 'react'
import waitlist from './assets/images/wailist.png';

const Waitlist = () => {
    return (
        <div>
            <div className="max-w-[1100px] mx-auto !mt-28 mb-20 px-5 sm:px-10 grid md:grid-cols-2 gap-20 items-center">
                <img src={waitlist} alt="waitlist" className='hidden md:block' />
                <div className="">
                    <div className="text-center sm:text-left">
                        <p className="text-xs text-primary-red !font-fellixSemibold">Waitlist</p>
                        <p className='text-xl !font-fellixSemibold mt-2'>
                            Owning property has been <br className='hidden sm:block' /> made easy. <span className='!font-fellixSemibold  text-primary-red'>Buy. Earn. Monitor</span>
                        </p>
                        <p className="mt-2 text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet habitant dui consectetur sed nam amet, magna. Iet se
                        </p>
                        <img src={waitlist} alt="waitlist" className='block md:hidden mt-10' />

                    </div>
                    <div className="grid grid-cols-2 gap-5 mt-10">
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
                        <button className='mt-5 col-span-2 block text-white bg-primary-red px-5 py-3.5 rounded-xl'>
                            Join Waitlist
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Waitlist
