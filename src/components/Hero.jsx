import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden text-white bg-marine-900">

      {/* 1. VIDEO BACKGROUND */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-60 z-0"
      >
        <source src="/ocean.mp4" type="video/mp4" />
      </video>

      {/* 2. MAIN CONTENT */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-xl">
          Navigating Compliance. <br />
          {/* Typing Effect Wrapper */}
          <span className="inline-block overflow-hidden whitespace-nowrap border-r-4 border-brand-teal align-bottom animate-typing w-0">
            Securing Safety.
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-md">
          Your trusted partner for IHM maintenance and marine safety audits.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-brand-teal hover:bg-teal-400 text-marine-900 font-bold py-3 px-8 rounded-lg transition shadow-lg hover:shadow-brand-teal/50">
            Get Started
          </button>
          <button className="border-2 border-white hover:bg-white hover:text-marine-900 font-bold py-3 px-8 rounded-lg transition backdrop-blur-sm">
            Contact Us
          </button>
        </div>
      </div>

      {/* 3. SAILING BOAT ANIMATION */}
      <div className="absolute bottom-8 left-0 w-full z-20 pointer-events-none">
        <div className="animate-sail absolute bottom-0">
          {/* Boat Icon (SVG) */}
          <svg width="100" height="100" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 48L32 58L60 48H4Z" fill="white" />
            <path d="M32 4V48L4 48L32 4Z" fill="#e0e0e0" />
            <path d="M32 4V48L60 48L32 4Z" fill="white" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;