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
      name: "Sarah",
      review: 'Lorem ipsum dolor sit amet consectetur. Eu neque molestie viverra lacus metus donec orci pellentesque. Curabitur sagittis massa ',

    },
    {
      date: 'Monday 16th of January 2024 by 01:20 AM',
      img: person,
      name: "Adanna",
      review: 'Lorem ipsum dolor sit amet consectetur. Eu neque molestie viverra lacus metus donec orci pellentesque. Curabitur sagittis massa ',

    },
    {
      date: 'Monday 16th of January 2024 by 01:20 AM',
      img: person,
      name: "Shola",
      review: 'Lorem ipsum dolor sit amet consectetur. Eu neque molestie viverra lacus metus donec orci pellentesque. Curabitur sagittis massa ',

    },
    {
      date: 'Monday 16th of January 2024 by 01:20 AM',
      img: person,
      name: "Jamiu",
      review: 'Lorem ipsum dolor sit amet consectetur. Eu neque molestie viverra lacus metus donec orci pellentesque. Curabitur sagittis massa ',

    },
    {
      date: 'Monday 16th of January 2024 by 01:20 AM',
      img: person,
      name: "Hamza",
      review: 'Lorem ipsum dolor sit amet consectetur. Eu neque molestie viverra lacus metus donec orci pellentesque. Curabitur sagittis massa ',

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
              <img
                className="overflow-hidden !rounded-full h-9 w-9"
                src={item.img}
                alt="img"
              />
              <div className="">
                <p className="text-sm">
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
