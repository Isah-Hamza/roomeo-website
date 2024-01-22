import React, { useRef } from "react";
import Slider from "react-slick";
import { BiStar } from "react-icons/bi";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";


import person from './assets/images/reviewer.jpg';

const ResponsiveSlider = () => {
  const sliderRef = useRef(null);

  const next = () => {
    if (sliderRef.current) sliderRef.current.slickNext();
  };

  const previous = () => {
    if (sliderRef.current) sliderRef.current.slickPrev();
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 600,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 624,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  const reviews = [
    {
      date: 'Monday 16th of January 2024 by 01:20 AM',
      img: person,
      name: "DR. CELESTINE EMEKA",
      review: "Roomeo Apartments have quietly become a standout in Abuja's housing scene, consistently surpassing expectations in tenancy and housing agreements across Nigeria.",

    },
    {
      date: 'Monday 16th of January 2024 by 01:20 AM',
      img: person,
      name: "Leke Ogunride",
      review: 'Roomeo truly cares about their clients. They made the process of buying a home stress-free and enjoyable.',

    },
    {
      date: 'Monday 16th of January 2024 by 01:20 AM',
      img: person,
      name: "TOBECHUKWU",
      review: "In my transaction with Roomeo, the communication was excellent, and the team's professionalism truly stood out.",

    },
    {
      date: 'Monday 16th of January 2024 by 01:20 AM',
      img: person,
      name: "IDOREYIN NWAFOR",
      review: "Your services at Roomeo are excellent and your staff are well coordinated. Your team of cleaners are also doing a great job!"

    },
    {
      date: 'Monday 16th of January 2024 by 01:20 AM',
      img: person,
      name: "MR. JAIYE GABRIEL",
      review: "I invested in the sequence 1 project by Roomeo and I can say that the project was intense, thorough and excellently delivered! Roomeo is a company of integrity and I would recommend for anyone looking to invest in Real estate.",

    },
    {
      date: 'Monday 16th of January 2024 by 01:20 AM',
      img: person,
      name: "DR. CELESTINE EMEKA",
      review: "What sets Roomeo apart is their proactive approach; they go above and beyond in ensuring client satisfaction.",

    },
  ];

  return (
    <div className="mt-16">
      <Slider ref={sliderRef} {...settings}>
        {reviews.map((item, idx) => (
          <div
            data-aos="fade-up"
            key={idx}
            className={` ${idx !== 0 && "hidden md:block"
              } py-5rounded-lg `}
          >
            {/* <p className="text-right text-xs mb-2">{item.date}</p> */}
            <p className="text-sm">{item.review}</p>
            <div className=" flex gap-2 mt-3 items-center">
              <div className="">
                <p className="text-sm uppercase">
                  {item.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div
        // data-aos=""
        className="flex justify-center items-center mt-12 gap-4"
      >
        <button
          onClick={previous}
          className="bg-faint-red w-12 aspect-square rounded-full grid place-content-center"
        >
          <MdOutlineArrowBackIosNew size={15} />
        </button>
        <button
          onClick={next}
          className="bg-faint-red w-12 aspect-square rounded-full grid place-content-center"
        >
          <MdOutlineArrowForwardIos size={15} />
        </button>
      </div>
    </div>
  );
};

export default ResponsiveSlider;
