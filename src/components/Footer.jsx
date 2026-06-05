// import React from 'react';
// import { Link } from 'react-router-dom';

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="container">
//         <div className="footer-grid">
//           <div className="footer-col">
//             <div className="footer-logo">
//               <span className="logo-icon">⚡</span>
//               <span>TESCRA</span>
//             </div>
//             <p>Transforming enterprises through innovative technology solutions since 2010.</p>
//             <div className="social-links">
//               <a href="#"><i className="fab fa-linkedin"></i></a>
//               <a href="#"><i className="fab fa-twitter"></i></a>
//               <a href="#"><i className="fab fa-facebook"></i></a>
//               <a href="#"><i className="fab fa-github"></i></a>
//             </div>
//           </div>
          
//           <div className="footer-col">
//             <h4>Company</h4>
//             <Link to="/about">About Us</Link>
//             <Link to="/contact">Contact</Link>
//             <Link to="#">Careers</Link>
//             <Link to="#">Press</Link>
//           </div>
          
//           <div className="footer-col">
//             <h4>Solutions</h4>
//             <Link to="/services">AI & Automation</Link>
//             <Link to="/services">Cloud Services</Link>
//             <Link to="/services">Data Analytics</Link>
//             <Link to="/services">Cybersecurity</Link>
//           </div>
          
//           <div className="footer-col">
//             <h4>Support</h4>
//             <Link to="#">Help Center</Link>
//             <Link to="#">Documentation</Link>
//             <Link to="#">Privacy Policy</Link>
//             <Link to="#">Terms of Service</Link>
//           </div>
//         </div>
        
//         <div className="footer-bottom">
//           <p>&copy; 2026 Tescra. All rights reserved. | <a href="https://www.tescra.com/">www.tescra.com</a></p>
//         </div>
//       </div>

//       <style>{`
//         .footer {
//           background: var(--dark);
//           color: white;
//           padding: 60px 0 20px;
//         }
        
//         .footer-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//           gap: 40px;
//           margin-bottom: 40px;
//         }
        
//         .footer-logo {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           font-size: 28px;
//           font-weight: 800;
//           margin-bottom: 16px;
//         }
        
//         .footer-col p {
//           color: #b9cde5;
//           margin-bottom: 20px;
//           line-height: 1.6;
//         }
        
//         .social-links {
//           display: flex;
//           gap: 16px;
//         }
        
//         .social-links a {
//           color: white;
//           font-size: 20px;
//           transition: var(--transition);
//         }
        
//         .social-links a:hover {
//           color: var(--secondary);
//           transform: translateY(-3px);
//         }
        
//         .footer-col h4 {
//           margin-bottom: 20px;
//           font-size: 18px;
//         }
        
//         .footer-col a {
//           display: block;
//           color: #b9cde5;
//           text-decoration: none;
//           margin-bottom: 12px;
//           transition: var(--transition);
//         }
        
//         .footer-col a:hover {
//           color: var(--secondary);
//           transform: translateX(5px);
//         }
        
//         .footer-bottom {
//           text-align: center;
//           padding-top: 40px;
//           border-top: 1px solid rgba(255,255,255,0.1);
//         }
        
//         .footer-bottom a {
//           color: var(--secondary);
//           text-decoration: none;
//         }
//       `}</style>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-logo">
              <span className="logo-icon">⚡</span>
              <span>TESCRA</span>
            </div>
            <p>Transforming enterprises through innovative technology solutions since 2010.</p>
            <div className="social-links">
              <a href="https://linkedin.com/company/tescra" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
              <a href="https://twitter.com/tescra" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
              <a href="https://facebook.com/tescra" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
              <a href="https://github.com/tescra" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
            </div>
          </div>
          
          <div className="footer-col">
            <h4>Company</h4>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/press">Press</Link>
          </div>
          
          <div className="footer-col">
            <h4>Solutions</h4>
            <Link to="/services">AI & Automation</Link>
            <Link to="/services">Cloud Services</Link>
            <Link to="/services">Data Analytics</Link>
            <Link to="/services">Cybersecurity</Link>
          </div>
          
          <div className="footer-col">
            <h4>Support</h4>
            <Link to="/help">Help Center</Link>
            <Link to="/docs">Documentation</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 Tescra. All rights reserved. | <a href="https://www.tescra.com">www.tescra.com</a></p>
        </div>
      </div>

      <style>{`
        .footer {
          background: var(--dark);
          color: white;
          padding: 60px 0 20px;
        }
        
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
          margin-bottom: 40px;
        }
        
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 28px;
          font-weight: 800;
          margin-bottom: 16px;
        }
        
        .footer-col p {
          color: #b9cde5;
          margin-bottom: 20px;
          line-height: 1.6;
        }
        
        .social-links {
          display: flex;
          gap: 16px;
        }
        
        .social-links a {
          color: white;
          font-size: 20px;
          transition: var(--transition);
        }
        
        .social-links a:hover {
          color: var(--secondary);
          transform: translateY(-3px);
        }
        
        .footer-col h4 {
          margin-bottom: 20px;
          font-size: 18px;
        }
        
        .footer-col a {
          display: block;
          color: #b9cde5;
          text-decoration: none;
          margin-bottom: 12px;
          transition: var(--transition);
        }
        
        .footer-col a:hover {
          color: var(--secondary);
          transform: translateX(5px);
        }
        
        .footer-bottom {
          text-align: center;
          padding-top: 40px;
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        
        .footer-bottom a {
          color: var(--secondary);
          text-decoration: none;
        }
      `}</style>
    </footer>
  );
};

export default Footer;