import React from 'react'
import Header from '../Header'
import Hero from '../Hero'
import OwnProperty from '../OwnProperty'
import Invest from '../Invest'
import StartJourney from '../StartJourney'
import Faq from '../Faq'
import Review from '../Review'
import Footer from '../Footer'
import Waitlist from '../Waitlist'

const Landing = () => {
    return (
        <div>
            <Header />
            <Hero />
            <OwnProperty />
            <Invest />
            <StartJourney />
            <Faq />
            {/* <Waitlist /> */}
            <Review />
            <Footer />
        </div>
    )
}

export default Landing
