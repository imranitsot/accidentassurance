import React from 'react';
import { FaCogs, FaChartLine, FaInfo } from 'react-icons/fa';

const Features = () => {
  return (
    <section id="features" className="bg-teal-500 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Why Choose DigiBal</h2>
          <p className="text-lg text-gray-300">
            Unlock the power of simplicity and efficiency with features tailored to solve your challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 mb-6 bg-white rounded-full flex items-center justify-center">
              <FaCogs className="text-black text-3xl" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">Had an accident?</h3>
            <p className="text-gray-300">
            We’ll help you deal with the situation and give you useful solutions. You don’t even need to contact your insurer, we’ll handle everything for you.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 mb-6 bg-white rounded-full flex items-center justify-center">
              <FaChartLine className="text-black text-3xl" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">Call us now, or enter your details for a fast call-back</h3>
            <p className="text-gray-300">
            Provide us with your mobile number and car registration.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 mb-6 bg-white rounded-full flex items-center justify-center">
              <FaChartLine className="text-black text-3xl" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">Receive a call from our team</h3>
            <p className="text-gray-300">
            A specialist accident assistant will grab some details from you, then offer you solutions based on your situation.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 mb-6 bg-white rounded-full flex items-center justify-center">
              <FaInfo className="text-black text-3xl" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">Get back on the road</h3>
            <p className="text-gray-300">
            We’ll do everything we can to help get you through your situation and get you back on the road as soon as possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
