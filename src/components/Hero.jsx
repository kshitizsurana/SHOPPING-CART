import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-center drop-shadow-lg">Welcome to MyApp</h1>
      <p className="text-lg md:text-2xl mb-8 text-center max-w-2xl">Empowering your business with modern solutions and a beautiful, responsive web experience.</p>
      <a href="/services" className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-blue-100 transition">Get Started</a>
    </section>
  );
};

export default Hero;

