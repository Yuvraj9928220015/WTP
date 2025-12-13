import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './HeritageDetails.css';
import heritageData from './heritageData.json';

export default function HeritageDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const heritageItem = heritageData.heritageItems.find(item => item.id === parseInt(id));

    if (!heritageItem) {
        return (
            <div className="heritage-details-container">
                <div className="heritage-details-error">
                    <h2>Heritage item not found</h2>
                    <button onClick={() => navigate('/heritage')} className="back-button">
                        ← Back to Heritage
                    </button>
                </div>
            </div>
        );
    }

    const nextImage = () => {     c                    
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % heritageItem.gallery.length);
    };

    const prevImage = () => {
        setCurrentImageIndex(prevIndex => (prevIndex - 1 + heritageItem.gallery.length) % heritageItem.gallery.length);
    };

    const selectImage = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <>
            <div className="heritage-details-container">
                <h1 className="heritage-details-title">{heritageItem.title}</h1>
                <div className="heritage-details-content">

                    <div className="heritage-details-gallery">
                        <div className="heritage-details-main-image">
                            <img
                                src={heritageItem.gallery[currentImageIndex].src}
                                alt={heritageItem.gallery[currentImageIndex].alt}
                            />
                            <button
                                className="heritage-details-nav heritage-details-prev"
                                onClick={prevImage}
                            >
                                ‹
                            </button>
                            <button
                                className="heritage-details-nav heritage-details-next"
                                onClick={nextImage}
                            >
                                ›
                            </button>
                        </div>

                        <div className="heritage-details-thumbnails">
                            {heritageItem.gallery.map((image, index) => (
                                <img
                                    key={index}
                                    src={image.src}
                                    alt={image.alt}
                                    className={`heritage-details-thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                                    onClick={() => selectImage(index)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="heritage-details-info">
                        <div className="heritage-details-meta">
                            <span className="heritage-details-location">{heritageItem.location}</span>
                            <span className="heritage-details-year">Built: {heritageItem.yearBuilt}</span>
                            <span className="heritage-details-architect"> {heritageItem.architect}</span>
                        </div>

                        <div className="heritage-details-description">
                            <h3>About this Heritage</h3>
                            <p>{heritageItem.detailedDescription}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}