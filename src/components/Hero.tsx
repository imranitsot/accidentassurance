import React from 'react';


const Hero = () => {
  return (
    <>
      <section id="home" className='relative bg-[#008080] text-white overflow-hidden h-screen'>
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          className='absolute top-0 left-0 w-full h-full object-cover'
        >
          <source src="/videos/BgVideo2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Colorful Overlays */}
        <div className='absolute top-0 left-10 w-40 h-40 bg-teal-600 opacity-30 blur-3xl rounded-full'></div>
        <div className='absolute bottom-20 right-10 w-72 h-72 bg-teal-600 opacity-20 blur-2xl rounded-full'></div>
        <div className='absolute top-1/3 right-1/4 w-24 h-24 bg-teal-600 opacity-20 blur-2xl rotate-45'></div>

        {/* Main Content */}
        <div className='container mx-auto sm:py-50 flex flex-col md:flex-row items-center justify-between px-6 py-60 relative z-10  '>
          <div className='flex-1 text-center md:text-left z-10'>
            <h1 className='text-5xl md:text-7xl font-extrabold mb-4 leading-tight text-white'>
            Had an accident?
              <br /> Let us help you <span className='text-teal-600'>now!</span>
            </h1>
            <p className='text-5xl md:text-xl text-teal-200 mb-8'>
            For instant help call us now
            </p>
            <div className='flex flex-wrap gap-4 justify-center md:justify-start'>
              <button className='px-8 py-3 text-white bg-teal-600 hover:bg-teal-700 rounded-lg text-lg font-semibold shadow-lg'>
                CALL US
              </button>
              
            </div>
          </div>

          {/* <div className='flex-1 mt-12 md:mt-0 relative z-10'>
            <img src="/videos/1.jpg" alt="Hero Visual" />
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Hero;