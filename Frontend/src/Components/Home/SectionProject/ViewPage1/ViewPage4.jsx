import { useState, useEffect } from 'react';
import './ViewPage1.css';

export default function ViewPage4() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const images = [
        {
            src: "./public/DSC_0.webp",
            alt: "World Trade Park Interior 1",
        },
        {
            src: "./public/DSC_00.webp",
            alt: "World Trade Park Interior 2",
        },
        {
            src: "./public/DSC_01.webp",
            alt: "World Trade Park Exterior",
        },
        {
            src: "./public/DSC_04.webp",
            alt: "World Trade Park Architecture",
        },
        {
            src: "./public/DSC_8.webp",
            alt: "World Trade Park Architecture",
        },
        {
            src: "./public/DSC_80.webp",
            alt: "World Trade Park Architecture",
        },
        {
            src: "./public/DSC_81.webp",
            alt: "World Trade Park Architecture",
        },
        {
            src: "./public/DSC_82.webp",
            alt: "World Trade Park Architecture",
        },
        {
            src: "./public/DSC_84.webp",
            alt: "World Trade Park Architecture",
        }
    ];

    const openModal = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
        document.body.style.overflow = 'auto';
    };

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                closeModal();
            }
        };

        if (isModalOpen) {
            document.addEventListener('keydown', handleEscape);
            return () => document.removeEventListener('keydown', handleEscape);
        }
    }, [isModalOpen]);

    return (
        <>
            <div className="page-container">
                <div className="container">
                    <div className="row">
                        <div className="ViewPageBaner">
                            <img
                                src="./public/Pool-side-2.webp"
                                alt="World Trade Park Jaipur"
                                onError={(e) => {
                                    e.target.src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=400&fit=crop";
                                }}
                            />
                            <div className="banner-overlay">
                                <h1 className="banner-title">The Club At The Trees</h1>
                                <p className="banner-subtitle">A Modern Marvel in the Pink City</p>
                            </div>
                        </div>

                        <div className="main-content">
                            <div className='main-content-review'>
                                <div className="row">
                                    <div className="col-4">
                                        <div className='main-content-review-title'>PROJECT</div>
                                        <div className='main-content-review-prag'>World Trade Park</div>
                                    </div>
                                    <div className="col-4">
                                        <div className='main-content-review-title'>CLIENT</div>
                                        <div className='main-content-review-prag'>World Trade Park</div>
                                    </div>
                                    <div className="col-4">
                                        <div className='main-content-review-title'>YEAR</div>
                                        <div className='main-content-review-prag'>2009 - 2012</div>
                                    </div>
                                </div>
                            </div>
                            <div className="content-section">
                                <h2 className="content-title">About World Trade Park</h2>
                                <p>Construction of the World Trade Park Jaipur started in 2009, cost $50,000,000 and was completed in two years. The building has two different blocks; one north and one south, separated by a city street. The two buildings are joined by a bridge, which has restaurants.</p>
                                <p>Dr Anoop Bartaria is the chairman and managing director of World Trade Park and Sincere Group of companies. World Trade Park Jaipur was inaugurated by Shah Rukh Khan in 2012.</p>
                                <p>World Trade Park Jaipur includes a display system where 24 projectors create a single image on its ceiling. WTP was awarded "Mall of the Year" and "Best Architecture" by BCI of India.</p>
                                <p>As of 2023, Several more projects are under construction in the WTP, such as an underwater restaurant, an auditorium, a banquet hall, as well as a hotel with "world class luxury rooms".</p>
                            </div>

                            <div className="gallery-section">
                                <h3 className="gallery-title">Gallery</h3>
                                <div className="container">
                                    <div className="row">
                                        {images.map((image, index) => (
                                            <div key={index} className="col-lg-4 col-md-6 col-sm-12 col-12 mb-4">
                                                <div
                                                    className="View_Page_Box"
                                                    onClick={() => openModal(image)}
                                                >
                                                    <img
                                                        src={image.src}
                                                        alt={image.alt}
                                                        className="img-fluid"
                                                        onError={(e) => {
                                                            e.target.src = image.placeholder;
                                                        }}
                                                    />
                                                    <div className="image-overlay">
                                                        <div className="zoom-icon">
                                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                                <circle cx="11" cy="11" r="8"></circle>
                                                                <path d="m21 21-4.35-4.35"></path>
                                                                <line x1="11" y1="8" x2="11" y2="14"></line>
                                                                <line x1="8" y1="11" x2="14" y2="11"></line>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/*  */}

                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && selectedImage && (
                <div className="modal show" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close-modal" onClick={closeModal}>&times;</span>
                        <img
                            className="modal-image"
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            onError={(e) => {
                                e.target.src = selectedImage.placeholder.replace('w=400&h=200', 'w=800&h=600');
                            }}
                        />
                        <div className="modal-caption">
                            {selectedImage.alt}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}