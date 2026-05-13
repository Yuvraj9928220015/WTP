import { useState, useEffect, useCallback, useRef } from "react";
import "./UrbanCityTransformation.css";

const slides = [
    {
        id: 1,
        oldImage: "/Kota-image-11.png",
        newImage: "/Kota-image-10.png",
        oldLabel: "Earlier",
        newLabel: "Now",
        oldPoints: ["No Effective Flood Control Mechanism"],
        newPoints: ["Flood Control with World Class Riverfront"],
    },
    {
        id: 2,
        oldImage: "/Kota-image-13.png",
        newImage: "/Kota-image-12.png",
        oldLabel: "Earlier",
        newLabel: "Now",
        oldPoints: ["Unutilised ghats"],
        newPoints: ["Emerging Tourism & Cultural Destination"],
    },
    {
        id: 3,
        oldImage: "/Kota-image-14.jpeg",
        newImage: "/Kota-image-15.jpeg",
        oldLabel: "Earlier",
        newLabel: "Now",
        oldPoints: ["Improper Traffic Management"],
        newPoints: ["India's First Traffic light free city"],
    },
    {
        id: 4,
        oldImage: "/Kota-image-16.jpeg",
        newImage: "/Kota-image-17.jpeg",
        oldLabel: "Earlier",
        newLabel: "Now",
        oldPoints: ["Limited Public Spaces & Obsolete infrastructure"],
        newPoints: ["Modern Flyovers & Underpasses"],
    },
];

const chambalSlides = [
    {
        images: [
            { src: "/Kota-image-10.png", label: "Aerial View" },
            { src: "/Kota-image-11.png", label: "Heritage Ghats" },
        ],
    },
    {
        images: [
            { src: "/Kota-image-12.png", label: "Iconic Sculptures" },
            { src: "/Kota-image-13.png", label: "Riverfront Promenade" },
        ],
    },
];

const parkSlides = [
    {
        images: [
            { src: "/Kota-image-13.png", label: "Lush Gardens" },
            { src: "/Kota-image-14.jpeg", label: "Oxygen Park" },
        ],
    },
    {
        images: [
            { src: "/Kota-image-15.jpeg", label: "Walking Trails" },
            { src: "/Kota-image-16.jpeg", label: "Recreational Zones" },
        ],
    },
];

/* ── All 4 timeline milestones ── */
const allTimelineItems = [
    { year: "2017", label: "Chambal Bridge" },
    { year: "2020", label: "Smart City Projects" },
    { year: "2023", label: "Riverfront Inauguration" },
    { year: "2025", label: "City Park Expansion" },
];

const trafficItems = [
    { img: "/Kota-image-18.jpeg", label: "Reduced Travel Time" },
    { img: "/Kota-image-19.jpeg", label: "Smart Urban Planning" },
    { img: "/Kota-image-20.jpeg", label: "Flyovers & Underpasses" },
    { img: "/Kota-image-21.jpeg", label: "Redesigned Roundabouts" },
];

function useSlider(length, autoDelay = 4000) {
    const [current, setCurrent] = useState(0);
    const [animClass, setAnimClass] = useState("");
    const currentRef = useRef(0);
    const animResetRef = useRef(null);

    const goTo = useCallback((index, dir = "next") => {
        clearTimeout(animResetRef.current);
        currentRef.current = index;
        setCurrent(index);
        setAnimClass(dir === "next" ? "slide-anim-next" : "slide-anim-prev");
        animResetRef.current = setTimeout(() => setAnimClass(""), 320);
    }, []);

    const safeNext = useCallback(() => {
        goTo((currentRef.current + 1) % length, "next");
    }, [goTo, length]);

    const safePrev = useCallback(() => {
        goTo((currentRef.current - 1 + length) % length, "prev");
    }, [goTo, length]);

    const jumpTo = useCallback((i) => {
        goTo(i, i > currentRef.current ? "next" : "prev");
    }, [goTo]);

    useEffect(() => {
        const timer = setInterval(safeNext, autoDelay);
        return () => clearInterval(timer);
    }, [safeNext, autoDelay]);

    return { current, animClass, safeNext, safePrev, jumpTo };
}

/* ── Arrow SVGs ── */
const ArrowLeft = () => (
    <svg viewBox="0 0 24 24" fill="none">
        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
const ArrowRight = () => (
    <svg viewBox="0 0 24 24" fill="none">
        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

/* ── Reusable Heading ── */
function SectionHeading({ text }) {
    return (
        <div className="UrbanCity-heading-wrapper">
            <span className="UrbanCity-heading-line" />
            <h2 className="UrbanCity-heading" dangerouslySetInnerHTML={{ __html: text }} />
            <span className="UrbanCity-heading-line" />
        </div>
    );
}

/* ── Reusable Controls ── */
function SliderControls({ current, total, onPrev, onNext, onDot, extraClass = "" }) {
    return (
        <div className={`UrbanCity-controls ${extraClass}`}>
            <button className="UrbanCity-btn" onClick={onPrev} aria-label="Previous">
                <ArrowLeft />
            </button>
            <div className="UrbanCity-dots">
                {Array.from({ length: total }).map((_, i) => (
                    <button
                        key={i}
                        className={`UrbanCity-dot-btn ${i === current ? "UrbanCity-dot-btn--active" : ""}`}
                        onClick={() => onDot(i)}
                        aria-label={`Slide ${i + 1}`}
                    />
                ))}
            </div>
            <button className="UrbanCity-btn" onClick={onNext} aria-label="Next">
                <ArrowRight />
            </button>
        </div>
    );
}

/* ── Dual Image Slider ── */
function DualSlider({ slides, autoDelay = 4000 }) {
    const { current, animClass, safeNext, safePrev, jumpTo } = useSlider(slides.length, autoDelay);
    const slide = slides[current];

    return (
        <div className="dual-slider-wrap">
            <div className={`dual-slider-row ${animClass}`}>
                {slide.images.map((img, i) => (
                    <div className="dual-slider-card" key={i}>
                        <img src={img.src} alt={img.label} />
                        <div className="dual-slider-overlay" />
                        <span className="dual-slider-label">{img.label}</span>
                    </div>
                ))}
            </div>
            <SliderControls
                current={current}
                total={slides.length}
                onPrev={safePrev}
                onNext={safeNext}
                onDot={jumpTo}
                extraClass="dual-slider-controls"
            />
        </div>
    );
}

/* ── NEW: Card Style Static Timeline ── */
function StaticTimeline() {
    return (
        <div className="static-timeline-track">
            {allTimelineItems.map((item, i) => (
                <div key={item.year} className="tl-row-group">
                    {/* Card Node */}
                    <div className="timeline-node-group">
                        <div className="tl-card">
                            <div className="tl-dot-ring" />
                            <div className="tl-node-year">{item.year}</div>
                            <div className="tl-node-label">{item.label}</div>
                        </div>
                    </div>

                    {/* Connector: line + chevron + line — hidden after last */}
                    {i < allTimelineItems.length - 1 && (
                        <div className="tl-connector" aria-hidden="true">
                            <div className="tl-conn-line" />
                            <span className="tl-chevron">&#8250;</span>
                            <div className="tl-conn-line" />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

/* ── MAIN COMPONENT ── */
export default function     UrbanCityTransformation() {
    const { current, animClass, safeNext, safePrev, jumpTo } = useSlider(slides.length, 4000);
    const slide = slides[current];

    return (
        <>
            {/* ── Banner ── */}
            <div className="UrbanCity-Banner">
                <img src="/Kota-image-9.jpeg" alt="UrbanCity City" />
                <div className="UrbanCity-image">
                    <img src="/Kota-image-1.png" alt="UrbanCity Logo" />
                </div>
            </div>

            {/* ── Then & Now ── */}
            <section className="UrbanCity-section-2">
                <div className="UrbanCity-bg-glow UrbanCity-bg-glow--left" />
                <div className="UrbanCity-bg-glow UrbanCity-bg-glow--right" />

                <SectionHeading text="UrbanCity: Then &amp; Now" />

                <div className={`UrbanCity-slider ${animClass}`}>
                    <div className="UrbanCity-slide-panel UrbanCity-slide-panel--old">
                        <div className="UrbanCity-panel-label UrbanCity-panel-label--old">Earlier</div>
                        <img src={slide.oldImage} alt="UrbanCity Earlier" className="UrbanCity-slide-img" />
                        <div className="UrbanCity-img-overlay UrbanCity-img-overlay--old" />
                    </div>

                    <div className="UrbanCity-badge">
                        <span className="UrbanCity-badge-text">OLD</span>
                        <div className="UrbanCity-badge-arrows">
                            <span className="UrbanCity-arrow UrbanCity-arrow--left">&#8592;</span>
                            <span className="UrbanCity-arrow UrbanCity-arrow--right">&#8594;</span>
                        </div>
                        <span className="UrbanCity-badge-text">NEW</span>
                    </div>

                    <div className="UrbanCity-slide-panel UrbanCity-slide-panel--new">
                        <div className="UrbanCity-panel-label UrbanCity-panel-label--new">Now</div>
                        <img src={slide.newImage} alt="UrbanCity Now" className="UrbanCity-slide-img" />
                        <div className="UrbanCity-img-overlay UrbanCity-img-overlay--new" />
                    </div>
                </div>

                <div className="UrbanCity-content">
                    <div className="UrbanCity-content-col UrbanCity-content-col--old">
                        <ul className="UrbanCity-content-list">
                            {slide.oldPoints.map((point, i) => (
                                <li key={i} className="UrbanCity-content-item UrbanCity-content-item--old">
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="UrbanCity-content-divider">
                        <div className="UrbanCity-divider-line" />
                        <span className="UrbanCity-divider-icon">⟷</span>
                        <div className="UrbanCity-divider-line" />
                    </div>
                    <div className="UrbanCity-content-col UrbanCity-content-col--new">
                        <ul className="UrbanCity-content-list">
                            {slide.newPoints.map((point, i) => (
                                <li key={i} className="UrbanCity-content-item UrbanCity-content-item--new">
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <SliderControls
                    current={current}
                    total={slides.length}
                    onPrev={safePrev}
                    onNext={safeNext}
                    onDot={jumpTo}
                />
            </section>
            {/* ── Chambal Riverfront & City Park ── */}
            <section className="chambal-section">

                {/* Chambal Riverfront */}
                <div id="chambal-block-1" className="chambal-block">
                    <div className="chambal-header">
                        <SectionHeading text="Chambal Riverfront Development" />
                        <p className="chambal-tagline">Reimagining the Banks of the Chambal</p>
                        <div className="chambal-stats-bar">
                            <span className="chambal-stat">
                                <span className="chambal-stat-icon">📏</span>
                                2.75 km Riverfront
                            </span>
                            <span className="chambal-stat-divider">|</span>
                            <span className="chambal-stat">
                                <span className="chambal-stat-icon">💰</span>
                                ₹1400 Cr Investment
                            </span>
                        </div>
                    </div>
                    <DualSlider slides={chambalSlides} autoDelay={4000} />
                </div>

                <div className="chambal-section-divider">
                    <div className="chambal-divider-line" />
                </div>

                {/* City Park */}
                <div id="chambal-block-2" className="chambal-block">
                    <div className="chambal-header">
                        <SectionHeading text="City Park Development" />
                        <p className="chambal-tagline">A Green Lung for UrbanCity</p>
                    </div>
                    <DualSlider slides={parkSlides} autoDelay={4500} />
                </div>

                <div className="chambal-section-divider">
                    <div className="chambal-divider-line" />
                </div>

                <div className="Traffic-Light">
                    <SectionHeading text="India's First Traffic &amp; Light Free City" />
                    <div className="UrbanCity-heading-wrapper">
                        <span className="UrbanCity-heading-line" />
                        <h2 className="UrbanCity-subheading">Seamless Mobility: Pollution Control</h2>
                        <span className="UrbanCity-heading-line" />
                    </div>
                    <div className="Traffic-Light-container">
                        <div className="traffic-grid">
                            {trafficItems.map((item, i) => (
                                <div className="Traffic-Light-Box" key={i}>
                                    <img src={item.img} alt={item.label} />
                                    <div className="Traffic-Light-Box-overlay" />
                                    <div className="Traffic-Light-Box-content">{item.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── Transformation Highlights — NEW Card Timeline ── */}
                <div className="chambal-timeline-wrap">
                    <div className="UrbanCity-heading-wrapper" style={{ marginBottom: "52px" }}>
                        <span className="UrbanCity-heading-line" />
                        <h2 className="UrbanCity-heading">Transformation Highlights</h2>
                        <span className="UrbanCity-heading-line" />
                    </div>
                    <StaticTimeline />
                </div>

            </section>


        </>
    );
}