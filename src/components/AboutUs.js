import React from 'react';
import './AboutUs.css';
import { FaGem, FaCogs, FaHandsHelping } from 'react-icons/fa'; // Updated icons for a more refined touch

const AboutUs = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-r from-teal-400 to-teal-600">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-5xl font-extrabold text-white mb-6">About Us</h2>
        <div className="flex flex-col items-center mb-12">
          <p className="text-lg text-white leading-relaxed mb-6 max-w-4xl mx-auto">
            At <span className="font-semibold text-teal-300">Stonepedia</span>, we specialize in curating high-quality stones that combine elegance, durability, and timeless beauty. Our mission is to offer not just products, but pieces of art that can elevate your space and withstand the test of time.
          </p>
          <p className="text-lg text-white leading-relaxed mb-8 max-w-4xl mx-auto">
            Harnessing the strength and beauty of nature, we provide a curated selection of stones that are crafted to perfection by skilled artisans. Whether for your home or business, our stones are designed to make a lasting impact.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="text-5xl text-teal-600 mb-4">
              <FaGem />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-teal-800">Premium Quality</h3>
            <p className="text-gray-600 text-center">Our stones are selected for their quality, ensuring superior durability and elegance for every project.</p>
          </div>
          <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="text-5xl text-teal-600 mb-4">
              <FaCogs />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-teal-800">Skilled Craftsmanship</h3>
            <p className="text-gray-600 text-center">Each stone is carefully crafted by artisans with expertise, ensuring flawless finishes and long-lasting results.</p>
          </div>
          <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="text-5xl text-teal-600 mb-4">
              <FaHandsHelping />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-teal-800">Customer-Centric Support</h3>
            <p className="text-gray-600 text-center">We are committed to providing outstanding customer service, guiding you every step of the way.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
