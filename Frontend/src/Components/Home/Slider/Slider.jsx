import React, { useState, useEffect, useRef } from 'react';
import '@splidejs/splide/dist/css/splide.min.css';
import Splide from '@splidejs/splide';

import './Slider.css';

const slides = [
    {
        src: '/V02.jpg',
        alt: 'IPD Tower, SMS Hospital Project',
        topText: 'IPD Tower, SMS Hospital',
        bottomText: 'India’s Tallest Hospital'
    },
    {
        src: '/Our-Project-2.jpg',
        alt: 'World Trade Park, Jaipur Project',
        topText: 'World Trade Park, Jaipur',
        bottomText: 'India’s most iconic retail landmark.'
    },
    {
        src: '/Our-Project-3.jpg',
        alt: 'Chambal River Front Project',
        topText: 'Chambal River Front',
        bottomText: 'India’s grandest riverfront development'
    },
    {
        src: '/Our-Project-4.jpg',
        alt: 'City Development, Kota Project',
        topText: 'City Development, Kota',
        bottomText: 'A Visionary Urban Transformation'
    },
    {
        src: '/Our-Project-5.JPG',
        alt: 'Lodha Residence, Jaipur Project',
        topText: 'Lodha Residence, Jaipur',
        bottomText: 'An Epitome of Luxury Living'
    },
    {
        src: '/Our-Project-6.JPG',
        alt: 'Amar Jawan Jyoti Memorial, Jaipur Project',
        topText: 'Amar Jawan Jyoti Memorial, Jaipur',
        bottomText: 'A Tribute Cast in Stone'
    }
];

export default function Slider() {
    const splideRef = useRef(null);

    useEffect(() => {
        let splide = null;
        if (splideRef.current) {
            splide = new Splide(splideRef.current, {
                perPage: 3,
                focus: 'center',
                type: 'loop',
                arrows: true,
                pagination: false,
                gap: '1rem',
                autoplay: true,
                interval: 3000,
                pauseOnHover: true,
                speed: 800,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                breakpoints: {
                    992: {
                        perPage: 2,
                        gap: '0.8rem',
                    },
                    768: {
                        perPage: 1,
                        gap: '0.5rem',
                    },
                },
            });

            splide.mount();
        }

        return () => {
            if (splide) {
                splide.destroy();
            }
        };
    }, []);


    const [visibleSections, setVisibleSections] = useState({
        section1: false,
    });

    const typingSectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const sectionId = entry.target.getAttribute('data-section');
                    if (sectionId) {
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
                    }
                });
            },
            {
                threshold: 0.3,
                rootMargin: '0px'
            }
        );

        if (typingSectionRef.current) {
            observer.observe(typingSectionRef.current);
        }

        return () => {
            if (typingSectionRef.current) {
                observer.unobserve(typingSectionRef.current);
            }
        };
    }, []);


    return (
        <>
            <div className="slider-container">
                <div
                    ref={typingSectionRef}
                    data-section="section1"
                    className="slider-container-title"
                >
                    <div className="typing">
                        <div className={`Typing-Animation ${visibleSections.section1 ? 'animate' : ''}`}>
                            Our Featured Projects
                        </div>
                    </div>
                    <div className="Typing-Animation-line"></div>
                </div>
                <section
                    
                    ref={splideRef}
                    className="splide modern-slider"
                    aria-label="Image gallery carousel"
                >
                    <div data-aos="fade-up" className="splide__track">
                        <ul className="splide__list">
                            {slides.map((slide, index) => (
                                <li key={index} className="splide__slide modern-slide">
                                    <div className="slide-content">
                                        <div className="image-wrapper">
                                            <img
                                                src={slide.src}
                                                alt={slide.alt}
                                                loading="lazy"
                                            />
                                            <div className="image-overlay"></div>
                                            <div className="text-content">
                                                <div className="top-text">{slide.topText}</div>
                                                <div className="bottom-text">{slide.bottomText}</div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </div>
        </>
    );
}