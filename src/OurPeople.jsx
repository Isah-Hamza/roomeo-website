import React from 'react'
import team1 from './assets/images/team1.png';
import team2 from './assets/images/team2.png';
import team3 from './assets/images/team3.png';
import team4 from './assets/images/team4.png';
import team5 from './assets/images/team5.png';
import team6 from './assets/images/team6.png';

const teams = [team1, team2, team3, team4, team5, team6]

const OurPeople = () => {
    return (
        <div>
            <div className='custom-container !mt-28 mb-12'>
                <div className="text-center">
                    <p className="text-xs text-primary-red font-medium">Our People</p>
                    <p className='text-lg font-medium mt-2'>
                        Our workplace fosters growth, learning, development, and <br className='hidden sm:block' /> encourages employees to achieve their full potential.
                    </p>
                </div>
                <div className="mt-10 justify-center grid grid-cols-2 sm:flex-wrap sm:flex gap-5">
                    {
                        teams.map((item) => <img className='h-full' src={item} alt="team member" />)
                    }

                </div>
            </div>
        </div>
    )
}

export default OurPeople
