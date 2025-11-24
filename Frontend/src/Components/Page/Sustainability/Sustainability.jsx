import './Sustainability.css';

export default function Sustainability() {
    return (
        <>
            <div className='Sustainability'>
                {/* Hero Section */}
                <div className='About_container_image'>
                    <img
                        src="/Sustainability-Banner.JPG"
                        alt="Modern Architecture Interior Design"
                        loading="lazy"
                    />
                    <div className="image_overlay">
                        <div className="overlay_content">
                            <h1>Sustainable</h1>
                            <div className="Sustainability-prag-section">
                                <p className='Sustainability-prag'>
                                    At Sincere Architects, sustainability is not just a concept — it's the core of our design
                                    philosophy. We focus on eco-friendly materials, energy-efficient solutions, and innovations
                                    that address real urban challenges. Here are some of our most celebrated sustainable
                                    projects:
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <main className="Sustainability-main-content">
                    <div className='About-section-content'>
                        <div className='About-section-content_title'>Our firm is experienced in <br /> sustainable design</div>
                    </div>
                    <div className="">
                        {/* First Card */}
                        <section className="Sustainability-section">
                            <div className="Sustainability-content">
                                <div className="Sustainability-text">
                                    <h2>City Park – Oxyzone, Rajasthan</h2>
                                    <p>
                                        The first park of Rajasthan with its own Sewage Treatment Plant (STP). With over 2 lakh
                                        plants nurtured by treated recycled water, the park is a lush green lung for the city. It's a
                                        zero-pollution zone — no vehicles are allowed, ensuring clean air and a peaceful
                                        environment.
                                    </p>
                                    <div className="highlight">
                                        Quiet the mind, embrace the moment, free your heart to receive nature's gifts.
                                    </div>
                                </div>
                                <div
                                    className="Sustainability-image"
                                    style={{ backgroundImage: "url('Sustainability-City-Park-Kota.jpg')" }}
                                ></div>
                            </div>
                        </section>

                        {/* Second Card */}
                        <section id='Sustainability-section' className="Sustainability-section">
                            <div className="Sustainability-content">
                                <div className="Sustainability-text">
                                    <h2>Traffic Light Free City – Kota</h2>
                                    <p>
                                        Kota's smart urban planning eliminates the need for traffic lights. Carefully designed
                                        junctions and chowrahas ensure seamless vehicle movement. This reduces carbon
                                        emissions significantly by cutting down idle time at red lights, leading to better air quality
                                        and improved traffic efficiency.
                                    </p>
                                    <div className="highlight">
                                        Adventure awaits those who dare to explore beyond the familiar paths.
                                    </div>
                                </div>
                                <div
                                    className="Sustainability-image"
                                    style={{ backgroundImage: "url('Sustainability-Traffic-Light.jpg')" }}
                                ></div>
                            </div>
                        </section>

                        {/* Third Card */}
                        <section className="Sustainability-section">
                            <div className="Sustainability-content">
                                <div className="Sustainability-text">
                                    <h2> B2 Bypass Choraha – Jaipur</h2>
                                    <p>
                                        One of the most congested intersections in Jaipur, the B2 Bypass Choraha has been
                                        transformed with intelligent design. Now a zero traffic light zone with smooth vehicle flow,
                                        it reduces both traffic jams and vehicle emissions, making it a model for future city
                                        planning.
                                    </p>
                                    <div className="highlight">
                                        In nature, every creature has its place, and in that place, we find our purpose.
                                    </div>
                                </div>
                                <div
                                    className="Sustainability-image"
                                    style={{ backgroundImage: "url('/Sustainability-Bypass-Jaipur.jpg')" }}
                                ></div>
                            </div>
                        </section>

                        <section className="Sustainability-section">
                            <div className="Sustainability-content">
                                <div className="Sustainability-text">
                                    <h2>IPD Tower Hospital – Jaipur </h2>
                                    <p>
                                        India's tallest hospital building, the IPD Tower is a structural innovation in itself. Constructed
                                        using corrugated steel with no-shuttering roofs, it's an example of eco-conscious
                                        construction that saves both time and material without compromising durability or
                                        aesthetics.
                                    </p>
                                    <div className="highlight">
                                        In nature, every creature has its place, and in that place, we find our purpose.
                                    </div>
                                </div>
                                <div
                                    className="Sustainability-image"
                                    style={{ backgroundImage: "url('Sustainability-Tower-Tallest Building.jpg')" }}
                                ></div>
                            </div>
                        </section>

                        <section className="Sustainability-section">
                            <div className="Sustainability-content">
                                <div className="Sustainability-text">
                                    <h2>Laxmi Mandir Underpass – Jaipur</h2>
                                    <p>
                                        A smart solution to urban flooding. This underpass has been engineered to prevent water
                                        accumulation during monsoons, ensuring safe and uninterrupted passage even in the
                                        heaviest rains. A fine example of climate-resilient infrastructure
                                    </p>
                                    <div className="highlight">
                                        In nature, every creature has its place, and in that place, we find our purpose.
                                    </div>
                                </div>
                                <div
                                    className="Sustainability-image"
                                    style={{ backgroundImage: "url('Sustainability-Laxmi-Mandir.jpg')" }}
                                ></div>
                            </div>
                        </section>

                        <section className="Sustainability-section">
                            <div className="Sustainability-content">
                                <div className="Sustainability-text">
                                    <h2>World Trade Park (WTP) Mall – Jaipur </h2>
                                    <p>
                                        WTP Mall is not only an architectural marvel but also an environmentally responsible
                                        building. It features a state-of-the-art rainwater harvesting system, efficiently storing and
                                        utilizing rainwater to reduce dependence on groundwater.
                                    </p>
                                    <div className="highlight">
                                        In nature, every creature has its place, and in that place, we find our purpose.
                                    </div>
                                </div>
                                <div
                                    className="Sustainability-image"
                                    style={{ backgroundImage: "url('DSC_7308.jpg')" }}
                                ></div>
                            </div>
                        </section>
                    </div>


                    {/* Values Section */}
                    <section className="values-section">
                        <div className="">
                            <h2>Our Core Values</h2>
                            <div className="values-grid">
                                <div className="value-item">
                                    <div className="value-icon">🌿</div>
                                    <h3>Sustainability</h3>
                                    <p>Protecting our natural environment for future generations</p>
                                </div>
                                <div className="value-item">
                                    <div className="value-icon">🧭</div>
                                    <h3>Adventure</h3>
                                    <p>Embracing the unknown and pushing personal boundaries</p>
                                </div>
                                <div className="value-item">
                                    <div className="value-icon">🤝</div>
                                    <h3>Community</h3>
                                    <p>Building connections with fellow nature enthusiasts</p>
                                </div>
                                <div className="value-item">
                                    <div className="value-icon">🌱</div>
                                    <h3>Growth</h3>
                                    <p>Personal development through outdoor challenges</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}