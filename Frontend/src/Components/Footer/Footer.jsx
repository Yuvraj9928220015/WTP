import React from 'react';
import { FaInstagram, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-column logo-column">
          <div className="footer-logo">
            <img src="./logo-1.png" alt="Sincere Architects Logo" className="sincere-logo" />

          </div>
        </div>

        <div className="footer-column">
          <h3 className="footer-title">Home</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/news">News</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-title">About</h3>
          <ul className="footer-links">
            <li><a href="/team">Team</a></li>
            <li><a href="/awards">Awards</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-title">Social Media</h3>
          <ul className="footer-links social-media">
            <li>
              <a href="https://www.instagram.com/sincerearchitectsindia/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/sincerearchitectsindia" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="footer-left">
            <p className="address">
              <a href="https://sincerearchitects.com/" target="_blank" rel="noopener noreferrer">
                Copyright 2025. All Rights Reserved
              </a>
            </p>
          </div>
          <div className="footer-right">
            <p className="copyright">
              <a href="https://lensclickerdigital.com/" target="_blank" rel="noopener noreferrer">
                Developed By lensclickerdigital.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}