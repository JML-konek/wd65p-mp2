import React from 'react';

import { LiaStarSolid } from 'react-icons/lia';

function Cards(props) {
  return (
    <div className="grid row-span-5 gap-4 overflow-hidden bg-gray-300 rounded-t-lg">
      <div className="relative text-center ">
        <div className="overflow-hidden ">
          <img
            src={props.pix}
            alt=""
            className="transition-all duration-1000 transform scale-100 rounded-t-lg hover:scale-125"
          />
        </div>

        <div className="top-[87%] w-full px-12 absolute flex items-center justify-center">
          <h1 className="px-8 py-4 rounded-full bg-emerald-600">
            {props.text} <br />
            3D2N Tour
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 pt-12 text-yellow-500">
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
      <button className="w-full py-4 login">Book Now</button>
    </div>
  );
}

export default Cards;
