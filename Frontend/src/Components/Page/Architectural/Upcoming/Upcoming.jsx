import './Upcoming.css';

const servicesData = [
    {
        id: 1,
        title: 'Architectural Design',
        description: 'We work closely with clients to gain an understanding of your desires and needs, both the philosophical and the practical.',
        imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        altText: 'A modern architectural design of a house exterior.',
    },
    {
        id: 2,
        title: 'Interior Design',
        description: 'Our team crafts beautiful and functional interior spaces that reflect your personal style and enhance your daily life.',
        imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        altText: 'A stylish and modern living room interior.',
    },
    {
        id: 3,
        title: 'Custom Residential',
        description: 'From dream homes to unique renovations, we specialize in creating custom residential spaces tailored to you.',
        imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        altText: 'A large, beautiful custom-built residential house.',
    },
    {
        id: 4,
        title: 'Sustainable Projects',
        description: 'We focus on eco-friendly materials and energy-efficient designs to create sustainable.',
        imageUrl: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        altText: 'Green building materials and plants symbolizing sustainable design.',
    },
    {
        id: 5,
        title: 'Commercial Spaces',
        description: 'Designing innovative and productive commercial environments for businesses of all sizes.',
        imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        altText: 'A modern and open-plan office commercial space.',
    },
    {
        id: 6,
        title: 'Urban Planning',
        description: 'Shaping the future of cities with thoughtful and community-focused urban planning strategies.',
        imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        altText: 'An aerial view of a city grid representing urban planning.',
    }
];


export default function Upcoming() {
    return (
        <>
            <div className='WorkGrid_container'>
                <div className='About_container_image'>
                    <img
                        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80"
                        alt="Modern Architecture Interior Design"
                        loading="lazy"
                    />
                    <div className="image_overlay">
                        <div className="overlay_content">
                            <h1>Upcoming Project</h1>
                            <p>Transform your space with our expert interior design services</p>
                        </div>
                    </div>
                </div>

                <div id='WorkGrid_main-container' className="container-fluid">
                    <div className='About-section-content'>
                        <p>The architecture studio</p>
                        <div className='About-section-content_title'>Our firm is experienced in <br /> sustainable design</div>
                    </div>

                    <div className="row">

                        <div className="col-lg-7 col-md-6 col-sm-12 col-12">
                            <div className="Upcoming-Project-Image">
                                <img src="./public/DSC_82.webp" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6 col-sm-12 col-12">
                            <div className='Upcoming-Project-Content'>
                                <div className="Upcoming-Project-Heading">The architecture studio</div>
                                <div className="Upcoming-Project-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi nam doloremque obcaecati voluptatum ratione voluptate.
                                    Quis amet beatae commodi? Praesentium commodi incidunt perferendis debitis adipisci! Numquam incidunt ut porro ducimus quis natus
                                    molestiae, quasi quo, aut unde doloremque delectus inventore.
                                </div>
                                <div className='Upcoming-Project-btn'>
                                    <button>Get Started</button>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/*  */}

                    <div className="slider-section">
                        <div className="conservation-container">
                            <div className="slider-header">
                                <h2 className="slider-title">Upcoming Project</h2>
                                <p className="slider-subtitle">Discover our latest conservation architecture projects that blend sustainability with innovative design</p>
                            </div>
                            <div className="Upcoming-slider-container">
                                <div className="slider-track">
                                    <div className="slider-item">
                                        <div className="slider-image">
                                            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Modern House" />
                                        </div>
                                        <div className="conservation-slider-content">
                                            <h3>Eco-Friendly Residence</h3>
                                            <p>Sustainable living with modern aesthetics and energy-efficient design solutions.</p>
                                        </div>
                                        <button>VIEW MORE</button>
                                    </div>
                                    <div className="slider-item">
                                        <div className="slider-image">
                                            <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80" alt="Green Building" />
                                        </div>
                                        <div className="conservation-slider-content">
                                            <h3>Green Commercial Space</h3>
                                            <p>Innovative workspace design that promotes productivity and environmental consciousness.</p>
                                        </div>
                                        <button>VIEW MORE</button>
                                    </div>
                                    <div className="slider-item">
                                        <div className="slider-image">
                                            <img src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Sustainable Architecture" />
                                        </div>
                                        <div className="conservation-slider-content">
                                            <h3>Heritage Conservation</h3>
                                            <p>Preserving historical architecture while integrating modern sustainable technologies.</p>
                                        </div>
                                        <button>VIEW MORE</button>
                                    </div>
                                    <div className="slider-item">
                                        <div className="slider-image">
                                            <img src="./public/DSC_81.webp" alt="Modern Interior" />
                                        </div>
                                        <div className="conservation-slider-content">
                                            <h3>Biophilic Design</h3>
                                            <p>Connecting people with nature through thoughtful interior and exterior design integration.</p>
                                        </div>
                                        <button>VIEW MORE</button>
                                    </div>
                                    <div className="slider-item">
                                        <div className="slider-image">
                                            <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Sustainable Building" />
                                        </div>
                                        <div className="conservation-slider-content">
                                            <h3>Smart Building Solutions</h3>
                                            <p>Technology-driven architecture that adapts to environmental conditions and user needs.</p>
                                        </div>
                                        <button>VIEW MORE</button>
                                    </div>
                                    <div className="slider-item">
                                        <div className="slider-image">
                                            <img src="./public/DSC_82.webp" alt="Modern Architecture" />
                                        </div>
                                        <div className="conservation-slider-content">
                                            <h3>Urban Renewal Project</h3>
                                            <p>Transforming urban landscapes with sustainable practices and community-focused design.</p>
                                        </div>
                                        <button>VIEW MORE</button>
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