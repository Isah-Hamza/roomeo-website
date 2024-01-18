import React from 'react'
import PageHeader from '../PageHeader'
import AboutMain from '../AboutMain'
import OurPeople from '../OurPeople'

const AboutUs = () => {
    return (
        <div>
            <PageHeader title={'About Us'} />
            <AboutMain />
            <OurPeople />
        </div>
    )
}

export default AboutUs
