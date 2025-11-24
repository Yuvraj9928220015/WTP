import { Facebook, Twitter, Linkedin, Check, Award, Users, Target, TrendingUp, Lightbulb, Clock } from 'lucide-react';
import './Team.css';

export default function Team() {
    const whyChooseUs = [
        {
            icon: <Award size={32} />,
            title: "EXPERIENCED TEAM",
            description: "Our team brings decades of combined experience in architecture and design innovation."
        },
        {
            icon: <Users size={32} />,
            title: "PROFESSIONAL",
            description: "We maintain the highest standards of professionalism in every project we undertake."
        },
        {
            icon: <Target size={32} />,
            title: "EXPERT STAFF",
            description: "Each team member is a specialist in their field, ensuring quality outcomes."
        },
        {
            icon: <TrendingUp size={32} />,
            title: "FAST RESPONSE",
            description: "Quick turnaround times without compromising on quality or attention to detail."
        },
        {
            icon: <Lightbulb size={32} />,
            title: "INNOVATIVE IDEAS",
            description: "We bring fresh perspectives and creative solutions to every challenge."
        },
        {
            icon: <Clock size={32} />,
            title: "ON TIME DELIVERY",
            description: "Committed to delivering projects on schedule, every time."
        },
    ];

    const teamMembers = [
        // Management
        {
            id: 1,
            name: "Mrs. Ruchi Bartaria",
            image: "/Ruchi-Bartaria.png",
            category: "Management Team",
            description: "Vice Chairperson - Sincere Group of Companies",
        },
        {
            id: 2,
            name: "Ms. Ashmita Bartaria",
            image: "/Ashmita-Bartaria.png",
            category: "Management Team",
            description: "Director - Sincere Group of Companies",
        },
        {
            id: 3,
            name: "Mr. Kamal Sharma",
            image: "/Kamal-Sharma.jpg",
            category: "Management Team",
            description: "Director - Sincere Group of Companies",
        },

        // Administration
        {
            id: 4,
            name: "Mr. Ram Chaudhary",
            image: "/Ram-Chaudhary.jpg",
            category: "Administration Team",
            description: "General Manager",
        },
        {
            id: 5,
            name: "Ms. Reena Jangid",
            image: "/Reena.jpg",
            category: "Administration Team",
            description: "Manager - Admin & Marketing",
        },
        {
            id: 6,
            name: "Mr. Arvind Sharma",
            image: "/Arvind-Kumar.jpg",
            category: "Administration Team",
            description: "HR & IT Manager",
        },

        // Architecture Team
        {
            id: 7,
            name: "Mr. Shashank Jain",
            image: "/shashank-Jain.jpg",
            category: "Sincere Architect Team",
            description: "Head of Department",
        },
        // {
        //     id: 8,
        //     name: "Mr. Jaswant Singh",
        //     image: "/Jaswant-Singh.jpg",
        //     category: "Sincere Architect Team",
        //     description: "Senior Architect",
        // },
        {
            id: 9,
            name: "Mr. Shreyash Mehrotra",
            image: "/Shreyash-Mehrotra.jpg",
            category: "Sincere Architect Team",
            description: "Senior Architect",
        },
        // {
        //     id: 10,
        //     name: "Ms. Smita Vaidya",
        //     image: "/Smita-Vaidya.jpg",
        //     category: "Sincere Architect Team",
        //     description: "Senior Architect",
        // },
        {
            id: 11,
            name: "Ms. Simran Walia",
            image: "/Simran-Walia.png",
            category: "Sincere Architect Team",
            description: "Senior Architect",
        },
        // {
        //     id: 12,
        //     name: "Mr. Daya Ram Prajapat",
        //     image: "/Daya-Ram-Prajapat.jpg",
        //     category: "Sincere Architect Team",
        //     description: "Interior Designer",
        // },
        {
            id: 13,
            name: "Mr. Anoop Sharma",
            image: "/Anoop-Sharma.jpg",
            category: "Sincere Architect Team",
            description: "Graphics Designer",
        },
        // {
        //     id: 14,
        //     name: "Ms. Gulpsa Bano",
        //     image: "/Gulpsa-Bano.jpg",
        //     category: "Sincere Architect Team",
        //     description: "Architect",
        // },
        {
            id: 15,
            name: "Ms. Amisha Tak",
            image: "/Amisha-Talk.png",
            category: "Sincere Architect Team",
            description: "Architect",
        },
        {
            id: 16,
            name: "Mr. Gaurav Kumar Sutha",
            image: "/Gaurav-Suthar.jpg",
            category: "Sincere Architect Team",
            description: "Architect",
        },
        {
            id: 17,
            name: "Mr. Ankit Asiwal",
            image: "/ANKIT-ASIWAL.jpg",
            category: "Sincere Architect Team",
            description: "Architect",
        },
        {
            id: 18,
            name: "Ms. Harshita Jain",
            image: "/Harshita-Jain.jpg",
            category: "Sincere Architect Team",
            description: "Architect",
        },

        // Civil Engineering Department
        {
            id: 19,
            name: "Mr. Babu Lal Nayak",
            image: "/Babulal.jpg",
            category: "Civil Engineering Department",
            description: "Senior Structural Engineer",
        },
        {
            id: 22,
            name: "Mr. Mukesh Mathur",
            image: "/Mukesh-Mathur.jpg",
            category: "Civil Engineering Department",
            description: "Senior Civil Engineer",
        },
        {
            id: 20,
            name: "Mr. Ajay Singh Choudhary",
            image: "/Ajay-Chaudhary.jpg",
            category: "Civil Engineering Department",
            description: "Structural Engineer",
        },
        {
            id: 21,
            name: "Mr. Aditya Mathur",
            image: "/Aditya-Mathur.jpg",
            category: "Civil Engineering Department",
            description: "Civil Engineer",
        },
        // {
        //     id: 23,
        //     name: "Mr. Ravi Mahala",
        //     image: "/Ravi-Mahala.jpg",
        //     category: "Civil Engineering",
        //     description: "Civil Engineer",
        // },
        // {
        //     id: 24,
        //     name: "Mr. Sudarshan Morodia",
        //     image: "/Sudarshan-Morodia.jpg",
        //     category: "Civil Engineering",
        //     description: "Civil Engineer",
        // },

        // MEP Team
        {
            id: 25,
            name: "Mr. Rajesh Gupta",
            image: "/Rajesh-Gupta.jpg",
            category: "MEP Team",
            description: "Senior Electrical Engineer",
        },
        {
            id: 26,
            name: "Mr. Vivek Sharma",
            image: "/Vivek-Sharma.jpg",
            category: "MEP Team",
            description: "Senior MEP Engineer",
        },
        {
            id: 27,
            name: "Mr. Y.V.R. Murthy",
            image: "/YVR-Murthy.jpg",
            category: "MEP Team",
            description: "Senior MEP Engineer",
        },
        {
            id: 28,
            name: "Mr. Rahul Saini",
            image: "/Rahul-Saini.jpg",
            category: "MEP Team",
            description: "Electrical Engineer",
        },
    ];

    const categories = ["Management Team", "Administration Team", "Sincere Architect Team", "Civil Engineering Department", "MEP Team"];

    const groupedMembers = categories.map(category => ({
        category,
        members: teamMembers.filter(member => member.category === category)
    })).filter(group => group.members.length > 0);

    return (
        <>
            <div className="team-wrapper">
                {/* Hero Banner Section */}
                <div className="banner-section">
                    <img
                        src="/Team-Banner.jpg"
                        alt="About Us Banner"
                        className="banner-image"
                    />
                    <div className="banner-overlay">
                        <div className="banner-content">
                            <h1 className="overlayTitle">Our Team</h1>
                        </div>
                    </div>
                </div>

                {/* We Are Umbra Section */}
                <div className="umbra-section">
                    <div className="umbra-container">
                        <div className="umbra-content">
                            <h2 className="umbra-title">About Sincere Architects</h2>
                            <div className="umbra-underline"></div>

                            <p className="umbra-text">
                                Sincere Architects, established in 1990 by Founder Chairman and Principal Designer Mr. Anoop Bartaria, is a premier institution in Architecture,
                                Urban Development, and Interior Design. With over 1000 projects across India, Sincere serves as a consultant to multiple state governments and
                                has earned numerous national architectural awards.
                            </p>

                            <p className="umbra-text">
                                Renowned for transforming cities with timeless and iconic projects, Sincere boasts a strong in-house team of architects and engineers with
                                expertise across diverse sectors including Hospitality, Residential, Commercial, Educational, Institutional, Healthcare, and Urban Infrastructure.
                            </p>

                            <p className='umbra-text'>
                                Driven by technical excellence, research, and innovation, Sincere continues to set benchmarks in design and execution across the country.
                            </p>

                            <div className="ceo-quote">
                                <h3 className="quote-title">About Dr Anoop Bartaria</h3>
                                <h4 className='About-quote-title'>The Chairman, & the Principal Architect</h4>
                                <p className="quote-text">
                                    Dr. Anoop Bartaria is a visionary architect whose designs have transformed cities and are studied in leading institutions. A sculptor,
                                    painter, structural engineer, and poet, he holds an Honorary Doctorate in Architecture and has received numerous national awards.
                                </p>
                                <p className="quote-text">
                                    As Chairman of the Sincere Group of Companies and World Trade Park, Jaipur—India's largest mall—he continues to redefine urban architecture.
                                    His journey is featured in The Times of India book "Architectural Legacy of Anoop Bartaria," with a foreword by the President of India.
                                </p>
                            </div>
                        </div>

                        <div className="umbra-image-wrapper">
                            <img
                                src="/Dr-Anoop-Bartaria.jpg"
                                alt="ANOOP BARTARIA"
                                className="umbra-ceo-image"
                            />
                        </div>
                    </div>
                </div>

                {/* Meet Our Team Section */}
                <div className="meet-team-section">
                    <div className="meet-team-container">
                        <div className="meet-team-header">
                            <h2 className="meet-team-title">MEET OUR TEAM</h2>
                            <div className="meet-team-underline"></div>
                        </div>

                        {groupedMembers.map((group, groupIndex) => (
                            <div key={groupIndex} className="team-category-section">
                                <h3 className="team-category-title">{group.category}</h3>

                                <div className="team-members-grid">
                                    {group.members.map((member) => (
                                        <div key={member.id} className="team-member-card">
                                            <div className="team-member-image-wrapper">
                                                <img
                                                    src={member.image}
                                                    alt={member.name}
                                                    className="team-member-image"
                                                />
                                                <div className="team-member-overlay">
                                                    <div className="team-social-icons">
                                                        <a href="#" className="team-social-icon">
                                                            <Facebook size={18} />
                                                        </a>
                                                        <a href="#" className="team-social-icon">
                                                            <Twitter size={18} />
                                                        </a>
                                                        <a href="#" className="team-social-icon">
                                                            <Linkedin size={18} />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="team-member-info">
                                                <h3 className="team-member-name">{member.name}</h3>
                                                <p className="team-member-role">{member.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}