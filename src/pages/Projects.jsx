import React from 'react'
import PageHeader from '../PageHeader'
import Header from '../Header'
import Review from '../Review'
import Footer from '../Footer'

import sequence1_large from '../assets/images/sequence-1-large.jpg';
import sequence1_small_1 from '../assets/images/sequence-1-small.jpg';
import sequence1_small_2 from '../assets/images/sequence-1-small2.jpg';

import sequence21 from '../assets/images/sequence21.jpg';
import sequence22 from '../assets/images/sequence22.jpg';
import sequence23 from '../assets/images/sequence23.jpg';

import { HashLink as Link } from 'react-router-hash-link'

const Projects = () => {
    return (
        <div>
            <Header />
            <PageHeader title={'Our Projects'} />
            <div className="custom-container text-center !mx-auto !mt-14">
                <h2 className='text-4xl sm:text-5xl !font-fellixBold mb-10'>The Sequence I</h2>
                <p className='max-w-[900px] mx-auto text-center'>The Sequence 1 is comprised of 12 units of 2 bedroom apartments and located in the Kaura District of Abuja, precisely opposite Voyage International School by Sun City Estate These homes are the epitome of indoor-outdoor living with ample parking space, and stunning modern interior fitouts, perfect for a contemporary family.</p>
                <p className="text-primary-red uppercase text-sm mt-2 !font-fellixSemibold">Status - Sold Out</p>
                <div className='max-w-[1000px] mx-auto mt-10'>
                    <img src={sequence1_large} alt="" className='rounded-md' />
                    <div className="grid md:grid-cols-2 gap-7 mt-7">
                        <img src={sequence1_small_1} alt="" className='rounded-md' />
                        <img src={sequence1_small_2} alt="" className='rounded-md' />
                    </div>
                </div>
                <div className="custom-container text-center !mx-auto !mt-20">
                    <h2 className='text-4xl sm:text-5xl !font-fellixBold mb-10'>The Sequence II</h2>
                    <p className='max-w-[900px] mx-auto text-center'>TSequence 2 is comprised of 12 units of 3-bedroom serviced apartments and located in the Kaura District of Abuja, precisely opposite Benford International School by Sun City Estate. These serviced apartments are the epitome of indoor-outdoor living, with ample parking space and stunning modern interior fit-outs, perfect for a contemporary family. Apartments are delivered completely finished, not furnished.</p>
                    <p className="text-primary-red uppercase text-sm mt-2 !font-fellixSemibold">Status - In Progress</p>
                    <div className='max-w-[1000px] mx-auto mt-10'>
                        <img src={sequence21} alt="" className='rounded-md' />
                        <div className="grid md:grid-cols-2 gap-7 mt-7">
                            <img src={sequence22} alt="" className='rounded-md' />
                            <img src={sequence23} alt="" className='rounded-md' />
                        </div>
                    </div>

                    <button className='mt-20 mx-auto text-white bg-primary-red px-5 py-2.5 rounded-xl'>
                        <Link to={'#footer'}>
                            Contact Us
                        </Link>
                    </button>
                </div>
            </div>
            <Review />
            <div id='footer'>  <Footer /></div>

        </div>
    )
}

export default Projects
