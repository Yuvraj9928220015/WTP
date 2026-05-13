import React, { useState } from 'react';
import './Awards.css';

const awardsData = [
    {
        id: 1,
        category: "AWARDS & FELICITATIONS ",
        images: [
            'Awards-1.jpg',
            'Awards-2.jpg',
        ],
        achievements: [
            { year: '2025', text: 'Pride of Rajasthan’ Award by Hon ble Chief Minister of Rajasthan' },
            { year: '2025', text: 'Bharat Gaurav Award' },
            { year: '2025', text: '‘City Icon of Jaipur’ award by Hon ble Deputy CM Smt. Diya Kumari Ji.' },
            { year: '2025', text: 'Featured in the 50-Most Influentials worldwide by ‘Elite50 Magazine' },
            { year: '2023', text: '2023- Honorary doctorate in the field of architecture awarded by the Hon. Governor of' }
        ]
    },
    {
        id: 2,
        category: "Rajasthan",
        images: [
            'Awards-6.jpg',
            // 'Awards-7.jpg',
            // 'Awards-8.jpg'
        ],
        achievements: [
            { year: '2018', text: 'Outstanding Achievement Award by Pride of Rajasthan Awards' },
            { year: '2017', text: 'Business Leader of Rajasthan Award by Economic Times for Architectural Legacy.' },
            { year: '2016', text: ' National Award for Excellence in Architectural Engineering by “Institution of Engineers' }

        ]
    },
    {
        id: 3,
        category: "(India), Odisha Chapter",
        images: [
            'Awards-9.jpg',
            'Awards-10.jpg'
        ],
        achievements: [
            { year: '2016', text: 'Awarded by “MyFM - Dainik Bhaskar Group” for Best Architect of the year. ' },
            { year: '2015', text: 'Real Estate and Architectural Awards 2015” by “Zee Group” for best High Rise' }
        ]
    },

    {
        id: 4,
        category: "Commercial Architecture",
        images: [
            'Awards-11.jpg',
            'Awards-12.jpg',
            'Awards-13.jpg',
            'Awards-14.jpg',
            'Awards-15.jpg',
            'Awards-16.jpg'
        ],
        achievements: [
            { year: '2015', text: 'Best Commercial High Rise Architecture Award by “Indian Property Awards 2015' },
            { year: '2015', text: 'Awarded ‘Best Retail Interior Designer’ by “Realty Leaders’ Summit & Awards 2015' },
            { year: '2013', text: ' Rajasthan Darohar 2013 Award by “Virasat”, Jaipur.' },
            { year: '2012', text: 'Architect of the year Award 2012 by “Power Brands India' },
            { year: '2012', text: 'Architect of the year Award by “Builders Council of India' },
            { year: '2012', text: 'Architect of the year by “Power Brands India" for his achievements in the field of' }
        ]
    },

    {
        id: 5,
        category: "Architectural Engineering. ",
        images: [
            'Awards-17.jpg',
            'Awards-18.jpg',
            // 'Awards-19.jpg',
            // 'Awards-20.jpg'
        ],
        achievements: [
            { year: '2010', text: 'Best Entrepreneur Engineer award by “United Engineers Council, Rajasthan' },
            { year: '2010', text: 'Awarded by “DNA News Paper” for the Leading Architect of Jaipur.' },
            { year: '2009', text: 'Rajasthan Gaurav Award for Excellence in the field of Architecture.' },
            { year: '2006', text: 'National Award for Best Innovator of the year for the project World Trade Park by the' },

        ]
    },

    {
        id: 6,
        category: "Architectural Engineering. ",
        images: [
            // '/JCI-2006.jpg',
            'Awards-21.jpg',
            'Awards-22.jpg',
            'Awards-23.jpg'
        ],
        achievements: [
            { year: '2006', text: 'Most Outstanding Young Person Award by “JCI Jaipur' },
            { year: '2006', text: 'Awarded by “The Institution of Engineers (India)” for eminence and contribution in the field of Township Development with an Eco-friendly environment.' },
            { year: '2006', text: ' Felicitated by Hon’ble Chief Minister of Rajasthan Sh. Ashok Gehlot for the design of the project - Sona Devi Sethia Girls College at Sujangarh. ' },
            { year: '2006', text: 'Awarded by Keshav Navneet for achievement in the field of Architecture and contributions to society.' },

        ]
    },

    {
        id: 7,
        category: "Architectural Engineering. ",
        images: [
            'Awards-24.jpg',
            'Awards-25.jpg',
            'Awards-26.jpg',
            'Awards-27.jpg'
        ],
        achievements: [
            { year: '2004', text: ' Honored for eminence in the field of Architecture and Building Design by His Excellency, The Governor of Rajasthan, Sh. Madan Lal Khurana on 18th Feb, 2004 by Keshav Navneet.' },
            { year: '2004', text: ' Indira Priyadarshini Award 2004 for outstanding services, contributions, and achievements presented jointly by Mr. Rajashekharan, Union Minister of Planning, and Sh. Shish Ram Olla, Union Minister of Labour at Teen Murthy Bhawan, New Delhi.  ' },
            { year: '2002', text: ' National award from “The Institution of Engineers (India)” for eminence in Architectural Engineering. ' },
            { year: '2002', text: ' Felicitated by Hon’ble Chief Minister of Rajasthan Smt. Vasundhara Raje a Gold Medal in recognition of the achievements and contributions in the field of building design for Hotel Las Vegas, Jaipur. ' },

        ]
    },

    {
        id: 8,
        category: "Architectural Engineering. ",
        images: [
            'Awards-28.jpg',
            'Awards-29.jpg',
            'Awards-30.jpg',
            'Awards-31.jpg'
        ],
        achievements: [
            { year: '2002', text: ' Felicitated by Hon’ble Vice President of India, Sh. Bhairon Singh Shekhawat for the design of Tagore Hospital and Research Institute, Jaipur. ' },
            { year: '2004', text: 'Felicitated by Hon’ble Chief Minister of Rajasthan Smt. Vasundhara Raje for the design of the Sawai Mansingh Statue in front of Albert Hall, Ram Niwas Bagh, Jaipur.  ' },
            { year: '1999', text: ' Great Achiever of India Award 1999.  ' },
            { year: '1999', text: 'Appointed as committee member for formulation of “Apartments’ Act, Rajasthan.' },

        ]
    },

    {
        id: 9,
        category: "Architectural Engineering. ",
        images: [
            'Awards-32.jpg',
            'Awards-33.jpg',
            'Awards-34.jpg'
        ],
        achievements: [
            { year: '1999', text: 'Selected in the Working Group constituted for the 11th Five-Year Plan for U.D.H. & L.S.G. Departments, and is the only non-governmental member.  ' },
            { year: '1999', text: 'International recognition by UNAICC at Hawana for Computer Aided Design of Ferro-Cement Structure.' },
            { year: '1999', text: 'Topper from Malviya Regional Engineering College in B.E. (Hons.)-Civil.' }

        ]
    }
];

export default function Awards() {
    const [activeImageIndex, setActiveImageIndex] = useState({});

    const handleImageHover = (sectionId, imageIndex) => {
        setActiveImageIndex(prev => ({ ...prev, [sectionId]: imageIndex }));
    };

    return (
        <>
            {/* Hero Section */}
            <div className='hero-section'>
                <img
                    src="/Awards-Banner.jpg"
                    alt="Modern Architecture Interior Design"
                    className="hero-image"
                    loading="lazy"
                />
                <div className="hero-overlay">
                    <div className="hero-content">
                        <h1 className="hero-title">Our Awards & Recognition</h1>
                        <p className="hero-subtitle">Celebrating excellence in architectural innovation and design leadership</p>
                        <div className="hero-stats">
                            <div className="stat-item">
                                <span className="awards-stat-number">25+</span>
                                <span className="stat-label">Awards Won</span>
                            </div>
                            <div className="stat-item">
                                <span className="awards-stat-number">15+</span>
                                <span className="stat-label">Years Experience</span>
                            </div>
                            <div className="stat-item">
                                <span className="awards-stat-number">100+</span>
                                <span className="stat-label">Projects</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Awards Container */}
            <div className='awards-main-container'>
                <div className="awards-header">
                    <h2 className="awards-section-title">Awards & Achievements</h2>
                    <p className="awards-section-description">
                        Our commitment to excellence has been recognized by leading institutions and organizations
                    </p>
                </div>

                <main className="awards-container">
                    {awardsData.map((award, index) => (
                        <section key={award.id} className={`award-section ${index % 2 === 1 ? 'reverse' : ''}`}>

                            {/* Image Gallery */}
                            <div className="award-images">
                                <div className="main-image">
                                    <img
                                        src={award.images[activeImageIndex[award.id] || 0]}
                                        alt={`${award.category} main`}
                                        className="featured-image"
                                    />
                                </div>
                                <div className="thumbnail-gallery">
                                    {award.images.map((imgSrc, imgIndex) => (
                                        <div
                                            key={imgIndex}
                                            className={`thumbnail ${(activeImageIndex[award.id] || 0) === imgIndex ? 'active' : ''}`}
                                            onMouseEnter={() => handleImageHover(award.id, imgIndex)}
                                        >
                                            <img src={imgSrc} alt={`Thumbnail ${imgIndex + 1}`} />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Achievements Details */}
                            <div className="award-details">
                                <div className="achievements-timeline">
                                    {award.achievements.map((item, itemIndex) => (
                                        <div key={itemIndex} className="timeline-item">
                                            <div className="timeline-marker">
                                                <span className="achievement-year">{item.year}</span>
                                            </div>
                                            <div className="timeline-content">
                                                <p className="achievement-text">{item.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    ))}
                </main>
            </div>
        </>
    );
}   