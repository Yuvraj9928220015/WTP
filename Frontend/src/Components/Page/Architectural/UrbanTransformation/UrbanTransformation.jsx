import React, { useState } from 'react';
import "./UrbanTransformation.css"
export default function UrbanTransformation() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const projects = [
        {
            id: 1,
            title: "Riverfront Kota",
            category: "Commercial Architecture",
            beforeImage: "UrbanTransformation-1A.jpg",
            afterImage: "UrbanTransformation-1B.jpg",
        },
        {
            id: 2,
            title: "City Park, Kota",
            category: "Interior Design",
            beforeImage: "UrbanTransformation-2A.jpg",
            afterImage: "UrbanTransformation-2B.jpg",
        },
        {
            id: 3,
            title: "Jaipur City",
            category: "Residential",
            beforeImage: "UrbanTransformation-3A.jpg",
            afterImage: "UrbanTransformation-3B.jpg",
        },
        {
            id: 4,
            title: "Kota City",
            category: "Urban Planning",
            beforeImage: "UrbanTransformation-4A.jpg",
            afterImage: "UrbanTransformation-4B.jpg",
        }
    ];

    const jaipurGalleryImages = [
        {
            url: "/UrbanTransformation-jaipur-9.jpg"
        },
        {
            url: "/UrbanTransformation-jaipur-7.jpg"
        },
        {
            url: "/UrbanTransformation-jaipur-10.jpg"
        },
        {
            url: "/UrbanTransformation-jaipur-11.jpg"
        },
        {
            url: "/UrbanTransformation-jaipur-1.jpg"
        }
    ];

    const kotaGalleryImages = [
        {
            url: "/UrbanTransformation-Kota-1.JPG"
        },
        {
            url: "/UrbanTransformation-Kota-2.JPG"
        },
        {
            url: "/UrbanTransformation-Kota-3.JPG"
        },
        {
            url: "/UrbanTransformation-Kota-4.JPG"
        },
        {
            url: "/UrbanTransformation-Kota-5.JPG"
        },
        {
            url: "/UrbanTransformation-Kota-6.JPG"
        },
        {
            url: "/UrbanTransformation-Kota-7.JPG"
        },
        {
            url: "/UrbanTransformation-Kota-8.JPG"
        },
        {
            url: "/UrbanTransformation-Kota-9.JPG"
        },
        {
            url: "/UrbanTransformation-Kota-10.JPG"
        },
        {
            url: "/UrbanTransformation-Kota-11.JPG"
        },
        {
            url: "/UrbanTransformation-Kota-12.JPG"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % projects.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const renderGalleryItem = (image) => (
        <>
            <div className="popular-Tours">
                <img src={image.url} alt={image.title} />
                <div className="popular-tour-overlay">
                    <h3 className="popular-tour-title">{image.title}</h3>
                    <p className="popular-tour-description">{image.desc}</p>
                </div>
            </div>
        </>
    );

    return (
        <>
            <div className="scotland-container">
                {/* Hero Section */}
                <div className='About_container_image'>
                    <img src="/UrbanTransformation-Banner.jpg" alt="Modern Architecture Interior Design" loading="lazy" />
                    <div className="image_overlay">
                        <div className="overlay_content">
                            <h1>Urban Transformation</h1>
                            <p>Experience the Evolution</p>
                        </div>
                    </div>
                </div>

                {/* Awesome Projects Section */}
                <section className="awesome-section">
                    <div className="awesome-left">
                        <h2 className="awesome-title">AWESOME<br />COUNTRY</h2>
                        <div className="awesome-stats">
                            <div className="stat-item">
                                <span className="stat-number">10+</span>
                                <span className="stat-label">Modern Urban Icons</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">10Mn+</span>
                                <span className="stat-label">Lives Impacted</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">1000+</span>
                                <span className="stat-label">Acres Reimagined</span>
                            </div>
                        </div>
                        <button className='awesome-section-button'>READ MORE</button>
                    </div>
                    <div className="awesome-right">
                        <div className="awesome-image">
                            <img src="/Jaipur-Transformation.jpg" alt="Amritsar City Illumination" />
                        </div>
                        <div className="awesome-image">
                            <img src="/Kota-Transformation1.jpg" alt="Chambal Illumination" />
                        </div>
                        <div className="awesome-image">
                            <img src="/Kota-Transformation2.jpg" alt="Jaipur City Illumination" />
                        </div>
                    </div>
                </section>

                {/* Discover Section */}
                <section className="discover-section">
                    <div className="discover-left">
                        <div className="discover-video">
                            <img src="/66X48-Night10.jpg" alt="Discover Project" />
                            <div className="play-button">
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                                    <circle cx="30" cy="30" r="30" fill="rgba(255,255,255,0.3)" />
                                    <path d="M25 20L40 30L25 40V20Z" fill="white" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="discover-right">
                        <h2 className="discover-title">DISCOVER<br />THE CHANGE</h2>
                        <p className="discover-text">India's cities are evolving</p>
                        <p className="discover-text">— and leading this transformation are</p>
                    </div>
                </section>

                {/* Before/After Slider Section */}
                <section id='UrbanTransformation-Slider-Section' className="slider-section">
                    <h2 className="slider-title">TRANSFORMATION PROJECTS</h2>
                    <div className="slider-containers">
                        <button className="slider-nav prev" onClick={prevSlide}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        <div className="slider-wrapper">
                            <div className="slider-content" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                                {projects.map((project) => (
                                    <div key={project.id} className="slider-item">
                                        <div className="comparison-container">
                                            <div className="comparison-half before-half">
                                                <img src={project.beforeImage} alt={`${project.title} - Before`} />
                                                <div className="comparison-label">BEFORE</div>
                                            </div>
                                            <div className="comparison-half after-half">
                                                <img src={project.afterImage} alt={`${project.title} - After`} />
                                                <div className="comparison-label">AFTER</div>
                                            </div>
                                        </div>
                                        <div className="slider-info">
                                            <h3>{project.title}</h3>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button className="slider-nav next" onClick={nextSlide}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </section>

                {/* Jaipur Gallery Grid Section */}
                <div className="gallery-section">
                    <h2 className="gallery-section-title">JAIPUR TRANSFORMATION</h2>
                    <div id='jaipur-Tours-container' className="container-fluid">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                {renderGalleryItem(jaipurGalleryImages[0])}
                            </div>

                            <div className="col-lg-8 col-md-6 col-sm-12">
                                {renderGalleryItem(jaipurGalleryImages[2])}
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                {renderGalleryItem(jaipurGalleryImages[1])}
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12">
                                {renderGalleryItem(jaipurGalleryImages[4])}
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                {renderGalleryItem(jaipurGalleryImages[3])}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Kota Gallery Grid Section - All 12 images */}
                <div className="gallery-section kota-gallery">
                    <h2 className="gallery-section-title">KOTA TRANSFORMATION</h2>
                    <div id='kota-Tours-container' className="container-fluid">
                        <div className="row">
                            {kotaGalleryImages.map((image, index) => (
                                <div key={index} className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    {renderGalleryItem(image)}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}