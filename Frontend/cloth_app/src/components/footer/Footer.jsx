import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="mt-5 pt-4 pb-3">
      <Container>
        {/* Logo Section */}
        <Row className="justify-content-center mb-3">
          <Col xs={12} className="text-center">
            <div className="logo-container d-flex justify-content-center">
              <img 
                src="./images/logo.jpg" 
                alt="Chosen By God Logo" 
                className="footer-logo mb-2"
              />
            </div>
            <hr className="mx-auto divider" />
          </Col>
        </Row>

        {/* Social Media */}
        <Row className="justify-content-center mb-4">
          <Col xs={12} className="text-center">
            <a href="https://instagram.com" aria-label="Instagram" className="social-link">
              {/* Simple Instagram icon using HTML */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </Col>
        </Row>

        {/* Navigation Links */}
        <Row className="footer-links mb-4">
          <Col xs={12} sm={4} className="text-center text-sm-start mb-3 mb-sm-0">
            <Link to="/shipping-return-policy" className="footer-link">
              Shipping & Return Policy
            </Link>
          </Col>
          <Col xs={12} sm={4} className="text-center mb-3 mb-sm-0">
            <Link to="/shop" className="footer-link">
              Shop
            </Link>
          </Col>
          <Col xs={12} sm={4} className="text-center text-sm-end mb-3 mb-sm-0">
            <Link to="/contact" className="footer-link">
              Contact
            </Link>
          </Col>
        </Row>

        {/* Copyright */}
        <Row className="justify-content-center mb-2">
          <Col xs={12} className="text-center">
            <p className="copyright">
              © {new Date().getFullYear()} www.chosenbygodclothing.com - All Rights Reserved.
            </p>
          </Col>
        </Row>

        {/* Attribution */}
        <Row className="justify-content-center">
          <Col xs={12} className="text-center">
            <p className="attribution">
              Site by <a href="https://poznmedia.com" className="poznmedia-link">PoznMedia</a>
            </p>
          </Col>
        </Row>
      </Container>

      <style>{`
        footer {
          background-color: #fff;
          font-family: sans-serif;
        }
        
        .logo-container {
          margin-bottom: 1rem;
        }
        
        .footer-logo {
          max-width: 100px;
          height: auto;
          display: block;
        }
        
        .divider {
          width: 10%;
          min-width: 50px;
          max-width: 150px;
          border-top: 1px solid rgba(0, 0, 0, 0.2);
          margin-bottom: 1.5rem;
        }
        
        .social-link {
          color: #000;
          text-decoration: none;
          transition: opacity 0.3s ease;
          display: inline-block;
        }
        
        .social-link:hover {
          opacity: 0.7;
        }
        
        .footer-links {
          margin-top: 1rem;
        }
        
        .footer-link {
          color: #000;
          text-decoration: none;
          font-size: 1rem;
          transition: color 0.3s ease;
          display: inline-block;
          padding: 0.25rem 0;
        }
        
        .footer-link:hover {
          color: #555;
          text-decoration: underline;
        }
        
        .copyright, .attribution {
          font-size: 0.85rem;
          color: #333;
          margin-bottom: 0.5rem;
        }
        
        .attribution {
          font-size: 0.8rem;
          color: #555;
        }
        
        .poznmedia-link {
          color: #555;
          text-decoration: none;
          font-weight: 500;
        }
        
        .poznmedia-link:hover {
          text-decoration: underline;
        }
        
        /* Responsive adjustments */
        @media (max-width: 576px) {
          .footer-links .col {
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;