import React from 'react'
import start_journey from './assets/images/start_journey.png'
import number1 from './assets/images/number1.png'
import number2 from './assets/images/number2.png'
import number3 from './assets/images/number3.png'
import appstore from './assets/images/App Store.png'
import playstore from './assets/images/Play Store.png'

const StartJourney = () => {
    return (
        <div className='py-14 bg-[#66303105] items-center'>
            <div className="custom-container items-center grid md:grid-cols-[1fr,1fr] gap-14">
                <img className='hidden md:block' src={start_journey} alt="journey" />
                <div className="">
                    <p className="text-center md:text-left text-xs text-primary-red font-medium">Start the Journey</p>
                    <p className='text-center text-dark-black md:text-left text-lg font-medium mt-2'>Get Started with Roomeo <br /> in three steps</p>
                    <p className='text-center md:text-left mt-2 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet habitant dui consectetur sed nam amet, magna. Iet se</p>
                    <div className='mt-7'>
                        <div className="grid gap-5">
                            <div className="flex">
                                <img src={number1} alt="" />
                                <div className='text-sm'>
                                    <p className='font-medium'>Headline Title</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet habitant dui consectetur sed nam amet,</p>
                                </div>
                            </div>
                            <div className="flex">
                                <img src={number2} alt="" />
                                <div className='text-sm'>
                                    <p className='font-medium'>Headline Title</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet habitant dui consectetur sed nam amet,</p>
                                </div>
                            </div>
                            <div className="flex">
                                <img src={number3} alt="" />
                                <div className='text-sm'>
                                    <p className='font-medium'>Headline Title</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet habitant dui consectetur sed nam amet,</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 mt-8 max-w-[200px]">
                        <img className='!max-h-[100px] max-w-40' src={appstore} alt="appstore" />
                        <img className='!max-h-[100px] max-w-40' src={playstore} alt="playstore" />
                    </div>
                </div>
            </div>
            <div className="mt-20 w-[600px] rounded-lg p-5 bg-faint-red mx-auto ">
                <iframe
                    className='rounded-xl'
                    width="100%"
                    height="450"
                    src="https://www.youtube.com/embed/WO0oyqH8-Ec?si=rD39J0EDWYVAhcMr"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                </iframe>
            </div>
        </div>
    )
}

export default StartJourney
