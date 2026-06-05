import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="page-hero">
        <div className="container">
          <h1>About Tescra</h1>
          <p>Empowering businesses through technology innovation since 2010</p>
        </div>
      </div>

      <div className="container">
        <div className="about-story">
          <div className="story-content">
            <h2>Our Story</h2>
            <p>Tescra was founded with a mission to bridge the gap between business challenges and technology solutions. What started as a small team of passionate technologists has grown into a global enterprise technology leader serving 250+ clients worldwide.</p>
            <p>We believe in the transformative power of technology to drive business growth, operational efficiency, and competitive advantage. Our approach combines deep technical expertise with business acumen to deliver solutions that create lasting value.</p>
          </div>
          <div className="stats-showcase">
            <div className="stat-card">
              <span className="stat-number">250+</span>
              <span className="stat-label">Clients Worldwide</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">300+</span>
              <span className="stat-label">Expert Engineers</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">15+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">98%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
          </div>
        </div>

        <div className="values-section">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <i className="fas fa-lightbulb"></i>
              <h3>Innovation First</h3>
              <p>Constantly exploring emerging technologies to deliver cutting-edge solutions</p>
            </div>
            <div className="value-card">
              <i className="fas fa-users"></i>
              <h3>Client Success</h3>
              <p>Your success is our success - we're committed to exceeding expectations</p>
            </div>
            <div className="value-card">
              <i className="fas fa-shield-alt"></i>
              <h3>Integrity</h3>
              <p>Transparent, ethical, and honest in all our business practices</p>
            </div>
            <div className="value-card">
              <i className="fas fa-chart-line"></i>
              <h3>Excellence</h3>
              <p>Delivering highest quality solutions with attention to detail</p>
            </div>
          </div>
        </div>

        {/* <div className="team-section">
          <h2>Leadership Team</h2>
          <div className="team-grid">
            {[1,2,3,4].map((member) => (
              <div className="team-card" key={member}>
                <img src={`https://placehold.co/300x300/0a5c8e/ffffff?text=Leader+${member}`} alt="Team member" />
                <h3>John Doe</h3>
                <p>CEO & Founder</p>
              </div>
            ))}
          </div>
        </div> */}
      </div>

      <style>{`
        .about-page {
          padding-top: 80px;
        }
        
        .about-story {
          padding: 60px 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
        }
        
        .story-content h2 {
          font-size: 36px;
          margin-bottom: 20px;
        }
        
        .story-content p {
          color: var(--gray);
          line-height: 1.8;
          margin-bottom: 20px;
        }
        
        .stats-showcase {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        
        .stat-card {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          padding: 30px;
          border-radius: 20px;
          text-align: center;
          color: white;
        }
        
        .stat-card .stat-number {
          display: block;
          font-size: 36px;
          font-weight: 800;
          margin-bottom: 8px;
        }
        
        .values-section {
          padding: 60px 0;
        }
        
        .values-section h2, .team-section h2 {
          text-align: center;
          font-size: 36px;
          margin-bottom: 40px;
        }
        
        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }
        
        .value-card {
          text-align: center;
          padding: 30px;
          background: var(--light-gray);
          border-radius: 20px;
          transition: var(--transition);
        }
        
        .value-card:hover {
          transform: translateY(-5px);
        }
        
        .value-card i {
          font-size: 48px;
          color: var(--primary);
          margin-bottom: 20px;
        }
        
        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }
        
        .team-card {
          text-align: center;
        }
        
        .team-card img {
          width: 100%;
          border-radius: 20px;
          margin-bottom: 16px;
        }
        
        @media (max-width: 768px) {
          .about-story {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutPage;