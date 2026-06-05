import React from 'react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const services = [
    { icon: 'fas fa-robot', title: 'Artificial Intelligence', desc: 'Advanced AI solutions including machine learning, deep learning, and generative AI for enterprise applications.', features: ['Predictive Analytics', 'NLP Solutions', 'Computer Vision', 'AI Automation'] },
    { icon: 'fas fa-cloud-upload-alt', title: 'Cloud Transformation', desc: 'End-to-end cloud migration, modernization, and management services across all major cloud providers.', features: ['AWS/Azure/GCP', 'Cloud Native Dev', 'Serverless', 'Cloud Security'] },
    { icon: 'fas fa-chart-bar', title: 'Data & Analytics', desc: 'Comprehensive data solutions from warehousing to advanced analytics and BI dashboards.', features: ['Data Warehousing', 'Real-time Analytics', 'BI Solutions', 'Data Governance'] },
    { icon: 'fas fa-shield-alt', title: 'Cybersecurity', desc: 'Enterprise security solutions protecting your digital assets from evolving threats.', features: ['Threat Detection', 'Compliance', 'Security Audits', 'Zero Trust'] },
    { icon: 'fas fa-code-branch', title: 'DevOps & Agile', desc: 'Streamlined development and operations with CI/CD pipelines and infrastructure as code.', features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring', 'Automation'] },
    { icon: 'fas fa-mobile-alt', title: 'Digital Experience', desc: 'Creating exceptional digital experiences through modern web and mobile applications.', features: ['Responsive Design', 'Mobile Apps', 'UX/UI Design', 'Performance'] },
  ];

  return (
    <div className="services-page">
      <div className="page-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive enterprise technology solutions tailored to your business needs</p>
        </div>
      </div>

      <div className="container">
        <div className="services-full-grid">
          {services.map((service, index) => (
            <div className="service-full-card" key={index}>
              <div className="service-header">
                <div className="service-icon-large">
                  <i className={service.icon}></i>
                </div>
                <h2>{service.title}</h2>
              </div>
              <p className="service-description">{service.desc}</p>
              <div className="service-features">
                {service.features.map((feature, idx) => (
                  <span key={idx} className="feature-tag">{feature}</span>
                ))}
              </div>
              <Link to="/contact" className="btn btn-primary">Get Started</Link>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .services-page {
          padding-top: 80px;
        }
        
        .page-hero {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: white;
          padding: 80px 0;
          text-align: center;
        }
        
        .page-hero h1 {
          font-size: 48px;
          margin-bottom: 16px;
        }
        
        .services-full-grid {
          padding: 60px 0;
          display: grid;
          gap: 40px;
        }
        
        .service-full-card {
          background: var(--white);
          padding: 40px;
          border-radius: 24px;
          box-shadow: var(--shadow-md);
          transition: var(--transition);
          border: 1px solid #eef2f8;
        }
        
        .service-full-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-xl);
        }
        
        .service-header {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 20px;
        }
        
        .service-icon-large {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .service-icon-large i {
          font-size: 40px;
          color: white;
        }
        
        .service-header h2 {
          font-size: 32px;
          color: var(--dark);
        }
        
        .service-description {
          color: var(--gray);
          font-size: 18px;
          margin-bottom: 24px;
          line-height: 1.6;
        }
        
        .service-features {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 32px;
        }
        
        .feature-tag {
          background: var(--light-gray);
          padding: 8px 16px;
          border-radius: 40px;
          font-size: 14px;
          color: var(--dark);
        }
        
        @media (max-width: 768px) {
          .service-header {
            flex-direction: column;
            text-align: center;
          }
          
          .page-hero h1 {
            font-size: 36px;
          }
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;