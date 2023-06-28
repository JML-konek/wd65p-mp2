import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUmbrellaBeach,
  faXmark,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 mx-auto max-w-[1240px] px-5 z-10 relative">
      <h1 className="w-full text-3xl font-bold">
        <i className="px-3">
          <FontAwesomeIcon icon={faUmbrellaBeach} />
        </i>
        WD65P
      </h1>
      <ul className="font-bold type hidden md:flex cursor-pointer">
        <li className="px-5 py-2" href="/">
          Home
        </li>
        <li className="px-5 py-2">About</li>
        <li className="px-5 py-2">Travel</li>
        <li className="px-5 py-2">Contacts</li>
        <li className="px-5 py-2 bg-blue-500 rounded-full">Login</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {!nav ? (
          <FontAwesomeIcon icon={faXmark} fontSize={20} />
        ) : (
          <FontAwesomeIcon icon={faBars} fontSize={20} />
        )}
      </div>
      <div
        className={
          !nav
            ? 'fixed left-0 top-0 w-[50%] h-full border-r bg-slate-400 border-r-emerald-300 ease-in-out duration-500 cursor-pointer md:hidden'
            : 'fixed left-[-100%] z-10'
        }
      >
        <h1 className="w-full text-3xl font-bold py-5">
          <i className="px-3">
            <FontAwesomeIcon icon={faUmbrellaBeach} />
          </i>
          WD65P
        </h1>
        <ul>
          <li className="p-5">Home</li>
          <li className="p-5">About</li>
          <li className="p-5">Services</li>
          <li className="p-5">Contacts</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
