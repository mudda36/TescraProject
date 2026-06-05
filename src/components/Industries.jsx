import React from 'react';
import { Link } from 'react-router-dom';

const Industries = () => {
//   const industries = [
//     { icon: 'fas fa-hospital', title: 'Healthcare', desc: 'Digital health, telemedicine, and patient analytics solutions', color: '#e74c3c' },
//     { icon: 'fas fa-university', title: 'Banking & Finance', desc: 'Fintech, risk management, and fraud detection systems', color: '#3498db' },
//     { icon: 'fas fa-shopping-cart', title: 'Retail & E-commerce', desc: 'Personalization, inventory, and customer insights', color: '#e67e22' },
//     { icon: 'fas fa-industry', title: 'Manufacturing', desc: 'Industry 4.0, IoT, and predictive maintenance', color: '#27ae60' },
//     { icon: 'fas fa-graduation-cap', title: 'Education', desc: 'EdTech platforms and learning analytics', color: '#9b59b6' },
//     { icon: 'fas fa-charging-station', title: 'Energy & Utilities', desc: 'Smart grids and sustainability solutions', color: '#1abc9c' },
//   ];

const industries = [
  { 
    icon: 'fas fa-hospital', 
    title: 'Healthcare', 
    desc: 'Digital health, telemedicine, and patient analytics solutions',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop'
  },
  { 
    icon: 'fas fa-university', 
    title: 'Banking & Finance', 
    desc: 'Fintech, risk management, and fraud detection systems',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop'
  },
  { 
    icon: 'fas fa-shopping-cart', 
    title: 'Retail & E-commerce', 
    desc: 'Personalization, inventory, and customer insights',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop'
  },
  { 
    icon: 'fas fa-industry', 
    title: 'Manufacturing', 
    desc: 'Industry 4.0, IoT, and predictive maintenance',
    image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&h=400&fit=crop'
  },
  { 
    icon: 'fas fa-graduation-cap', 
    title: 'Education', 
    desc: 'EdTech platforms and learning analytics',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop'
  }
];

  return (
    <section className="industries-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Industries We Serve</span>
          <h2 className="section-title">Domain Expertise Across<br />Key Sectors</h2>
          <p className="section-subtitle">Deep industry knowledge combined with technical excellence</p>
        </div>

        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div className="industry-card" key={index}>
              <div className="industry-icon" style={{ background: `${industry.color}15` }}>
                <i className={industry.icon} style={{ color: industry.color }}></i>
              </div>
              <h3>{industry.title}</h3>
              <p>{industry.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .industries-section {
          padding: 80px 0;
          background: var(--light-gray);
        }
        
        .industries-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }
        
        .industry-card {
          background: var(--white);
          padding: 32px;
          border-radius: 20px;
          text-align: center;
          transition: var(--transition);
          box-shadow: var(--shadow-sm);
        }
        
        .industry-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
        }
        
        .industry-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }
        
        .industry-icon i {
          font-size: 36px;
        }
        
        .industry-card h3 {
          font-size: 22px;
          margin-bottom: 12px;
          color: var(--dark);
        }
        
        .industry-card p {
          color: var(--gray);
          line-height: 1.6;
        }
        
        @media (max-width: 768px) {
          .industries-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Industries;