import React, { useState } from 'react'
import faq from './assets/images/faq.svg';
import { IoIosArrowDown } from "react-icons/io";

const Faq = () => {

    const [activeFeature, setActiveFeature] = useState(0);

    const faqs = [
        {
            title: 'What is Fractional Investment',
            desc: `
            Fractional investment in real estate is an innovative way to invest in property without purchasing the entire asset. It allows multiple investors to collectively own a portion of a property. It happens when you buy a part/fraction of a property. (Similar to holding a share, which makes you part owner of the company)
           <p class='my-2'> This fractional real estate investment will get you recurring rental income and a possible appreciation if you decide to sell your share. </p>
            These properties will be leased out to verified tenants as Short Lets and AirBnBs and therefore are a great way to generate recurring income. 
            `
        },
        {
            title: 'What are the benefits of fractional real estate investment',
            desc: `
            It allows investment in multiple properties with lower capital requirements. It gives Investors access to high-value properties they might not ordinarily be able to afford as a whole. Fractional gives a much higher return on investments  with capital appreciation possibility.
            `
        },
        {
            title: 'What are the risks associated with fractional real estate investment',
            desc: 'Property value can change due to a couple of external factors. However, most properties depreciate due to natural disasters which is most unlikely in our environment.'
        },
        {
            title: 'Which property am I investing in and where is it located',
            desc: 'The property is a 3 bedroom fully furnished and serviced apartment located at Plot 10 Cadastral Zone B11, Kaura District (Directly opposite Benford International School and near Suncity Estate) Abuja, Nigeria.'
        },
        {
            title: 'What is the difference between REIT and Fractional Investment',
            desc: 'REIT investment have a fixed return over a period of time without any capital appreciation while Fractional investment returns fluctuates based on use of the property and also do have capital appreciation.'
        },
        {
            title: 'What if I want to sell or i am no longer interested in keeping my fraction',
            desc: 'Investors can sell their shares whenever they wish and a return of their full initial deposit is guaranteed, giving a 30 days notice.'
        },
        {
            title: 'When will I start earning rental income from this propery',
            desc: 'This property is currently being constructed and will be completed, furnished and equipped for occupation latest by 30th June, 2024. Profits from rental income or property appreciation will be distributed proportionally among investors, according to their share ownership. Roomeo will deduct 30% operational cost from all rental income before payout.'
        },
        {
            title:'What legal structure applies to fractional by Roomeo',
            desc:'All our apartments are registered in the form of publicly traded companies. This implies that our subscribers will be registered at the Corporate Affairs Commission of Nigeria (CAC) as shareholders of the apartment.'
        }
    ]

    return (
        <div className='custom-container !pt-24' id='faq'>
            <div className="grid gap-6 lg:gap-14 lg:grid-cols-2">
                <div className="flex lg:block flex-col items-center">
                    <p className="text-xs text-primary-red !font-fellixSemibold">FAQs</p>
                    <p className='text-xl !font-fellixSemibold mt-2'>We are always here for our <br className='hidden lg:block' />customers</p>
                    <p className='mt-2 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet habitant dui consectetur sed nam amet, magna. Iet se</p>
                    <img className='mt-10' src={faq} alt="faq" />
                </div>
                <div className="">
                    {faqs.map((feature, idx) => (
                        <div
                            data-aos="fade-up"
                            className="border rounded-lg px-3 sm:px-5 mb-3 w-full text-sm"
                            key={idx}
                        >
                            <button
                                onClick={() =>
                                    activeFeature == idx
                                        ? setActiveFeature(-1)
                                        : setActiveFeature(idx)
                                }
                                className="w-full py-3 flex justify-between items-center gap-3 sm:gap-10"
                            >
                                <div className="flex flex-1 items-center gap-3">
                                    <p className="pl-3 text-left text-sm !font-fellixSemibold">
                                        {" "}
                                        {feature.title}
                                    </p>
                                </div>
                                <div className={`w-8 h-8 grid place-content-center p-2 `}>
                                    <IoIosArrowDown size={20}
                                        className={`ml-0.5 transition-transform duration-300 ease-linear ${activeFeature === idx && "rotate-180"
                                            }`}
                                    />
                                </div>
                            </button>
                            {activeFeature === idx ? (
                                <p className="pb-7 pr-0 sm:pr-14 pt-3 pl-3  border-t" dangerouslySetInnerHTML={{ __html: feature.desc }}></p>
                            ) : null}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Faq
