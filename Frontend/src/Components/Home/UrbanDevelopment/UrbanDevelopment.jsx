import React, { useState, useEffect, useRef } from 'react';
import './UrbanDevelopment.css';

export default function UrbanDevelopment() {
    const [modalImage, setModalImage] = useState(null);
    const [visibleSections, setVisibleSections] = useState({
        section1: false,
        section2: false,
        section3: false,
    });

    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const sectionId = entry.target.getAttribute('data-section');
                    if (entry.isIntersecting) {
                        setVisibleSections(prev => ({ ...prev, [sectionId]: true }));
                    } else {
                        setVisibleSections(prev => ({ ...prev, [sectionId]: false }));
                    }
                });
            },
            {
                threshold: 0.3,
                rootMargin: '1px'
            }
        );

        if (section1Ref.current) observer.observe(section1Ref.current);
        if (section2Ref.current) observer.observe(section2Ref.current);
        if (section3Ref.current) observer.observe(section3Ref.current);

        return () => {
            if (section1Ref.current) observer.unobserve(section1Ref.current);
            if (section2Ref.current) observer.unobserve(section2Ref.current);
            if (section3Ref.current) observer.unobserve(section3Ref.current);
        };
    }, []);

    const handleImageClick = (imgSrc) => setModalImage(imgSrc);
    const handleCloseModal = () => setModalImage(null);
    const handleModalClick = (e) => e.stopPropagation();

    return (
        <>
            <div className="UrbanDevelopment-container">

                {/* ======================== First Section: Commercial Projects ======================== */}
                <div className="kota-card" ref={section1Ref} data-section="section1">
                    <div className="typing">
                        <div className={`Typing-Animation ${visibleSections.section1 ? 'animate' : ''}`}>
                            Commercial Projects & Institutions
                        </div>
                    </div>
                    <div className="Typing-Animation-line"></div>
                    <div className="SectionProject-category">Designing landmarks that celebrate India's spirit.</div>
                    <div className="Urban-title-line"></div>
                    <p data-aos="fade-right" className="city-description">
                        Shaping environments where ideas grow and businesses thrive. <br /> Purpose-driven designs that empower learning,
                        innovation, and enterprise through thoughtful architecture.
                    </p>
                </div>

                <div data-aos="fade-up" className="urban-grid-container mt-4">
                    <div className="urban-grid-section">
                        <div data-aos="fade-right" className="kota-section">
                            <div className="picture-card hover-effect" onClick={() => handleImageClick('/New-13.png')}>
                                <img src="/New-13.png" alt="Kota Urban Development" className="urban-image" />
                                <div className="hover-overlay">
                                    <div className="hover-text">
                                        <h4>World Trade Park</h4>
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

                {/* ======================== Second Section: Temples & Shrines ======================== */}
                <div data-aos="fade-up" className="row project-row">
                    {/* ✅ FIXED: section2Ref sirf yahan hai — Temples ke liye */}
                    <div className="mb-4 section-header" ref={section2Ref} data-section="section2">
                        <div className="typing">
                            <div className={`Typing-Animation ${visibleSections.section2 ? 'animate' : ''}`}>
                                Temples & Shrines
                            </div>
                        </div>
                        <div className="Typing-Animation-line"></div>
                        <div className="Urban-title-line"></div>
                        <div className="SectionProject-category">Designing landmarks that celebrate India's spirit.</div>
                        <div data-aos="fade-right" className="Urban-prag">
                            Where architecture becomes devotion.
                            Designing sacred spaces that resonate with spiritual energy, cultural heritage, and
                            timeless craftsmanship.
                        </div>
                    </div>

                    <div data-aos="zoom-in" className="col-lg-4 col-md-12 mt-5">
                        <div className="project-card" onClick={() => handleImageClick('/Khole-ke-hanuman-Ji1.jpeg')}>
                            <div id='Section-image-container' className="image-container">
                                <img src="/Khole-ke-hanuman-Ji1.jpeg" alt="Commercial Project" loading="lazy" />
                                <div className="overlay">
                                    <div className="overlay-content">
                                        <h3>Khole Ke Hanuman Ji Temple, Jaipur</h3>
                                        <p className="description">
                                            A sacred <b>hilltop temple complex,</b> expanded and beautified to enhance spiritual
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

                    <div className="col-lg-8 col-md-12 mt-5">
                        <div className="row h-100">
                            <div data-aos="zoom-out" className="col-lg-6 col-md-6 col-sm-12">
                                <div className="project-card" onClick={() => handleImageClick('/New-14.png')}>
                                    <div id='Section-image-container' className="image-container">
                                        <img src="/New-14.png" alt="Omex Chok" loading="lazy" />
                                        <div className="overlay">
                                            <div className="overlay-content">
                                                <h3>Krishna Statue, Nathdwara</h3>
                                                <p className="description">
                                                    A serene heritage-themed garden inspired by peacock motifs, offering a vibrant blend of
                                                    traditional Rajasthani landscape and design elements.
                                                </p>
                                                <button className="btn-view" onClick={(e) => e.stopPropagation()}>
                                                    <a href="#">View Details</a>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div data-aos="zoom-out-down" className="col-lg-6 col-md-6 col-sm-12">
                                <div className="project-card" onClick={() => handleImageClick('/New-15.png')}>
                                    <div id='Section-image-container' className="image-container">
                                        <img src="/New-15.png" alt="Rajasthali Resort" loading="lazy" />
                                        <div className="overlay">
                                            <div className="overlay-content">
                                                <h3>Tulasi Van</h3>
                                                <p className="description">
                                                    Along with its lush greenery, it showcases magnificent statues of Lord Vishnu's ten incarnations, blending spirituality with nature.
                                                </p>
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

                    {/* ======================== Third Section: Medical Infrastructure ======================== */}
                    <div className="row project-row">
                        {/* ✅ FIXED: section3Ref aur data-section="section3" — Medical ke liye alag */}
                        <div className="mb-4 section-header" ref={section3Ref} data-section="section3">
                            <div className="typing">
                                <div className={`Typing-Animation ${visibleSections.section3 ? 'animate' : ''}`}>
                                    Medical Infrastructure
                                </div>
                            </div>
                            <div className="Typing-Animation-line"></div>
                            <div className="SectionProject-category">Designing landmarks that celebrate India's spirit.</div>
                            <div data-aos="fade-right" className="Urban-prag">
                                At Sincere Architects, we design hospitals that heal with care. Our spaces use natural light, efficient layouts, and calming aesthetics,
                                combined with modern technology and sustainable solutions to create trusted, world class healthcare environments.
                            </div>
                        </div>

                        <div data-aos="fade-right" className="col-lg-6 col-md-12">
                            <div className="project-card" onClick={() => handleImageClick('/IPD-image.jpeg')}>
                                <div id='Section-image-container' className="image-container">
                                    <img src="/IPD-image.jpeg" alt="Commercial Project" loading="lazy" />
                                    <div className="overlay">
                                        <div className="overlay-content">
                                            <h3>IPD Tower</h3>
                                            <p className="description">
                                                A transformative urban revitalization project near the Golden Temple, recreating the charm of old Amritsar through restored facades and pedestrian pathways
                                            </p>
                                            <button className="btn-view" onClick={(e) => e.stopPropagation()}>
                                                <a href="/medical-infrastructure">View Details</a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-left" className="col-lg-6 col-md-12">
                            <div data-aos="zoom-out-left" className="row h-100">
                                <div className="col-12">
                                    <div className="project-card" onClick={() => handleImageClick('/05_ EHCC.jpeg')}>
                                        <div id='Section-image-container' className="image-container">
                                            <img src="/05_ EHCC.jpeg" alt="WTP Project" loading="lazy" />
                                            <div className="overlay">
                                                <div className="overlay-content">
                                                    <h3>EHCC Hospital</h3>
                                                    <p className="description">Kota's journey from tradition to innovation, embracing growth with balance</p>
                                                    <button className="btn-view" onClick={(e) => e.stopPropagation()}>
                                                        <a href="/medical-infrastructure">View Details</a>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-aos="zoom-out-left" className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="project-card" onClick={() => handleImageClick('/RHL-2.jpeg')}>
                                        <div id='Section-image-container' className="image-container">
                                            <img src="/RHL-2.jpeg" alt="Omex Chok" loading="lazy" />
                                            <div className="overlay">
                                                <div className="overlay-content">
                                                    <h3>RHL Hospital</h3>
                                                    <p className="description">
                                                        A serene heritage-themed garden inspired by peacock motifs, offering a vibrant blend of traditional Rajasthani landscape and design elements.
                                                    </p>
                                                    <button className="btn-view" onClick={(e) => e.stopPropagation()}>
                                                        <a href="/medical-infrastructure">View Details</a>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ======================== End of Medical Infrastructure ======================== */}

                </div>
            </div>

            {/* ======================== Modal ======================== */}
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