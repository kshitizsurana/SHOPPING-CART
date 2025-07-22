import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-lg font-semibold">MyApp &copy; {new Date().getFullYear()}</div>
        <div className="flex space-x-6">
          <a href="/about" className="hover:text-blue-400 transition">About</a>
          <a href="/services" className="hover:text-blue-400 transition">Services</a>
          <a href="/blog" className="hover:text-blue-400 transition">Blog</a>
          <a href="/checkout" className="hover:text-blue-400 transition">Checkout</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
