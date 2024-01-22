import React from 'react'
import property1 from './assets/images/property11.png';
import property2 from './assets/images/property22.png';
import property3 from './assets/images/property33.png';
import StatusBadge from './StatusBadge';
import sequence2 from './assets/images/sequence2.jpeg';


const Invest = () => {
    return (
        <div className=''>
            <div className="custom-container !py-20">
                <div className='text-center'>
                    <p className='text-xl !font-fellixBold mb-3'>Invest in Fractions.</p>
                    <p>You are one step away from owning high income generating  <br className='hidden sm:block' /> properties across the world.</p>
                    <button className="text-sm font-medium m-auto mt-10 px-5 py-2 rounded-2xl text-primary-red bg-faint-red">See More Properties</button>
                </div>
                <div className="mt-12 md:mt-20 grid md:grid-cols-3 gap-7 md:gap-5">
                    <div className="group cursor-pointer  rounded-lg bg-white p-3 text-sm">
                        <a href="https://paystack.com/pay/fractional"
                            className='grid justify-center md:block'
                        >
                            <div className="relative overflow-hidden rounded-lg">
                                <img src={sequence2} className='group-hover:scale-110 transition-all duration-300 ease-in-out w-full rounded-lg max-h-[170px] object-cover' alt="property" />
                                <StatusBadge status='Open' />
                            </div>
                            <div className="flex items-center justify-between gap-5 mt-3 mb-1">
                                <p className='!font-fellixSemibold'>The Sequence 2</p>
                                <p className='text-primary-red bg-faint-red py-1 px-3 rounded-xl text-xs font-medium'>₦85k/fraction</p>
                            </div>
                            <p>Plot 10 Cadastral Zone B 11, Kaura District, Abuja, Nigeria </p>
                            <div className="flex items-center mt-3">
                                <p className='text-xs sm:text-[13px]'>
                                    <span className='!font-fellixSemibold'>13</span> Investors <span className='px-1'> | </span>
                                    <span className='!font-fellixSemibold'>400</span> Fractions Purchases <span className='px-1'> | </span>
                                    <span className='!font-fellixSemibold'>600</span> Fractions Left
                                </p>
                            </div>
                        </a>
                    </div>
                    <div className="group cursor-pointer grid justify-center md:block rounded-lg bg-white p-3 text-sm">
                        <div className="relative overflow-hidden rounded-lg">

                            <img src={property2} className='w-full group-hover:scale-110 transition-all duration-300 ease-in-out' alt="property" />
                        </div>
                        <div className="flex items-center justify-between gap-5 mt-3 mb-1">
                            <p className='!font-fellixSemibold'>Luxe Residence</p>
                            <p className='text-primary-red bg-faint-red py-1 px-3 rounded-xl text-xs font-medium'>£400/fraction</p>
                        </div>
                        <p>123 Elm Street, London W1A 1AA, United Kingdom. </p>
                        <div className="flex items-center mt-3">
                            <p className='text-xs sm:text-[13px]'>
                                <span className='!font-fellixSemibold'>0</span> Investors <span className='px-1'> | </span>
                                <span className='!font-fellixSemibold'>0</span> Fractions Purchases <span className='px-1'> | </span>
                                <span className='!font-fellixSemibold'>1000</span> Fractions Left
                            </p>
                        </div>
                    </div>
                    <div className="group cursor-pointer grid justify-center md:block rounded-lg bg-white p-3 text-sm">
                        <div className='relative overflow-hidden rounded-lg'>
                            <img src={property3} className='w-full group-hover:scale-110 transition-all duration-300 ease-in-out' alt="property" />
                        </div>
                        <div className="flex items-center justify-between gap-5 mt-3 mb-1">
                            <p className='!font-fellixSemibold'>Luxe Residence</p>
                            <p className='text-primary-red bg-faint-red py-1 px-3 rounded-xl text-xs font-medium'>£400/fraction</p>
                        </div>
                        <p>R456 Oak Residence Houston, TX 77001, United States. </p>
                        <div className="flex items-center mt-3">
                            <p className='text-xs sm:text-[13px]'>
                                <span className='!font-fellixSemibold'>0</span> Investors <span className='px-1'> | </span>
                                <span className='!font-fellixSemibold'>0</span> Fractions Purchases <span className='px-1'> | </span>
                                <span className='!font-fellixSemibold'>1000</span> Fractions Left
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Invest
