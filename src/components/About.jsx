import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <span className="section-badge">About Tescra</span>
            <h2 className="section-title">Innovation-Driven<br />Digital Transformation</h2>
            <p className="about-text">
              Founded in 2010, Tescra has been at the forefront of enterprise technology innovation, 
              helping businesses leverage cutting-edge solutions to achieve their digital transformation goals.
            </p>
            <div className="about-features">
              <div className="feature">
                <i className="fas fa-check-circle"></i>
                <div>
                  <h4>250+ Enterprise Clients</h4>
                  <p>Trusted by global brands across industries</p>
                </div>
              </div>
              <div className="feature">
                <i className="fas fa-check-circle"></i>
                <div>
                  <h4>Global Presence</h4>
                  <p>Offices in US, UK, India, and Singapore</p>
                </div>
              </div>
              <div className="feature">
                <i className="fas fa-check-circle"></i>
                <div>
                  <h4>Certified Experts</h4>
                  <p>300+ certified technology professionals</p>
                </div>
              </div>
            </div>
            <Link to="/about" className="btn btn-primary">Learn More About Us</Link>
          </div>
          <div className="about-image">
            {/* <img 
              src="https://placehold.co/500x400/2bcbba/ffffff?text=Innovation+Hub" 
              alt="About Tescra"
            /> */}

            <img 
  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=500&fit=crop" 
  alt="Team collaboration at Tescra"
/>
            <div className="experience-badge">
              <span className="years">15+</span>
              <span className="text">Years of Excellence</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          padding: 80px 0;
          background: var(--white);
        }
        
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        
        .about-text {
          color: var(--gray);
          margin: 20px 0 30px;
          line-height: 1.8;
          font-size: 16px;
        }
        
        .about-features {
          margin-bottom: 32px;
        }
        
        .feature {
          display: flex;
          gap: 16px;
          margin-bottom: 24px;
        }
        
        .feature i {
          color: var(--secondary);
          font-size: 24px;
          margin-top: 4px;
        }
        
        .feature h4 {
          font-size: 18px;
          margin-bottom: 6px;
          color: var(--dark);
        }
        
        .feature p {
          color: var(--gray);
          font-size: 14px;
        }
        
        .about-image {
          position: relative;
        }
        
        .about-image img {
          width: 100%;
          border-radius: 20px;
          box-shadow: var(--shadow-lg);
        }
        
        .experience-badge {
          position: absolute;
          bottom: -20px;
          right: -20px;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          padding: 20px;
          border-radius: 20px;
          text-align: center;
          color: white;
          box-shadow: var(--shadow-lg);
        }
        
        .experience-badge .years {
          display: block;
          font-size: 32px;
          font-weight: 800;
        }
        
        .experience-badge .text {
          font-size: 12px;
        }
        
        @media (max-width: 968px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
          
          .experience-badge {
            bottom: -10px;
            right: -10px;
            padding: 15px;
          }
        }
      `}</style>
    </section>
  );
};

export default About;