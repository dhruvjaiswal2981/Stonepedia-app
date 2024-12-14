import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-gray-800 text-white py-16">
      <div className="container mx-auto text-center">
        {/* Logo Section */}
        <div className="footer-logo mb-8">
          <h2 className="text-4xl font-semibold text-[#e74c3c]">Stonepedia</h2>
        </div>
        
        {/* Subscribe Section */}
        <div className="subscribe-section mb-8">
          <h3 className="text-2xl font-medium text-[#ecf0f1] mb-4">Subscribe to Our Newsletter</h3>
          <p className="text-gray-400 mb-4">Get the latest updates and news directly in your inbox.</p>
          <form className="flex justify-center space-x-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="p-3 rounded-l-lg w-64 text-black"
            />
            <button type="submit" className="p-3 bg-[#e74c3c] rounded-r-lg text-white hover:bg-[#c0392b] transition-all">Subscribe</button>
          </form>
        </div>
        
        {/* Footer Links Section */}
        <div className="footer-links mb-12 flex justify-between flex-wrap text-left">
          {/* Product Links */}
          <div className="footer-link-group mb-6">
            <h4 className="footer-link-heading text-xl font-semibold mb-3">Product</h4>
            <ul>
              <li><a href="/exclusive" className="footer-link">StonePedia Exclusive</a></li>
              <li><a href="/best-seller" className="footer-link">Best Seller</a></li>
              <li><a href="/premium-stones" className="footer-link">Premium Stones</a></li>
              <li><a href="/shop-by-color" className="footer-link">Shop by Color</a></li>
              <li><a href="/shop-by-category" className="footer-link">Shop by Category</a></li>
            </ul>
          </div>

          {/* Applications & Support Links */}
          <div className="footer-link-group mb-6">
            <h4 className="footer-link-heading text-xl font-semibold mb-3">Applications</h4>
            <ul>
              <li><a href="/reviews" className="footer-link">Customer Review</a></li>
              <li><a href="/support" className="footer-link">Support</a></li>
              <li><a href="/quotation" className="footer-link">Request For Quotation</a></li>
              <li><a href="/faq" className="footer-link">FAQs</a></li>
              <li><a href="/blogs" className="footer-link">Blogs</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="footer-link-group mb-6">
            <h4 className="footer-link-heading text-xl font-semibold mb-3">Company</h4>
            <ul>
              <li><a href="/about" className="footer-link">About Us</a></li>
              <li><a href="/careers" className="footer-link">Careers</a></li>
              <li><a href="/cookies" className="footer-link">Cookies Policy</a></li>
            </ul>
          </div>

          {/* Disclaimer Links */}
          <div className="footer-link-group mb-6">
            <h4 className="footer-link-heading text-xl font-semibold mb-3">Disclaimer</h4>
            <ul>
              <li><a href="/cancellation-policy" className="footer-link">Cancellation Policy</a></li>
              <li><a href="/disclaimer" className="footer-link">Disclaimer</a></li>
              <li><a href="/report-complaint" className="footer-link">Report Complaint</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="social-media-icons mb-8">
          <a href="https://instagram.com" className="social-icon hover:scale-125"><FaInstagram size={24} /></a>
          <a href="https://facebook.com" className="social-icon hover:scale-125"><FaFacebook size={24} /></a>
          <a href="https://linkedin.com" className="social-icon hover:scale-125"><FaLinkedin size={24} /></a>
          <a href="https://youtube.com" className="social-icon hover:scale-125"><FaYoutube size={24} /></a>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom text-sm text-gray-400 mt-8">
          <p>&copy; {new Date().getFullYear()} Stonepedia. All Rights Reserved.</p>
          <p>Privacy Policy | Terms & Conditions | Cancellation Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
