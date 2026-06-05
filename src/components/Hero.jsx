import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);
  const progressRef = useRef(null);

  // Technology showcase slides with working images
  const techSlides = [
    {
      image: "https://media.istockphoto.com/id/1350722246/photo/server-room-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=d0h-TtP8lxKLSurIWuH6DUovHpDKZrB3H3UVwEb5YRY=",
      mobileImage: "https://media.istockphoto.com/id/1350722246/photo/server-room-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=d0h-TtP8lxKLSurIWuH6DUovHpDKZrB3H3UVwEb5YRY=",
      tech: "Artificial Intelligence",
      description: "Intelligent automation & machine learning solutions",
      // color: "#0a5c8e"
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1661878265739-da90bc1af051?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNsb3VkJTIwY29tcHV0aW5nfGVufDB8fDB8fHww",
      mobileImage: "https://plus.unsplash.com/premium_photo-1661878265739-da90bc1af051?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNsb3VkJTIwY29tcHV0aW5nfGVufDB8fDB8fHww",
      tech: "Cloud Computing",
      description: "Scalable cloud infrastructure & migration",
      // color: "#2bcbba"
    },
    {
      image: "https://images.unsplash.com/photo-1767424412548-1a1ac7f4b9bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYwfHxhbmFseXRpY3MlMjBkYXNoYm9hcmR8ZW58MHx8MHx8fDA%3D",
      mobileImage: "https://images.unsplash.com/photo-1767424412548-1a1ac7f4b9bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYwfHxhbmFseXRpY3MlMjBkYXNoYm9hcmR8ZW58MHx8MHx8fDA%3D",
      tech: "Data Analytics",
      description: "Real-time insights & business intelligence",
      // color: "#ff6b35"
    },
    {
      image: "https://media.istockphoto.com/id/817486028/photo/shot-from-the-back-to-hooded-hacker-breaking-into-corporate-data-servers-from-his-underground.webp?a=1&b=1&s=612x612&w=0&k=20&c=bwe0vyz7HeGnsWJ3sg2d8P04SklDU8knQpTe0VN0ZCU=",
      mobileImage: "https://media.istockphoto.com/id/817486028/photo/shot-from-the-back-to-hooded-hacker-breaking-into-corporate-data-servers-from-his-underground.webp?a=1&b=1&s=612x612&w=0&k=20&c=bwe0vyz7HeGnsWJ3sg2d8P04SklDU8knQpTe0VN0ZCU=",
      tech: "Cybersecurity",
      description: "Advanced threat protection & compliance",
      // color: "#9b59b6"
    },
    {
      image: "https://media.istockphoto.com/id/2204916274/photo/diminishing-perspective-of-distribution-warehouse-with-plexus-lines-automated-guided-vehicles.webp?a=1&b=1&s=612x612&w=0&k=20&c=QFR4gV5cy1f_tjl-mJDjqo_seHvEHmBn5YvI9z1rRkk=",
      mobileImage: "https://media.istockphoto.com/id/2204916274/photo/diminishing-perspective-of-distribution-warehouse-with-plexus-lines-automated-guided-vehicles.webp?a=1&b=1&s=612x612&w=0&k=20&c=QFR4gV5cy1f_tjl-mJDjqo_seHvEHmBn5YvI9z1rRkk=",
      tech: "IoT Solutions",
      description: "Connected devices & smart systems",
      // color: "#e74c3c"
    },
    {
      image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=906&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      mobileImage: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=906&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tech: "Digital Transformation",
      description: "End-to-end enterprise modernization",
      // color: "#3498db"
    }
  ];

  // Next slide function
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % techSlides.length);
    resetProgressBar();
  };

  // Previous slide function
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? techSlides.length - 1 : prev - 1));
    resetProgressBar();
  };

  // Go to specific slide
  const goToSlide = (index) => {
    setCurrentSlide(index);
    resetProgressBar();
  };

  // Reset progress bar animation
  const resetProgressBar = () => {
    if (progressRef.current) {
      progressRef.current.style.animation = 'none';
      setTimeout(() => {
        if (progressRef.current) {
          progressRef.current.style.animation = 'progress 5s linear forwards';
        }
      }, 10);
    }
  };

  // Auto-rotate slides
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Reset timer when manually changing slides
  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
  }, [currentSlide]);

  const content = {
    badge: "Digital Innovation Leader",
    title: "Transform Your",
    gradientText: "Enterprise Future",
    description: "Tescra delivers cutting-edge AI, cloud, and data solutions that drive business growth, operational excellence, and competitive advantage in the digital age.",
    ctaText: "Explore Solutions",
    secondaryCta: "Watch Demo",
    stats: [
      { number: "250+", label: "Enterprise Clients" },
      { number: "98%", label: "Client Retention" },
      { number: "15+", label: "Industry Awards" }
    ]
  };

  return (
    <section className="hero">
      {/* Slideshow Background */}
      <div className="slideshow-background">
        {techSlides.map((slide, index) => (
          <div 
            key={index}
            className={`slide ${currentSlide === index ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${window.innerWidth <= 768 ? slide.mobileImage : slide.image})`
            }}
          >
            <div className="slide-overlay" style={{ background: `linear-gradient(135deg, ${slide.color}DD, ${slide.color}99)` }}></div>
          </div>
        ))}
        
        {/* Technology Label Overlay */}
        <div className="tech-label" style={{ borderLeftColor: techSlides[currentSlide].color }}>
          <span className="tech-name">{techSlides[currentSlide].tech}</span>
          <span className="tech-desc">{techSlides[currentSlide].description}</span>
        </div>
        
        {/* Slide Navigation Arrows */}
        <button className="slide-nav prev" onClick={prevSlide}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="slide-nav next" onClick={nextSlide}>
          <i className="fas fa-chevron-right"></i>
        </button>
        
        {/* Slide Indicators/Dots */}
        <div className="slide-dots">
          {techSlides.map((slide, index) => (
            <button
              key={index}
              className={`dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              style={{ 
                background: currentSlide === index ? slide.color : 'rgba(255,255,255,0.5)'
              }}
            >
              <span className="dot-tooltip">{slide.tech}</span>
            </button>
          ))}
        </div>
        
        {/* Progress Bar */}
        <div className="progress-bar-container">
          <div 
            ref={progressRef}
            className="progress-bar" 
            style={{ 
              background: techSlides[currentSlide].color
            }}
          ></div>
        </div>
      </div>

      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-badge">
              <i className="fas fa-rocket"></i> {content.badge}
            </div>
            <h1 className="hero-title">
              {content.title}<br />
              <span className="gradient-text">{content.gradientText}</span>
            </h1>
            <p className="hero-description">{content.description}</p>
            <div className="hero-buttons">
              <Link to="/services" className="btn btn-primary">
                <i className="fas fa-chart-line"></i> {content.ctaText}
              </Link>
              <Link to="/contact" className="btn btn-outline">
                <i className="fas fa-play-circle"></i> {content.secondaryCta}
              </Link>
            </div>
            <div className="hero-stats">
              {content.stats.map((stat, index) => (
                <div className="stat" key={index}>
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }
        
        /* Slideshow Background */
        .slideshow-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }
        
        .slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          opacity: 0;
          transition: opacity 0.8s ease-in-out;
          z-index: 1;
        }
        
        .slide.active {
          opacity: 1;
          z-index: 2;
        }
        
        .slide-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        /* Technology Label Overlay */
        .tech-label {
          position: absolute;
          bottom: 120px;
          left: 30px;
          z-index: 10;
          text-align: left;
          animation: slideInLeft 0.5s ease-out;
          padding-left: 20px;
          border-left: 4px solid;
        }
        
        .tech-name {
          display: block;
          font-size: 36px;
          font-weight: 800;
          color: white;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
          margin-bottom: 8px;
        }
        
        .tech-desc {
          display: block;
          font-size: 16px;
          color: rgba(255,255,255,0.9);
          text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
        }
        
        /* Navigation Arrows */
        .slide-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0,0,0,0.5);
          color: white;
          border: none;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          cursor: pointer;
          z-index: 10;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
        }
        
        .slide-nav:hover {
          background: rgba(0,0,0,0.8);
          transform: translateY(-50%) scale(1.1);
        }
        
        .slide-nav.prev {
          left: 20px;
        }
        
        .slide-nav.next {
          right: 20px;
        }
        
        /* Slide Dots */
        .slide-dots {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 12px;
          z-index: 10;
          padding: 10px 20px;
          background: rgba(0,0,0,0.3);
          border-radius: 50px;
          backdrop-filter: blur(5px);
        }
        
        .dot {
          width: 10px;
          height: 10px;
          border-radius: 5px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          padding: 0;
        }
        
        .dot.active {
          width: 30px;
        }
        
        .dot:hover {
          transform: scale(1.2);
        }
        
        .dot:hover .dot-tooltip {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(-30px);
        }
        
        .dot-tooltip {
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(-10px);
          background: rgba(0,0,0,0.8);
          color: white;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 12px;
          white-space: nowrap;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          pointer-events: none;
        }
        
        /* Progress Bar */
        .progress-bar-container {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: rgba(255,255,255,0.3);
          z-index: 10;
        }
        
        .progress-bar {
          height: 100%;
          width: 0%;
          animation: progress 5s linear forwards;
        }
        
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
        
        /* Hero Content */
        .hero-grid {
          position: relative;
          z-index: 5;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          min-height: 100vh;
          padding: 100px 0;
        }
        
        .hero-content {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          padding: 40px;
          border-radius: 30px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          animation: fadeInUp 0.8s ease-out;
        }
        
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(43, 203, 186, 0.15);
          padding: 8px 20px;
          border-radius: 40px;
          color: var(--secondary);
          font-weight: 600;
          margin-bottom: 24px;
        }
        
        .hero-title {
          font-size: 52px;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 24px;
          color: var(--dark);
        }
        
        .hero-description {
          font-size: 18px;
          color: var(--gray);
          margin-bottom: 32px;
          line-height: 1.6;
        }
        
        .hero-buttons {
          display: flex;
          gap: 16px;
          margin-bottom: 48px;
          flex-wrap: wrap;
        }
        
        .hero-stats {
          display: flex;
          gap: 48px;
        }
        
        .stat {
          display: flex;
          flex-direction: column;
        }
        
        .stat-number {
          font-size: 28px;
          font-weight: 800;
          color: var(--primary);
        }
        
        .stat-label {
          font-size: 14px;
          color: var(--gray);
        }
        
        /* Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @media (max-width: 968px) {
          .hero-grid {
            grid-template-columns: 1fr;
            padding: 80px 0;
          }
          
          .hero-title {
            font-size: 40px;
          }
          
          .hero-stats {
            justify-content: space-between;
          }
          
          .tech-label {
            bottom: 100px;
            left: 20px;
          }
          
          .tech-name {
            font-size: 24px;
          }
          
          .slide-nav {
            width: 40px;
            height: 40px;
            font-size: 16px;
          }
          
          .slide-dots {
            bottom: 20px;
            gap: 8px;
            padding: 6px 12px;
          }
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 32px;
          }
          
          .hero-content {
            padding: 24px;
            margin: 20px;
          }
          
          .tech-label {
            display: none;
          }
          
          .slide-nav {
            width: 35px;
            height: 35px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;