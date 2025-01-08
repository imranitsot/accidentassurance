import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 flex items-center gap-8 h-[600px] mt-[70px]">
      {/* Left Section - Image */}
      <div className="flex-shrink-0 w-1/3">
        <div className="bg-teal-500 rounded-lg relative">
          <div className="absolute top-[-200px] right-[-40px] w-[400px] h-[400px] border-4 border-teal-600 rounded-lg p-4 shadow-lg">
          <Image
            width={500}
            height={500}
            src="/images/2.jpg"
            alt="Benjamin Franklin"
            className="w-[400px] h-[400px]  absolute top-[20px] right-[-20px] rounded-lg"
          />
          </div>
        </div>
      </div>

      {/* Right Section - Text Card */}
      <div className="flex-grow w-1/3 bg-white rounded-lg shadow-lg mt-32 p-8 h-[400px]">
        <h2 className="text-2xl font-bold text-teal-600 mb-4">ABOUT US</h2>
        <p className="text-gray-700 mb-6">
          STOP THE LAWSUITS (STL™) is a referral service that helps the business
          owner avoid{" "}
          LEGAL CONFLICT
          by referring attorneys who offer services uniquely designed to
          minimize – if not altogether eliminate – those conflicts that can and
          do evolve into
           COSTLY LITIGATION
        </p>
        <button className="bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-600">
          Read More
        </button>
      </div>
    </div>
  );
};

export default About;
