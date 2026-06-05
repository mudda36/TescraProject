import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Get In Touch</span>
          <h2 className="section-title">Let's Start a<br />Conversation</h2>
          <p className="section-subtitle">Ready to transform your business? Reach out to our team</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-card">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h4>Visit Us</h4>
                <p>123 Innovation Drive, Tech Valley, CA 94043</p>
              </div>
            </div>
            <div className="info-card">
              <i className="fas fa-phone-alt"></i>
              <div>
                <h4>Call Us</h4>
                <p>+1 (555) 123-4567</p>
                <p>+1 (555) 987-6543</p>
              </div>
            </div>
            <div className="info-card">
              <i className="fas fa-envelope"></i>
              <div>
                <h4>Email Us</h4>
                <p>info@tescra.com</p>
                <p>sales@tescra.com</p>
              </div>
            </div>
            <div className="info-card">
              <i className="fas fa-clock"></i>
              <div>
                <h4>Working Hours</h4>
                <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
                <p>24/7 Support Available</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Tell us about your project"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message <i className="fas fa-paper-plane"></i>
            </button>
            {submitted && <div className="success-message">Message sent successfully!</div>}
          </form>
        </div>
      </div>

      <style>{`
        .contact-section {
          padding: 80px 0;
          background: var(--white);
        }
        
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
        }
        
        .info-card {
          display: flex;
          gap: 20px;
          margin-bottom: 32px;
          padding: 20px;
          background: var(--light-gray);
          border-radius: 16px;
          transition: var(--transition);
        }
        
        .info-card:hover {
          transform: translateX(10px);
          background: white;
          box-shadow: var(--shadow-md);
        }
        
        .info-card i {
          font-size: 32px;
          color: var(--primary);
        }
        
        .info-card h4 {
          font-size: 18px;
          margin-bottom: 8px;
        }
        
        .info-card p {
          color: var(--gray);
          margin: 4px 0;
        }
        
        .contact-form {
          background: var(--light-gray);
          padding: 40px;
          border-radius: 24px;
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 14px 18px;
          border: 1px solid #e0e0e0;
          border-radius: 12px;
          font-family: inherit;
          font-size: 16px;
          transition: var(--transition);
        }
        
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(10, 92, 142, 0.1);
        }
        
        .success-message {
          margin-top: 16px;
          padding: 12px;
          background: #d4edda;
          color: #155724;
          border-radius: 8px;
          text-align: center;
        }
        
        @media (max-width: 968px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;