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
      name: "Alexandra",
      review: "I was skeptical at first, but Roomeo's fractional investment platform proved to be a game-changer. It allowed me to diversify my real estate portfolio without breaking the bank. The user-friendly interface and transparent process made me feel confident about my investments. Looking forward to seeing my wealth grow!",

    },
    {
      date: 'Monday 16th of January 2024 by 01:20 AM',
      img: person,
      name: "James",
      review: "As someone new to investing, Roomeo's fractional investment option was a perfect entry point for me. The low initial investment allowed me to dip my toes into real estate without a substantial commitment. The regular updates and clear communication from Roomeo's team kept me informed and reassured about my investment decisions.",

    },
    {
      date: 'Monday 16th of January 2024 by 01:20 AM',
      img: person,
      name: "Linda",
      review: "Fractional investment with Roomeo has been a stress-free experience. I appreciate the flexibility it offers, allowing me to invest in premium properties without the burden of full ownership. The seamless process, coupled with Roomeo's commitment to customer satisfaction, has exceeded my expectations. Highly recommend!",

    },
    {
      date: 'Monday 16th of January 2024 by 01:20 AM',
      img: person,
      name: "Tobechukwu",
      review: "In my transaction with Roomeo, the communication was excellent, and the team's professionalism truly stood out.",

    },
    {
      date: 'Monday 16th of January 2024 by 01:20 AM',
      img: person,
      name: "Celestine",
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
