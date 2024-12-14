import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutUs from '../components/AboutUs';
import FeaturedProducts from '../components/FeaturedProducts';
import Testimonial from '../components/Testimonials';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <FeaturedProducts />
      <Testimonial />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;
