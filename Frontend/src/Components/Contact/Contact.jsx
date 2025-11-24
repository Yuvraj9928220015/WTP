import React, { useState } from 'react';
import './Contact.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (error) setError('');
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            setError('Please fill in all required fields');
            return;
        }

        setIsLoading(true);
        setError('');

        try {
            const response = await fetch('http://localhost:7040/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (response.ok) {
                setIsSubmitted(true);
                console.log('✅ Form submitted successfully:', result);

                setTimeout(() => {
                    setIsSubmitted(false);
                    setFormData({
                        name: '',
                        email: '',
                        subject: '',
                        message: ''
                    });
                }, 3000);
            } else {
                setError(result.message || 'Something went wrong');
            }
        } catch (error) {
            console.error('❌ Error submitting form:', error);
            setError('Network error. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="contact-container">
                <div className='Clients_container_image'>
                    <img
                        src="/Sustainability-City-Park-Kota.jpg"
                        alt="Modern Architecture Interior Design"
                        loading="lazy"
                    />
                    <div className="image_overlay">
                        <div className="overlay_content">
                            <h2>Contact Us</h2>
                        </div>
                    </div>
                </div>

                <div className="Contact-container-fluid">
                    <div className="container-fluid">
                        <div id='Contact-grid-container' className="contact-grid">
                            <div className="contact-card fade-in">
                                <div className="contact-icon icon-phone">
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                </div>
                                <h3 className="contact-title">Phone</h3>
                                <p className="contact-description">
                                    Ready to transform your space? Give us a call and let's discuss your vision.
                                </p>
                                <div className="contact-info">
                                    <a href="tel:+918347924201" className="contact-link">
                                        +91-141-2721695
                                    </a>
                                </div>
                            </div>

                            {/* Email Card */}
                            <div className="contact-card fade-in">
                                <div className="contact-icon icon-email">
                                    <FaEnvelope />
                                </div>
                                <h3 className="contact-title">Email</h3>
                                <p className="contact-description">
                                    Drop us a line with your ideas and we'll craft the perfect interior solution.
                                </p>
                                <div className="contact-info">
                                    <a href="mailto:contact@gmail.com" className="contact-link">
                                        sincerehouse@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Location Card */}
                            <div className="contact-card fade-in">
                                <div className="contact-icon icon-location">
                                    <FaMapMarkerAlt />
                                </div>
                                <h3 className="contact-title">Location</h3>
                                <p className="contact-description">
                                    42, Lal Singh Judo Colony, Near Jaipuria Hospital, Malviya Nagar,
                                    Jaipur, Rajasthan, India – 302017
                                </p>
                                <div className="contact-info">
                                    <a
                                        href="https://maps.google.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="contact-link"
                                    >
                                        View On Google Map
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="form-container fade-in">
                            <div className="form-header">
                                <h2>Leave us your info</h2>
                                <p>and we will get back to you.</p>
                            </div>

                            <div className="form-content">
                                {isSubmitted && (
                                    <div className="success-message">
                                        <FaCheckCircle />
                                        <span>Message sent successfully! We'll get back to you soon.</span>
                                    </div>
                                )}

                                {error && (
                                    <div className="error-message" style={{
                                        color: '#e74c3c',
                                        backgroundColor: '#ffeaea',
                                        padding: '10px',
                                        borderRadius: '5px',
                                        marginBottom: '20px',
                                        border: '1px solid #e74c3c'
                                    }}>
                                        {error}
                                    </div>
                                )}

                                <form onSubmit={handleSubmit}>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label className="form-label">Full Name *</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                placeholder="Enter your full name"
                                                className="form-input"
                                                required
                                                disabled={isLoading}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Email *</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder="Enter your email"
                                                className="form-input"
                                                required
                                                disabled={isLoading}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">Subject *</label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            placeholder="Enter subject"
                                            className="form-input"
                                            required
                                            disabled={isLoading}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">Message *</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            placeholder="Tell us about your project..."
                                            className="form-textarea"
                                            rows={6}
                                            required
                                            disabled={isLoading}
                                        />
                                    </div>

                                    <button type="submit" className="form-submit" disabled={isLoading}>
                                        <FaPaperPlane />
                                        <span>{isLoading ? 'SUBMITTING...' : 'SUBMIT NOW'}</span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}