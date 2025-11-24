import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Building2, Warehouse, Home, Building, TreePine, ArrowRight, Award, Users, Target, Shield } from 'lucide-react';
import "./ModernArchitecture.css";

import collectionsData from './collections.json';

export default function ModernArchitecture() {
    const [hoveredCard, setHoveredCard] = useState(null);
    const [activeCollection, setActiveCollection] = useState(0);

    console.log(activeCollection)


    const propertyTypes = [
        {
            id: 1,
            title: "Commercial",
            count: "08 Projects",
            icon: Building2,
            colorClass: "blue"
        },
        {
            id: 2,
            title: "Hotels & Resorts",
            count: "07 Projects",
            icon: Warehouse,
            colorClass: "green"
        },
        {
            id: 3,
            title: "Hospitals",
            count: "08 Projects",
            icon: Home,
            colorClass: "purple"
        },
        {
            id: 4,
            title: "Residences",
            count: "14 Projects",
            icon: Building,
            colorClass: "orange"
        },
        {
            id: 5,
            title: "Institutes ",
            count: "03 Projects",
            icon: TreePine,
            colorClass: "teal"
        }
    ];

    const collections = collectionsData;

    const features = [
        {
            id: 1,
            title: "Smart & Sustainable",
            description: "Our designs integrate eco-conscious materials, smart systems, and energy-efficient techniques to shape the future of living.",
            icon: Award
        },
        {
            id: 2,
            title: "Minimal Yet Meaningful",
            description: "Clean lines, open layouts, and purposeful aesthetics ensure every inch of space speaks of sophistication and clarity.",
            icon: Target
        },
        {
            id: 3,
            title: "Tech-Integrated Living",
            description: "From intelligent lighting to automated comfort controls, our spaces are engineered to align with your digital lifestyle.",
            icon: Users
        },
        {
            id: 4,
            title: "Human-Centric Design",
            description: "Every project focuses on light, flow, and wellness — creating environments that enhance comfort, productivity, and connection",
            icon: Shield
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveCollection(prev => (prev + 1) % collections.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [collections.length]);

    return (
        <>
            <div className="modern-architecture-container">
                <div className="hero-section">
                    <div className="hero-image-container">
                        <img src="/Slider-2.jpg" alt="Modern Architecture Interior Design" className="hero-image" />
                        <div className="hero-overlay">
                            <div className="hero-content">
                                <h1 className="hero-title">Modern Architecture</h1>
                                <p className="hero-subtitle">Innovative Spaces. Timeless Design. </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="property-types-section">
                    <div id='modern-container-fluid' className="container-fluid">
                        <div className="section-header">
                            <div className="section-badge"><span> Our Built Work</span></div>
                            <h2 className="section-title">Explore Our Design<span className="section-title-accent"> Philosophy</span></h2>
                            <p className="Modern-section-description">Architectural concepts that blend innovation, functionality, and elegance. Designed to suit modern lifestyles and evolving needs.</p>
                        </div>

                        <div className="property-grid">
                            {propertyTypes.map((property, index) => {
                                const IconComponent = property.icon;
                                return (
                                    <div key={property.id} className={`property-card ${property.colorClass} ${hoveredCard === property.id ? 'hovered' : ''}`} onMouseEnter={() => setHoveredCard(property.id)} onMouseLeave={() => setHoveredCard(null)} style={{ animationDelay: `${index * 0.1}s` }}>
                                        <div className="property-card-inner">
                                            <div className="property-card-bg"></div>
                                            <div className="icon-container">
                                                <div className="icon-wrapper"><IconComponent size={32} className="property-icon" /></div>
                                            </div>
                                            <div className="property-content">
                                                <h3 className="property-title">{property.title}</h3>
                                                <p className=''>{property.count}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* =============================================== */}
                        {/* === NEWLY REDESIGNED COLLECTIONS SECTION START === */}
                        {/* =============================================== */}
                        <div className="collections-section">
                            <div className="collections-header">
                                <div className="section-badge"><span>Featured Collections</span></div>
                                <h2 className="section-title">Discover Our <span className="section-title-accent">Collections</span></h2>
                            </div>
                            <div className="image-collage-grid">
                                {collections.slice(0, 5).map((collection, index) => (
                                    <Link
                                        to={`/collections/${collection.id}`}
                                        key={collection.id}
                                        className={`collage-item item-${index + 1}`}
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <img src={collection.cardImage} alt={collection.title} className="collage-image" />
                                        <div className="collage-overlay">
                                            <div className="collage-content">
                                                <h3>{collection.title}</h3>
                                                <div className="read-more">
                                                    <span>READ MORE</span>
                                                    <ArrowRight size={14} />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        {/* ============================================= */}
                        {/* === NEWLY REDESIGNED COLLECTIONS SECTION END === */}
                        {/* ============================================= */}


                        <div className="why-us-section">
                            <div className="collections-header">
                                <div className="section-badge"><span>What Sets Us Apart</span></div>
                                <h2 className="section-title">We don’t just meet standards — we set them</h2>
                            </div>
                            <div className="features-grid">
                                {features.map((feature, index) => {
                                    const IconComponent = feature.icon;
                                    return (
                                        <div key={feature.id} className="feature-item" style={{ animationDelay: `${index * 0.1}s` }}>
                                            <div className="feature-icon"><IconComponent size={28} /></div>
                                            <div className="feature-content">
                                                <h4>{feature.title}</h4>
                                                <p>{feature.description}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}