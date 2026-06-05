import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    { icon: 'fas fa-robot', title: 'Artificial Intelligence', desc: 'Generative AI, machine learning, and intelligent automation solutions.' },
    { icon: 'fas fa-cloud-upload-alt', title: 'Cloud Transformation', desc: 'AWS, Azure, GCP migration, modernization, and cloud-native development.' },
    { icon: 'fas fa-chart-bar', title: 'Data & Analytics', desc: 'Real-time analytics, data warehousing, BI dashboards, and data governance.' },
    { icon: 'fas fa-shield-alt', title: 'Cybersecurity', desc: 'Zero-trust architecture, threat detection, compliance, and security operations.' },
    { icon: 'fas fa-code-branch', title: 'DevOps & Agile', desc: 'CI/CD pipelines, infrastructure as code, and continuous delivery practices.' },
    { icon: 'fas fa-mobile-alt', title: 'Digital Experience', desc: 'Modern web apps, mobile solutions, and exceptional user experiences.' },
  ];

  return (
    <section className="services-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">What We Do</span>
          <h2 className="section-title">Comprehensive Digital<br />Solutions</h2>
          <p className="section-subtitle">End-to-end enterprise technology services powered by innovation</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <Link to="/services" className="service-link">
                Learn More <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .services-section {
          padding: 80px 0;
          background: var(--white);
        }
        
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 32px;
        }
        
        .service-card {
          background: var(--white);
          padding: 32px;
          border-radius: 20px;
          box-shadow: var(--shadow-md);
          transition: var(--transition);
          border: 1px solid #eef2f8;
        }
        
        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-xl);
          border-color: var(--secondary);
        }
        
        .service-icon {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }
        
        .service-icon i {
          font-size: 32px;
          color: white;
        }
        
        .service-card h3 {
          font-size: 24px;
          margin-bottom: 16px;
          color: var(--dark);
        }
        
        .service-card p {
          color: var(--gray);
          margin-bottom: 24px;
          line-height: 1.6;
        }
        
        .service-link {
          color: var(--primary);
          text-decoration: none;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: var(--transition);
        }
        
        .service-link:hover {
          gap: 12px;
          color: var(--secondary);
        }
        
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;