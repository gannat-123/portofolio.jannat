'use client';
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-gradient-to-r from-black via-gray-900 to-purple-900 text-white shadow-lg backdrop-blur-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <a
          
          className="text-2xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 drop-shadow-lg hover:underline"
        >
          {'{ Jannat }'}
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
            <a
            href="#home"
            className="relative px-2 py-1 transition-all duration-200 hover:text-purple-400 after:content-[''] after:block after:h-0.5 after:bg-purple-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left"
          >
            Home
          </a>
          <a
            href="#about"
            className="relative px-2 py-1 transition-all duration-200 hover:text-purple-400 after:content-[''] after:block after:h-0.5 after:bg-purple-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left"
          >
            About
          </a>
          <a
            href="#projects"
            className="relative px-2 py-1 transition-all duration-200 hover:text-purple-400 after:content-[''] after:block after:h-0.5 after:bg-purple-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="relative px-2 py-1 transition-all duration-200 hover:text-purple-400 after:content-[''] after:block after:h-0.5 after:bg-purple-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left"
          >
            Contact
          </a>
        </div>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md bg-gradient-to-tr from-purple-700 to-pink-600 bg-opacity-20 hover:bg-opacity-40 transition"
            aria-label="Toggle menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </nav>

   {/* Mobile Menu */}
<div
  className={`md:hidden bg-black/90 backdrop-blur-lg px-6 pt-2 pb-6 transition-all duration-300 ${
    isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
  }`}
>
  <a
    href="#home"
    className="block py-3 text-lg font-medium hover:text-purple-400 transition"
  >
    Home
  </a>
  <a
    href="#about"
    className="block py-3 text-lg font-medium hover:text-purple-400 transition"
  >
    About
  </a>
  <a
    href="#projects"
    className="block py-3 text-lg font-medium hover:text-purple-400 transition"
  >
    Projects
  </a>
  <a
    href="#contact"
    className="block py-3 text-lg font-medium hover:text-purple-400 transition"
  >
    Contact
  </a>
</div>

    </header>
  );
};

export default Navbar;
