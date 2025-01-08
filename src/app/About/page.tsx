
'use client';
import Image from "next/image";
import { useState } from "react";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8 px-4">
        {/* Left Image Section */}
        <div className="relative w-full md:w-1/2">
          {/* Overlay Box */}
          <div className="border-solid border-2 border-teal-400 w-60 h-40 absolute top-0 left-[160px] transform translate-x-[0px] translate-y-[-300px] z-20 rounded-lg shadow-lg"></div>

          {/* Image */}
          <Image
            src="/images/1.jpg" // Replace with your image path
            alt="Benjamin Franklin"
            width={400}
            height={400}
            className="absolute top-0 left-[160px] transform translate-x-[100px] translate-y-[-250px] z-20 rounded-lg shadow-lg"
          />
        </div>

        {/* Right Text Section */}
        <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg p-8 relative z-10">
          <h2 className="text-2xl font-bold text-teal-600 mb-4">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our friendly advisors are waiting to help!
            We offer free advice – with no obligation <br /> <br />
            If an accident is not your fault, you don't have to claim through your insurance company. <br /> <br />
            We provide a suitable hire vehicle, delivered when and where you want it. We use our approved and qualified workshops. In the most extreme cases where your vehicle is deemed a write-off, you will receive a cheque for the vehicle's pre-accident value. This allows us to ensure that your replacement hire car or van is with you in most cases the same day. <br /> <br />
            {isExpanded && (
              <>
                If you are member of public, insurance broker, insurer, taxi firm, dealership, body shop, fleet manager or accident management company, then Swift Legal a lot to offer your business.
                Our aim is to ensure a smooth journey for all and look out for the bumps ahead. <br />
                For more information on how we work, contact us or read through our FAQs. <br /> <br />
                For more information on how we can work and build our businesses together, please call 0161 974 6532 or email info@swift-legal.co.uk now, we want to work with you. <br /> <br />
                Find out if you can make a claim today. Simply complete our quick online form and an expert with give you a call.
                Get free no-obligation advise today.
              </>
            )}
            <a href="#">More...</a>
          </p>

          <a
            onClick={toggleContent}
            className="inline-block px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow hover:bg-teal-700 transition cursor-pointer"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
