import React from 'react';
import Link from 'next/link';
import Homesvg from '../svg/homesvg';
import Infosvg from '../svg/infosvg';

const Navbar = () => {
  return (
    <nav className="flex items-center h-[4.5rem] justify-between px-5 sm:px-10 py-4 shadow-xl border-b border-emerald-200">
      <div className="text-2xl sm:text-3xl font-bold text-emerald-300 italic">
        SmartPay
      </div>
      <div className="flex items-center space-x-5 text-xl">
        <Link
          href="/home"
          className="text-emerald-300 hover:text-emerald-400 text-lg font-medium transition-colors duration-200"
        >
          <span className="block sm:hidden h-6 w-6">
            <Homesvg />
          </span>
          <span className="hidden sm:block">Home</span>
        </Link>
        <Link
          href="/about-us"
          className="text-emerald-300 hover:text-emerald-400 text-lg font-medium transition-colors duration-200"
        >
          <span className="block sm:hidden h-6 w-6">
            <Infosvg />
          </span>
          <span className="hidden sm:block">About Us</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
