import { useState, useEffect } from 'react';
import './ViewPage1.css';

export default function ViewPage1() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const images = [
        {
            src: "./public/DSC_0.webp",
            alt: "World Trade Park Interior 1",
            placeholder: "https://images.unsplash.com/photo-1519643381401-22c77e60520e?w=400&h=300&fit=crop"
        },
        {
            src: "./public/DSC_00.webp",
            alt: "World Trade Park Interior 2",
            placeholder: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop"
        },
        {
            src: "./public/DSC_01.webp",
            alt: "World Trade Park Exterior",
            placeholder: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=300&fit=crop"
        },
        {
            src: "./public/DSC_04.webp",
            alt: "World Trade Park Architecture",
            placeholder: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop"
        },
        {
            src: "./public/DSC_8.webp",
            alt: "World Trade Park Architecture",
            placeholder: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400&h=300&fit=crop"
        },
        {
            src: "./public/DSC_80.webp",
            alt: "World Trade Park Architecture",
            placeholder: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop"
        }
    ];

    const openModal = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
        document.body.style.overflow = 'auto';
    };

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                closeModal();
            }
        };

        if (isModalOpen) {
            document.addEventListener('keydown', handleEscape);
            return () => document.removeEventListener('keydown', handleEscape);
        }
    }, [isModalOpen]);

    return (
        <div className="page-wrapper">
            {/* Hero Banner Section */}
            <div className="hero-banner">
                <img
                    src="./public/65c.webp"
                    alt="World Trade Park"
                    className="banner-image"
                    onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&h=600&fit=crop";
                    }}
                />
                <div className="banner-overlay">
                    <h1 className="banner-title">The Club At The Trees</h1>
                </div>
            </div>

            {/* Main Content Container */}
            <div className="main-container">
                {/* About Section with Image */}
                <section className="about-section">
                    <div className="about-header">
                        <h3 className="main-heading">We Provide You The Best Experience.</h3>
                    </div>

                    <div className="about-content">
                        <div className="about-left">
                            <img
                                src="./public/DSC_0.webp"
                                alt="Interior Design"
                                className="about-image"
                                onError={(e) => {
                                    e.target.src = "https://images.unsplash.com/photo-1600210492486-724fe5c67fb6?w=600&h=500&fit=crop";
                                }}
                            />
                        </div>

                        <div className="about-right">
                            <p className="about-text">
                                You can align your image in the left, right, or center with a caption, link and alt text. New Journey: You can align your image in the left, right, or center and add the link and alt text. New Journey.
                            </p>

                            <div className="services-grid">
                                <div className="service-card">
                                    <h4 className="service-title">Architecture</h4>
                                    <div className="progress-bar">
                                        <div className="progress-fill" style={{ width: '44%' }}></div>
                                    </div>
                                    <span className="progress-label">44%</span>
                                </div>

                                <div className="service-card">
                                    <h4 className="service-title">Interior Design</h4>
                                    <div className="progress-bar">
                                        <div className="progress-fill" style={{ width: '70%' }}></div>
                                    </div>
                                    <span className="progress-label">70%</span>
                                </div>

                                <div className="service-card">
                                    <h4 className="service-title">3D Design</h4>
                                    <div className="progress-bar">
                                        <div className="progress-fill" style={{ width: '95%' }}></div>
                                    </div>
                                    <span className="progress-label">95%</span>
                                </div>
                            </div>

                            <div className="features-box">
                                <div className="feature">
                                    <span className="check-icon">✓</span>
                                    <span>Quality and integrate ideas deeply</span>
                                </div>
                                <div className="feature">
                                    <span className="check-icon">✓</span>
                                    <span>Flexible cost review and timelines</span>
                                </div>
                                <div className="feature">
                                    <span className="check-icon">✓</span>
                                    <span>Design development and strategy</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="image-showcase">
                        <img
                            src="./public/DSC_01.webp"
                            alt="Architecture"
                            className="showcase-image"
                            onError={(e) => {
                                e.target.src = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&h=400&fit=crop";
                            }}
                        />
                        <img
                            src="./public/DSC_04.webp"
                            alt="Interior"
                            className="showcase-image"
                            onError={(e) => {
                                e.target.src = "https://images.unsplash.com/photo-1600210492486-724fe5c67fb6?w=500&h=400&fit=crop";
                            }}
                        />
                    </div>
                </section>

                {/* Project Details */}
                <section className="project-details">
                    <div className="detail-card">
                        <h4 className="detail-label">PROJECT</h4>
                        <p className="detail-value">World Trade Park</p>
                    </div>
                    <div className="detail-card">
                        <h4 className="detail-label">CLIENT</h4>
                        <p className="detail-value">World Trade Park</p>
                    </div>
                    <div className="detail-card">
                        <h4 className="detail-label">YEAR</h4>
                        <p className="detail-value">2009 - 2012</p>
                    </div>
                </section>

                {/* Services Section */}
                <section className="services-section">
                    <h2 className="services-heading">Our Featured Service</h2>

                    <div className="services-cards-grid">
                        <div className="service-box-card">
                            <img
                                src="./public/DSC_0.webp"
                                alt="Architecture"
                                className="service-card-image"
                                onError={(e) => {
                                    e.target.src = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=300&h=250&fit=crop";
                                }}
                            />
                            <div className="service-card-content">
                                <h4 className="service-card-title">Architecture</h4>
                            </div>
                        </div>

                        <div className="service-box-card">
                            <img
                                src="./public/DSC_00.webp"
                                alt="Interior Design"
                                className="service-card-image"
                                onError={(e) => {
                                    e.target.src = "https://images.unsplash.com/photo-1600210492486-724fe5c67fb6?w=300&h=250&fit=crop";
                                }}
                            />
                            <div className="service-card-content">
                                <h4 className="service-card-title">Interior Design</h4>
                            </div>
                        </div>

                        <div className="service-box-card">
                            <img
                                src="./public/DSC_01.webp"
                                alt="Furniture"
                                className="service-card-image"
                                onError={(e) => {
                                    e.target.src = "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=250&fit=crop";
                                }}
                            />
                            <div className="service-card-content">
                                <h4 className="service-card-title">Furniture</h4>
                            </div>
                        </div>

                        <div className="service-box-card">
                            <img
                                src="./public/DSC_04.webp"
                                alt="Architecture"
                                className="service-card-image"
                                onError={(e) => {
                                    e.target.src = "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=300&h=250&fit=crop";
                                }}
                            />
                            <div className="service-card-content">
                                <h4 className="service-card-title">Architecture</h4>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Project Description */}
                <section className="description-section">
                    <div className="description-content">
                        <h3 className="description-title">Our Special Skills</h3>
                        <h2 className="description-heading">Distinctive Interior For Special Ideas</h2>
                        <p className="description-text">
                            The process of architectural design involves innovating and conceptualizing spaces, translating ideas into drawings and models, and collaborating with clients, engineers, and builders to bring these designs to life.
                        </p>

                        <div className="skills-list">
                            <div className="skill-item">
                                <span className="skill-name">Interior Design</span>
                                <div className="skill-bar">
                                    <div className="skill-fill" style={{ width: '84%' }}></div>
                                </div>
                                <span className="skill-percent">84%</span>
                            </div>

                            <div className="skill-item">
                                <span className="skill-name">Architecture</span>
                                <div className="skill-bar">
                                    <div className="skill-fill" style={{ width: '95%' }}></div>
                                </div>
                                <span className="skill-percent">95%</span>
                            </div>

                            <div className="skill-item">
                                <span className="skill-name">3D Design</span>
                                <div className="skill-bar">
                                    <div className="skill-fill" style={{ width: '78%' }}></div>
                                </div>
                                <span className="skill-percent">78%</span>
                            </div>
                        </div>
                    </div>

                    <div className="description-image">
                        <img
                            src="./public/DSC_8.webp"
                            alt="Interior Design"
                            className="large-image"
                            onError={(e) => {
                                e.target.src = "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&h=700&fit=crop";
                            }}
                        />
                    </div>
                </section>

                {/* Content Section */}
                <section className="content-section">
                    <h2 className="content-title">About World Trade Park</h2>
                    <div className="content-grid">
                        <p className="content-text">
                            Construction of the World Trade Park Jaipur started in 2009, cost $50,000,000 and was completed in two years. The building has two different blocks; one north and one south, separated by a city street. The two buildings are joined by a bridge, which has restaurants.
                        </p>
                        <p className="content-text">
                            Dr Anoop Bartaria is the chairman and managing director of World Trade Park and Sincere Group of companies. World Trade Park Jaipur was inaugurated by Shah Rukh Khan in 2012.
                        </p>
                        <p className="content-text">
                            World Trade Park Jaipur includes a display system where 24 projectors create a single image on its ceiling. WTP was awarded "Mall of the Year" and "Best Architecture" by BCI of India.
                        </p>
                        <p className="content-text">
                            As of 2023, Several more projects are under construction in the WTP, such as an underwater restaurant, an auditorium, a banquet hall, as well as a hotel with "world class luxury rooms".
                        </p>
                    </div>
                </section>

                {/* Gallery Section */}
                <section className="gallery-section">
                    <h2 className="gallery-title">Gallery</h2>
                    <div className="gallery-grid">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className="gallery-item"
                                onClick={() => openModal(image)}
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="gallery-image"
                                    onError={(e) => {
                                        e.target.src = image.placeholder;
                                    }}
                                />
                                <div className="gallery-overlay">
                                    <div className="zoom-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="11" cy="11" r="8"></circle>
                                            <path d="m21 21-4.35-4.35"></path>
                                            <line x1="11" y1="8" x2="11" y2="14"></line>
                                            <line x1="8" y1="11" x2="14" y2="11"></line>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Modal */}
            {isModalOpen && selectedImage && (
                <div className="modal show" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close-button" onClick={closeModal}>&times;</span>
                        <img
                            className="modal-image"
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            onError={(e) => {
                                e.target.src = selectedImage.placeholder;
                            }}
                        />
                        <div className="modal-caption">{selectedImage.alt}</div>
                    </div>
                </div>
            )}
        </div>
    );
}