import React from 'react'
import PageHeader from '../PageHeader'
import AboutMain from '../AboutMain'
import OurPeople from '../OurPeople'
import Header from '../Header'
import Review from '../Review'
import Footer from '../Footer'

const AboutUs = () => {
    return (
        <div>
            <Header />
            <PageHeader title={'About Us'} />
            <AboutMain />
            <OurPeople />
            <Review />
            <Footer />
        </div>
    )
}

export default AboutUs
