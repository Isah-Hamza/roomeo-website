import React from 'react'
import design_right from './assets/images/design-right.png';
import design_left from './assets/images/design-left.png';

const PageHeader = ({ title }) => {
    return (
        <div className='overflow-hidden relative text-primary-red bg-[#F45E510A] h-[170px] grid place-content-center text-center'>
            <p className='text-xl font-semibold'>{title}</p>
            <img className='absolute top-0 right-0 w-96' src={design_right} alt="right" />
            <img className='absolute bottom-0 left-0 w-40' src={design_left} alt="left" />
        </div>
    )
}

export default PageHeader
