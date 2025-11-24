import React, { useState, useEffect, useRef } from 'react';
import './SectionProject.css';

export default function SectionProject() {
    const [modalImage, setModalImage] = useState(null);
    const [visibleSections, setVisibleSections] = useState({
        section1: false,
        section2: false,
        section3: false
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
                rootMargin: '0px'
            }
        );

        if (section1Ref.current) {
            observer.observe(section1Ref.current);
        }
        if (section2Ref.current) {
            observer.observe(section2Ref.current);
        }
        if (section3Ref.current) {
            observer.observe(section3Ref.current);
        }

        return () => {
            if (section1Ref.current) {
                observer.unobserve(section1Ref.current);
            }
            if (section2Ref.current) {
                observer.unobserve(section2Ref.current);
            }
            if (section3Ref.current) {
                observer.unobserve(section3Ref.current);
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
            <div className="Project_Section">
                {/* Section 1: Nation's Pride */}
                <div className="mb-4 section-header" ref={section1Ref} data-section="section1">
                    <div className="typing">
                        <div className={`Typing-Animation ${visibleSections.section1 ? 'animate' : ''}`}>
                            Nation's Pride
                        </div>
                    </div>
                    <div className="Typing-Animation-line"></div>

                    <div data-aos="fade-right" className="Urban-prag">
                        Designing landmarks that celebrate India's spirit.
                        From cultural icons to transformative public institutions, our work contributes to the
                        nation's identity with architecture that honors tradition while embraces progress.
                    </div>
                </div>

                <div className="container-fluid">
                    {/* Section 1: Projects */}
                    <div className="row project-row">
                        <div data-aos="fade-right" className="col-lg-6 col-md-12 order-lg-1 order-2">
                            <div className="project-card" onClick={() => handleImageClick('/Banner-10.JPG')}>
                                <div id='Section-image-container' className="image-container">
                                    <img src="/Banner-10.JPG" alt="Kota Project" loading="lazy" />
                                    <div className="overlay">
                                        <div className="overlay-content">
                                            <h3> Constitutional Park, Jaipur</h3>
                                            <p className="description">
                                                India's first Constitutional Park, located at Raj Bhavan,
                                                showcasing the spirit of the Indian Constitution through sculptures and
                                                interactive landscapes.
                                            </p>
                                            <button className="btn-view" onClick={(e) => e.stopPropagation()}>
                                                <a href="#">View Details</a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-left" className="col-lg-6 col-md-12 order-lg-2 order-1 mt-">
                            <div className="row g-2 h-100">
                                <div className="col-12">
                                    <div className="project-card" onClick={() => handleImageClick('/0001_ (244).JPG')}>
                                        <div id='Section-image-container' className="image-container">
                                            <img src="/0001_ (244).JPG" alt='Jaipur Project' loading="lazy" />
                                            <div className="overlay">
                                                <div className="overlay-content">
                                                    <h3>Mahatma Gandhi Statue </h3>
                                                    {/* <p className="category"> Gandhi's vision of justice </p> */}
                                                    <p className="description">
                                                        A symbol of peace and simplicity, reflecting Gandhi's vision of justice and equality.
                                                    </p>
                                                    <button className="btn-view" onClick={(e) => e.stopPropagation()}>
                                                        <a href="#">View Details</a>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-aos="zoom-out-left" className="col-12">
                                    <div className="project-card" onClick={() => handleImageClick('/untitled-3115.jpg')}>
                                        <div id='Section-image-container' className="image-container">
                                            <img src="/untitled-3115.jpg" alt="RAAS Chhatrasagar" loading="lazy" />
                                            <div className="overlay">
                                                <div className="overlay-content">
                                                    <h3>Arjuna Pratima, SMS Stadium Jaipur</h3>
                                                    {/* <p className="category">miniature replicas of the Seven Wonders of the World,</p> */}
                                                    <p className="description"> A symbol of strength and determination, embodying Arjuna's warrior spirit.</p>
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

                    {/* Section 2: Urban Development  */}
                    <div className="row project-row">
                        <div className="mb-4 section-header" ref={section2Ref} data-section="section2">
                            <div className="typing">
                                <div className={`Typing-Animation ${visibleSections.section2 ? 'animate' : ''}`}>
                                    Urban Development
                                </div>
                            </div>
                            <div className="Typing-Animation-line"></div>
                            <div data-aos="fade-right" className="Urban-prag">
                                Building cities with purpose, shaping lives with design.
                                We design urban spaces that are inclusive, efficient, and culturally rooted—fostering
                                community well-being while seamlessly integrating modern infrastructure.
                            </div>
                        </div>
                        <div data-aos="fade-right" className="col-lg-6 col-md-12">
                            <div className="project-card" onClick={() => handleImageClick('/Urban-Development-1.jpg')}>
                                <div id='Section-image-container' className="image-container">
                                    <img src="/Urban-Development-1.jpg" alt="Commercial Project" loading="lazy" />
                                    <div className="overlay">
                                        <div className="overlay-content">
                                            <h3> Patrika Gate, Jaipur</h3>
                                            {/* <p className="category"> cultural gateway</p> */}
                                            <p className="description">
                                                An iconic cultural gateway at Jawahar Circle, adorned with vibrant Rajasthani art and
                                                architecture, serving as a symbolic entrance to Pink City.
                                            </p>
                                            <button className="btn-view" onClick={(e) => e.stopPropagation()}>
                                                <a href="#">View Details</a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-left" className="col-lg-6 col-md-12">
                            <div data-aos="zoom-out-left" className="row h-100">
                                <div className="col-12">
                                    <div className="project-card" onClick={() => handleImageClick('/Urban-Development-2.JPG')}>
                                        <div id='Section-image-container' className="image-container">
                                            <img src="/Urban-Development-2.JPG" alt="WTP Project" loading="lazy" />
                                            <div className="overlay">
                                                <div className="overlay-content">
                                                    <h3>Kota City Transformation</h3>
                                                    {/* <p className="category"> urban revitalization project </p> */}
                                                    <p className="description">Kota's journey from tradition to innovation, embracing growth with balance </p>
                                                    <button className="btn-view" onClick={(e) => e.stopPropagation()}>
                                                        <a href="#">View Details</a>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-aos="zoom-out-left" className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="project-card" onClick={() => handleImageClick('/0001_ (672).jpg')}>
                                        <div id='Section-image-container' className="image-container">
                                            <img src="/0001_ (672).jpg" alt="Omex Chok" loading="lazy" />
                                            <div className="overlay">
                                                <div className="overlay-content">
                                                    <h3> Amritsar City Development </h3>
                                                    {/* <p className="category"> urban revitalization project</p> */}
                                                    <p className="description">A transformative urban revitalization project near the Golden Temple, recreating the
                                                        charm of old Amritsar through restored facades and pedestrian pathways</p>
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

                    {/* Section 3: Hotels & Resorts */}
                    <div data-aos="fade-up" className="row project-row">
                        <div className="mb-4 section-header" ref={section3Ref} data-section="section3">
                            <div className="typing">
                                <div className={`Typing-Animation ${visibleSections.section3 ? 'animate' : ''}`}>
                                    Hotels & Resorts
                                </div>
                            </div>
                            <div className="Typing-Animation-line"></div>
                            <div data-aos="fade-right" className="Urban-prag">
                                Crafting experiences through spaces of elegance and comfort.
                                From luxury resorts to urban retreats, our designs blend hospitality with heritage,
                                creating unforgettable destinations.
                            </div>
                        </div>
                        <div className="col-lg-12 mt-4 col-md-12">
                            <div className="row g-5 h-100">
                                <div className="col-12">
                                    <div className="project-card" onClick={() => handleImageClick('/ShivVilas039.jpg')}>
                                        <div id='Shiv_Vilas' className="">
                                            <img src="/ShivVilas039.jpg" alt="Riverfront Development" loading="lazy" />
                                            <div className="overlay">
                                                <div className="overlay-content">
                                                    <h3>Hotel Shiv Vilas</h3>
                                                    {/* <p className="category">A Palace of Timeless Luxury</p> */}
                                                    <p className="description">An architectural marvel set amidst the Aravallis, Shiv Vilas offers a regal experience with world-class hospitality</p>
                                                    <button className="btn-view" onClick={(e) => e.stopPropagation()}>
                                                        <a href="#">View Details</a>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-aos="fade-right" className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="project-card" onClick={() => handleImageClick('/JaipurCollege.jpg')}>
                                        <div id='Section-image-container' className="image-container">
                                            <img src="/JaipurCollege.jpg" alt="Gold Palace, Jaipur" loading="lazy" />
                                            <div className="overlay">
                                                <div className="overlay-content">
                                                    <h3>Nana Ki Haveli Resort</h3>
                                                    {/* <p className="category">Jaipur's First Luxury Resort</p> */}
                                                    <p className="description">Crafting immersive botanical experiences that showcase plant biodiversity and ecological education.</p>
                                                    <button className="btn-view" onClick={(e) => e.stopPropagation()}>
                                                        <a href="#">View Details</a>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-aos="fade-left" className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="project-card" onClick={() => handleImageClick('/IMG_7709.jpg')}>
                                        <div id='Section-image-container' className="image-container">
                                            <img src="/IMG_7709.jpg" alt="Eco-Resort Masterplan" loading="lazy" />
                                            <div className="overlay">
                                                <div className="overlay-content">
                                                    <h3>Shakun Hotel</h3>
                                                    {/* <p className="category">A Haven of Hospitality</p> */}
                                                    <p className="description">A contemporary five-star hotel offering world-class hospitality with a touch of tradition and wellness.</p>
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

                        <div data-aos="fade-up" className="col-lg-12 col-md-12">
                            <div className="project-card" onClick={() => handleImageClick('/Hotels-&-Resorts-1.JPG')}>
                                <div id='Section-image-container' className="image-container">
                                    <img src="/Hotels-&-Resorts-1.JPG" alt="Greenfield Township" loading="lazy" />
                                    <div className="overlay">
                                        <div className="overlay-content">
                                            <h3>Rajasthali Resort, Jaipur</h3>
                                            {/* <p className="category"> heritage-style resort </p> */}
                                            <p className="description">A luxurious heritage-style resort set amidst nature, celebrating Rajasthan's
                                                royal hospitality with architecture rooted in tradition.</p>
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