// import React from 'react';
// import { Link } from 'react-router-dom';

// const Insights = () => {
// //   const insights = [
// //     {
// //       category: 'AI & Machine Learning',
// //       title: 'The Future of Generative AI in Enterprise',
// //       date: 'Jan 15, 2026',
// //       readTime: '5 min read',
// //       image: 'https://placehold.co/400x250/0a5c8e/ffffff?text=AI+Future'
// //     },
// //     {
// //       category: 'Cloud Computing',
// //       title: 'Multi-Cloud Strategy: Best Practices 2026',
// //       date: 'Jan 10, 2026',
// //       readTime: '4 min read',
// //       image: 'https://placehold.co/400x250/2bcbba/ffffff?text=Cloud+Strategy'
// //     },
// //     {
// //       category: 'Cybersecurity',
// //       title: 'Zero-Trust Security Framework Implementation',
// //       date: 'Jan 5, 2026',
// //       readTime: '6 min read',
// //       image: 'https://placehold.co/400x250/ff6b35/ffffff?text=Cybersecurity'
// //     },
// //   ];

// const insights = [
//   {
//     category: 'AI & Machine Learning',
//     title: 'The Future of Generative AI in Enterprise',
//     date: 'Jan 15, 2026',
//     readTime: '5 min read',
//     image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop'
//   },
//   {
//     category: 'Cloud Computing',
//     title: 'Multi-Cloud Strategy: Best Practices 2026',
//     date: 'Jan 10, 2026',
//     readTime: '4 min read',
//     image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop'
//   },
//   {
//     category: 'Cybersecurity',
//     title: 'Zero-Trust Security Framework Implementation',
//     date: 'Jan 5, 2026',
//     readTime: '6 min read',
//     image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop'
//   }
// ];
//   return (
//     <section className="insights-section">
//       <div className="container">
//         <div className="section-header">
//           <span className="section-badge">Latest Insights</span>
//           <h2 className="section-title">Thought Leadership<br />Resources</h2>
//           <p className="section-subtitle">Expert insights, industry trends, and innovative ideas</p>
//         </div>

//         <div className="insights-grid">
//           {insights.map((insight, index) => (
//             <div className="insight-card" key={index}>
//               <div className="insight-image">
//                 <img src={insight.image} alt={insight.title} loading="lazy" />
//                 <span className="insight-category">{insight.category}</span>
//               </div>
//               <div className="insight-content">
//                 <h3>{insight.title}</h3>
//                 <div className="insight-meta">
//                   <span><i className="far fa-calendar"></i> {insight.date}</span>
//                   <span><i className="far fa-clock"></i> {insight.readTime}</span>
//                 </div>
//                 <Link to="/insights" className="read-more">Read More <i className="fas fa-arrow-right"></i></Link>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="insights-cta">
//           <Link to="/insights" className="btn btn-outline">View All Insights <i className="fas fa-arrow-right"></i></Link>
//         </div>
//       </div>

//       <style>{`
//         .insights-section {
//           padding: 80px 0;
//           background: var(--light-gray);
//         }
        
//         .insights-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
//           gap: 30px;
//           margin-bottom: 40px;
//         }
        
//         .insight-card {
//           background: var(--white);
//           border-radius: 20px;
//           overflow: hidden;
//           transition: var(--transition);
//           box-shadow: var(--shadow-sm);
//         }
        
//         .insight-card:hover {
//           transform: translateY(-5px);
//           box-shadow: var(--shadow-lg);
//         }
        
//         .insight-image {
//           position: relative;
//           overflow: hidden;
//         }
        
//         .insight-image img {
//           width: 100%;
//           height: 200px;
//           object-fit: cover;
//           transition: var(--transition);
//         }
        
//         .insight-card:hover .insight-image img {
//           transform: scale(1.05);
//         }
        
//         .insight-category {
//           position: absolute;
//           top: 16px;
//           left: 16px;
//           background: var(--primary);
//           color: white;
//           padding: 4px 12px;
//           border-radius: 20px;
//           font-size: 12px;
//           font-weight: 600;
//         }
        
//         .insight-content {
//           padding: 24px;
//         }
        
//         .insight-content h3 {
//           font-size: 20px;
//           margin-bottom: 12px;
//           color: var(--dark);
//         }
        
//         .insight-meta {
//           display: flex;
//           gap: 16px;
//           margin-bottom: 16px;
//           color: var(--gray);
//           font-size: 13px;
//         }
        
//         .insight-meta i {
//           margin-right: 4px;
//         }
        
//         .read-more {
//           color: var(--primary);
//           text-decoration: none;
//           font-weight: 600;
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           transition: var(--transition);
//         }
        
//         .read-more:hover {
//           gap: 12px;
//         }
        
//         .insights-cta {
//           text-align: center;
//         }
        
//         @media (max-width: 768px) {
//           .insights-grid {
//             grid-template-columns: 1fr;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Insights;

// import React from 'react';
// import { Link } from 'react-router-dom';

// const Insights = () => {
//   const insights = [
//     {
//       category: 'AI & Machine Learning',
//       title: 'The Future of Generative AI in Enterprise',
//       date: 'Jan 15, 2026',
//       readTime: '5 min read',
//       image: 'https://picsum.photos/id/1/600/400',
//       author: 'Dr. Sarah Johnson',
//       excerpt: 'Exploring how generative AI is transforming business operations and creating new opportunities for innovation.'
//     },
//     {
//       category: 'Cloud Computing',
//       title: 'Multi-Cloud Strategy: Best Practices 2026',
//       date: 'Jan 10, 2026',
//       readTime: '4 min read',
//       image: 'https://picsum.photos/id/20/600/400',
//       author: 'Michael Chen',
//       excerpt: 'Key considerations for implementing a successful multi-cloud architecture in your organization.'
//     },
//     {
//       category: 'Cybersecurity',
//       title: 'Zero-Trust Security Framework Implementation',
//       date: 'Jan 5, 2026',
//       readTime: '6 min read',
//       image: 'https://picsum.photos/id/0/600/400',
//       author: 'Lisa Rodriguez',
//       excerpt: 'Step-by-step guide to implementing zero-trust security in your organization.'
//     },
//     {
//       category: 'Data Analytics',
//       title: 'Real-Time Analytics for Business Growth',
//       date: 'Dec 28, 2025',
//       readTime: '5 min read',
//       image: 'https://picsum.photos/id/26/600/400',
//       author: 'David Kumar',
//       excerpt: 'How real-time data analytics drives better decision-making and business outcomes.'
//     },
//     {
//       category: 'IoT',
//       title: 'IoT Integration in Smart Manufacturing',
//       date: 'Dec 20, 2025',
//       readTime: '7 min read',
//       image: 'https://picsum.photos/id/39/600/400',
//       author: 'John Smith',
//       excerpt: 'Leveraging IoT devices for predictive maintenance and operational efficiency.'
//     },
//     {
//       category: 'Digital Transformation',
//       title: 'Digital Transformation Success Stories',
//       date: 'Dec 15, 2025',
//       readTime: '8 min read',
//       image: 'https://picsum.photos/id/42/600/400',
//       author: 'Emily White',
//       excerpt: 'Real-world examples of successful digital transformation initiatives.'
//     }
//   ];

//   return (
//     <section className="insights-section">
//       <div className="container">
//         <div className="section-header">
//           <span className="section-badge">Latest Insights</span>
//           <h2 className="section-title">Thought Leadership<br />Resources</h2>
//           <p className="section-subtitle">Expert insights, industry trends, and innovative ideas</p>
//         </div>

//         <div className="insights-grid">
//           {insights.map((insight, index) => (
//             <div className="insight-card" key={index}>
//               <div className="insight-image">
//                 <img 
//                   src={insight.image} 
//                   alt={insight.title} 
//                   loading="lazy"
//                   onError={(e) => {
//                     e.target.src = 'https://via.placeholder.com/600x400/0a5c8e/ffffff?text=Image+Not+Found';
//                   }}
//                 />
//                 <span className="insight-category">{insight.category}</span>
//               </div>
//               <div className="insight-content">
//                 <h3>{insight.title}</h3>
//                 <div className="insight-meta">
//                   <span><i className="far fa-calendar"></i> {insight.date}</span>
//                   <span><i className="far fa-clock"></i> {insight.readTime}</span>
//                   <span><i className="far fa-user"></i> {insight.author}</span>
//                 </div>
//                 <p className="insight-excerpt">{insight.excerpt}</p>
//                 <Link to="/insights" className="read-more">Read More <i className="fas fa-arrow-right"></i></Link>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="insights-cta">
//           <Link to="/insights" className="btn btn-outline">View All Insights <i className="fas fa-arrow-right"></i></Link>
//         </div>
//       </div>

//       <style>{`
//         .insights-section {
//           padding: 80px 0;
//           background: var(--light-gray);
//         }
        
//         .insights-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
//           gap: 30px;
//           margin-bottom: 40px;
//         }
        
//         .insight-card {
//           background: var(--white);
//           border-radius: 20px;
//           overflow: hidden;
//           transition: var(--transition);
//           box-shadow: var(--shadow-sm);
//         }
        
//         .insight-card:hover {
//           transform: translateY(-5px);
//           box-shadow: var(--shadow-lg);
//         }
        
//         .insight-image {
//           position: relative;
//           overflow: hidden;
//           height: 220px;
//           background: #f0f0f0;
//         }
        
//         .insight-image img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           transition: var(--transition);
//         }
        
//         .insight-card:hover .insight-image img {
//           transform: scale(1.05);
//         }
        
//         .insight-category {
//           position: absolute;
//           top: 16px;
//           left: 16px;
//           background: var(--primary);
//           color: white;
//           padding: 6px 14px;
//           border-radius: 20px;
//           font-size: 12px;
//           font-weight: 600;
//           letter-spacing: 0.5px;
//           z-index: 2;
//         }
        
//         .insight-content {
//           padding: 24px;
//         }
        
//         .insight-content h3 {
//           font-size: 20px;
//           margin-bottom: 12px;
//           color: var(--dark);
//           line-height: 1.4;
//           transition: var(--transition);
//         }
        
//         .insight-card:hover .insight-content h3 {
//           color: var(--primary);
//         }
        
//         .insight-meta {
//           display: flex;
//           gap: 16px;
//           margin-bottom: 12px;
//           color: var(--gray);
//           font-size: 13px;
//           flex-wrap: wrap;
//         }
        
//         .insight-meta i {
//           margin-right: 4px;
//         }
        
//         .insight-excerpt {
//           color: var(--gray);
//           font-size: 14px;
//           line-height: 1.6;
//           margin-bottom: 16px;
//         }
        
//         .read-more {
//           color: var(--primary);
//           text-decoration: none;
//           font-weight: 600;
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           transition: var(--transition);
//           font-size: 14px;
//         }
        
//         .read-more:hover {
//           gap: 12px;
//           color: var(--secondary);
//         }
        
//         .insights-cta {
//           text-align: center;
//           margin-top: 20px;
//         }
        
//         @media (max-width: 768px) {
//           .insights-grid {
//             grid-template-columns: 1fr;
//             gap: 20px;
//           }
          
//           .insight-image {
//             height: 200px;
//           }
          
//           .insight-content h3 {
//             font-size: 18px;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Insights;

import React from 'react';
import { Link } from 'react-router-dom';

const Insights = () => {
  const insights = [
    {
      category: 'AI & Machine Learning',
      title: 'The Future of Generative AI in Enterprise',
      date: 'Jan 15, 2026',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0aWZpY2lhbCUyMGludGVsbGlnZW5jZXxlbnwwfHwwfHx8MA%3D%3D',
      author: 'Dr. Sarah Johnson',
      excerpt: 'Exploring how generative AI is transforming business operations.'
    },
    {
      category: 'Cloud Computing',
      title: 'Multi-Cloud Strategy: Best Practices 2026',
      date: 'Jan 10, 2026',
      readTime: '4 min read',
      image: 'https://plus.unsplash.com/premium_photo-1733306493254-52b143296396?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdWQlMjBjb21wdXRpbmd8ZW58MHx8MHx8fDA%3D',
      author: 'Michael Chen',
      excerpt: 'Key considerations for implementing a successful multi-cloud architecture.'
    },
    {
      category: 'Cybersecurity',
      title: 'Zero-Trust Security Framework Implementation',
      date: 'Jan 5, 2026',
      readTime: '6 min read',
      image: 'https://plus.unsplash.com/premium_photo-1661764393655-1dbffee8c0ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y3liZXJzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D',
      author: 'Lisa Rodriguez',
      excerpt: 'Step-by-step guide to implementing zero-trust security.'
    },
    {
      category: 'Data Analytics',
      title: 'Real-Time Analytics for Business Growth',
      date: 'Dec 28, 2025',
      readTime: '5 min read',
      image: 'https://media.istockphoto.com/id/1311598658/photo/businessman-trading-online-stock-market-on-teblet-screen-digital-investment-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=IWQzVeh6--ZOe9YxB1-EI1KSWooYTpZS2sqe6Zu6GJM=',
      author: 'David Kumar',
      excerpt: 'How real-time data analytics drives better decision-making.'
    },
    {
      category: 'IoT',
      title: 'IoT Integration in Smart Manufacturing',
      date: 'Dec 20, 2025',
      readTime: '7 min read',
      image: 'https://plus.unsplash.com/premium_photo-1688678097510-38711f21668b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGlvdHxlbnwwfHwwfHx8MA%3D%3D',
      author: 'John Smith',
      excerpt: 'Leveraging IoT devices for predictive maintenance.'
    },
    {
      category: 'Digital Transformation',
      title: 'Digital Transformation Success Stories',
      date: 'Dec 15, 2025',
      readTime: '8 min read',
      image: 'https://plus.unsplash.com/premium_photo-1661878265739-da90bc1af051?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGlnaXRhbCUyMHRyYW5zZm9ybWF0aW9ufGVufDB8fDB8fHww',
      author: 'Emily White',
      excerpt: 'Real-world examples of successful digital transformation.'
    }
  ];

  return (
    <section className="insights-section">
      {/* Rest of the JSX remains the same */}
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Latest Insights</span>
          <h2 className="section-title">Thought Leadership<br />Resources</h2>
          <p className="section-subtitle">Expert insights, industry trends, and innovative ideas</p>
        </div>

        <div className="insights-grid">
          {insights.map((insight, index) => (
            <div className="insight-card" key={index}>
              <div className="insight-image">
                <img 
                  src={insight.image} 
                  alt={insight.title} 
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="400"%3E%3Crect width="600" height="400" fill="%230a5c8e"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" fill="white" font-size="20"%3E' + insight.category + '%3C/text%3E%3C/svg%3E';
                  }}
                />
                <span className="insight-category">{insight.category}</span>
              </div>
              <div className="insight-content">
                <h3>{insight.title}</h3>
                <div className="insight-meta">
                  <span><i className="far fa-calendar"></i> {insight.date}</span>
                  <span><i className="far fa-clock"></i> {insight.readTime}</span>
                  <span><i className="far fa-user"></i> {insight.author}</span>
                </div>
                <p className="insight-excerpt">{insight.excerpt}</p>
                <Link to="/insights" className="read-more">Read More <i className="fas fa-arrow-right"></i></Link>
              </div>
            </div>
          ))}
        </div>

        <div className="insights-cta">
          <Link to="/insights" className="btn btn-outline">View All Insights <i className="fas fa-arrow-right"></i></Link>
        </div>
      </div>

      <style>{`
        .insights-section {
          padding: 80px 0;
          background: var(--light-gray);
        }
        
        .insights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
          margin-bottom: 40px;
        }
        
        .insight-card {
          background: var(--white);
          border-radius: 20px;
          overflow: hidden;
          transition: var(--transition);
          box-shadow: var(--shadow-sm);
        }
        
        .insight-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
        }
        
        .insight-image {
          position: relative;
          overflow: hidden;
          height: 220px;
          background: #e0e0e0;
        }
        
        .insight-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition);
        }
        
        .insight-card:hover .insight-image img {
          transform: scale(1.05);
        }
        
        .insight-category {
          position: absolute;
          top: 16px;
          left: 16px;
          background: var(--primary);
          color: white;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.5px;
          z-index: 2;
        }
        
        .insight-content {
          padding: 24px;
        }
        
        .insight-content h3 {
          font-size: 20px;
          margin-bottom: 12px;
          color: var(--dark);
          line-height: 1.4;
          transition: var(--transition);
        }
        
        .insight-card:hover .insight-content h3 {
          color: var(--primary);
        }
        
        .insight-meta {
          display: flex;
          gap: 16px;
          margin-bottom: 12px;
          color: var(--gray);
          font-size: 13px;
          flex-wrap: wrap;
        }
        
        .insight-meta i {
          margin-right: 4px;
        }
        
        .insight-excerpt {
          color: var(--gray);
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 16px;
        }
        
        .read-more {
          color: var(--primary);
          text-decoration: none;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: var(--transition);
          font-size: 14px;
        }
        
        .read-more:hover {
          gap: 12px;
          color: var(--secondary);
        }
        
        .insights-cta {
          text-align: center;
          margin-top: 20px;
        }
        
        @media (max-width: 768px) {
          .insights-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .insight-image {
            height: 200px;
          }
          
          .insight-content h3 {
            font-size: 18px;
          }
        }
      `}</style>
    </section>
  );
};

export default Insights;