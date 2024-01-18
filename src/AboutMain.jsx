import React from 'react'
import about1 from './assets/images/about-1.png';
import about2 from './assets/images/about-2.png';
import { MdArrowRight, MdArrowRightAlt } from 'react-icons/md';

const AboutMain = () => {
    return (
        <div className=''>
            <div className="max-w-[1000px] m-auto grid grid-cols-2 gap-20 py-14">
                <p className='text-2xl font-semibold grid place-content-center max-w-96 leading-relaxed '>
                    We are a trusted property investment company focused on eliminating barriers that stand in the way of attaining gainful and impactful returns on real estate.
                </p>
                <img src={about1} alt="about us" className='max-h-[450px]' />
            </div>
            <div className=" bg-faint-red">
                <div className="max-w-[1000px] m-auto grid grid-cols-[1fr,1fr] items-center gap-14 py-20">
                    <img src={about1} alt="about us" className='w-full max-h-[400px]' />
                    <div>
                        <p className='font-medium text-primary-red'>Our Culture</p>
                        <p className='text-2xl font-semibold my-3'>Work ends when the job  is<br /> done</p>
                        <p className='max-w-96 leading-relaxed'>
                            We are a dedicated team and characterized by our strong work ethic, our willingness to go above and beyond, and our ability to collaborate effectively.                </p>
                        <button className='font-medium mt-10 flex text-primary-red bg-faint-red px-5 py-2 rounded-xl items-center gap-2'>Join Our Team <MdArrowRightAlt /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMain
