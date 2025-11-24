import { useNavigate } from 'react-router-dom';
import './Heritage.css';
import heritageData from './heritageData.json';

export default function Heritage() {
    const navigate = useNavigate();

    const handleItemClick = (item) => {
        navigate(`/heritage/${item.id}`);
    };

    const firstBatchItems = heritageData.heritageItems.slice(0, 6);
    const remainingItems = heritageData.heritageItems.slice(6);

    return (
        <>
            <div className="heritage-main-container">
                <div className="heritage">
                    <div className="heritage-container">
                        <div className="heritage-main-content">
                            <div className="heritage-overline-container">
                                <div className="heritage-overline"></div>
                                <div className="heritage-title">Heritage Architecture</div>
                                <div className="heritage-overline"></div>
                            </div>
                            <div className="heritage-content">
                                An enduring legacy of art, culture, and tradition
                            </div>
                        </div>

                        {/* First Banner with Content */}
                        <div className="heritage-banner-container">
                            <div className="heritage-banner-wrapper">
                                <img
                                    src={"/0001_(2407).jpg"}
                                    alt={"Heritage Banner"}
                                    className="heritage-banner-image"
                                />
                                <div className="heritage-banner-overlay">
                                    <div className="heritage-banner-content">
                                        <h2 className="heritage-banner-title"> Chambal River Front</h2>
                                        <p className="heritage-banner-description">
                                            Discover the rich architectural heritage and cultural landmarks that define our history
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* First 6 Images */}
                        <div className="heritage-grid">
                            {firstBatchItems.map((item, index) => (
                                <div
                                    key={item.id}
                                    className="heritage-item"
                                    onClick={() => handleItemClick(item)}
                                >
                                    <div className="heritage-box">
                                        <div className="heritage-image-container">
                                            <img src={item.mainImage} alt={item.title} />
                                            <div className="heritage-overlay">
                                                <div className="heritage-text-content">
                                                    <h3 className="heritage-item-title">{item.title}</h3>
                                                    <div className="heritage-item-location">{item.location}</div>
                                                    <p className="heritage-item-description">{item.shortDescription}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Second Banner with Content (only show if there are remaining items) */}
                        {remainingItems.length > 0 && (
                            <div className="heritage-banner-container heritage-banner-secondary">
                                <div className="heritage-banner-wrapper heritage-banner-wrapper-2">
                                    <img
                                        src={"/Heritage-banner.jpg"}
                                        alt={"Heritage Banner 2"}
                                        className="heritage-banner-image"
                                    />
                                    <div className="heritage-banner-overlay">
                                        <div className="heritage-banner-content">
                                            <h2 className="heritage-banner-title"> Heritage Street, Amritsar </h2>
                                            <p className="heritage-banner-description">
                                                A majestic gateway to the
                                                divine Harmandir Sahib.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Remaining Images */}
                        {remainingItems.length > 0 && (
                            <div className="heritage-grid heritage-grid-secondary">
                                {remainingItems.map((item, index) => (
                                    <div
                                        key={item.id}
                                        className="heritage-item"
                                        onClick={() => handleItemClick(item)}
                                    >
                                        <div className="heritage-box">
                                            <div className="heritage-image-container">
                                                <img src={item.mainImage} alt={item.title} />
                                                <div className="heritage-overlay">
                                                    <div className="heritage-text-content">
                                                        <h3 className="heritage-item-title">{item.title}</h3>
                                                        <div className="heritage-item-location">{item.location}</div>
                                                        <p className="heritage-item-description">{item.shortDescription}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}