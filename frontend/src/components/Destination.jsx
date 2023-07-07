import React from 'react';
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs';
import { useState } from 'react';
import img1 from './img/p-1.jpg';
import img2 from './img/p-2.jpg';
import img3 from './img/p-3.jpg';

const pix = [
  {
    url: img1,
  },
  {
    url: img2,
  },
  {
    url: img3,
  },
];

function Destination() {
  const [slide, setSlide] = useState(0);

  const prev = () => {
    const firstSlide = slide === 0;
    const newSlide = firstSlide ? pix.length - 1 : slide - 1;
    setSlide(newSlide);
  };

  const next = () => {
    const lastSlide = slide === pix.length - 1;
    const newSlide = lastSlide ? 0 : slide + 1;
    setSlide(newSlide);
  };

  return (
    <div className="max-w-[1440px] mx-auto grid pt-4 lg:grid-cols-3 lg:pt-12">
      {/* LEFT */}
      <div className="lg:col-span-2 flex flex-col justify-evenly md:pr-2">
        <div className="relative w-full flex h-full object-center col-span-2 row-span-2 ">
          <img
            src={pix[slide].url}
            alt=""
            className=" rounded-none md:rounded-3xl "
          />
          <div className="absolute flex inset-0 items-center justify-between px-4 text-orange-500">
            <div>
              <BsFillArrowLeftCircleFill
                size={30}
                onClick={prev}
                className=" cursor-pointer"
              />
            </div>
            <div>
              <BsFillArrowRightCircleFill
                size={30}
                onClick={next}
                className=" cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
      {/* RIGHT */}

      <div className="pt-4 lg:pt-0 lg:pl-2">
        <div className="py-10 text-center bg-emerald-600 rounded-none md:rounded-t-3xl">
          <h2>Plan your Vacation</h2>
        </div>
        <form action="" className=" bg-gray-300">
          <div className="flex flex-col p-10 pt-0">
            <label className="py-2" htmlFor="">
              Full Name:
            </label>
            <input
              className="px-2 py-2 rounded-3xl"
              type="text"
              placeholder=""
            />
            <label className="py-2" htmlFor="">
              Email Address:
            </label>
            <input
              className="px-2 py-2 rounded-3xl"
              type="email"
              placeholder=""
            />
            <label className="py-2 rounded-xl" htmlFor="">
              Select your Tour:
            </label>
            <select name="" className=" px-2 py-2 rounded-3xl">
              <option value="">Select Destination</option>
              <option value="" className="py-10">
                Boracay
              </option>
              <option value="">Ilocos</option>
              <option value="">Palawan</option>
            </select>
            <label htmlFor="" className="py-2">
              Date of Travel:{' '}
            </label>
            <form action=""></form>
            <input type="date" className="px-2 py-2 rounded-3xl" />
          </div>
          <div className="w-full border text-center py-5 bg-orange-500 mt-28">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Destination;
