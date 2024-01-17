import React from 'react'

import appstore from './assets/images/App Store.png'
import playstore from './assets/images/Play Store.png'
import easy from './assets/images/easy.png';
import flexible from './assets/images/flexible.png';
import hero from './assets/images/hero.png';
import spiral from './assets/images/spiral-bind.png';

const Hero = () => {
    return (
        <div className="mt-14">
            <div className='custom-container grid grid-cols-2 gap-10'>
                <div className='pt-26'>
                    <h3 className='text-6xl font-semibold'>
                        <p> Trusted platform for</p>
                        <div className='my-2 relative'>
                            <img className='absolute -left-7 top-0' src={spiral} alt="spiral" />
                            <span className='text-primary-red'>fractional</span>  real estate </div>
                        <p>investment</p>
                    </h3>
                    <p className='my-10 text-lg'>Roomeo helps Africans own fractions of high-income <br /> generating real
                        estate, manage their portfolio and build <br /> wealth.</p>
                    <div className="flex items-center gap-5 mt-8">
                        <img className='!max-h-[100px] max-w-40' src={appstore} alt="appstore" />
                        <img className='!max-h-[100px] max-w-40' src={playstore} alt="playstore" />
                    </div>
                    <div className="flex items-center gap-5 mt-12">
                        <div className="flex items-center gap-2 bg-faint-red p-3 py-2 pr-4 text-xs font-medium rounded-3xl">
                            <img className='w-7' src={easy} alt="easy" />
                            <p>Easy Investments</p>
                        </div>
                        <div className="flex items-center gap-2 bg-faint-red p-3 py-2 pr-4 text-xs font-medium rounded-3xl">
                            <img className='w-7' src={flexible} alt="flexible" />
                            <p>Flexible Earnings</p>
                        </div>
                    </div>
                </div>
                <img src={hero} alt="hero" />
            </div>
        </div>
    )
}

export default Hero
