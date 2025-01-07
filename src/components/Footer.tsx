import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-teal-600 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Us Section */}
          <div className="flex flex-col gap-4 items-center md:items-start">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-2 text-gray-400 text-center md:text-left">
              <li>
                Email:{' '}
                <a href="mailto:abc@gmail.com" className="hover:text-[#0f2c2c]">
                  abc@gmail.com
                </a>
              </li>
              <li>
                Phone:{' '}
                <a href="tel:+1234567890" className="hover:text-[#0f2c2c]">
                  +1 (234) 567-890
                </a>
              </li>
              <li>Address: 123 Saas Lane, Suite 100, City, State, 1234</li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col gap-4 items-center md:items-start">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <a href="#" className="hover:text-[#0f2c2c]">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0f2c2c]">
                  Terms of Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0f2c2c]">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0f2c2c]">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className="flex flex-col gap-4 items-center md:items-start">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <a href="https://facebook.com" className="hover:text-[#0f2c2c] flex items-center gap-2">
                  <FaFacebook /> Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com" className="hover:text-[#0f2c2c] flex items-center gap-2">
                  <FaTwitter /> Twitter
                </a>
              </li>
              <li>
                <a href="https://instagram.com" className="hover:text-[#0f2c2c] flex items-center gap-2">
                  <FaInstagram /> Instagram
                </a>
              </li>
              <li>
                <a href="https://github.com" className="hover:text-[#0f2c2c] flex items-center gap-2">
                  <FaGithub /> GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12 text-gray-400 text-sm">
          <p>&copy; 2024 Accident Assurance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
