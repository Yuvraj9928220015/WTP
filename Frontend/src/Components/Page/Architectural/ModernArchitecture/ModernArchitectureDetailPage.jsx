import { useParams, Link } from 'react-router-dom';
import collectionsData from './collections.json';
import './ModernArchitectureDetailPage.css';

export default function ModernArchitectureDetailPage() {
    const { collectionId } = useParams();
    const collection = collectionsData.find(c => c.id === parseInt(collectionId));

    if (!collection) {
        return (
            <div className="not-found-container">
                <h1>Collection Not Found</h1>
                <p>The project you are looking for does not exist.</p>
                <Link to="/" className="back-home-link">Back to Home</Link>
            </div>
        );
    }

    return (
        <div className="modern-architecture-detail-page">
            {/* Hero Section */}
            <div className='detail-hero-section'>
                <img src={collection.cardImage} alt={collection.title} loading="lazy" />
                <div className="image_overlay">
                    <div className="overlay_content">
                        <h1>{collection.title}</h1>
                        <p>Project Details</p>
                    </div>
                </div>
            </div>

            {/* Main Content Section */}
            <div id='modern-container-fluid'  className="container-fluid detail-content-container">
                <div className="detail-header">
                    <p className="detail-subtitle">The Architecture Studio</p>
                    <h2 className='detail-title'>{collection.title}</h2>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="detail-description">
                            <p>{collection.description}</p>
                        </div>
                    </div>
                    <div className="col-12">
                        <h3 className="gallery-title">Project Gallery</h3>
                        <div className="detail-gallery-grid">
                            {collection.detailImages.map((image, index) => (
                                <div key={index} className="gallery-image-wrapper">
                                    <img src={image} alt={`${collection.title} - view ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}