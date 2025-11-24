import './Conservation.css';

export default function Conservation() {
    return (
        <>
            <div className="min-h-screen bg-gray-50">
                <div className="team-container">
                    {/* Hero Section */}
                    <div className='About_container_image'>
                        <img
                            src="/Untitled-2.jpg"
                            alt="Modern Architecture Interior Design"
                            loading="lazy"
                        />
                        <div className="image_overlay">
                            <div className="overlay_content">
                                <h1>Conservation Architecture</h1>
                            </div>
                        </div>
                    </div>

                    {/* Conservation Section */}
                    <div className="conservation-section">
                        <div className='About-section-content'>
                            <div className='About-section-content_title'>Featured Conservation Projects</div>
                        </div>
                        <div className="conservation-container">
                            <div className="conservation-row">
                                <div className="conservation-col-left">
                                    <div className="conservation-image-container">
                                        <img
                                            src="/Conservation-1.jpg"
                                            alt="Conservation Project"
                                        />
                                        <div className="conservation-overlay-card">
                                            <div className="overlay-card-content">
                                                <div className="stat-number">25+</div>
                                                <div className="stat-subtitle">Years of Excellence</div>
                                                <p className="stat-description">Conservation Projects Plants Find Their People.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="conservation-col-right">
                                    <div className="conservation-content-box">
                                        <h2 className="conservation-title">Town Hall, Amritsar</h2>
                                        <p className="conservation-subtitle">
                                            Originally a British-era municipal building, the Town Hall in Amritsar was carefully
                                            restored to revive its colonial-era brickwork and structural integrity. The project now
                                            houses the <b>Partition Museum,</b> a space that narrates the emotional and historical
                                            legacy of India’s partition. The premises have been further enhanced with statues of
                                            iconic warriors <b>Akali Phoola Singh</b> and <b>Hari Singh Nalwa,</b> creating a site of
                                            reflection and remembrance.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*  */}


                        <div className="conservation-container">
                            <div className="conservation-row">
                                <div className="conservation-col-right">
                                    <div className="conservation-content-box">
                                        <h2 className="conservation-title">Kota Heritage Gates</h2>
                                        <p className="conservation-subtitle">
                                            Inspired by the traditional gates of Jaipur such as Soorajpole and Chandpole, we
                                            designed and constructed a series of monumental <b>entry gates across Kota city.</b> These
                                            gateways do more than mark an entrance—they <b>symbolize pride, heritage, and
                                                identity,</b> crafted using traditional Rajasthani architectural elements and modern
                                            materials to ensure both legacy and longevity.
                                        </p>
                                    </div>
                                </div>

                                <div className="conservation-col-left">
                                    <div className="conservation-image-container">
                                        <img
                                            src="/Conservation-2.webp"
                                            alt="Conservation Project"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/*  */}


                        <div className="conservation-container">
                            <div className="conservation-row">
                                <div className="conservation-col-left">
                                    <div className="conservation-image-container">
                                        <img
                                            src="/Conservation-3.jpg"
                                            alt="Conservation Project"
                                        />
                                    </div>
                                </div>
                                <div className="conservation-col-right">
                                    <div className="conservation-content-box">
                                        <h2 className="conservation-title">Chhoti-Badi Samadh, Kota </h2>
                                        <p className="conservation-subtitle">
                                            This sacred temple complex underwent a full-scale revival, from <b>color restoration
                                                and landscape development to sculpture renovation.</b> The worn-out stone temples
                                            were rejuvenated with <b> hand-carved details,</b> natural finishes, and serene landscapes—
                                            restoring spiritual essence while creating a tranquil public space.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Slider Section */}
                    <div className="conservation-slider-section">
                        <div className="conservation-container">
                            <div className="slider-header">
                                <h2 className="conservation-slider-title">Why Our Conservation Stands Out </h2>
                                <p className="slider-subtitle">Preserving architectural heritage with integrity,
                                    innovation, and artistry.
                                </p>
                            </div>
                            <div className="slider-container">
                                <div className="slider-track">
                                    <div className="conservation-slider-item">
                                        <div className="conservation-slider-image">
                                            <img src="/Conservation-1.jpg" alt="Modern House" />
                                        </div>
                                        <div className="conservation-slider-content">
                                            <h3>Authenticity in Restoration</h3>
                                            <p>We use original materials and traditional
                                                craftsmanship to maintain the true essence of historical structures. </p>
                                        </div>
                                        <button>VIEW MORE</button>
                                    </div>
                                    <div className="conservation-slider-item">
                                        <div className="conservation-slider-image">
                                            <img src="/Conservation-2.webp" alt="Green Building" />
                                        </div>
                                        <div className="conservation-slider-content">
                                            <h3>Blending Heritage with Modernity</h3>
                                            <p> Our designs integrate modern technology and
                                                functionality without compromising cultural or architectural integrity.
                                            </p>
                                        </div>
                                        <button>VIEW MORE</button>
                                    </div>
                                    <div className="conservation-slider-item">
                                        <div className="conservation-slider-image">
                                            <img src="/conservation-6.webp" alt="Sustainable Architecture" />
                                        </div>
                                        <div className="conservation-slider-content">
                                            <h3>Attention to Detail </h3>
                                            <p> From intricate carvings to color palettes, every detail is
                                                meticulously restored to revive the original beauty.</p>
                                        </div>
                                        <button>VIEW MORE</button>
                                    </div>
                                    <div className="conservation-slider-item">
                                        <div className="conservation-slider-image">
                                            <img src="/conservation-7.jpg" alt="Modern Interior" />
                                        </div>
                                        <div className="conservation-slider-content">
                                            <h3>Cultural & Historical Sensitivity</h3>
                                            <p>We ensure that every project respects the
                                                heritage, history, and significance of the structure.</p>
                                        </div>
                                        <button>VIEW MORE</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}