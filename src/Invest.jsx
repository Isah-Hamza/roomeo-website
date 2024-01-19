import React from 'react'
import property1 from './assets/images/prop1.png';
import property2 from './assets/images/prop2.png';
import property3 from './assets/images/prop3.png';

const Invest = () => {
    return (
        <div className=''>
            <div className="custom-container !py-20">
                <div className='text-center'>
                    <p className='text-xl font-semibold mb-3'>Invest in fractions of high income generating <br className='hidden sm:block' /> properties across the world</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet  habitant dui  <br className='hidden sm:block' /> consectetur sed nam amet, magna. Iet se</p>
                    <button className="text-sm font-medium m-auto mt-10 px-5 py-2 rounded-2xl text-primary-red bg-faint-red">See More Properties</button>
                </div>
                <div className="mt-12 md:mt-20 grid md:grid-cols-3 gap-7 md:gap-5">
                    <div className="cursor-pointer grid justify-center md:block rounded-lg bg-white p-3 text-sm">
                        <img src={property1} alt="property" />
                        <div className="flex items-center justify-between gap-5 mt-3 mb-1">
                            <p className='font-semibold'>The Sequence 2</p>
                            <p className='text-primary-red bg-faint-red py-1 px-3 rounded-xl text-xs font-medium'>N350k/fraction</p>
                        </div>
                        <p>Flat 2B Friends Colony Estate, Lagos, Nigeria. </p>
                        <div className="flex items-center mt-3">
                            <p className='text-xs sm:text-sm'>
                                <span className='font-medium'>0</span> Investors <span className='px-2'> | </span>
                                <span className='font-medium'>0</span> Total Purchases <span className='px-2'> | </span>
                                <span className='font-medium'>10</span> Fractions Left
                            </p>
                        </div>
                    </div>
                    <div className="cursor-pointer grid justify-center md:block rounded-lg bg-white p-3 text-sm">
                        <img src={property2} alt="property" />
                        <div className="flex items-center justify-between gap-5 mt-3 mb-1">
                            <p className='font-semibold'>Luxe Residence</p>
                            <p className='text-primary-red bg-faint-red py-1 px-3 rounded-xl text-xs font-medium'>$100k/fraction</p>
                        </div>
                        <p>110 Gardengate DrHarvest, Alabama, UK. </p>
                        <div className="flex items-center mt-3">
                            <p className='text-xs sm:text-sm'>
                                <span className='font-medium'>18</span> Investors <span className='px-2'> | </span>
                                <span className='font-medium'>22</span> Total Purchases <span className='px-2'> | </span>
                                <span className='font-medium'>4</span> Fractions Left
                            </p>
                        </div>
                    </div>
                    <div className="cursor-pointer grid justify-center md:block rounded-lg bg-white p-3 text-sm">
                        <img src={property3} alt="property" />
                        <div className="flex items-center justify-between gap-5 mt-3 mb-1">
                            <p className='font-semibold'>Luxe Residence</p>
                            <p className='text-primary-red bg-faint-red py-1 px-3 rounded-xl text-xs font-medium'>$474k/fraction</p>
                        </div>
                        <p>Rosharon, TX, Pradera Oaks, texas, US. </p>
                        <div className="flex items-center mt-3">
                            <p className='text-xs sm:text-sm'>
                                <span className='font-medium'>22</span> Investors <span className='px-2'> | </span>
                                <span className='font-medium'>4</span> Total Purchases <span className='px-2'> | </span>
                                <span className='font-medium'>10</span> Fractions Left
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Invest
