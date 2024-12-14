import React, { useState, useEffect } from 'react';
import "./HeroSection.css";

const HeroSection = () => {
  const videos = [
    { src: "/assets/hero-video1.mp4", title: "Discover the Beauty of Stones", subtitle: "Premium stone collection for your elegant spaces" },
    { src: "/assets/hero-video2.mp4", title: "Elegance in Every Stone", subtitle: "Handcrafted stones for every occasion" },
    { src: "/assets/hero-video3.mp4", title: "Nature’s Pure Art", subtitle: "Sculpted stones with perfection" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % videos.length); // Loop back after the last video
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <section id="hero" className="hero-section">
      <video
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
        key={videos[currentIndex].src} // This ensures that the video reloads when the index changes
      >
        <source src={videos[currentIndex].src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">{videos[currentIndex].title}</h1>
        <p className="hero-subtitle">{videos[currentIndex].subtitle}</p>
        <button className="hero-button">Explore Now</button>
      </div>
    </section>
  );
};

export default HeroSection;
