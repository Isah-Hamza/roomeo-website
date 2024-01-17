import React from 'react'
import start_journey from './assets/images/journey.png'
import number1 from './assets/images/number1.png'
import number2 from './assets/images/number2.png'
import number3 from './assets/images/number3.png'
import appstore from './assets/images/App Store.png'
import playstore from './assets/images/Play Store.png'

const StartJourney = () => {
    return (
        <div className='mt-28 pt-28 pb-20 bg-[#66303105] items-center'>
            <div className="custom-container items-center grid md:grid-cols-[3fr,2fr] gap-14">
                <img className='hidden md:block' src={start_journey} alt="journey" />
                <div className="">
                    <p className="text-center md:text-left text-xs text-primary font-medium">Start the Journey</p>
                    <p className='text-center md:text-left text-lg font-medium mt-2'>Get Started with Roomeo <br /> in three steps</p>
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
        </div>
    )
}

export default StartJourney
