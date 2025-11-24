import React from 'react';
import { Circle } from 'lucide-react';

export default function InteriorDesigning() {

    return (
        <>
            <div>
                <div style={styles.aboutContainer}>
                    <img
                        src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
                        alt="Modern Architecture Interior Design"
                        style={styles.bannerImage}
                    />
                    <div style={styles.imageOverlay}>
                        <div style={styles.overlayContent}>
                            <h1 style={styles.overlayTitle}>Illuminations</h1>
                            <p style={styles.overlaySubtitle}>Immersive lighting experiences</p>
                        </div>
                    </div>
                </div>

                <div style={styles.pageContainer}>
                    <section style={styles.contentSectionTop}>
                        {/* Left Column */}
                        <div>
                            <div style={styles.textBlock}>
                                <p style={styles.subtitleText}>CHOOSE ONE OF OUR MODERN DESIGNS</p>
                                <h2 style={styles.mainTitleText}>Elevate Your Space with Timeless Aesthetics</h2>
                                <div style={styles.buttonGroup}>
                                    <button style={styles.btnSecondary}>Explore</button>
                                    <button style={styles.btnSecondary}>Learn More</button>
                                </div>
                            </div>
                            <div style={styles.imageShowcase}>
                                <div style={styles.smallImageGrid}>
                                    <div style={{ ...styles.imageCard, ...styles.imageCardSmall }}>
                                        <img
                                            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                            alt="Modern Interior Design"
                                            style={styles.cardImage}
                                        />
                                    </div>
                                    <div style={{ ...styles.imageCard, ...styles.imageCardSmall }}>
                                        <img
                                            src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                            alt="Elegant Living Room"
                                            style={styles.cardImage}
                                        />
                                    </div>
                                    <div style={{ ...styles.imageCard, ...styles.imageCardSmall }}>
                                        <img
                                            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                            alt="Contemporary Bedroom"
                                            style={styles.cardImage}
                                        />
                                    </div>
                                </div>
                                <div style={{ ...styles.imageCard, ...styles.imageCardLarge }}>
                                    <img
                                        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
                                        alt="Modern Sofa"
                                        style={styles.cardImage}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div>
                            <div style={styles.textBlock}>
                                <p style={styles.subtitleText}>TAILORED BY EXPERTS</p>
                                <h2 style={styles.mainTitleText}>Curated Collections Just For You</h2>
                            </div>
                            <div style={styles.darkPanel}>
                                <h3 style={styles.panelTitle}>Categories</h3>
                                <div style={styles.productGrid}>
                                    <div style={styles.productItem}>
                                        <img
                                            src="https://images.unsplash.com/photo-1566908829077-2ba3200be9c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                                            alt="Furniture Category"
                                            style={styles.productItemImage}
                                        />
                                    </div>
                                    <div style={styles.productItem}>
                                        <img
                                            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                                            alt="Lighting Category"
                                            style={styles.productItemImage}
                                        />
                                    </div>
                                    <div style={styles.productItem}>
                                        <img
                                            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                                            alt="Decor Category"
                                            style={styles.productItemImage}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button style={styles.btnPrimary}>View All Products</button>
                        </div>
                    </section>

                    {/* ====== MIDDLE SECTION ====== */}
                    <section style={styles.contentSectionMiddle}>
                        <div style={{ ...styles.imageCard, ...styles.imageCardMedium }}>
                            <img
                                src="https://images.unsplash.com/photo-1615873968403-89e068629265?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Cozy Bedroom"
                                style={styles.cardImage}
                            />
                        </div>
                        <div style={styles.middleText}>
                            <p style={styles.subtitleText}>HARMONIOUS DESIGN</p>
                            <h2 style={styles.mainTitleText}>Functional and Beautiful Spaces</h2>
                            <p style={styles.descriptionText}>
                                Our philosophy is to create spaces that are not only aesthetically pleasing but also perfectly functional for your lifestyle.
                            </p>
                        </div>
                    </section>

                    {/* ====== BOTTOM SECTION ====== */}
                    <section style={styles.contentSectionBottom}>
                        {/* Left Column */}
                        <div style={styles.bottomLeftColumn}>
                            <div style={styles.textContent}>
                                <h2 style={styles.brandTitle}>VARILYFIERE</h2>
                                <p style={{ ...styles.descriptionText, color: '#757575' }}>
                                    Discover furniture and decor that bring personality and comfort to your home. Quality craftsmanship meets modern design.
                                </p>
                                <div style={styles.iconGroup}>
                                    <Circle size={12} />
                                    <Circle size={12} />
                                    <Circle size={12} />
                                </div>
                                <button style={styles.btnPrimary}>About Us</button>
                            </div>
                            <div style={{ ...styles.imageCard, ...styles.imageCardExtraLarge, flex: 1, minWidth: '300px' }}>
                                <img
                                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Luxury Interior"
                                    style={styles.cardImage}
                                />
                            </div>
                        </div>

                        {/* Right Column */}
                        <div style={{ ...styles.imageCard, ...styles.imageCardExtraLarge }}>
                            <img
                                src="https://images.unsplash.com/photo-1560448204-61ef8b1ab7cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Modern Lounge Chair"
                                style={styles.cardImage}
                            />
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}