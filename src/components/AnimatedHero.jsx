// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const AnimatedHero = () => {
//   const [currentTech, setCurrentTech] = useState(0);
//   const content = {
//     badge: "Digital Innovation Leader",
//     title: "Transform Your",
//     gradientText: "Enterprise Future",
//     description: "Tescra delivers cutting-edge AI, cloud, and data solutions that drive business growth, operational excellence, and competitive advantage in the digital age.",
//     ctaText: "Explore Solutions",
//     secondaryCta: "Watch Demo",
//     stats: [
//       { number: "250+", label: "Enterprise Clients" },
//       { number: "98%", label: "Client Retention" },
//       { number: "15+", label: "Industry Awards" }
//     ]
//   };


//   const technologies = [
//     { name: "Artificial Intelligence", icon: "fas fa-robot", color: "#0a5c8e", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&h=1080&fit=crop" },
//     { name: "Cloud Computing", icon: "fas fa-cloud-upload-alt", color: "#2bcbba", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop" },
//     { name: "Data Analytics", icon: "fas fa-chart-line", color: "#ff6b35", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop" },
//     { name: "Cybersecurity", icon: "fas fa-shield-alt", color: "#9b59b6", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&h=1080&fit=crop" }
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTech((prev) => (prev + 1) % technologies.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [technologies.length]);

//   return (
//     <section className="animated-hero">
//       {/* Background Image Slider */}
//       <div className="background-slider">
//         {technologies.map((tech, index) => (
//           <div
//             key={index}
//             className={`slide ${currentTech === index ? 'active' : ''}`}
//             style={{ backgroundImage: `url(${tech.image})` }}
//           >
//             <div className="slide-overlay" style={{ background: `linear-gradient(135deg, ${tech.color}DD, ${tech.color}99)` }}></div>
//           </div>
//         ))}
//       </div>

//       <div className="container">
//         <div className="hero-content-wrapper">
//           <div className="hero-badge">
//             <i className="fas fa-rocket"></i> Digital Innovation Leader
//           </div>
          
//           <h1 className="hero-title">
//             Transform Your<br />
//             <span className="gradient-text">Enterprise Future</span>
//           </h1>
          
//           <p className="hero-description">
//             Tescra delivers cutting-edge AI, cloud, and data solutions that drive business growth, 
//             operational excellence, and competitive advantage in the digital age.
//           </p>
          
//           <div className="tech-rotator">
//             <span className="rotator-label">Powered by:</span>
//             <div className="rotator-content">
//               {technologies.map((tech, index) => (
//                 <div key={index} className={`tech-name ${currentTech === index ? 'visible' : ''}`}>
//                   <i className={tech.icon} style={{ color: tech.color }}></i>
//                   <span>{tech.name}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
          
//           <div className="hero-buttons">
//             <Link to="/services" className="btn btn-primary">
//               <i className="fas fa-chart-line"></i> Explore Solutions
//             </Link>
//             <Link to="/contact" className="btn btn-outline">
//               <i className="fas fa-play-circle"></i> Watch Demo
//             </Link>
//           </div>
          
//           <div className="hero-stats">
//             <div className="stat">
//               <span className="stat-number">250+</span>
//               <span className="stat-label">Enterprise Clients</span>
//             </div>
//             <div className="stat">
//               <span className="stat-number">98%</span>
//               <span className="stat-label">Client Retention</span>
//             </div>
//             <div className="stat">
//               <span className="stat-number">15+</span>
//               <span className="stat-label">Industry Awards</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         .animated-hero {
//           position: relative;
//           min-height: 100vh;
//           display: flex;
//           align-items: center;
//           overflow: hidden;
//         }
        
//         .background-slider {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           z-index: 0;
//         }
        
//         .slide {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background-size: cover;
//           background-position: center;
//           opacity: 0;
//           transition: opacity 1s ease-in-out;
//         }
        
//         .slide.active {
//           opacity: 1;
//         }
        
//         .slide-overlay {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//         }
        
//         .hero-content-wrapper {
//           position: relative;
//           z-index: 2;
//           max-width: 700px;
//           background: rgba(255,255,255,0.95);
//           backdrop-filter: blur(10px);
//           padding: 50px;
//           border-radius: 30px;
//           animation: fadeInUp 0.8s ease-out;
//         }
        
//         .tech-rotator {
//           display: flex;
//           align-items: center;
//           gap: 16px;
//           margin-bottom: 32px;
//           padding: 16px;
//           background: rgba(255,255,255,0.9);
//           border-radius: 60px;
//           box-shadow: 0 4px 15px rgba(0,0,0,0.1);
//         }
        
//         .rotator-label {
//           font-weight: 600;
//           color: var(--dark);
//         }
        
//         .rotator-content {
//           position: relative;
//           height: 30px;
//           overflow: hidden;
//           flex: 1;
//         }
        
//         .tech-name {
//           position: absolute;
//           top: 0;
//           left: 0;
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           opacity: 0;
//           transform: translateY(20px);
//           transition: all 0.5s ease;
//           font-weight: 600;
//         }
        
//         .tech-name.visible {
//           opacity: 1;
//           transform: translateY(0);
//         }
        
//         .tech-name i {
//           font-size: 20px;
//         }
        
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         @media (max-width: 768px) {
//           .hero-content-wrapper {
//             padding: 30px;
//             margin: 20px;
//           }
          
//           .tech-rotator {
//             flex-direction: column;
//             text-align: center;
//             border-radius: 20px;
//           }
          
//           .rotator-content {
//             height: 50px;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default AnimatedHero;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AnimatedHero = () => {
  const [currentTech, setCurrentTech] = useState(0);

  const technologies = [
    { name: "Artificial Intelligence", icon: "fas fa-robot", color: "#0a5c8e", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&h=1080&fit=crop" },
    { name: "Cloud Computing", icon: "fas fa-cloud-upload-alt", color: "#2bcbba", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop" },
    { name: "Data Analytics", icon: "fas fa-chart-line", color: "#ff6b35", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop" },
    { name: "Cybersecurity", icon: "fas fa-shield-alt", color: "#9b59b6", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&h=1080&fit=crop" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % technologies.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [technologies.length]);

  // Remove the unused 'content' variable or comment it out
  // const content = {
  //   badge: "Digital Innovation Leader",
  //   title: "Transform Your",
  //   gradientText: "Enterprise Future",
  //   ...
  // };

  return (
    <section className="animated-hero">
      <div className="background-slider">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className={`slide ${currentTech === index ? 'active' : ''}`}
            style={{ backgroundImage: `url(${tech.image})` }}
          >
            <div className="slide-overlay" style={{ background: `linear-gradient(135deg, ${tech.color}DD, ${tech.color}99)` }}></div>
          </div>
        ))}
      </div>
      {/* Rest of your component */}
    </section>
  );
};

export default AnimatedHero;