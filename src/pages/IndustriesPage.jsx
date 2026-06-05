import React from 'react';
import { Link } from 'react-router-dom';

const IndustriesPage = () => {
  const industries = [
    { icon: 'fas fa-hospital', title: 'Healthcare', desc: 'Digital transformation for healthcare providers, payers, and life sciences organizations.', solutions: ['Telemedicine', 'EHR Integration', 'Patient Analytics', 'Remote Monitoring'] },
    { icon: 'fas fa-university', title: 'Banking & Finance', desc: 'Innovative financial technology solutions for banks, insurance, and investment firms.', solutions: ['Digital Banking', 'Fraud Detection', 'Risk Management', 'RegTech'] },
    { icon: 'fas fa-shopping-cart', title: 'Retail & E-commerce', desc: 'Omnichannel retail solutions that enhance customer experience and optimize operations.', solutions: ['Personalization', 'Inventory Management', 'Customer Analytics', 'Mobile Commerce'] },
    { icon: 'fas fa-industry', title: 'Manufacturing', desc: 'Industry 4.0 solutions for smart manufacturing and supply chain optimization.', solutions: ['IoT Integration', 'Predictive Maintenance', 'Quality Control', 'Supply Chain'] },
    { icon: 'fas fa-graduation-cap', title: 'Education', desc: 'Technology solutions for educational institutions and edtech companies.', solutions: ['Learning Platforms', 'Student Analytics', 'Virtual Classrooms', 'Assessment Tools'] },
    { icon: 'fas fa-charging-station', title: 'Energy & Utilities', desc: 'Sustainable technology solutions for the energy sector and utility companies.', solutions: ['Smart Grids', 'Energy Analytics', 'Asset Management', 'Sustainability'] },
  ];

  return (
    <div className="industries-page">
      <div className="page-hero">
        <div className="container">
          <h1>Industries We Serve</h1>
          <p>Deep domain expertise across critical business sectors</p>
        </div>
      </div>

      <div className="container">
        <div className="industries-full-grid">
          {industries.map((industry, index) => (
            <div className="industry-full-card" key={index}>
              <div className="industry-header">
                <div className="industry-icon-large">
                  <i className={industry.icon}></i>
                </div>
                <h2>{industry.title}</h2>
              </div>
              <p className="industry-description">{industry.desc}</p>
              <div className="solutions-list">
                <h4>Key Solutions:</h4>
                <ul>
                  {industry.solutions.map((solution, idx) => (
                    <li key={idx}><i className="fas fa-check"></i> {solution}</li>
                  ))}
                </ul>
              </div>
              <Link to="/contact" className="btn btn-outline">Request Consultation</Link>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .industries-page {
          padding-top: 80px;
        }
        
        .industries-full-grid {
          padding: 60px 0;
          display: grid;
          gap: 40px;
        }
        
        .industry-full-card {
          background: var(--white);
          padding: 40px;
          border-radius: 24px;
          box-shadow: var(--shadow-md);
          transition: var(--transition);
        }
        
        .industry-full-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-xl);
        }
        
        .industry-header {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 20px;
        }
        
        .industry-icon-large {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .industry-icon-large i {
          font-size: 40px;
          color: white;
        }
        
        .industry-header h2 {
          font-size: 32px;
          color: var(--dark);
        }
        
        .industry-description {
          color: var(--gray);
          font-size: 18px;
          margin-bottom: 24px;
          line-height: 1.6;
        }
        
        .solutions-list h4 {
          margin-bottom: 16px;
          color: var(--dark);
        }
        
        .solutions-list ul {
          list-style: none;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 12px;
          margin-bottom: 32px;
        }
        
        .solutions-list li {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--gray);
        }
        
        .solutions-list li i {
          color: var(--secondary);
        }
        
        @media (max-width: 768px) {
          .industry-header {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default IndustriesPage;