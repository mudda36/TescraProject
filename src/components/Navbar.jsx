import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/industries', label: 'Industries' },
    { path: '/about', label: 'About' },
    { path: '/insights', label: 'Insights' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav-container">
          <Link to="/" className="logo" onClick={closeMenu}>
            <span className="logo-icon">⚡</span>
            <span className="logo-text">TESCRA</span>
          </Link>

          <button className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li>
              <Link to="/contact" className="btn btn-primary btn-small" onClick={closeMenu}>
                Get Started <i className="fas fa-arrow-right"></i>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1000;
          transition: all 0.3s ease;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }
        
        .navbar.scrolled {
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
        
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 0;
        }
        
        .logo {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 28px;
          font-weight: 800;
          text-decoration: none;
          color: var(--primary);
        }
        
        .logo-icon {
          font-size: 32px;
        }
        
        .logo-text {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .nav-menu {
          display: flex;
          gap: 32px;
          align-items: center;
          list-style: none;
        }
        
        .nav-link {
          text-decoration: none;
          color: var(--dark);
          font-weight: 500;
          transition: var(--transition);
          position: relative;
        }
        
        .nav-link:hover,
        .nav-link.active {
          color: var(--primary);
        }
        
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--primary);
          border-radius: 2px;
        }
        
        .hamburger {
          display: none;
          flex-direction: column;
          cursor: pointer;
          background: none;
          border: none;
          padding: 8px;
        }
        
        .hamburger span {
          width: 25px;
          height: 2px;
          background: var(--primary);
          margin: 3px 0;
          transition: 0.3s;
        }
        
        .hamburger.active span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        
        .hamburger.active span:nth-child(2) {
          opacity: 0;
        }
        
        .hamburger.active span:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -6px);
        }
        
        @media (max-width: 768px) {
          .hamburger {
            display: flex;
          }
          
          .nav-menu {
            position: fixed;
            left: -100%;
            top: 70px;
            flex-direction: column;
            background: white;
            width: 100%;
            text-align: center;
            transition: 0.3s;
            box-shadow: 0 10px 27px rgba(0,0,0,0.05);
            padding: 32px 0;
            gap: 24px;
          }
          
          .nav-menu.active {
            left: 0;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;