import "./Monuments.css"

export default function Monuments() {
    return (
        <>
            <div className="monuments-main-container">
                {/* Header Section */}
                <div className="monuments-header">
                    <img
                        src="0001_1025.jpg"
                        alt="Modern Architecture Interior Design"
                        className="header-image"
                    />
                    <div className="header-overlay">
                        <div className="header-content">
                            <h1>Monuments</h1>
                            <p>Explore the world's most breathtaking destinations and monuments</p>
                        </div>
                    </div>
                </div>

                {/* *** NEW MONUMENTS GRID 2 *** */}
                <div className="new-monuments-section">
                    <div className='About-section-content'>
                        <div id="Monuments-Heading" className='About-section-content_title'>Monuments that whisper tales of glory</div>
                    </div>
                    <div className="monuments-collage-grid">
                        <div className="collage-right-column">
                            <div className="collage-card">
                                <img src="/torandwar.webp" alt="A tall, ancient stone tower against a blue sky" className="collage-image" />
                                <div className="card-overlay">
                                    <div className="card-content">
                                        <h2 className="destination-title">Toran Dwar, Jaipur</h2>
                                    </div>
                                    <div className="card-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M7 17L17 7M17 7H7M17 7V17" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="collage-right-column">
                            <div className="collage-card">
                                <img src="/New-16.png" alt="A tall, ancient stone tower against a blue sky" className="collage-image" />
                                <div className="card-overlay">
                                    <div className="card-content">
                                        <h2 className="destination-title">Patrika Gate, Jaipur</h2>
                                    </div>
                                    <div className="card-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M7 17L17 7M17 7H7M17 7V17" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Destinations Grid (Existing Section) */}
                <div className="Destinations_Grid">
                    <div className="destinations-container">
                        <div className="destinations-grid">
                            <div className="destination-card large-card-container">
                                <img
                                    src="Heritage-2.png"
                                    alt="Kelingking Beach"
                                    className="destination-image"
                                />
                                <div className="card-overlay">
                                    <div className="card-content">
                                        <h2 className="destination-title"> Mashal Sculpture, Jalianwala Bagh, Amritsar</h2>
                                    </div>
                                    <div className="card-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M7 17L17 7M17 7H7M17 7V17" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="right-column">
                                <div className="destination-card small-card">
                                    <img
                                        src="monuments-1.jpg"
                                        alt="Grand Palace"
                                        className="destination-image"
                                    />
                                    <div className="card-overlay">
                                        <div className="card-content">
                                            <h3 className="destination-title">Adalat Circle monument, Kota</h3>
                                        </div>
                                        <div className="card-icon">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M7 17L17 7M17 7H7M17 7V17" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="destination-card small-card">
                                    <img
                                        src="monuments-4.jpg"
                                        alt="Cappadocia"
                                        className="destination-image"
                                    />
                                    <div className="card-overlay">
                                        <div className="card-content">
                                            <h3 className="destination-title"> Horses Monument, Polytechnic College, Kota</h3>
                                        </div>
                                        <div className="card-icon">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M7 17L17 7M17 7H7M17 7V17" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="destination-card medium-card">
                                    <img
                                        src="monuments-3.JPG"
                                        alt="Padar Island"
                                        className="destination-image"
                                    />
                                    <div className="card-overlay">
                                        <div className="card-content">
                                            <h3 className="destination-title">Mahatma Gandhi, Pt. Jawahar Lal Nehru & Sardar Ballabh Bhai Patel Monument, Jaipur</h3>
                                        </div>
                                        <div className="card-icon">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M7 17L17 7M17 7H7M17 7V17" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* *** NEW MONUMENTS GRID 1 *** */}
                <div className="new-monuments-section">
                    <div className="monuments-collage-grid">
                        <div className="collage-left-column">
                            <div className="collage-card">
                                <img src="monuments-5.JPG" alt="Luxury hotel pool overlooking Mehrangarh Fort" className="collage-image" />
                                <div className="card-overlay">
                                    <div className="card-content">
                                        <h2 className="destination-title">Ship Monument, Kota</h2>
                                    </div>
                                    <div className="card-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M7 17L17 7M17 7H7M17 7V17" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="collage-card">
                                <img src="monuments-6.jpeg" alt="Outdoor lounge area by a pool" className="collage-image" />
                                <div className="card-overlay">
                                    <div className="card-content">
                                        <h2 className="destination-title">Sainik Circle Monument, Kota</h2>
                                    </div>
                                    <div className="card-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M7 17L17 7M17 7H7M17 7V17" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="collage-right-column">
                            <div className="collage-card">
                                <img src="monuments-8.jpeg" alt="Modern interior with glass walls and structural beams" className="collage-image" />
                                <div className="card-overlay">
                                    <div className="card-content">
                                        <h2 className="destination-title">Vivekananda Monument, Kota</h2>
                                    </div>
                                    <div className="card-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M7 17L17 7M17 7H7M17 7V17" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Experience Section */}
                <div className="experience-container">
                    <div className="experience-left">
                        <div className="experience-content">
                            <h1 className="experience-title">Experience Iconic Creations </h1>
                            <p className="experience-subtitle">
                                Step into a world where design meets heritage. Our monuments and public spaces, envisioned
                                by Dr. Anoop Bartaria, combine art, culture, and modern engineering to create landmarks that
                                inspire generations. From grand gateways to riverside promenades, every project reflects a
                                story of innovation and legacy.
                            </p>

                            <div className="features-list">
                                <div className="feature-item">
                                    <div className="feature-icon">
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                        </svg>
                                    </div>
                                    <div className="feature-content">
                                        <h3>Timeless Design </h3>
                                        <p>Each monument is crafted with deep respect for local history, architecture, and
                                            cultural narratives, blending traditional elements with modern aesthetics. </p>
                                    </div>
                                </div>

                                <div className="feature-item">
                                    <div className="feature-icon">
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7V9C15 10.1 14.1 11 13 11V22H17V16H19V22H23V11C23 9.9 22.1 9 21 9Z" />
                                        </svg>
                                    </div>
                                    <div className="feature-content">
                                        <h3>Sustainable Craftsmanship</h3>
                                        <p>Using eco-friendly materials and thoughtful planning, our designs stand strong for
                                            decades while embracing nature and community needs.</p>
                                    </div>
                                </div>

                                <div className="feature-item">
                                    <div className="feature-icon">
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                                        </svg>
                                    </div>
                                    <div className="feature-content">
                                        <h3>Transformative Spaces </h3>
                                        <p>Our creations—like Patrika Gate, Toran Dwar, and Chambal Riverfront—are not
                                            just structures but immersive experiences that bring people together. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="experience-right">
                        <div className="main-image-container">
                            <img
                                src="monuments-2.jpg"
                                alt="Adventure Experience"
                                className="main-experience-image"
                            />
                            <div className="card-overlay">
                                <div className="card-content">
                                    <h2 className="destination-title"> Ambedkar statue, Amritsar</h2>
                                </div>
                                <div className="card-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}