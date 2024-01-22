import React from 'react'
import pink_arrow from './assets/images/pink arrow.png';
import black_arrow from './assets/images/black arrow.png';
import green_arrow from './assets/images/green arrow.png';
import buy from './assets/images/buy.png';
import monitor from './assets/images/monitor.png';
import earn from './assets/images/earn.png';

const OwnProperty = () => {
    return (
        <div className='bg-[#FCF2ED] py-20 mt-32'>
            <div className="custom-container grid lg:grid-cols-2 gap-10">
                <div className='flex flex-col text-center justify-center items-center'>
                    <h3 className='text-2xl !font-fellixBold'>
                          <p className='!font-fellixBold'>Owning property has <br />been made easy.
                        </p>
                            <p className='!font-fellixBold '>Buy. Earn. Monitor</p>
                    </h3>
                    {/* <p className='mt-5 max-w-96'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet habitant
                        dui consectetur sed nam amet, magna. Iet se</p> */}
                </div>
                <div className="bg-white rounded-lg p-10 pb-0">
                    <p className='font-bold text-[#2DC874] mb-3'>Buy</p>
                    <p>Buy as many fractions from our  <br />listed properties at affordable  entry <br /> points.</p>
                    <div className="mt-5 sm:mt-0 flex flex-col sm:flex-row justify-between sm:items-end">
                        <div className="flex items-center mb-16">
                            <img src={green_arrow} alt="arrow" />
                            <p className='font-medium text-[#2DC874]'>Learn More</p>
                        </div>
                        <img src={buy} alt="buy" />
                    </div>
                </div>
                <div className="bg-white rounded-lg p-10 pb-0">
                    <p className='font-bold text-[#D1328F] mb-3'>Earn</p>
                    <p>Earn rental income from assets and benefit <br className='hidden sm:block' /> from property appreciation based on your<br className='hidden sm:block' /> fractional ownership.</p>
                    <div className="mt-5 sm:mt-0 flex flex-col sm:flex-row justify-between sm:items-end">
                        <div className="flex items-center mb-16">
                            <img src={pink_arrow} alt="arrow" />
                            <p className='font-medium text-[#D1328F]'>Learn More</p>
                        </div>
                        <img src={earn} alt="buy" />
                    </div>
                </div>
                <div className="bg-white rounded-lg p-10 pb-0">
                    <p className='font-bold text-dark-black mb-3'>Monitor</p>
                    <p>Monitor your portfolio with <br className='hidden sm:block' /> ease while we handle the day-to-day <br className='hidden sm:block' />management.</p>
                    <div className="mt-5 sm:mt-0 flex flex-col sm:flex-row justify-between sm:items-end">
                        <div className="flex items-center mb-16">
                            <img src={black_arrow} alt="arrow" />
                            <p className='font-medium text-dark-black'>Learn More</p>
                        </div>
                        <img src={monitor} alt="buy" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OwnProperty
