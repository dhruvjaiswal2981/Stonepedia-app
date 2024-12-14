import React, { useEffect, useState } from "react";
import "./ContactSection.css";
import { FaTrophy, FaTasks, FaSmile } from "react-icons/fa"; // Importing icons

const ContactSection = () => {
  const [number, setNumber] = useState({ award: 0, projects: 0, satisfaction: 0 });

  // Faster Number Animation
  useEffect(() => {
    const intervalAward = setInterval(() => {
      if (number.award < 1) setNumber((prev) => ({ ...prev, award: prev.award + 0.2 }));
    }, 30);

    const intervalProjects = setInterval(() => {
      if (number.projects < 20) setNumber((prev) => ({ ...prev, projects: prev.projects + 2 }));
    }, 50);

    const intervalSatisfaction = setInterval(() => {
      if (number.satisfaction < 99.9) setNumber((prev) => ({ ...prev, satisfaction: prev.satisfaction + 0.2 }));
    }, 30);

    return () => {
      clearInterval(intervalAward);
      clearInterval(intervalProjects);
      clearInterval(intervalSatisfaction);
    };
  }, [number]);

  return (
    <div id="contact">
      <h2>Contact Us</h2>
      <p>We would love to hear from you! Feel free to reach out.</p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      <div className="statistics">
        <div className="stat-tile">
          <FaTrophy size={50} color="#e74c3c" />
          <h3>{number.award.toFixed(1)}+</h3>
          <p>National/Globally Awarded</p>
        </div>
        <div className="stat-tile">
          <FaTasks size={50} color="#3498db" />
          <h3>{number.projects}+ </h3>
          <p>Projects Completed</p>
        </div>
        <div className="stat-tile">
          <FaSmile size={50} color="#2ecc71" />
          <h3>{number.satisfaction.toFixed(1)}%</h3>
          <p>Customer Satisfied</p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
