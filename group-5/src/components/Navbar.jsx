import React from 'react';
import { LuPalmtree } from 'react-icons/lu';
import { MdAccountCircle } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useState } from 'react';
import backG from './img/p-2.jpg';

function Navbar() {
  const [nav, setnav] = useState(false);

  const navSlide = () => {
    setnav(!nav);
  };

  return (
    <nav className="flex z-10 w-full absolute bg-transparent justify-between items-center h-20 ">
      <div className="hidden md:flex items-center px-4 gap-2">
        <LuPalmtree
          size={50}
          className=" bg-orange-500 text-emerald-600 rounded-full p-1"
        />
        <h1 className=" text-3xl text font-bold">Group-5.</h1>
      </div>

      <ul className="hidden md:flex font-medium text-xl uppercase">
        <li className="p-4 hover:text-emerald-600 duration-500">
          <a href="/">Home</a>
        </li>
        <li className="p-4 hover:text-emerald-600 duration-500">
          <a href="/">Home</a>
        </li>
        <li className="p-4 hover:text-emerald-600 duration-500">
          <a href="/">Home</a>
        </li>
        <li className="p-4 hover:text-emerald-600 duration-500">
          <a href="/">Home</a>
        </li>
      </ul>
      <div className="flex items-center px-4 gap-4 text-xl font-medium ">
        <button className="hover:text-emerald-600 duration-500 uppercase">
          <a href=""></a>Login
        </button>
        <button>
          <a href="">
            <MdAccountCircle size={30} />
          </a>
        </button>

        {/* Hamburger */}
      </div>
      <div
        onClick={navSlide}
        className="z-10 px-4 cursor-pointer text-emerald-600 md:hidden"
      >
        {nav ? <AiFillCloseCircle size={30} /> : <FiMenu size={30} />}
      </div>

      {/* Mobile */}
      <div
        className={
          nav
            ? 'absolute left-0 w-full h-full top-0 flex flex-col duration-1000  md:hidden '
            : 'absolute top-[-2000%]'
        }
      >
        <ul
          className="px-0 py-14 border rounded-b-md bg-center bg-cover"
          style={{ backgroundImage: `url(${backG})` }}
        >
          <li className="p-4">
            <a href="/">Home</a>
          </li>
          <li className="p-4">
            <a href="/">Home</a>
          </li>
          <li className="p-4">
            <a href="/">Home</a>
          </li>
          <li className="p-4">
            <a href="/">Home</a>
          </li>
          <div className="flex flex-col">
            <button className=" mt-44">
              <a href="/">Login</a>
            </button>
            <button>
              <a href="/">My Account</a>
            </button>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
