import './InteriorDesigning.css';
import { FaCircle } from 'react-icons/fa';

export default function InteriorDesigning() {
    return (
        <>
            {/* ====== 1. BANNER SECTION ====== */}
            <header className='heroContainer'>
                <img
                    src="IMG_20211011_155233.JPG"
                    alt="Modern Architecture Interior Design"
                    loading="lazy"
                    className="bannerImage"
                />
                <div className="imageOverlay">
                    <div className="overlayContent">
                        <h1 className="overlayTitle">Interior Designing</h1>
                        <p className="overlaySubtitle">Immersive experiences</p>
                    </div>
                </div>
            </header>

            <main className="pageContainer">

                {/* ====== 2. TOP SECTION ====== */}
                <section className="contentSectionTop">

                    {/* Left Column */}
                    <div className="topLeftColumn">
                        <div className="textBlock">
                            <h2 className="mainTitleText">Timeless Aesthetics</h2>
                            <div className="buttonGroup">
                                <button className="btnSecondary">Explore</button>
                                <button className="btnSecondary">Learn More</button>
                            </div>
                        </div>
                        <div className="imageShowcase">
                            <div className="smallImageGrid">
                                <div className="imageCard imageCardSmall">
                                    <img src="Interior-4.JPG" alt="Minimalist Object 1" className="cardImage" />
                                </div>
                                <div className="imageCard imageCardSmall">
                                    <img src="Interior-2.jpg" alt="Minimalist Object 2" className="cardImage" />
                                </div>
                            </div>
                            <div className="imageCard imageCardLarge">
                                <img src="Interior-1.png" alt="Modern Sofa" className="cardImage" />
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="topRightColumn">
                        <div className="textBlock">
                            {/* <p className="subtitleText">TAILORED BY EXPERTS</p> */}
                            <h2 className="mainTitleText">Curated Designs</h2>
                            <p className="descriptionText text-dark">
                                Our design philosophy blends functionality with beauty. We believe every space should tell a story, reflecting the personality and lifestyle of those who inhabit it.
                            </p>
                        </div>
                        <div className="imageCard imageCardTall">
                            <img src="Interior-3.JPG" alt="Stylish Interior Detail" className="cardImage" />
                        </div>
                    </div>
                </section>

                <section>
                    <div className="">
                        <div className="imageCard imageCardTall">
                            <img src="Interior-5.JPG" alt="Stylish Interior Detail" className="cardImage" />
                        </div>
                    </div>
                </section>

                {/* ====== 3. MIDDLE SECTION ====== */}
                <section className="contentSectionMiddle">
                    <div className="imageCard imageCardMedium">
                        <img src="Interior-6.jpg" alt="Cozy Bedroom" className="cardImage" />
                    </div>
                    <div className="textBlock middleText">
                        <p className="subtitleText">HARMONIOUS DESIGN</p>
                        <h2 className="mainTitleText">Functional and Beautiful Spaces</h2>
                        <p className="descriptionText">Our philosophy is to create spaces that are not only aesthetically pleasing but also perfectly functional for your lifestyle.</p>
                    </div>
                </section>

                {/* ====== 4. BOTTOM SECTION ====== */}
                <section className="contentSectionBottom">
                    <div className="bottomLeftColumn">
                        <div className="textContent">
                            <h2 className="brandTitle">VARILYFIERE</h2>
                            <p className="descriptionText text-dark">
                                Furniture and decor that bring personality and comfort. <br /> Quality craftsmanship meets modern design.
                            </p>
                        </div>
                    </div>

                    <div className="bottomRightColumn">
                        <div className="imageCard imageCardExtraLarge">
                            <img src="Interior-7.jpg" alt="Modern Living Room" className="cardImage" />
                        </div>
                        <div className="imageCard imageCardExtraLarge">
                            <img src="Interior-8.jpg" alt="Stylish Chair" className="cardImage" />
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}