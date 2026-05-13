import React from 'react';
import './Lllumination.css';

const Illumination = () => {
    const projects = [
        {
            id: 1,
            title: "Replica of the Leaning Tower of PISA at Kota",
            image: "New-38.jpeg",
            // category: "Commercial Architecture",
            // description: "This project brought the banks of the Chambal River to life with soft glows and dramatic spotlights, attracting locals and tourists alike for evening strolls and vibrant cityscapes."
        },
        {
            id: 2,
            title: "Overbrige at City Park, Kota",
            image: "Illuminations-5.jpg",
            // category: "Interior Design",
            // description: "From pathways to water bodies and installations, every corner of City Park is now an experience, thanks to immersive, themed illumination that adapts to nature's rhythm."
        },
        {
            id: 3,
            title: "Panch Batti Choraha, Jaipur",
            image: "New-37.jpeg",
            // category: "Residential",
            // description: "Streets, intersections, and historic zones across Jaipur have been transformed with ambient and functional lighting, enhancing both safety and the city's rich cultural identity at night."
        },
        {
            id: 4,
            title: " Fountain Show, Chambal River Front, Kota ",
            image: "Illuminations-8.jpg",
            // category: "Commercial Architecture",
            // description: "Majestic palace illumination highlighting architectural details with warm golden lighting that celebrates the rich heritage and grandeur."
        },
        {
            id: 5,
            title: "LED Garden, City Park, Kota",
            image: "Illuminations-9.jpg",
            // category: "Commercial Architecture",
            // description: "Contemporary building facade with dynamic LED lighting systems creating stunning visual displays and energy-efficient solutions."
        },
        {
            id: 6,
            title: "Nayapura Garden, Kota",
            image: "Illuminations-10.jpg",
            // category: "Public Space",
            // description: "Cultural hub with artistic lighting design that reflects the local art and culture through innovative illumination techniques."
        },
        {
            id: 7,
            title: "LED Garden, City Park, Kota",
            image: "Illuminations-11.jpg",
            // category: "Landscape",
            // description: "Outdoor pavilion with integrated landscape lighting creating magical evening atmospheres for community gatherings."
        },
        {
            id: 8,
            title: "LED Garden, City Park, Kota",
            image: "Illuminations-12.jpg",
            // category: "Heritage",
            // description: "Ancient fort walls brought to life with respectful illumination that preserves historical integrity while adding modern appeal."
        },
        {
            id: 9,
            title: "Lions Fountain, Kota",
            image: "Illuminations-13.jpg",
            // category: "Public Space",
            // description: "Central plaza with interactive lighting installations that respond to pedestrian movement and seasonal celebrations."
        },
        {
            id: 10,
            title: " Mukut Mahal, Kota",
            image: "Illuminations-14.jpg",
            // category: "Residential",
            // description: "High-rise residential building with sophisticated facade lighting that enhances the urban skyline while providing functional illumination."
        },
        {
            id: 11,
            title: " Gobaria Baodi Underpass, Kota",
            image: "Illuminations-15.jpg",
            // category: "Commercial",
            // description: "Vibrant commercial area with themed lighting that creates an inviting atmosphere for shopping and entertainment activities."
        },
        {
            id: 12,
            title: "Cafeteria at City Park, Kota",
            image: "Illuminations-16.jpg",
            // category: "Landscape",
            // description: "Scenic waterfront with gentle lighting that reflects beautifully on water surfaces, creating serene evening experiences."
        },
        {
            id: 13,
            title: "Lions Fountain, Kota",
            image: "Illuminations-17.jpg",
            // category: "Institutional",
            // description: "University campus with smart lighting solutions that provide safety, wayfinding, and aesthetic enhancement for students."
        },
        {
            id: 14,
            title: "Glass House, City Park Kota",
            image: "Illuminations-18.jpg",
            // category: "Hospitality",
            // description: "Luxury hotel with elegant exterior lighting design that creates a welcoming ambiance for guests and enhances brand identity."
        },
        {
            id: 15,
            title: "Triangular 3D screens, Kota",
            image: "Illuminations-19.jpg",
            // category: "Religious",
            // description: "Sacred temple with reverent lighting that highlights architectural spirituality while maintaining peaceful evening atmosphere."
        },
        {
            id: 16,
            title: " Treeman, Kota",
            image: "Illuminations-20.jpg",
            // category: "Infrastructure",
            // description: "Iconic bridge with dramatic lighting that serves as a landmark while providing essential nighttime navigation for commuters."
        },
        {
            id: 17,
            title: "Duck Pond, City Park, Kota",
            image: "Illuminations-21.jpg",
            // category: "Commercial",
            // description: "Modern office building with dynamic lighting systems that reflect corporate values and create impressive nighttime presence."
        },
        {
            id: 19,
            title: "City Park Entry Gate, Kota",
            image: "Illuminations-23.jpg",
            // category: "Sports",
            // description: "Stadium exterior with high-performance lighting for events while maintaining neighborhood-friendly illumination during regular hours."
        },
        {
            id: 20,
            title: "City Park Entry Gate, Kota",
            image: "Illuminations-24.jpg",
            // category: "Events",
            // description: "Large-scale convention facility with versatile lighting systems that adapt to different events and create memorable experiences."
        },
        {
            id: 21,
            title: "Adalat Circle, Kota",
            image: "Adalat-Circle.JPG",
            // category: "Landscape",
            // description: "Private garden spaces with subtle lighting that enhances natural beauty while providing security and usability after dark."
        },
        {
            id: 22,
            title: "Pattan Screen Post, Kota",
            image: "Illuminations-26.jpg",
            // category: "Transportation",
            // description: "Public transit hub with efficient lighting design that ensures safety, clear signage, and architectural appeal for daily commuters."
        }
    ];

    return (
        <>
            <div className='illumination-container'>
                <div className="monuments-header">
                    <img
                        src="Illuminations.Banner.JPG"
                        alt="Modern Architecture Interior Design"
                        className="header-image"
                    />
                    <div className="header-overlay">
                        <div className="header-content">
                            <h1>Illuminations</h1>
                            <p>breathtaking views created with the cascading of lights</p>
                        </div>
                    </div>
                </div>
                <div className="illumination-container-fluid">
                    <div className='illumination-container-main'>
                        <div className='about-section-content'>
                            <div className='about-section-content-title'>Our Landmark <br /> Illumination Projects</div>
                            <div className='about-section-description'>
                                <div>At Sincere Architects, illumination is not just about lighting up spaces—it's about
                                    <b> bringing life and beauty</b> to structures, landscapes, and public spaces through
                                    thoughtful, aesthetic, and sustainable lighting design.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-container">
                        {projects.map((project, index) => (
                            <div key={project.id + index} className="grid-item">
                                <div className="project-image-wrapper">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="project-image"
                                        loading="lazy"
                                    />
                                    <div className="project-info-overlay">
                                        <h3 className="project-title">{project.title}</h3>
                                        <span className="project-category">{project.category}</span>
                                        <p className="project-description">{project.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    );
};

export default Illumination;