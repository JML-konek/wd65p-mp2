import React from 'react';

import { LiaStarSolid } from 'react-icons/lia';

function Cards(props) {
  return (
    <div className="grid gap-4 row-span-5 rounded-t-lg bg-gray-300 overflow-hidden">
      <div className="text-center relative ">
        <div className=" overflow-hidden">
          <img
            src={props.pix}
            alt=""
            className=" rounded-t-lg scale-100 transform transition-all duration-1000 hover:scale-125 "
          />
        </div>

        <div className="top-[87%] w-full px-12 absolute flex items-center justify-center">
          <h1 className=" px-8 rounded-full py-4  bg-emerald-600">
            {props.text} <br />
            3D2N Tour
          </h1>
        </div>
      </div>
      <div className="pt-12 flex items-center justify-center gap-4 text-yellow-500">
        <LiaStarSolid size={25} />
        <LiaStarSolid size={25} />
        <LiaStarSolid size={25} />
        <LiaStarSolid size={25} />
        <LiaStarSolid size={25} />
      </div>
      <div className="px-4 py-4">
        <h2>
          Family Room <span className="italic">(Good for 4 persons)</span>:
        </h2>
        <p>3500 / Person</p>
        <h2>
          Standard Room <span className="italic">(Good for 2 persons)</span>:
        </h2>
        <p>3800 / Person</p>
      </div>
      <button className="w-full py-4 bg-orange-500">Book Now</button>
    </div>
  );
}

export default Cards;
