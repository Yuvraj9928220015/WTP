import React, { useState, useEffect, useRef } from 'react';
import './UrbanDevelopment.css';

export default function UrbanDevelopment() {
    const [modalImage, setModalImage] = useState(null);
    const [visibleSections, setVisibleSections] = useState({
        section1: false,
        section2: false,
    });

    const section1Ref = useRef(null);
    const section2Ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const sectionId = entry.target.getAttribute('data-section');

                    if (entry.isIntersecting) {
                        setVisibleSections(prev => ({
                            ...prev,
                            [sectionId]: true
                        }));
                    } else {
                        setVisibleSections(prev => ({
                            ...prev,
                            [sectionId]: false
                        }));
                    }
                });
            },
            {
                threshold: 0.3,
                rootMargin: '1px'
            }
        );

        if (section1Ref.current) {
            observer.observe(section1Ref.current);
        }
        if (section2Ref.current) {
            observer.observe(section2Ref.current);
        }

        return () => {
            if (section1Ref.current) {
                observer.unobserve(section1Ref.current);
            }
            if (section2Ref.current) {
                observer.unobserve(section2Ref.current);
            }
        };
    }, []);

    const handleImageClick = (imgSrc) => {
        setModalImage(imgSrc);
    };

    const handleCloseModal = () => {
        setModalImage(null);
    };

    const handleModalClick = (e) => {
        e.stopPropagation();
    };

    return (
        <>
            <div className="UrbanDevelopment-container">
                {/* First Section */}
                <div className="kota-card" ref={section1Ref} data-section="section1">
                    <div className="typing">
                        <div className={`Typing-Animation ${visibleSections.section1 ? 'animate' : ''}`}>
                            Institutions & Commercial Projects
                        </div>
                    </div>
                    <div className="Typing-Animation-line"></div>
                    <div className="Urban-title-line"></div>
                    <p data-aos="fade-right" className="city-description">
                        Shaping environments where ideas grow and businesses thrive. <br />  Purpose-driven designs that empower learning,
                        innovation, and enterprise through thoughtful
                        architecture.
                    </p>
                </div>
                <div data-aos="fade-up" className="urban-grid-container mt-4">
                    <div className="urban-grid-section">
                        <div data-aos="fade-right" className="kota-section">
                            <div className="picture-card hover-effect" onClick={() => handleImageClick('/DSC_7308.jpg')}>
                                <img src="/DSC_7308.jpg" alt="Kota Urban Development" className="urban-image" />
                                <div className="hover-overlay">
                                    <div className="hover-text">
                                        <h4>World Trade Park </h4>
                                        <p>
                                            A premium hospitality and commercial complex, seamlessly blending modern
                                            amenities with elegant architecture in the heart of Jaipur.
                                        </p>
                                        <button className="btn-view" onClick={(e) => e.stopPropagation()}>
                                            <a href="#">View Details</a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-left" className="picture-card large hover-effect" onClick={() => handleImageClick('/VRBcommercial.jpeg')}>
                            <img src="/VRBcommercial.jpeg" alt="Urban Development Project" className="urban-image" />
                            <div className="hover-overlay">
                                <div className="hover-text">
                                    <h4>VRB Group – Commercial Building</h4>
                                    <p>A state-of-the-art commercial building offering world-class infrastructure, functionality, and style for thriving enterprises</p>
                                    <button className="btn-view" onClick={(e) => e.stopPropagation()}>
                                        <a href="#">View Details</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="zoom-in-up" id="Omaxe-picture-card" className="picture-card large hover-effect" onClick={() => handleImageClick('/Commercial-Projects-1.jpeg')}>
                        <img src="/Commercial-Projects-1.jpeg" alt="Urban Development Vision" className="urban-image" />

                        <div className="hover-overlay">
                            <div className="hover-text">
                                <h4>Omaxe Chowk, Chandni Chowk, Delhi</h4>
                                <p>A massive commercial redevelopment in Delhi's busiest market, integrating
                                    modern retail infrastructure with Mughal-inspired architecture.</p>
                                <button className="btn-view" onClick={(e) => e.stopPropagation()}>
                                    <a href="#">View Details</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Second Section "Temples & Shrines " */}
                <div data-aos="fade-up" className="row project-row">
                    <div className="mb-4 section-header" ref={section2Ref} data-section="section2">
                        <div className="typing">
                            <div className={`Typing-Animation ${visibleSections.section2 ? 'animate' : ''}`}>
                                Temples & Shrines
                            </div>
                        </div>
                        <div className="Typing-Animation-line"></div>
                        <div className="Urban-title-line"></div>
                        <div data-aos="fade-right" className="Urban-prag">
                            Where architecture becomes devotion.
                            Designing sacred spaces that resonate with spiritual energy, cultural heritage, and
                            timeless craftsmanship.
                        </div>
                    </div>
                    <div data-aos="zoom-in" className="col-lg-5 col-md-12 mt-5">
                        <div className="project-card" onClick={() => handleImageClick('/Khole-Ke-Hanuman-Ji.webp')}>
                            <div id='Section-image-container' className="image-container">
                                <img src="/Khole-Ke-Hanuman-Ji.webp" alt="Commercial Project" loading="lazy" />
                                <div className="overlay">
                                    <div className="overlay-content">
                                        <h3>Khole Ke Hanuman Ji Temple, Jaipur</h3>
                                        {/* <p className="category">hilltop temple complex,</p> */}
                                        <p className="description">A sacred <b>hilltop temple complex,</b> expanded and beautified to enhance spiritual
                                            experience while preserving its ancient heritage.
                                        </p>
                                        <button className="btn-view" onClick={(e) => e.stopPropagation()}>
                                            <a href="#">View Details</a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-12 mt-5">
                        <div className="row h-100">
                            <div data-aos="zoom-in-left" className="col-12">
                                <div id='Section-image-container' className="project-card" onClick={() => handleImageClick('/Urban-Development-2.JPG')}>
                                    <div className="image-container">
                                        <img src="/Urban-Development-2.JPG" alt="WTP Project" loading="lazy" />
                                        <div className="overlay">
                                            <div className="overlay-content">
                                                <h3>Moksha Dham</h3>
                                                {/* <p className="category">A Sacred Space of Eternal Peace</p> */}
                                                <p className="description">A spiritual and serene place dedicated to remembrance, reflection, and the journey toward liberation.</p>
                                                <button className="btn-view" onClick={(e) => e.stopPropagation()}>
                                                    <a href="#">View Details</a>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="zoom-out" className="col-lg-6 col-md-6 col-sm-12">
                                <div className="project-card" onClick={() => handleImageClick('/Untitled-3.jpg')}>
                                    <div id='Section-image-container' className="image-container">
                                        <img src="/Untitled-3.jpg" alt="Omex Chok" loading="lazy" />
                                        <div className="overlay">
                                            <div className="overlay-content">
                                                <h3>Krishna Statue, Nathdwara </h3>
                                                {/* <p className="category"> heritage-themed garden</p> */}
                                                <p className="description">A serene heritage-themed garden inspired by peacock motifs, offering a vibrant blend of
                                                    traditional Rajasthani landscape and design elements. </p>
                                                <button className="btn-view" onClick={(e) => e.stopPropagation()}>
                                                    <a href="#">View Details</a>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="zoom-out-down" className="col-lg-6 col-md-6 col-sm-12">
                                <div className="project-card" onClick={() => handleImageClick('/1-2.jpg')}>
                                    <div id='Section-image-container' className="image-container">
                                        <img src="/1-2.jpg" alt="Rajasthali Resort" loading="lazy" />
                                        <div className="overlay">
                                            <div className="overlay-content">
                                                <h3> Tulasi Van</h3>
                                                {/* <p className="category"> A Green Oasis in Kota</p> */}
                                                <p className="description">Along with its lush greenery, it showcases magnificent statues of Lord Vishnu's ten incarnations, blending spirituality with nature.</p>
                                                <button className="btn-view" onClick={(e) => e.stopPropagation()}>
                                                    <a href="#">View Details</a>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {modalImage && (
                <div className="modal-backdrop" onClick={handleCloseModal}>
                    <button className="modal-close-button" onClick={handleCloseModal} aria-label="Close modal">
                        ×
                    </button>
                    <img
                        src={modalImage}
                        alt="Enlarged Project View"
                        className="modal-image"
                        onClick={handleModalClick}
                        loading="lazy"
                    />
                </div>
            )}
        </>
    );
}