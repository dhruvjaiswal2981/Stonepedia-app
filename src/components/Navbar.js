import React, { useState } from "react";
import { FaShoppingCart, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Stonepedia</div>
      <div className={`nav-links ${isMobileMenuOpen ? "mobile-menu" : ""}`}>
        <ul>
          <li><a href="#hero" onClick={toggleMobileMenu}>Home</a></li>
          <li><a href="#about" onClick={toggleMobileMenu}>About Us</a></li>
          <li><a href="#products" onClick={toggleMobileMenu}>Products</a></li>
          <li><a href="#testimonials" onClick={toggleMobileMenu}>Testimonials</a></li>
          <li><a href="#contact" onClick={toggleMobileMenu}>Contact</a></li>
        </ul>
      </div>
      <div className="nav-actions">
        <div className="search-bar">
          <input type="text" placeholder="Search products..." />
          <FaSearch className="search-icon" />
        </div>
        <div className="cart">
          <FaShoppingCart className="cart-icon" />
          <span className="cart-count">3</span>
        </div>
        <div className="hamburger" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
