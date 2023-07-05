import React from 'react';
import package1 from './img/p-1.jpg';

function Packages() {
  return (
    <div className="max-w-[1440px] w-full mx-auto grid py-4">
      <div className="grid grid-rows-none md:grid-cols-3 gap-4 py-4">
        <div className="text-center relative">
          <img src={package1} alt="" className=" rounded-t-lg" />
          <div className=" bg-emerald-600 top-[90%] left-[25%] px-12 absolute flex items-center">
            <h1 className="py-4">Boracay Package</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Packages;
