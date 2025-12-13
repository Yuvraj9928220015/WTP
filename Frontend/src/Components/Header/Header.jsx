import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Main from '../Main/main';
import "./Header.css";
// import Banner from '../Banner/Banner';

export default function Header() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: '/DSC_5087.webp',
            title: 'Chambal River Front'
        },
        {
            image: '/Sustainability-City-Park-Kota.webp',
            title: ' City Park, Kota ',
        },
        // {
        //     image: '/IMG-20250820-WA0002.jpg',
        //     title: 'Arches at Chambal River Front',
        // },
        {
            image: '/IMG-20250820-WA0004.webp',
            title: 'World Trade Park',
        },
        {
            image: '/WhatsAppImage-1.webp',
            subtitle: 'Heritage Architecture',
            title: 'Patrika Gate, Jaipur',
        },
        {
            image: '/torandwar.webp',
            title: 'Toran Dwar, Jaipur  ',
        },
        {
            image: '/7(b).jpg',
            title: 'Heritage Street, Amritsar  ',
        },
        {
            image: '/Facade.jpg',
            title: 'Shiv Vilas Hotel, Jaipur ',
        },
        {
            image: '/IMG-20250820-WA0003.jpg',
            title: 'Vigyan Lodha Residence, Jaipur',
        },
        // {
        //     image: '/Banner-10.JPG',
        //     title: 'Constitution Park, Jaipur ',
        // },
        {
            image: '/IMG-20250820-WA0001.jpg',
            title: 'Amar Jwan Jyoti Memorial, Jaipur'
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 10000);

        return () => clearInterval(interval);
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const activeSlideData = slides[currentSlide];

    return (
        <>
            <div data-aos="fade-up" className="Header-slider-container">
                <div className="Header-slider-wrapper">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`Header-slide ${index === currentSlide ? 'active' : ''}`}
                        >
                            <img
                                src={slide.image}
                                alt={`Slide ${index + 1}`}
                                className="Header-slide-image"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextElementSibling.style.display = 'flex';
                                }}
                            />

                            <div className="Header-slide-fallback">
                                Slide {index + 1}
                            </div>

                            <div className="Header-slide-overlay"></div>
                        </div>
                    ))}
                </div>

                <button
                    onClick={prevSlide}
                    className="nav-arrow nav-arrow-left"
                    aria-label="Previous slide"
                >
                    <ChevronLeft size={24} />
                </button>

                <button
                    onClick={nextSlide}
                    className="nav-arrow nav-arrow-right"
                    aria-label="Next slide"
                >
                    <ChevronRight size={24} />
                </button>

                <div className="dot-indicators">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`dot ${index === currentSlide ? 'dot-active' : ''}`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                <div className="Header-content-container">
                    <div className="Header-content-wrapper">
                        <div className="Header-content-grid">
                            <div className="Header-content-section">
                                <div className="Header-text-content">
                                    <h1 className="Header-about-title">
                                        {activeSlideData.title}
                                    </h1>
                               
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Header-slide-counter">
                    {currentSlide + 1} / {slides.length}
                </div>
            </div>
            {/* <Banner/> */}
            <Main />
        </>
    );
}