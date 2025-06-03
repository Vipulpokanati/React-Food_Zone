import React from 'react';
import './Footer.css'; // Import the CSS for styling
import { useNavigate } from 'react-router-dom';
const Footer = () => {
   const navigate = useNavigate();
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} MyCompany. All rights reserved.</p>
        <div className="footer-links">
      <span onClick={() => navigate('/PrivacyPolicy')} className="footer-link">Privacy Policy</span>
      <span onClick={() => navigate('/TermsOfService')} className="footer-link">Terms of Service</span>
      <span onClick={() => navigate('/ContactUs')} className="footer-link">Contact Us</span>
    </div>
      </div>
    </footer>
  );
};

export default Footer;
