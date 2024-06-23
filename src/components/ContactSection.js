import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
    return (
        <div className="contact-section">
            <div className="left-content">
                <h1 className="section-title">Let's hear from you!</h1>
                <p className="section-description">
                    Curious about how we can help you excel in science? We’re here to discuss your challenges, provide solutions, and answer any questions you may have!
                </p>
                <div className="separator"></div>
                <div className="separator"></div>
                <div className="brand">QuickSolver</div>
                <div className="contact-details">
                    <div className="contact-item">
                        <span className="contact-icon">📞</span>
                        <span className="contact-text">+237 9234 034 3465</span>
                    </div>
                    <div className="contact-item">
                        <span className="contact-icon">📧</span>
                        <span className="contact-text">info@quicksolver.app</span>
                    </div>
                </div>
            </div>
            <div className="right-content">
                <h2 className="form-title">Reach out to us</h2>
                <form className="contact-form">
                    <label className="form-label">
                        Name
                        <input type="text" name="name" className="form-input" placeholder="Enter your name" />
                    </label>
                    <label className="form-label">
                        Email
                        <input type="email" name="email" className="form-input" placeholder="your@email.com" />
                    </label>
                    <label className="form-label">
                        Enter your feedback or enquiry?
                        <textarea name="message" className="form-textarea" placeholder="I would love to suggest that"></textarea>
                    </label>
                    <button type="submit" className="submit-button">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default ContactSection;
