import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="page-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with our team for inquiries and consultations</p>
        </div>
      </div>

      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-info-large">
            <h2>Let's Talk</h2>
            <p>Have a project in mind? We'd love to hear about it. Our team is ready to help you transform your business with technology.</p>
            
            <div className="office-hours">
              <h3>Office Hours</h3>
              <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
              <p><strong>Saturday - Sunday:</strong> Closed</p>
              <p><strong>24/7 Emergency Support:</strong> Available</p>
            </div>
            
            <div className="global-offices">
              <h3>Global Offices</h3>
              <div className="office">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <strong>USA</strong>
                  <p>123 Innovation Drive, Tech Valley, CA 94043</p>
                </div>
              </div>
              <div className="office">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <strong>UK</strong>
                  <p>45 Digital Street, London, EC2A 4NE</p>
                </div>
              </div>
              <div className="office">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <strong>India</strong>
                  <p>789 Tech Park, Bangalore, 560001</p>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form-large" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Full Name *</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Email Address *</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Company Name *</label>
                <input type="text" name="company" value={formData.company} onChange={handleChange} required />
              </div>
            </div>
            
            <div className="form-group">
              <label>Subject *</label>
              <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
            </div>
            
            <div className="form-group">
              <label>Message *</label>
              <textarea name="message" rows="6" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary btn-large">Send Message <i className="fas fa-paper-plane"></i></button>
            {submitted && <div className="success-message">Thank you! We'll get back to you within 24 hours.</div>}
          </form>
        </div>
      </div>

      <style>{`
        .contact-page {
          padding-top: 80px;
        }
        
        .contact-wrapper {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 50px;
          padding: 60px 0;
        }
        
        .contact-info-large h2 {
          font-size: 36px;
          margin-bottom: 20px;
        }
        
        .contact-info-large > p {
          color: var(--gray);
          line-height: 1.6;
          margin-bottom: 30px;
        }
        
        .office-hours, .global-offices {
          margin-bottom: 30px;
        }
        
        .office-hours h3, .global-offices h3 {
          margin-bottom: 16px;
          color: var(--dark);
        }
        
        .office {
          display: flex;
          gap: 16px;
          margin-bottom: 16px;
        }
        
        .office i {
          font-size: 24px;
          color: var(--primary);
          margin-top: 4px;
        }
        
        .contact-form-large {
          background: var(--light-gray);
          padding: 40px;
          border-radius: 24px;
        }
        
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
        }
        
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-family: inherit;
        }
        
        .btn-large {
          width: 100%;
          justify-content: center;
        }
        
        @media (max-width: 968px) {
          .contact-wrapper {
            grid-template-columns: 1fr;
          }
          
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactPage;