import React, { useState } from 'react';
import './Hotels.css';

export default function Hotels() {
    const [hoveredBox, setHoveredBox] = useState(null);

    const rooms = [
        {
            id: 1,
            image: 'Hotel-design.png',
            title: 'Shiv Vilas',
            description: 'A grand royal retreat where timeless elegance meets luxurious hospitality.',
        },
        {
            id: 2,
            image: '/Hotel-IMG_7712.jpg',
            title: 'Shakun Hotel',
            description: 'Experience modern comfort with warm hospitality in a peaceful and elegant setting.',
        },
        {
            id: 3,
            image: '/Hotel-shakun.PNG',
            title: 'Shakun Fort',
            description: 'A majestic heritage retreat blending royal charm with modern comfort and luxury.',
        }
    ];

    return (
        <>
            <div className="hotels-container">
                {/* Banner Section */}
                <div className='About_container_image'>
                    <img
                        src="/Hotel-Banner.jpg"
                        alt="Modern Architecture Interior Design"
                        loading="lazy"
                    />
                    <div className="image_overlay">
                        <div className="overlay_content">
                            <h1>Hospitality Infrastructure </h1>
                            <div className="Sustainability-prag-section">
                                <p className='Sustainability-prag'>
                                    We design hotels and leisure environments using eco-friendly materials,
                                    energy-efficient systems, and innovative solutions that elevate guest
                                    comfort while reducing environmental impact.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Rooms Section */}
                <div className="rooms-section">
                    {rooms.map((room) => (
                        <div
                            key={room.id}
                            className="room-box"
                            onMouseEnter={() => setHoveredBox(room.id)}
                            onMouseLeave={() => setHoveredBox(null)}
                        >
                            <img src={room.image} alt={room.title} className="room-image" />
                            {hoveredBox === room.id && (
                                <div className="room-info">
                                    <h3>{room.title}</h3>
                                    <p>{room.description}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* NEW EXECUTURES SECTION - Updated Layout */}
                <div className="executures-section">
                    <div className="executures-background"></div>
                    <div className="executures-header-content">
                        <h2>Iconic Hospitality Creations</h2>
                        <p>
                            Our hospitality spaces are engineered to effortlessly handle high guest
                            volumes while maintaining exceptional ambience. The integration of
                            spatial planning, design intelligence, and signature visual identity ensures
                            every corner supports both guest delight and smooth hotel operations.
                        </p>
                    </div>
                    <div className="executures-content-wrapper">
                        <div className="executures-left">
                            <div className="executures-images">
                                <div className="small-images-stack">
                                    <div className="small-image-container">
                                        <img
                                            src="/ShivVilas-01.png"
                                            alt="Hotel Interior"
                                        />
                                    </div>
                                </div>

                                <div className="large-image-container">
                                    <img
                                        src="/ShivVila-02.png"
                                        alt="Hotel Pool View"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="executures-right">
                            <h4>Our expertise includes</h4>
                            <div className="executures-right-line"></div>
                            <p className="small-text">
                                Resort master planning Banquet & event space architecture Heritage-inspired hospitality design Contemporary hotel structures
                                Landscaping & experiential zones
                            </p>
                            <button className="register-button">Register Now</button>
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="contact-section">
                    <div className="contact-background-image"></div>
                    <div className="contact-content-overlay"></div>
                    <div className="contact-content-wrapper">
                        <div className="contact-left">
                            <h2>Our expertise includes : </h2>
                            <p>
                                Delivering thoughtful hospitality designs with master planning, heritage elegance, modern structures, and immersive landscapes.
                            </p>
                            <ul>
                                <li>Resort master planning</li>
                                <li>Banquet & event space architecture</li>
                                <li>Heritage-inspired hospitality design</li>
                                <li>Contemporary hotel structures</li>
                                <li>Landscaping & experiential zones</li>
                            </ul>
                        </div>
                        <div className="contact-right"></div>
                    </div>
                </div>

                {/* New Section: Our Services */}
                <div className="services-section">
                    <div className="services-header">
                        <h2>Our Premium Hospitality Designs </h2>
                        <p>Creating modern, luxurious hospitality spaces that inspire comfort, beauty, and unforgettable moments.</p>
                    </div>
                    <div className="services-grid">
                        <div className="service-card">
                            <img src="/Hotel_thumb.jpg" alt="Room Service" />
                            <h3>Rajasthali Resort</h3>
                            <p>A luxury escape where royal comfort meets serene natural beauty.</p>
                        </div>
                        <div className="service-card">
                            <img src="/Hotel_IMG_7.jpg" alt="Spa & Wellness" />
                            <h3>Shakun Hotel</h3>
                            <p>Experience modern comfort with warm hospitality in a peaceful and elegant setting.</p>
                        </div>
                        <div className="service-card">
                            <img src="/Hotel-shakun.PNG" alt="Concierge" />
                            <h3>Shakun Fort</h3>
                            <p>A majestic heritage retreat blending royal charm with modern comfort and luxury.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}