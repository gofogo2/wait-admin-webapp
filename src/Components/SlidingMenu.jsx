import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { CSSTransition } from 'react-transition-group';

const SlidingMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="relative bg-red-400 " >
      <FaBars className="absolute top-5 left-5 cursor-pointer text-gray-400" onClick={toggleMenu} />
      <CSSTransition in={showMenu} timeout={300} classNames="menu-transition" unmountOnExit>
        <div className="absolute top-0 left-0 w-72 h-screen bg-white shadow-lg px-5 py-10 z-10">
          <ul className="space-y-5">
            <li>
              <a href="/" className="text-gray-700 font-bold text-lg hover:text-gray-900">Home</a>
            </li>
            <li>
              <a href="/about" className="text-gray-700 font-bold text-lg hover:text-gray-900">About</a>
            </li>
            <li>
              <a href="/contact" className="text-gray-700 font-bold text-lg hover:text-gray-900">Contact</a>
            </li>
          </ul>
        </div>
      </CSSTransition>
    </div>
  );
};

export default SlidingMenu;