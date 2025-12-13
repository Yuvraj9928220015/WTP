import "./LandscapeArchitecture.css"

export default function LandscapeArchitecture() {
    const projects = [
        {
            id: 1,
            image: "/LandscapeArchitecture-8.jpg",
            title: "Riverfront, Kota",
            description: "A transformative project along the Chambal River that revitalizes the waterfront into a vibrant promenade for walking, leisure, and community gatherings—bringing life back to the river's edge.",
        },
        {
            id: 2,
            image: "/LandscapeArchitecture-9.jpg",
            title: " Heritage Street, Amritsar",
            description: "A pedestrian-friendly cultural corridor leading to the Golden Temple, this project recreates traditional facades and ambiance, celebrating the spiritual and architectural legacy of Punjab.",
        },
        {
            id: 3,
            image: "/LandscapeArchitecture-7.JPG",
            title: " City Park, Kota ",
            description: "An expansive green urban lung offering botanical trails, sculpture gardens, and open spaces—making it a destination for families, tourists, and fitness enthusiasts alike. ",
        },
        {
            id: 4,
            image: "/LandscapeArchitecture-1.jpg",
            title: " Jawahar Circle, Jaipur ",
            description: "Designed as Asia’s largest circular park, this space combines symmetry, green zones, and musical fountains to create a peaceful retreat in the heart of the city. ",
        },
        {
            id: 5,
            image: "/LandscapeArchitecture-10.jpg",
            title: "Peacock Garden, Jaipur ",
            description: "A garden conceptualized around India’s national bird, with flowing forms, topiary art, and water features creating a picturesque space for reflection and recreation",
        },
        {
            id: 6,
            image: "/LandscapeArchitecture-3.jpg",
            title: " 84-Kos Parikrama Marg ",
            description: "A sacred landscape development that revives the traditional pilgrimage route around Govardhan Parvat, integrating natural preservation with spiritual experience.",
        }
    ];
    return (
        <>
            <div className="landscape-container">
                {/* Hero Section */}
                <div className='About_container_image'>
                    <img
                        src="/LandscapeArchitecture-banner.JPG"
                        alt="Modern Architecture Interior Design"
                        loading="lazy"
                    />
                    <div className="image_overlay">
                        <div className="overlay_content">
                            <h1>LANDSCAPE ARCHITECTURE</h1>
                            <p>Transforming Land into Living Art </p>
                        </div>
                    </div>
                </div>

                {/* Nature Gallery */}
                <div className="gallery-section">
                    <div className='About-section-content'>
                        <div className='About-section-content_title'>Our firm is experienced in <br /> sustainable design</div>
                    </div>
                    <div className="gallery-grid">
                        <div className="gallery-item">
                            <img
                                src="/LandscapeArchitecture-1.jpg"
                                alt="Mountain Landscape"
                            />
                            <div className="gallery-overlay">
                                <h3>Reviving Riverfronts </h3>
                                <p>Transforming urban riverbanks into scenic, accessible public spaces that blend ecology with modern leisure.</p>
                            </div>
                        </div>
                        <div className="gallery-item">
                            <img
                                src="/LandscapeArchitecture-2.JPG"
                                alt="Forest Path"
                            />
                            <div className="gallery-overlay">
                                <h3>Designing Iconic Urban Parks </h3>
                                <p>Crafting landmark parks with geometric precision, water features, and immersive green experiences.</p>
                            </div>
                        </div>
                        <div className="gallery-item">
                            <img
                                src="/LandscapeArchitecture-3.jpg"
                                alt="Lake View"
                            />
                            <div className="gallery-overlay">
                                <h3>Celebrating Cultural Heritage </h3>
                                <p>Creating heritage streetscapes that honor tradition through architecture, materials, and pedestrian design. </p>
                            </div>
                        </div>
                        <div className="gallery-item">
                            <img
                                src="/LandscapeArchitecture-4.jpg"
                                alt="Desert Landscape"
                            />
                            <div className="gallery-overlay">
                                <h3>Building Contemporary City Parks </h3>
                                <p>Developing large-scale green zones that serve as recreational lungs for growing urban centers.</p>
                            </div>
                        </div>
                        <div className="gallery-item">
                            <img
                                src="/torandwar.jpg"
                                alt="Lake View"
                            />
                            <div className="gallery-overlay">
                                <h3>Toran Dwar, Jaipur</h3>
                                <p>Designing symbolic landscapes inspired by native motifs, wildlife, and seasonal aesthetics.</p>
                            </div>
                        </div>
                        <div className="gallery-item">
                            <img
                                src="/LandscapeArchitecture-7.JPG"
                                alt="Mountain Landscape"
                            />
                            <div className="gallery-overlay">
                                <h3>City Park, Kota </h3>
                                <p>Planning spiritually significant trails with ecological sensitivity and cultural reverence.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Reasons Section */}
                <div className="reasons-section">
                    <h2 className="section-title">Reasons For Choosing Us</h2>
                    <div className="reasons-grid">
                        <div className="reason-card">
                            <div className="reason-icon">🌿</div>
                            <h3>Creative Design</h3>
                            <p>Innovative landscape solutions that blend creativity with functionality</p>
                        </div>
                        <div className="reason-card">
                            <div className="reason-icon">🏔️</div>
                            <h3>Expert Vision</h3>
                            <p>Professional expertise in creating stunning outdoor environments</p>
                        </div>
                        <div className="reason-card">
                            <div className="reason-icon">🌳</div>
                            <h3>Sustainable Approach</h3>
                            <p>Environmentally conscious designs that preserve natural beauty</p>
                        </div>
                    </div>
                </div>

                {/* Featured Project Section */}
                <div className="featured-section-wrapper">
                    {/* Section Header */}
                    <div className="featured-container">
                        <div className="featured-header">
                            <h2 className="featured-title">Featured Projects</h2>
                            <div className="featured-divider"></div>
                            <p className="featured-subtitle">
                                Discover our most impactful landscape architecture projects that transform spaces into living experiences
                            </p>
                        </div>

                        {/* Projects Grid */}
                        <div className="featured-projects-grid">
                            {projects.map((project) => (
                                <div key={project.id} className="featured-project-card">
                                    <div className="featured-image-container">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="featured-image"
                                        />

                                        <div className="featured-overlay"></div>
                                    </div>

                                    <div className="featured-content">
                                        <h3 className="featured-project-title">
                                            {project.title}
                                        </h3>
                                        <p className="featured-project-description">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}