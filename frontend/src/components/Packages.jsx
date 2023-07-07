import React from 'react';
import Cards from './Cards';
import Bora from './img/p-1.jpg';

function Packages() {
  return (
    <div className="px-4 md:max-w-[1440px] w-full mx-auto grid py-3 grid-rows-none gap-4 md:grid-cols-3 md:px-0">
      <Cards pix={Bora} text="Boracay Package" />
      <Cards pix={Bora} text="Ilocos Package" />
      <Cards pix={Bora} text="Palawan Package" />
    </div>
  );
}

export default Packages;
