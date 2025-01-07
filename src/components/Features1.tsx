import React from 'react';
import { FaCar, FaTools, FaWarehouse } from 'react-icons/fa';

const Features = () => {
  return (
    <section id="features" className="bg-teal-500 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            No one wants to be in an accident&#44; <br />
            but if you are&#44; we&#39;ll take care of it
          </h2>
          <p className="text-lg text-gray-200">
            Swift Legal is one of the UK&#39;s leading ACCIDENT MANAGEMENT companies. We are here to make the process as simple and straightforward as possible for you. Find out how we can help you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Credit Hire */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 mb-6 bg-white rounded-full flex items-center justify-center">
              <FaCar className="text-black text-3xl" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">CREDIT HIRE</h3>
            <a href="tel:1234567890" className="bg-white text-black font-semibold py-2 px-6 rounded-full hover:bg-gray-300 transition duration-300">
              CALL US
            </a>
          </div>

          {/* Roadside Assistance */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 mb-6 bg-white rounded-full flex items-center justify-center">
              <FaTools className="text-black text-3xl" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">ROADSIDE ASSISTANCE</h3>
            <a href="tel:1234567890" className="bg-white text-black font-semibold py-2 px-6 rounded-full hover:bg-gray-300 transition duration-300">
              CALL US
            </a>
          </div>

          {/* Storage */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 mb-6 bg-white rounded-full flex items-center justify-center">
              <FaWarehouse className="text-black text-3xl" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">STORAGE</h3>
            <a href="tel:1234567890" className="bg-white text-black font-semibold py-2 px-6 rounded-full hover:bg-gray-300 transition duration-300">
              CALL US
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
