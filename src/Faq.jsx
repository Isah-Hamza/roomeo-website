import React, { useState } from 'react'
import faq from './assets/images/faq.svg';
import { IoIosArrowDown } from "react-icons/io";

const Faq = () => {

    const [activeFeature, setActiveFeature] = useState(0);

    const faqs = [
        {
            title: 'Lorem ipsum dolor sit amet consectetur In blandit sed',
            desc: 'Lorem ipsum dolor sit amet consecte. Pellentesque cursus facilisis metus mauris faucibus gravida in enim. Id ipsum laoreet integer arcu massa in. Pellentesque et dictum sed egestas enim dui amet aliquet.'
        },
        {
            title: 'Lorem ipsum dolor sit amet consectetur In blandit sed',
            desc: 'Lorem ipsum dolor sit amet consecte. Pellentesque cursus facilisis metus mauris faucibus gravida in enim. Id ipsum laoreet integer arcu massa in. Pellentesque et dictum sed egestas enim dui amet aliquet.'
        },
        {
            title: 'Lorem ipsum dolor sit amet consectetur In blandit sed',
            desc: 'Lorem ipsum dolor sit amet consecte. Pellentesque cursus facilisis metus mauris faucibus gravida in enim. Id ipsum laoreet integer arcu massa in. Pellentesque et dictum sed egestas enim dui amet aliquet.'
        },
        {
            title: 'Lorem ipsum dolor sit amet consectetur In blandit sed',
            desc: 'Lorem ipsum dolor sit amet consecte. Pellentesque cursus facilisis metus mauris faucibus gravida in enim. Id ipsum laoreet integer arcu massa in. Pellentesque et dictum sed egestas enim dui amet aliquet.'
        },
        {
            title: 'Lorem ipsum dolor sit amet consectetur In blandit sed',
            desc: 'Lorem ipsum dolor sit amet consecte. Pellentesque cursus facilisis metus mauris faucibus gravida in enim. Id ipsum laoreet integer arcu massa in. Pellentesque et dictum sed egestas enim dui amet aliquet.'
        },
        {
            title: 'Lorem ipsum dolor sit amet consectetur In blandit sed',
            desc: 'Lorem ipsum dolor sit amet consecte. Pellentesque cursus facilisis metus mauris faucibus gravida in enim. Id ipsum laoreet integer arcu massa in. Pellentesque et dictum sed egestas enim dui amet aliquet.'
        },
        {
            title: 'Lorem ipsum dolor sit amet consectetur In blandit sed',
            desc: 'Lorem ipsum dolor sit amet consecte. Pellentesque cursus facilisis metus mauris faucibus gravida in enim. Id ipsum laoreet integer arcu massa in. Pellentesque et dictum sed egestas enim dui amet aliquet.'
        },
    ]

    return (
        <div className='custom-container !mt-24'>
            <div className="grid gap-6 lg:gap-14 lg:grid-cols-2">
                <div className="flex lg:block flex-col items-center">
                    <p className="text-xs text-primary-red font-medium">FAQs</p>
                    <p className='text-lg font-medium mt-2'>We are always here for our <br className='hidden lg:block' />customers</p>
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
                                    <p className="pl-3 text-left text-sm font-semibold">
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
                                <p className="pb-7 pr-0 sm:pr-14 pt-2 pl-3">{feature.desc}</p>
                            ) : null}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Faq
