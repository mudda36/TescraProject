import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const InsightsPage = () => {
  const [filter, setFilter] = useState('all');
  
  const blogPosts = [
    { category: 'ai', title: 'The Future of Generative AI in Enterprise', date: 'Jan 15, 2026', author: 'Dr. Sarah Johnson', readTime: '5 min read', image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', excerpt: 'Exploring how generative AI is transforming business operations and creating new opportunities...' },
    { category: 'cloud', title: 'Multi-Cloud Strategy: Best Practices 2026', date: 'Jan 10, 2026', author: 'Michael Chen', readTime: '4 min read', image: 'https://plus.unsplash.com/premium_photo-1683120968693-9af51578770e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdWQlMjBzdHJhdGVyZ3l8ZW58MHx8MHx8fDA%3D', excerpt: 'Key considerations for implementing a successful multi-cloud architecture...' },
    { category: 'security', title: 'Zero-Trust Security Framework Implementation', date: 'Jan 5, 2026', author: 'Lisa Rodriguez', readTime: '6 min read', image: 'https://media.istockphoto.com/id/2020157664/photo/cyber-security-network-cybersecurity-concept-global-network-security-technology-business.webp?a=1&b=1&s=612x612&w=0&k=20&c=3dJ_LcKoMA7sEzkX3e6W-DEiyz3RCfPrwmzTmjUS4SM=', excerpt: 'Step-by-step guide to implementing zero-trust security in your organization...' },
    { category: 'ai', title: 'Machine Learning in Predictive Analytics', date: 'Dec 20, 2025', author: 'Dr. Sarah Johnson', readTime: '7 min read', image: 'https://plus.unsplash.com/premium_photo-1681487767138-ddf2d67b35c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TUwlMjBhbmFseXRpY3N8ZW58MHx8MHx8fDA%3D', excerpt: 'How ML algorithms are revolutionizing predictive analytics across industries...' },
    { category: 'cloud', title: 'Serverless Architecture Benefits', date: 'Dec 15, 2025', author: 'Michael Chen', readTime: '4 min read', image: 'https://media.istockphoto.com/id/2226880449/photo/serverless-architecture-for-cloud-computing.webp?a=1&b=1&s=612x612&w=0&k=20&c=xeDfz6m6yy4hZUyGpoBxuu0woRTCv7Z2QuOJx1aRpFE=', excerpt: 'Understanding the advantages of serverless computing for modern applications...' },
    { category: 'devops', title: 'CI/CD Pipeline Optimization', date: 'Dec 10, 2025', author: 'David Kumar', readTime: '5 min read', image: 'https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', excerpt: 'Best practices for optimizing your CI/CD pipelines for faster deployments...' },
  ];

  const filteredPosts = filter === 'all' ? blogPosts : blogPosts.filter(post => post.category === filter);

  return (
    <div className="insights-page">
      <div className="page-hero">
        <div className="container">
          <h1>Insights & Resources</h1>
          <p>Expert perspectives on technology trends and innovation</p>
        </div>
      </div>

      <div className="container">
        <div className="filter-bar">
          <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All</button>
          <button className={filter === 'ai' ? 'active' : ''} onClick={() => setFilter('ai')}>AI & ML</button>
          <button className={filter === 'cloud' ? 'active' : ''} onClick={() => setFilter('cloud')}>Cloud</button>
          <button className={filter === 'security' ? 'active' : ''} onClick={() => setFilter('security')}>Security</button>
          <button className={filter === 'devops' ? 'active' : ''} onClick={() => setFilter('devops')}>DevOps</button>
        </div>

        <div className="blog-grid">
          {filteredPosts.map((post, index) => (
            <div className="blog-card" key={index}>
              <div className="blog-image">
                <img src={post.image} alt={post.title} loading="lazy" />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span><i className="far fa-calendar"></i> {post.date}</span>
                  <span><i className="far fa-user"></i> {post.author}</span>
                  <span><i className="far fa-clock"></i> {post.readTime}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <Link to="#" className="read-more">Read Full Article <i className="fas fa-arrow-right"></i></Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .insights-page {
          padding-top: 80px;
        }
        
        .filter-bar {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin: 40px 0;
          flex-wrap: wrap;
        }
        
        .filter-bar button {
          padding: 10px 24px;
          background: var(--light-gray);
          border: none;
          border-radius: 40px;
          cursor: pointer;
          transition: var(--transition);
          font-weight: 500;
        }
        
        .filter-bar button.active {
          background: var(--primary);
          color: white;
        }
        
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }
        
        .blog-card {
          background: var(--white);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          transition: var(--transition);
        }
        
        .blog-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
        }
        
        .blog-image img {
          width: 100%;
          height: 240px;
          object-fit: cover;
        }
        
        .blog-content {
          padding: 24px;
        }
        
        .blog-meta {
          display: flex;
          gap: 16px;
          margin-bottom: 16px;
          font-size: 13px;
          color: var(--gray);
        }
        
        .blog-meta i {
          margin-right: 4px;
        }
        
        .blog-content h3 {
          font-size: 20px;
          margin-bottom: 12px;
          color: var(--dark);
        }
        
        .blog-content p {
          color: var(--gray);
          margin-bottom: 20px;
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
};

export default InsightsPage;