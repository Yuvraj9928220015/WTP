// News.jsx
import React, { useState, useEffect, useRef } from 'react';
import './News.css';

export default function News() {
    const sections = [
        {
            id: 1,
            title: "Latest Updates",
            images: [
                `/News-A1.jpg`,
                `/News-A2.jpg`,
                `/News-A3.jpg`,
                `/News-A4.jpg`,
                `/News-A5.jpg`
            ]
        },
        {
            id: 2,
            title: "Featured Stories",
            images: [
                `/News-B1.jpg`,
                `/News-B2.jpg`,
                `/News-B3.jpg`,
                `/News-B4.jpg`,
                `/News-B5.jpg`
            ]
        },
        {
            id: 3,
            title: "Special Coverage",
            images: [
                `/News-C1.jpg`,
                `/News-C2.jpg`
            ]
        },
        {
            id: 4,
            title: "Event Highlights",
            images: [
                `/News-D1.jpg`,
                `/News-D2.jpg`
            ]
        },
        {
            id: 5,
            title: "Press Release",
            images: [
                `/News-D1.jpg`
            ]
        },
        {
            id: 6,
            title: "Announcements",
            images: [
                `/News-E.jpg`
            ]
        },
        {
            id: 7,
            title: "Gallery",
            images: [
                `/News-F.jpg`,
            ]
        },
        {
            id: 8,
            title: "Media Coverage",
            images: [
                `/News-G1.jpg`,
                `/News-G2.jpg`,
                `/News-G3.jpg`,
                `/News-G4.jpg`
            ]
        },
        {
            id: 9,
            title: "Spotlight",
            images: [
                `/News-H.jpg`
            ]
        },
        {
            id: 10,
            title: "Archive",
            images: [
                `/News-i.jpg`
            ]
        },
        {
            id: 11,
            title: "Photo Stories",
            images: [
                `/News-J1.jpg`,
                `/News-J2.jpg`,
                `/News-J3.jpg`,
                `/News-J4.jpg`
            ]
        }
    ];

    return (
        <>
            <div className="news-page">
                {/* Banner Section */}
                <div className="banner-section">
                    <img
                        src="/Illuminations.Banner.JPG"
                        alt="News Banner"
                        className="banner-image"
                    />
                    <div className="banner-overlay">
                        <div className="banner-content">
                            <h1 className="banner-title">News & Updates</h1>
                            <p className="banner-subtitle">Stay informed with our latest stories</p>
                        </div>
                    </div>
                </div>

                {/* Slider Grid Section */}
                <div className="slider-sections-container">
                    <div className="container-fluid">
                        <div className="slider-grid">
                            {sections.map((section) => (
                                <SliderBox key={section.id} section={section} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function SliderBox({ section }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        if (!isPaused && section.images.length > 1) {
            intervalRef.current = setInterval(() => {
                setCurrentIndex((prevIndex) =>
                    (prevIndex + 1) % section.images.length
                );
            }, 4000);
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isPaused, section.images.length]);

    const handleMouseEnter = () => {
        setIsPaused(true);
    };

    const handleMouseLeave = () => {
        setIsPaused(false);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % section.images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? section.images.length - 1 : prevIndex - 1
        );
    };

    return (
        <>
            <div
                className={`slider-box ${isLoaded ? 'loaded' : ''}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="slider-wrapper">
                    {/* Images */}
                    {section.images.map((image, index) => (
                        <div
                            key={index}
                            className={`slider-image-container ${currentIndex === index ? 'active' : ''
                                }`}
                        >
                            <img
                                src={image}
                                alt={`${section.title} - Slide ${index + 1}`}
                                className="slider-image"
                                onLoad={() => setIsLoaded(true)}
                                onError={(e) => {
                                    e.target.src = 'https://via.placeholder.com/800x600/e0e0e0/666666?text=Image+Not+Available';
                                }}
                            />
                            <div className="image-overlay"></div>
                        </div>
                    ))}

                    {/* Navigation Arrows */}
                    {section.images.length > 1 && (
                        <>
                            <button
                                className="nav-arrow nav-arrow-left"
                                onClick={prevSlide}
                                aria-label="Previous slide"
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M15 18l-6-6 6-6" />
                                </svg>
                            </button>
                            <button
                                className="nav-arrow nav-arrow-right"
                                onClick={nextSlide}
                                aria-label="Next slide"
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M9 18l6-6-6-6" />
                                </svg>
                            </button>
                        </>
                    )}

                    {/* Section Info Badge */}
                    <div className="section-badge">
                        <span className="badge-number">#{section.id}</span>
                        <span className="badge-title">{section.title}</span>
                    </div>

                    {/* Slider Indicators */}
                    {section.images.length > 1 && (
                        <div className="slider-indicators">
                            {section.images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`indicator ${currentIndex === index ? 'active' : ''}`}
                                    aria-label={`Go to slide ${index + 1}`}
                                >
                                    <span className="indicator-progress"></span>
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}