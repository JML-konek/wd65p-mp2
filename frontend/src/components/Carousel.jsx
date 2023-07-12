import React, { useState, useEffect } from 'react';
import {
  BiSolidChevronLeftCircle,
  BiSolidChevronRightCircle,
} from 'react-icons/bi';
import pix1 from './img/p-1.jpg';
import pix2 from './img/p-2.jpg';
import pix3 from './img/p-3.jpg';
import pix4 from './img/video-2.mp4';

function Carousel() {
  const [slide, setSlide] = useState(0);
  const pix = [pix1, pix2, pix3, pix4]; // Replace with your own image URLs

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide(slide => (slide === pix.length - 1 ? 0 : slide + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [pix.length]);

  const prev = () => {
    const newSlide = slide === 0 ? pix.length - 1 : slide - 1;
    setSlide(newSlide);
  };

  const next = () => {
    const newSlide = slide === pix.length - 1 ? 0 : slide + 1;
    setSlide(newSlide);
  };

  return (
    <div className="relative grid lg:w-[720px] h-[480px] overflow-hidden rounded-xl">
      <div
        className="flex transition-transform duration-1000"
        style={{ transform: `translateX(-${slide * 100}%)` }}
      >
        {[
          pix.map((image, index) => (
            <img
              key={index}
              src={image}
              alt=""
              className="object-cover w-full h-full"
            />
          )),
          <video
            src={pix4}
            autoPlay
            muted
            loop
            className="object-cover w-full h-full "
          />,
        ]}
      </div>
      <div className="absolute inset-0 flex items-center justify-between px-4 text-3xl">
        <BiSolidChevronLeftCircle onClick={prev} />
        <BiSolidChevronRightCircle onClick={next} />
      </div>
      <div className="absolute flex gap-2 transform -translate-x-1/2 bottom-4 left-1/2">
        {pix.map((_, index) => (
          <div
            key={index}
            className={`w-8 h-1 rounded-full ${
              slide === index ? 'bg-blue-500' : 'bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
