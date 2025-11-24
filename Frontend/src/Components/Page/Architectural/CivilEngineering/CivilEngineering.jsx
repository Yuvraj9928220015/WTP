import React from 'react';
import './CivilEngineering.css';

export default function CivilEngineering() {
    const projects = [
        {
            id: 1,
            title: "Precision in Structural Engineering",
            description: "At Sincere Architects, structural integrity is non-negotiable. Our civil engineering team applies advanced modeling techniques and rigorous material analysis to ensure that every structure stands the test of time. From high-rise buildings to large-scale commercial complexes, we combine traditional engineering wisdom with cutting-edge simulation tools to design resilient, earthquake-resistant, and future-proof foundations and superstructures. ",
            image: "/Civil-Detail-1.jpg",
        },
        {
            id: 2,
            title: " Seamless Integration of Utilities and Infrastructure ",
            description: "We believe that true engineering excellence lies in the harmony between architecture and infrastructure. Our civil engineers work in tandem with MEP and architectural teams to ensure seamless integration of services—whether it's water drainage systems, electrical layouts, or vertical transportation shafts. This approach reduces rework, enhances efficiency, and optimizes space usage throughout the project lifecycle. ",
            image: "/Civil-Detail-2.jpg",
        },
        {
            id: 3,
            title: "Commitment to Green and Sustainable Construction",
            description: "Our projects are designed not just to meet today’s needs but to preserve tomorrow’s resources. We prioritize the use of eco-friendly materials, rainwater harvesting systems, efficient waste management protocols, and solar-enabled solutions wherever applicable. Many of our developments adhere to IGBC and GRIHA green building standards, showcasing our leadership in sustainable civil engineering.",
            image: "/Civil-Detail-3.jpg",
        },
        {
            id: 4,
            title: "Innovation-Driven Project Execution ",
            description: "Our civil engineering division is powered by innovation—from deploying BIM (Building Information Modeling) for accurate planning and clash detection to using smart construction methods like precast and modular building techniques. We adopt digital project management tools to ensure real-time tracking, on-time delivery, and cost control across all phases. Our focus on technology-backed execution has helped us consistently exceed industry benchmarks.",
            image: "Civil-Detail-4.jpg",
        }
    ];

    return (
        <>
            <div className='Civi-Engineering-Container'>
                <div className='About_container_image'>
                    <img
                        src="./public/Civil-Banner.jpg"
                        alt="Modern Architecture Interior Design"
                        loading="lazy"
                    />
                    <div className="image_overlay">
                        <div className="overlay_content">
                            <h1>Civil Engineering & MEP</h1>
                            <div className="completed-projects-container-des">
                                <p>
                                    At Sincere Architects, our Civil Engineering and MEP divisions are the backbone of
                                    our cutting-edge, sustainable, and smart infrastructure solutions. Every project we
                                    undertake reflects our dedication to precision engineering, energy efficiency, and
                                    future-ready technologies.
                                </p>
                            </div>
                            <button>Get Started</button>
                        </div>
                    </div>
                </div>
                <div className="completed-projects-container">
                    <div className="projects-header">
                        <p className="sub-heading">Our Expertise</p>
                    </div>

                    <div className="projects-grid">
                        {projects.map((project, index) => (
                            <div key={project.id} className={`Civi-Engineering-card ${index % 2 === 0 ? 'left-layout' : 'right-layout'}`}>
                                <div className="project-image">
                                    <img src={project.image} alt={project.title} />
                                </div>

                                <div className="project-content">
                                    <h3 className="Civi-Engineering-project-title">{project.title}</h3>
                                    <p className="Civi-Engineering-project-description">{project.description}</p>

                                    <button className="learn-more-btn">
                                        Learn more →
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}