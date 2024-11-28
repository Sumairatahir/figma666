import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="bg-gray-100 p-4">
      <div className="container mx-auto flex justify-between items-center py-2">
        <div className="text-sm text-gray-900">
          <h1>Phone Number: 956 742 455 678 | Email: info@ddsgnr.com</h1>
        </div>
        <div className="flex space-x-4 text-gray-900">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"hight={24} width={24}>
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <hr className="border-t border-gray-300 my-4" />
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex-shrink-0">
          <Image src="/images/Ddsgnr Library (1).svg" alt="Ddsgnr Library" width={131} height={41} />
        </div>
        <div className="flex space-x-4 text-gray-800" width={687} height={44}>
          <a href="#home">Home</a>
          <a href="#courses">Courses</a>
          <a href="#services">Services</a>
          <a href="#achievement">Achievement</a>
          <a href="#about">About Us</a>
          <a href="#testimonial">Testimonial</a>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-gray-900 text-white rounded">Log In</button>
            <button className="px-4 py-2 bg-gray-900 text-white rounded">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

