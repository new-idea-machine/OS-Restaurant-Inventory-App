import React from 'react';
import './Footer.css';

interface FooterProps {
  companyName: string;
}

const Footer: React.FC<FooterProps> = ({ companyName }) => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} {companyName}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;