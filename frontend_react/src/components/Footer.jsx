// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="footer py-3 my-3">
        {/* Horizontal divider line */}
        <hr className="border-bottom" />
        
        {/* Centered copyright text */}
        <p className="text-light text-center">
          &copy; 2025 Built with ❤️ by Himanshu Jha
        </p>
      </footer>
    </>
  );
};

export default Footer;