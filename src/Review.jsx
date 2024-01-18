import React from 'react'
import ResponsiveSlider from './ResponsiveSlider'

const Review = () => {
    return (
        <div className="bg-[#E07C4F05] py-8 md:py-14 mt-10">
            <div className='custom-container'>
                <div className="text-center">
                    <p className="text-xs text-primary-red font-medium">Customers' Review</p>
                    <p className='text-lg font-medium mt-2'>See what people are saying about us</p>
                    <p className='mt-2 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet <br className='hidden md:block' />habitant dui consectetur sed nam amet, magna. Iet se</p>
                </div>
                <ResponsiveSlider />
            </div>
        </div>
    )
}

export default Review
