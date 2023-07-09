import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { SiReactos } from 'react-icons/si';

let Links = [
  { name: 'Home', link: '/' },
  { name: 'Home', link: '/' },
  { name: 'Home', link: '/' },
  { name: 'Home', link: '/' },
  { name: 'Home', link: '/' },
];

function Eguls() {
  const [navBar, setnavBar] = useState(false);

  const navSlide = () => {
    setnavBar(!navBar);
  };
  return (
    <div className="absolute top-0 left-0 z-10 w-full ">
      <div className="items-center justify-center py-4 bg-transparent md:flex md:px-10 px-7">
        <div className="flex items-center text-2xl font-bold cursor-pointer">
          <span className="mr-1 text-3xl text-orange-500 ">
            <SiReactos />
          </span>
          <h1>Travel</h1>
        </div>
        <div
          onClick={navSlide}
          className="absolute text-3xl cursor-pointer right-8 top-6 md:hidden"
        >
          {navBar ? <AiFillCloseCircle /> : <FiMenu />}
        </div>
        <ul
          className={`absolute pb-12 bg-white lg:bg-transparent md:bg-transparent md:flex md:items-center md:pb-0 
        md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-700 ease-in
         ${
           navBar ? ' top-16  opacity-100' : 'top-[-490px]'
         } md:opacity-100 opacity-0`}
        >
          {Links.map(Link => (
            <li key={Link.name} className="my-4 text-xl md:ml-8 md:my-0">
              <a
                href={Link.link}
                className="text-gray-800 duration-500 hover:text-gray-400"
              >
                {Link.name}
              </a>
            </li>
          ))}
          <button className="px-6 py-2 text-white duration-500 rounded cursor-pointer bg-emerald-600 md:ml-8 hover:bg-emerald-400">
            <h2>Sign-In</h2>
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Eguls;
