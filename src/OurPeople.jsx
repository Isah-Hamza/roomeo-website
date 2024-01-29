import React, { useState } from 'react'
import team1 from './assets/images/team1.png';
import team2 from './assets/images/team2.png';
import team3 from './assets/images/team3.png';
import team4 from './assets/images/team4.png';
import team5 from './assets/images/team5.png';
import team6 from './assets/images/team6.png';

import team11 from './assets/images/ceo.webp';
import team12 from './assets/images/coo.webp';
import team13 from './assets/images/teamlad.webp';
import team14 from './assets/images/estate manager.webp';
import team15 from './assets/images/research lead.webp';
import team16 from './assets/images/creative director.webp';

const OurPeople = () => {

    const teams = [team1, team2, team3, team4, team5, team6];
    const teamss = [
        {
            name: 'DOYIN ADEWOLA',
            image: team11,
            title: 'CEO'
        },
        {
            name: 'AKINTAYO AKINSUROJU',
            image: team12,
            title: 'COO'
        },
        {
            name: 'VICTORIA ADEWOLA',
            image: team13,
            title: 'Team Lead'
        },
        {
            name: 'VICTOR JOHN',
            image: team14,
            title: 'Estate Manager'
        },
        {
            name: 'CHRISTIE ONOGWU',
            image: team15,
            title: 'Research Lead'
        },
        {
            name: 'AMARII OWUNNA',
            image: team16,
            title: 'Creative Director'
        },
    ];

    const [active, setActive] = useState(0);
    return (
        <div>
            <div className='custom-container !max-w-[1550px] !mt-28 mb-12'>
                <div className="text-center">
                    <p className="text-xs text-primary-red font-medium">Our People</p>
                    <p className='text-lg font-medium mt-2'>
                        Our workplace fosters growth, learning, development, and <br className='hidden sm:block' /> encourages employees to achieve their full potential.
                    </p>
                </div>
                <div className="mt-10 justify-center grid grid-cols-2 sm:flex-wrap sm:flex gap-5">
                    {
                        teamss.map((item, idx) =>
                            <div className={`bg-red-500 rounded-lg relative cursor-pointer !h-[350px] transition-all duration-500 ease-in-out 
                            ${idx == active ? 'w-[300px]' : 'w-[200px]'}`}>
                                <img key={idx}
                                    onMouseOver={() => setActive(idx)}
                                    onMouseLeave={() => setActive(0)}
                                    className={`!h-full object-cover rounded-lg`}
                                    src={item.image} alt="team member"
                                />
                                <div className={`${idx == 1 && '!text-blacks'} text-section ${idx === active ? '' : 'revert-back hidden'} 
                               transition-all duration-300 whitespace-nowrap pointer-events-none text-white !text-xl !font-fellixBold absolute bottom-3 left-1/2 -translate-x-1/2 text-center`}>
                                    <p className='text-lg'>{item.name}</p>
                                    <p className='text-lg'>{item.title}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default OurPeople
