import React, { useState } from 'react';
import './Sculptures.css';

export default function Sculptures() {
    const [modalImage, setModalImage] = useState(null);

    const handleImageClick = (imgSrc) => {
        setModalImage(imgSrc);
    };

    const handleCloseModal = () => {
        setModalImage(null);
    };

    const handleModalClick = (e) => {
        e.stopPropagation();
    };


    return (
        <>
            <div className="Sculptures">
                <div className='About_container_image'>
                    <img
                        src="Sculptures-Banner.jpg"
                        alt="Modern Architecture Interior Design"
                        loading="lazy"
                    />
                    <div className="image_overlay">
                        <div className="overlay_content">
                            <h1>Sculptures</h1>
                            <p>the silent storytellers of your space </p>
                        </div>
                    </div>
                </div>

                <div className="Project_Section">
                    <div className="Sculptures-Project_Section_title">
                        <div className="section-header">
                            <div className="Urban-title">Sculptures Architecture</div>
                            <div className="Urban-prag">
                                Designing landmarks that celebrate India's spirit.
                                From cultural icons to transformative public institutions, our work contributes to the <br />
                                nation's identitywith architecture that honors tradition while embracing progress.
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div data-aos="fade-up" className="row project-row">
                            <div className="col-lg-4 col-md-12 order-lg-1 order-2">
                                <div id='Sculptures-container-Project-card' className="Sculptures-project-card">
                                    <div id='Sculptures-image' className="image-container">
                                        <img src="/Sculptures-5.jpg" alt="Kota Project" loading="lazy" />
                                        <div className="overlay">
                                            <div className="overlay-content">
                                                <h3>Sports Pedestal Sculpture</h3>
                                                <p className="description">A dynamic installation honoring athletic excellence, capturing the energy and
                                                    diversity of sports through symbolic human forms.</p>
                                                <button className="btn-view" onClick={(e) => e.stopPropagation()}>
                                                    <a href="#">View Details</a>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-8 col-md-12 order-lg-2 order-1 mt-">
                                <div className="row g-2 h-100">
                                    <div className="col-12">
                                        <div className="Sculptures-project-card">
                                            <div className="image-container">
                                                <img src="/Sculptures-2.JPG" alt='Jaipur Project' loading="lazy" />
                                                <div className="overlay">
                                                    <div className="overlay-content">
                                                        <h3>Mahatma Gandhi Life-Size Statue, Constitution Park, Jaipur </h3>
                                                        <p className="description"> A serene life-size sculpture of the Father of the Nation, embodying peace and
                                                            constitutional values at India’s first Constitution Park.</p>
                                                        <button className="btn-view" onClick={(e) => e.stopPropagation()}>
                                                            <a href="#">View Details</a>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="Sculptures-project-card">
                                            <div className="image-container">
                                                <img src="/Sculptures-1.JPG" alt="RAAS Chhatrasagar" loading="lazy" />
                                                <div className="overlay">
                                                    <div className="overlay-content">
                                                        <h3>Arjuna Statue, SMS Stadium, Jaipur </h3>
                                                        <p className="description"> A powerful depiction of Arjuna in full battle stance, symbolizing focus, strength,
                                                            and the spirit of sportsmanship at Jaipur’s iconic stadium.</p>
                                                        <button className="btn-view" onClick={(e) => e.stopPropagation()}>
                                                            <a href="#">View Details</a>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 2: Urban Development  */}
                        <div data-aos="fade-up" className="row project-row">

                            <div className="col-lg-7 col-md-12">
                                <div className="row h-100">
                                    <div className="col-12">
                                        <div className="Sculptures-project-card">
                                            <div className="image-container">
                                                <img src="/Sculptures-7.jpg" alt="WTP Project" loading="lazy" />
                                                <div className="overlay">
                                                    <div className="overlay-content">
                                                        <h3>Freedom Fighters Sculpture, Laxmi Mandir, Jaipur </h3>
                                                        <p className="description">A compelling ensemble of statues honoring India’s unsung heroes who fought
                                                            tirelessly for the nation’s freedom.</p>
                                                        <button className="btn-view" onClick={(e) => e.stopPropagation()}>
                                                            <a href="#">View Details</a>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <div className="Sculptures-project-card">
                                            <div className="image-container">
                                                <img src="/Shaurya-image.jpg" alt="Omex Chok" loading="lazy" />
                                                <div className="overlay">
                                                    <div className="overlay-content">
                                                        <h3> Shaurya Stambh, Kota </h3>
                                                        <p className="description">An inspiring vertical monument dedicated to valor and sacrifice, representing the
                                                            indomitable spirit of India's bravehearts.</p>
                                                        <button className="btn-view" onClick={(e) => e.stopPropagation()}>
                                                            <a href="#">View Details</a>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-5 col-md-12">
                                <div id='Sculptures-container-Project-card' className="Sculptures-project-card">
                                    <div className="image-container">
                                        <img src="/Sculptures-4.jpg" alt="Commercial Project" loading="lazy" />
                                        <div className="overlay">
                                            <div className="overlay-content">
                                                <h3> Constitution Pillar, Rajasthan University </h3>
                                                <p className="description">A towering tribute to the Indian Constitution, this intricately carved pillar stands as
                                                    a beacon of democratic values within the university campus.
                                                </p>
                                                <button className="btn-view" onClick={(e) => e.stopPropagation()}>
                                                    <a href="#">View Details</a>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 4: Hotels & Resorts */}
                        <div data-aos="fade-up" className="row project-row">

                            <div className="col-lg-8 col-md-12">
                                <div className="row g-5 h-100">
                                    <div className="col-12">
                                        <div className="Sculptures-project-card">
                                            <div className="image-container">
                                                <img src="/Sculptures-8.jpg" alt="Riverfront Development" loading="lazy" />
                                                <div className="overlay">
                                                    <div className="overlay-content">
                                                        <h3>Chambal Mata – Largest Marble Statue, Chambal River Front, Kota </h3>
                                                        <p className="description">This grand white-marble sculpture of Chambal Mata is a spiritual and architectural
                                                            marvel, standing as the guardian spirit of the river. </p>
                                                        <button className="btn-view" onClick={(e) => e.stopPropagation()}>
                                                            <a href="#">View Details</a>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <div className="Sculptures-project-card">
                                            <div className="image-container">
                                                <img src="/Sculptures-9.JPG" alt="Gold Palace, Jaipur" loading="lazy" />
                                                <div className="overlay">
                                                    <div className="overlay-content">
                                                        <h3>Lions at Chambal River Front </h3>
                                                        <p className="description">Majestic lion statues flanking the riverfront, symbolizing courage, power, and the
                                                            legacy of regal Rajasthan.</p>
                                                        <button className="btn-view" onClick={(e) => e.stopPropagation()}>
                                                            <a href="#">View Details</a>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*  */}

                            <div className="col-lg-4 col-md-12">
                                <div id='Sculptures-container-Project-card' className="Sculptures-project-card">
                                    <div className="image-container">
                                        <img src="/Sculptures-10.jpg" alt="Greenfield Township" loading="lazy" />
                                        <div className="overlay">
                                            <div className="overlay-content">
                                                <h3> Kirti Stambh, Kota</h3>
                                                <p className="description">A monumental tower celebrating the glory and achievements of Rajasthan,
                                                    inspired by traditional victory pillars. </p>
                                                <button className="btn-view" onClick={(e) => e.stopPropagation()}>
                                                    <a href="#">View Details</a>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*  */}

                    <div className="Crocodile">
                        <div className="Sculptures-project-card">
                            <div className="image-container">
                                <img src="/Sculptures-11.jpg" alt="Greenfield Township" loading="lazy" />
                                <div className="overlay">
                                    <div className="overlay-content">
                                        <h3> Crocu- The mascot of Chambal River Front</h3>
                                        <p className="description">Dedicated to the The countless population of Crocodiles in the Chambal river.
                                        </p>
                                        <button className="btn-view" onClick={(e) => e.stopPropagation()}>
                                            <a href="#">View Details</a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {modalImage && (
                    <div className="modal-backdrop" onClick={handleCloseModal}>
                        <button className="modal-close-button" onClick={handleCloseModal} aria-label="Close modal">
                            ×
                        </button>
                        <img
                            src={modalImage}
                            alt="Enlarged Project View"
                            className="modal-image"
                            onClick={handleModalClick}
                            loading="lazy"
                        />
                    </div>
                )}
            </div>

        </>
    );
}