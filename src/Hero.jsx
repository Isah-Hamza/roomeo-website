import React, { useEffect, useState } from 'react'

import appstore from './assets/images/App Store.png'
import playstore from './assets/images/Play Store.png'
import easy from './assets/images/easy.png';
import flexible from './assets/images/flexible.png';
import hero from './assets/images/hero.png';

import hero1 from './assets/images/hero1.png';
import hero2 from './assets/images/hero2.png';
import hero3 from './assets/images/hero3.png';

import spiral from './assets/images/spiral-bind.png';

import design_right from './assets/images/design-right.png';
import design_left from './assets/images/design-left.png';

const Hero = () => {

    const images = [hero1, hero2, hero3];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        // Function to change the image after a specified time interval
        const changeImage = () => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        };

        // Set up a timer to change the image every, for example, 5 seconds
        const intervalId = setInterval(changeImage, 5000);

        // Clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, [images.length]);

    return (
        <div className="pt-16 bg-[#F45E5105] relative overflow-x-hidden">
            <img className='absolute top-0 right-0 w-96' src={design_right} alt="right" />
            <img className='absolute bottom-0 left-10 w-96' src={design_left} alt="left" />
            {/* start main of hero */}
            <div className='relative custom-container flex flex-col-reverse md:grid grid-cols-2 gap-10 z-10'>
                <div className='pt-26'>
                    <h3 className='hidden md:block text-4xl lg:text-6xl font-semibold'>
                        <p> Trusted platform for</p>
                        <div className='my-2 relative'>
                            <img className='absolute -left-7 top-0 w-52 lg:w-[unset]' src={spiral} alt="spiral" />
                            <span className='text-primary-red'>fractional</span>  real estate </div>
                        <p>investment</p>
                    </h3>
                    <p className='my-7 lg:my-10 lg:text-lg text-center sm:text-left'>Roomeo helps Africans own fractions of high-income <br className='hidden lg:block' /> generating real
                        estate, manage their portfolio and build <br className='hidden lg:block' /> wealth.</p>
                    <div className="flex flex-col sm:flex-row items-center gap-5 mt-8">
                        <img className='!max-h-[100px] max-w-52 sm:max-w-40' src={appstore} alt="appstore" />
                        <img className='!max-h-[100px] max-w-52 sm:max-w-40' src={playstore} alt="playstore" />
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
                {/* <img src={images[currentImageIndex]} alt="hero" /> */}

                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Image ${index + 1}`}
                        className={index === currentImageIndex ? 'block' : 'hidden'}
                    />
                ))}

                <h3 className='font-semibold tracking-wide text-4xl block md:hidden text-center'>
                    Trusted platform for
                    {/* <div className='my-2 relative w-fit'> */}
                    {/* <img className='absolute -left-7 top-0 w-[125%] max-w-[unset]' src={spiral} alt="spiral" /> */}
                    {/* </div> */}
                    <span className='text-primary-red px-2'>fractional</span>
                    real estate investment
                </h3>
            </div >
        </div >
    )
}

export default Hero
