import { useState, useEffect, useRef } from "react";
import "./Hospitals.css"

export default function Hospitals() {
    const [currentSlide, setCurrentSlide] = useState(0);
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
    

    const properties = [
        {
            id: 1,
            image: "Hospital-1.jpg",
            price: "$930,000",
            address: "789 Lombard Street",
            sqft: "3,221",
            beds: "3",
            baths: "2",
            zip: "CA 94133"
        },
        {
            id: 2,
            image: "/New-55.jpeg",
            price: "$850,000",
            address: "456 Market Street",
            sqft: "2,890",
            beds: "4",
            baths: "3",
            zip: "CA 94102"
        },
        {
            id: 3,
            image: "/Hospital_RHL.jpg",
            price: "$1,200,000",
            address: "123 Pacific Avenue",
            sqft: "4,100",
            beds: "5",
            baths: "4",
            zip: "CA 94115"
        },
        {
            id: 4,
            image: "Hospital_DSC.jpg",
            price: "$750,000",
            address: "321 Mission Street",
            sqft: "2,450",
            beds: "3",
            baths: "2",
            zip: "CA 94110"
        }
    ];

    const sliderProperties = [
        {
            id: 1,
            image: "RHL-Hospital-1.jpg",
            location: "RHL Hospital",
            sqft: "3.32k",
            beds: "5",
            baths: "3"
        },
        {
            id: 2,
            image: "UrbanTransformation-jaipur-11.jpg",
            location: "EHCC Hospital",
            sqft: "2.22k",
            beds: "3",
            baths: "3"
        },
        {
            id: 3,
            image: "Raghudeep-eye-Hospital.jpg",
            location: "Raghudeep eye hospital",
            sqft: "3.15k",
            beds: "5",
            baths: "3"
        },
        {
            id: 4,
            image: "Hospital-Main-image.jpg",
            location: "RHL Hospital",
            sqft: "2.85k",
            beds: "4",
            baths: "3"
        },
        {
            id: 5,
            image: "tagore-hopital.jpg",
            location: "Tagore Hospital",
            sqft: "3.50k",
            beds: "4",
            baths: "4"
        }
    ];

    // Auto slide every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 4000);
        return () => clearInterval(interval);
    }, [currentSlide]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % sliderProperties.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + sliderProperties.length) % sliderProperties.length);
    };

    const handleDotClick = (index) => {
        setCurrentSlide(index);
    };

    const getVisibleCards = () => {
        const cards = [];
        for (let i = 0; i < sliderProperties.length; i++) {
            const index = (currentSlide + i) % sliderProperties.length;
            cards.push(sliderProperties[index]);
        }
        return cards;
    };


    return (
        <>
            <div className="Hospitals">
                {/* Banner Section */}
                <div className='About_container_image'>
                    <img
                        src="/EHCC-Hospital.jpg"
                        alt="Modern Architecture Interior Design"
                        loading="lazy"
                    />
                    <div className="image_overlay">
                        <div className="overlay_content">
                            <h1> Medical Infrastructure</h1>
                            <div className="Sustainability-prag-section">
                                <p className='Sustainability-prag'>
                                    At Sincere Architects, we design hospitals that heal with care. Our spaces
                                    use natural light, efficient layouts, and calming aesthetics, combined with
                                    modern technology and sustainable solutions to create trusted, world
                                    class healthcare environments.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Property Match Section */}
                <div className="property-match-section">
                    <div className="container-fluid">
                        <div className="property-header">
                            <div className="header-contents">
                                <h2 className="main-title">
                                    We deliver healthcare spaces that balance technology <br />
                                    <span className="highlight-text"> safety, and serenity.</span>
                                </h2>
                                <p className="header-description">
                                    With decades of experience in designing super-specialty hospitals,
                                    diagnostic centres, and wellness facilities, Sincere Architects combines
                                    structural innovation, sustainable engineering, and smart planning to
                                    create future-ready medical campuses.
                                </p>
                            </div>
                        </div>

                        <div className="row project-row">
                            {/* ✅ FIXED: section3Ref aur data-section="section3" — Medical ke liye alag */}

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

                    </div>
                </div>

                {/* About Us Section */}
                <div className="property-match-section-About">
                    <div className="container-fluid">
                        <div className="about-content-wrapper">
                            <div className="about-text-section">
                                <div className="about-text-content">
                                    <h2 className="about-title">
                                        We create facilities that are not just buildings, but  <span className="highlight-text-about"> ecosystems of care and recovery:</span>
                                    </h2>
                                    <p className="about-description">
                                        • Optimised patient flow and staff circulation
                                    </p>
                                    <p className="about-description">
                                        • Optimised patient flow and staff circulation
                                    </p>
                                    <p className="about-description">
                                        • Technology-enabled treatment and monitoring spaces
                                    </p>
                                    <p className="about-description">
                                        • Natural-light-rich interiors that support healing
                                    </p>
                                    <p className="about-description">
                                        • Energy-efficient and environmentally responsible design
                                    </p>
                                </div>
                            </div>
                            <div className="about-image-section">
                                <div className="about-image-wrapper">
                                    <img
                                        src="Hospital-Main-image.jpg"
                                        alt="About Us - Real Estate Team"
                                        className="about-image"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Property Showcase Slider */}
                <div className="property-showcase-section">
                    <div className="showcase-container">
                        <div className="showcase-header">
                            <h2 className="showcase-title"> landmark medical infrastructure projects</h2>
                            <div className="showcase-nav">
                                <button className="nav-btn active">All</button>
                                <button className="nav-btn">Rent</button>
                                <button className="nav-btn">Sold</button>
                                <div className="search-wrapper">
                                    <input
                                        type="text"
                                        placeholder="Enter City or Zip Code"
                                        className="search-input"
                                    />
                                    <button className="search-btn">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <circle cx="11" cy="11" r="8" strokeWidth="2" />
                                            <path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="Hospitals-slider-wrapper">
                            {/* Previous Button */}
                            <button className="slider-nav-btn prev-btn" onClick={prevSlide}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>

                            {/* Next Button */}
                            <button className="slider-nav-btn next-btn" onClick={nextSlide}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>

                            <div className="properties-slider">
                                {getVisibleCards().map((property, index) => (
                                    <div
                                        key={`${property.id}-${index}`}
                                        className="slider-card"
                                    >
                                        <div className="slider-image-wrapper">
                                            <img
                                                src={property.image}
                                                alt={property.location}
                                                className="slider-images"
                                                onError={(e) => {
                                                    e.target.style.display = 'block';
                                                    e.target.src = 'https://via.placeholder.com/800x600/cccccc/666666?text=Property+Image';
                                                }}
                                            />
                                        </div>
                                        <div className="slider-details">
                                            <h3 className="slider-location">{property.location}</h3>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}