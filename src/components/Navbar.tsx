'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaHome,
  FaQuestionCircle,
  FaUserPlus,
  FaTools,
  FaInfoCircle,
} from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle state

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/5 backdrop-blur-sm text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="text-2xl font-extrabold text-white">
            <Link href="/" onClick={closeMobileMenu}>
              Accidents Assurance
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="flex items-center hover:text-black">
              <FaHome className="mr-2" /> Home
            </Link>
            <Link href="/About" className="flex items-center hover:text-black">
              <FaInfoCircle className="mr-2" /> About
            </Link>
            <Link href="/Faqs" className="flex items-center hover:text-black">
              <FaQuestionCircle className="mr-2" /> FAQ
            </Link>
            <Link href="/Services" className="flex items-center hover:text-black">
              <FaTools className="mr-2" /> Services
            </Link>
          </div>

          {/* Right Side Button */}
          <div className="hidden md:flex space-x-4">
            <Link
              href="/ContactUs"
              className="flex items-center px-4 py-2 outline outline-2 outline-teal-600 font-semibold rounded hover:bg-teal-600 hover:text-white"
            >
              <FaUserPlus className="mr-2" /> Contact Us
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-teal-600">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white text-center py-4 space-y-4">
            <Link
              href="/"
              className="block text-teal-600 hover:text-black"
              onClick={closeMobileMenu}
            >
              <FaHome className="mr-2 inline" /> Home
            </Link>
            <Link
              href="/About"
              className="block text-teal-600 hover:text-black"
              onClick={closeMobileMenu}
            >
              <FaInfoCircle className="mr-2 inline" /> About
            </Link>
            <Link
              href="/Faqs"
              className="block text-teal-600 hover:text-black"
              onClick={closeMobileMenu}
            >
              <FaQuestionCircle className="mr-2 inline" /> FAQ
            </Link>
            <Link
              href="/Services"
              className="block text-teal-600 hover:text-black"
              onClick={closeMobileMenu}
            >
              <FaTools className="mr-2 inline" /> Services
            </Link>
            <Link
              href="/ContactUs"
              className="block text-teal-600 hover:text-black"
              onClick={closeMobileMenu}
            >
              <FaUserPlus className="mr-2 inline" /> Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
