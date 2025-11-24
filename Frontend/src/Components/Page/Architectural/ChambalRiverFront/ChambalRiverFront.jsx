import './ChambalRiverFront.css';

const ChambalRiverFront = () => {
    return (
        <>
            <div className="chambal-container">
                <div className="hero-section">
                    <div className="hero-image-container">
                        <img src="/ChambalRiverFront-Banner.JPG" alt="Modern Architecture Interior Design" className="hero-image" />
                        <div className="hero-overlay">
                            <div className="hero-content">
                                <h1 className="hero-title">Chambal River Front</h1>
                                <p className="hero-subtitle">Innovative Spaces. Timeless Design. </p>
                                <button className="hero-cta">Watch Our Story</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Route Selection Section */}
                <section className="route-section">
                    <div className="container">
                        <h2 className="section-title">Chambal River Front</h2>
                    </div>
                </section>

                {/* Tours Grid with Flowing Design */}
                <section className="tours-section">
                    <div className="tours-container">
                        <svg className="flow-svg" viewBox="0 0 1200 1500" xmlns="http://www.w3.org/2000/svg">
                            <path
                                className="flow-path"
                                d="M100 200 Q300 150 500 250 T900 200 Q1100 250 1000 400 T600 500 Q400 550 500 700 T800 750 Q1000 800 900 950 T500 1000 Q300 1050 400 1200"
                            />
                        </svg>

                        {/* Elbrus Tour - Left Side */}
                        <div className="tour-card left">
                            <div className="tour-image elbrus-image"></div>
                            <div className="tour-content">
                                <h3 className="tour-title">aliquid necessitatibu</h3>
                                <p className="tour-description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Eos exercitationem maiores suscipit quas esse consequuntur,
                                    non aliquid necessitatibus eligendi qui, commodi adipisci quam,
                                    consectetur distinctio? Ipsum accusamus dolorum possimus veniam.
                                </p>
                                <button className="btn-tour">aliquid necessitatibus</button>
                            </div>
                        </div>

                        {/* Crimea Tour - Right Side */}
                        <div className="tour-card right">
                            <div className="tour-image crimea-image"></div>
                            <div className="tour-content">
                                <h3 className="tour-title">aliquid necessitatibus eligendi</h3>
                                <p className="tour-description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Eos exercitationem maiores suscipit quas esse consequuntur,
                                    non aliquid necessitatibus eligendi qui, commodi adipisci quam,
                                    consectetur distinctio? Ipsum accusamus dolorum possimus veniam.
                                </p>
                                <button className="btn-tour">aliquid necessitatibus</button>
                            </div>
                        </div>

                        {/* Altai Tour - Left Side */}
                        <div className="tour-card center">
                            <div className="tour-image altai-image"></div>
                            <div className="tour-content">
                                <h3 className="tour-title">aliquid necessitatibus eligendi</h3>
                                <p className="tour-description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Eos exercitationem maiores suscipit quas esse consequuntur,
                                    non aliquid necessitatibus eligendi qui, commodi adipisci quam,
                                    consectetur distinctio? Ipsum accusamus dolorum possimus veniam.
                                </p>
                                <button className="btn-tour">aliquid necessitatibus</button>
                            </div>
                        </div>

                        {/* <div className="tour-card right">
                        <div className="tour-image aliquid-image"></div>
                        <div className="tour-content">
                            <h3 className="tour-title">aliquid necessitatibus eligendi</h3>
                            <p className="tour-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Eos exercitationem maiores suscipit quas esse consequuntur,
                                non aliquid necessitatibus eligendi qui, commodi adipisci quam,
                                consectetur distinctio? Ipsum accusamus dolorum possimus veniam.
                            </p>
                            <button className="btn-tour">aliquid necessitatibus</button>
                        </div>
                    </div> */}

                    </div>
                </section>
            </div>
        </>
    );
};

export default ChambalRiverFront;