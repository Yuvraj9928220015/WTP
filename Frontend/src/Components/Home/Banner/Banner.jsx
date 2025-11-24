import React, { useEffect, useRef } from 'react';
import "./Banner.css"

export default function Banner() {
    const sliderRef = useRef(null);
    const autoplayRef = useRef(null);

    useEffect(() => {
        const handleClick = (e) => {
            if (!sliderRef.current) return;

            const items = sliderRef.current.querySelectorAll('.banner-item');

            if (e.target.closest('.next')) {
                sliderRef.current.appendChild(items[0]);
                resetAutoplay();
            } else if (e.target.closest('.prev')) {
                sliderRef.current.prepend(items[items.length - 1]);
                resetAutoplay();
            }
        };

        const resetAutoplay = () => {
            if (autoplayRef.current) {
                clearInterval(autoplayRef.current);
            }
            startAutoplay();
        };

        const startAutoplay = () => {
            autoplayRef.current = setInterval(() => {
                if (sliderRef.current) {
                    const items = sliderRef.current.querySelectorAll('.banner-item');
                    sliderRef.current.appendChild(items[0]);
                }
            }, 4000);
        };

        document.addEventListener('click', handleClick);
        startAutoplay();

        return () => {
            document.removeEventListener('click', handleClick);
            if (autoplayRef.current) {
                clearInterval(autoplayRef.current);
            }
        };
    }, []);

    return (
        <>
            <div className="banner-wrapper">
                <div className="banner-container">
                    <div ref={sliderRef} className="slider-container">
                        {/* Slide 1 */}
                        <div className="banner-item">
                            <img
                                src="/DSC_5087.jpg"
                                alt="Chambal River Front"
                                className="banner-image"
                            />
                            <div className="content">
                                <h2 className="title">Chambal River Front</h2>
                                <div className="button-group">
                                    <button className="read-more-btn">Read More</button>
                                    <div className="nav-controls">
                                        <button className="nav-btn prev" aria-label="Previous">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="15 18 9 12 15 6"></polyline>
                                            </svg>
                                        </button>
                                        <button className="nav-btn next" aria-label="Next">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="9 18 15 12 9 6"></polyline>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Slide 2 */}
                        <div className="banner-item">
                            <img
                                src="/CityPark-1.jpg"
                                alt="City Park"
                                className="banner-image"
                            />
                            <div className="content">
                                <h2 className="title">City Park, Kota</h2>
                                <div className="button-group">
                                    <button className="read-more-btn">Read More</button>
                                    <div className="nav-controls">
                                        <button className="nav-btn prev" aria-label="Previous">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="15 18 9 12 15 6"></polyline>
                                            </svg>
                                        </button>
                                        <button className="nav-btn next" aria-label="Next">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="9 18 15 12 9 6"></polyline>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Slide 3 */}
                        <div className="banner-item">
                            <img
                                src="/IMG-20250820-WA0002.jpg"
                                alt="Arches"
                                className="banner-image"
                            />
                            <div className="content">
                                <h2 className="title">Arches at Chambal River Front</h2>
                                <div className="button-group">
                                    <button className="read-more-btn">Read More</button>
                                    <div className="nav-controls">
                                        <button className="nav-btn prev" aria-label="Previous">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="15 18 9 12 15 6"></polyline>
                                            </svg>
                                        </button>
                                        <button className="nav-btn next" aria-label="Next">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="9 18 15 12 9 6"></polyline>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Slide 4 */}
                        <div className="banner-item">
                            <img
                                src="/IMG-20250820-WA0004.jpg"
                                alt="World Trade Park"
                                className="banner-image"
                            />
                            <div className="content">
                                <h2 className="title">World Trade Park</h2>
                                <div className="button-group">
                                    <button className="read-more-btn">Read More</button>
                                    <div className="nav-controls">
                                        <button className="nav-btn prev" aria-label="Previous">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="15 18 9 12 15 6"></polyline>
                                            </svg>
                                        </button>
                                        <button className="nav-btn next" aria-label="Next">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="9 18 15 12 9 6"></polyline>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Slide 5 */}
                        <div className="banner-item">
                            <img
                                src="/WhatsAppImage-1.jpg"
                                alt="Patrika Gate"
                                className="banner-image"
                            />
                            <div className="content">
                                <h2 className="title">Patrika Gate, Jaipur</h2>
                                <div className="button-group">
                                    <button className="read-more-btn">Read More</button>
                                    <div className="nav-controls">
                                        <button className="nav-btn prev" aria-label="Previous">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="15 18 9 12 15 6"></polyline>
                                            </svg>
                                        </button>
                                        <button className="nav-btn next" aria-label="Next">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="9 18 15 12 9 6"></polyline>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Slide 6 */}
                        <div className="banner-item">
                            <img
                                src="/torandwar.jpg"
                                alt="Toran Dwar"
                                className="banner-image"
                            />
                            <div className="content">
                                <h2 className="title">Toran Dwar, Jaipur</h2>
                                <div className="button-group">
                                    <button className="read-more-btn">Read More</button>
                                    <div className="nav-controls">
                                        <button className="nav-btn prev" aria-label="Previous">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="15 18 9 12 15 6"></polyline>
                                            </svg>
                                        </button>
                                        <button className="nav-btn next" aria-label="Next">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="9 18 15 12 9 6"></polyline>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Slide 7 */}
                        <div className="banner-item">
                            <img
                                src="/7(b).jpg"
                                alt="Heritage Street"
                                className="banner-image"
                            />
                            <div className="content">
                                <h2 className="title">Heritage Street, Amritsar</h2>
                                <div className="button-group">
                                    <button className="read-more-btn">Read More</button>
                                    <div className="nav-controls">
                                        <button className="nav-btn prev" aria-label="Previous">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="15 18 9 12 15 6"></polyline>
                                            </svg>
                                        </button>
                                        <button className="nav-btn next" aria-label="Next">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="9 18 15 12 9 6"></polyline>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Slide 8 */}
                        <div className="banner-item">
                            <img
                                src="/Facade.jpg"
                                alt="Shiv Vilas Hotel"
                                className="banner-image"
                            />
                            <div className="content">
                                <h2 className="title">Shiv Vilas Hotel, Jaipur</h2>
                                <div className="button-group">
                                    <button className="read-more-btn">Read More</button>
                                    <div className="nav-controls">
                                        <button className="nav-btn prev" aria-label="Previous">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="15 18 9 12 15 6"></polyline>
                                            </svg>
                                        </button>
                                        <button className="nav-btn next" aria-label="Next">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="9 18 15 12 9 6"></polyline>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Slide 9 */}
                        <div className="banner-item">
                            <img
                                src="/IMG-20250820-WA0003.jpg"
                                alt="Vigyan Lodha Residence"
                                className="banner-image"
                            />
                            <div className="content">
                                <h2 className="title">Vigyan Lodha Residence, Jaipur</h2>
                                <div className="button-group">
                                    <button className="read-more-btn">Read More</button>
                                    <div className="nav-controls">
                                        <button className="nav-btn prev" aria-label="Previous">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="15 18 9 12 15 6"></polyline>
                                            </svg>
                                        </button>
                                        <button className="nav-btn next" aria-label="Next">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="9 18 15 12 9 6"></polyline>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Slide 10 */}
                        <div className="banner-item">
                            <img
                                src="/IMG-20250820-WA0001.jpg"
                                alt="Amar Jwan Jyoti Memorial"
                                className="banner-image"
                            />
                            <div className="content">
                                <h2 className="title">Amar Jwan Jyoti Memorial, Jaipur</h2>
                                <div className="button-group">
                                    <button className="read-more-btn">Read More</button>
                                    <div className="nav-controls">
                                        <button className="nav-btn prev" aria-label="Previous">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="15 18 9 12 15 6"></polyline>
                                            </svg>
                                        </button>
                                        <button className="nav-btn next" aria-label="Next">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="9 18 15 12 9 6"></polyline>
                                            </svg>
                                        </button>
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