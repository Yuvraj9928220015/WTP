import { Facebook, Twitter, Linkedin, Check, Award, Users, Target, TrendingUp, Lightbulb, Clock } from 'lucide-react';
import './About.css';

export default function About() {
    const whyChooseUs = [
        {
            icon: <Award size={32} />,
            title: "EXPERIENCED TEAM",
            description: "Three decades of architectural excellence"
        },
        {
            icon: <Users size={32} />,
            title: "PROFESSIONAL",
            description: "Vision led by Dr. Anoop Bartaria."
        },
        {
            icon: <Target size={32} />,
            title: "EXPERT STAFF",
            description: "1000+ landmark projects across India."
        },
        {
            icon: <TrendingUp size={32} />,
            title: "FAST RESPONSE",
            description: "Icons that redefine city skylines."
        },
        {
            icon: <Lightbulb size={32} />,
            title: "INNOVATIVE IDEAS",
            description: "End-to-end design and execution expertise."
        },
        {
            icon: <Clock size={32} />,
            title: "ON TIME DELIVERY",
            description: "Award-winning and globally recognized firm"
        },
        {
            icon: <TrendingUp size={32} />,
            title: "INNOVATIVE IDEAS",
            description: "Trusted consultant to State Governments."
        },
        {
            icon: <Target size={32} />,
            title: "ON TIME DELIVERY",
            description: "Innovation and perfection in every detail."
        },
        {
            icon: <Award size={32} />,
            title: "EXPERIENCED TEAM",
            description: "Sustainable and future-ready designs."
        },
        {
            icon: <Users size={32} />,
            title: "PROFESSIONAL",
            description: "Creating timeless spaces that inspire."
        },
    ];
    return (
        <>
            <div className="team-wrapper">
                {/* Hero Banner Section */}
                <div className="banner-section">
                    <img
                        src="/Team-Banner.jpg"
                        alt="About Us Banner"
                        className="banner-image"
                    />
                    <div className="banner-overlay">
                        <div className="banner-content">
                            <h1 className="overlayTitle">ABOUT US</h1>
                        </div>
                    </div>
                </div>

                {/* We Are Umbra Section */}
                <div className="umbra-section">
                    <div className="umbra-container">
                        <div className="umbra-content">
                            <h2 className="umbra-title">About Sincere Architects</h2>
                            <div className="umbra-underline"></div>

                            <p className="umbra-text">
                                Sincere Architects, established in 1990 by Founder Chairman and Principal Designer Mr. Anoop Bartaria, is a premier institution in Architecture,
                                Urban Development, and Interior Design. With over 1000 projects across India, Sincere serves as a consultant to multiple state governments and
                                has earned numerous national architectural awards.
                            </p>

                            <p className="umbra-text">
                                Renowned for transforming cities with timeless and iconic projects, Sincere boasts a strong in-house team of architects and engineers with
                                expertise across diverse sectors including Hospitality, Residential, Commercial, Educational, Institutional, Healthcare, and Urban Infrastructure.
                            </p>

                            <p className='umbra-text'>
                                Driven by technical excellence, research, and innovation, Sincere continues to set benchmarks in design and execution across the country.
                            </p>

                            <div className="ceo-quote">
                                <h3 className="quote-title">About Dr Anoop Bartaria</h3>
                                <h4 className='About-quote-title'>The Chairman, & the Principal Architect</h4>
                                <p className="quote-text">
                                    Dr. Anoop Bartaria is a visionary architect whose designs have transformed cities and are studied in leading institutions. A sculptor,
                                    painter, structural engineer, and poet, he holds an Honorary Doctorate in Architecture and has received numerous national awards.
                                </p>
                                <p className="quote-text">
                                    As Chairman of the Sincere Group of Companies and World Trade Park, Jaipur—India's largest mall—he continues to redefine urban architecture.
                                    His journey is featured in The Times of India book "Architectural Legacy of Anoop Bartaria," with a foreword by the President of India.
                                </p>
                            </div>
                        </div>

                        <div className="umbra-image-wrapper">
                            <img
                                src="/About-main-image.JPG"
                                alt="ANOOP BARTARIA"
                                className="umbra-ceo-image"
                            />
                        </div>
                    </div>
                </div>

                {/* Why Choose Us Section */}
                <div className="why-choose-section">
                    <div className="why-choose-container">
                        <div className="why-choose-left">
                            <div className="why-choose-images">
                                <img
                                    src="/About-image.png"
                                    alt="Team working together"
                                    className="why-choose-main-image"
                                />
                                <img
                                    src="/About-image-1.png"
                                    alt="Architecture project"
                                    className="why-choose-overlay-image"
                                />
                            </div>
                        </div>

                        <div className="why-choose-right">
                            <h2 className="why-choose-title">WHY CHOOSE US</h2>
                            <div className="why-choose-underline"></div>
                            <p className="why-choose-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                            </p>

                            <div className="why-choose-features">
                                {whyChooseUs.map((item, index) => (
                                    <div key={index} className="why-choose-feature">
                                        <div className="why-choose-feature-icon">
                                            {item.icon}
                                        </div>
                                        <div className="why-choose-feature-content">
                                            <p className="why-choose-feature-text">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}