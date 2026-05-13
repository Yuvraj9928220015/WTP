import { useState, useEffect, useCallback, useRef } from "react";
import "./KotaCityTransformation.css"

/* =============================================
   DATA
   ============================================= */
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

/* ── Section 1: Rotaries & Junctions ── */
const rotariesData = [
    { id: 1, src: "/KotaCity-1.jpeg", title: "Aerodrome Circle", subtitle: "Miniature World Wonders" },
    { id: 2, src: "/KotaCity-2.jpeg", title: "Adalat Circle", subtitle: "Iconic Circles of Kota" },
    { id: 5, src: "/KotaCity-34.jpeg", title: "Ghatotkach Circle", subtitle: "Scenic River Gardens" },
    { id: 6, src: "/KotaCity-6.jpeg", title: "Ghodewala circle", subtitle: "Recreational Green Zones" },
    { id: 4, src: "/KotaCity-4.jpeg", title: "Sainik Circle", subtitle: "Efficient City Connectivity" },
    { id: 8, src: "/KotaCity-8.jpeg", title: "Ambedkar Circle", subtitle: "Modern Urban Junction" },
    { id: 7, src: "/KotaCity-7.jpeg", title: "Mayur Chowk", subtitle: "Heritage Water Body" },
    { id: 3, src: "/KotaCity-3.jpeg", title: "Boat Choraha", subtitle: "Landmarks & Icons" },
];

/* ── Section 2: Statues & Monuments ── */
const statuesData = [
    { id: 9, src: "/KotaCity-9.jpeg", title: "Maharana Pratap Statue", subtitle: "Infrastructure Marvel" },
    { id: 10, src: "/19.png", title: "Nakachungi Monument", subtitle: "Tech-Enabled Traffic" },
    { id: 11, src: "/KotaCity-11.jpeg", title: "Patan Screen Post", subtitle: "Seamless City Flow" },
    { id: 12, src: "/KotaCity-12.png", title: "Mahatma Gandhi, Pt Nehru, Sardar Patel Statue", subtitle: "Cultural Landmark" },
    { id: 13, src: "/KotaCity-13.jpeg", title: "Kirti Stambh", subtitle: "Lung of the City" },
    { id: 14, src: "/KotaCity-36.png", title: "Indira Gandhi Monument", subtitle: "World-Class Promenade" },
    { id: 15, src: "/KotaCity-39.png", title: "Knowledge is Freedom Statue", subtitle: "Artistic Open Museum" },
];

/* ── Section 3: Flyovers & Underpasses ── */
const flyoversData = [
    { id: 27, src: "/KotaCity-27.jpeg", title: "Aerodrome Circle & Underpass", subtitle: "Events & Culture Hub" },
    { id: 18, src: "/KotaCity-18.jpeg", title: "Goparya Baori Underpass", subtitle: "Events & Culture Hub" },
    { id: 21, src: "/KotaCity-21.png", title: "Anantpura Flyover", subtitle: "Panoramic City Views" },
    { id: 23, src: "/KotaCity-23.jpeg", title: "Antaghar Underpass", subtitle: "Events & Culture Hub" },
    { id: 25, src: "/KotaCity-25.png", title: "Top View Of Aerodrome Circle", subtitle: "Panoramic City Views" },
    { id: 16, src: "/KotaCity-16.jpeg", title: "Inside Goparya Baori Underpass", subtitle: "Panoramic City Views" },
    // { id: 17, src: "/KotaCity-17.jpeg", title: "Sports Complex", subtitle: "World-Class Facilities" },
    { id: 19, src: "/KotaCity-19.jpeg", title: "Underpass", subtitle: "Thrilling Experiences" },
    // { id: 20, src: "/KotaCity-20.jpeg", title: "Green Boulevard", subtitle: "Eco-Friendly Corridor" },
    { id: 22, src: "/KotaCity-22.jpeg", title: "Underpass", subtitle: "World-Class Facilities" },
    { id: 24, src: "/KotaCity-24.jpeg", title: "Underpass", subtitle: "Eco-Friendly Corridor" },
    // { id: 26, src: "/KotaCity-26.jpeg", title: "Sports Complex", subtitle: "World-Class Facilities" },
];

/* helper: split array into rows of N */
function chunkArray(arr, size) {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
        arr.slice(i * size, i * size + size)
    );
}

/* ── Highlight Cards Data ── */
const highlightCards = [
    {
        id: 1,
        src: "/KotaCity-29.png",
        title: "Saven Wonders Park",
        subtitle: "Iconic Circles of Kota",
    },
    {
        id: 2,
        src: "/KotaCity-30.jpeg",
        title: "Subhash Library",
        subtitle: "Efficient City Connectivity",
    },
    {
        id: 3,
        src: "/KotaCity-31.jpeg",
        title: "Swarn Mahal",
        subtitle: "Iconic Circles of Kota",
    },
    {
        id: 4,
        src: "/KotaCity-38.png",
        title: "Revival of Public Space",
        subtitle: "Efficient City Connectivity",
    },
];

/* ── CRF Section Data ── */
const crfData = [
    {
        id: 1,
        src: "/KotaCity-32.jpeg",
        tag: "Infrastructure",
        title: "Chambal River Front Development",
        desc: "A world-class riverfront promenade spanning kilometres along the Chambal, featuring heritage ghats, iconic sculptures, flood control systems, and lush green walkways that have transformed Kota's urban identity.",
    },
    {
        id: 2,
        src: "/KotaCity-33.jpeg",
        tag: "Smart City",
        title: "City Park",
        desc: "India's first traffic-light-free city initiative — an integrated network of flyovers, underpasses, and redesigned roundabouts enabling seamless movement for over 10 lakh daily commuters across Kota.",
    },
];

/* =============================================
   HOOKS
   ============================================= */
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

/* =============================================
   SVG ARROWS
   ============================================= */
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

/* =============================================
   SHARED SUB-COMPONENTS
   ============================================= */
function SectionHeading({ text, dark = false }) {
    return (
        <>
        </>
    );
}

/* Sub-section heading inside a light section */
function SubSectionHeading({ text }) {
    return (
        <div className="rp-subsection-heading-wrapper">
            <span className="rp-subsection-line" />
            <h3 className="rp-subsection-heading" dangerouslySetInnerHTML={{ __html: text }} />
            <span className="rp-subsection-line" />
        </div>
    );
}

function SliderControls({ current, total, onPrev, onNext, onDot, extraClass = "" }) {
    return (
        <div className={`kota-controls ${extraClass}`}>
            <button className="kota-btn" onClick={onPrev} aria-label="Previous">
                <ArrowLeft />
            </button>
            <div className="kota-dots">
                {Array.from({ length: total }).map((_, i) => (
                    <button
                        key={i}
                        className={`kota-dot-btn ${i === current ? "kota-dot-btn--active" : ""}`}
                        onClick={() => onDot(i)}
                        aria-label={`Slide ${i + 1}`}
                    />
                ))}
            </div>
            <button className="kota-btn" onClick={onNext} aria-label="Next">
                <ArrowRight />
            </button>
        </div>
    );
}

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

function StaticTimeline() {
    return (
        <div className="static-timeline-track">
            {allTimelineItems.map((item, i) => (
                <div key={item.year} className="tl-row-group">
                    <div className="timeline-node-group">
                        <div className="tl-card">
                            <div className="tl-dot-ring" />
                            <div className="tl-node-year">{item.year}</div>
                            <div className="tl-node-label">{item.label}</div>
                        </div>
                    </div>
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

/* =============================================
   CIRCLE CARD
   ============================================= */
function CircleCard({ item }) {
    const [hovered, setHovered] = useState(false);
    return (
        <div
            className="rp-card"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className={`rp-ring-outer ${hovered ? "rp-ring-outer--hovered" : ""}`}>
                <div className="rp-circle">
                    <img
                        src={item.src}
                        alt={item.title}
                        className={`rp-img ${hovered ? "rp-img--hovered" : ""}`}
                    />
                    <div className={`rp-circle-overlay ${hovered ? "rp-circle-overlay--visible" : ""}`} />
                </div>
            </div>
            <div className="rp-content">
                <h3 className="rp-title">{item.title}</h3>
                <p className="rp-subtitle">{item.subtitle}</p>
            </div>
        </div>
    );
}

function CircleGrid({ data }) {
    const rows = chunkArray(data, 3);
    return (
        <div className="rp-rows">
            {rows.map((row, rowIdx) => (
                <div className="rp-row" key={rowIdx}>
                    {row.map((item) => (
                        <CircleCard key={item.id} item={item} />
                    ))}
                </div>
            ))}
        </div>
    );
}

/* =============================================
   ROTARIES, JUNCTIONS & PARKS SECTION
   ============================================= */
function RotariesParksSection() {
    return (
        <section className="rp-section">
            <div className="rp-blob rp-blob--1" />
            <div className="rp-blob rp-blob--2" />

            <SectionHeading text="Rotaries, Junctions &amp; Parks of Kota" dark={false} />

            <div className="rp-subsection">
                <SubSectionHeading text="Rotaries &amp; Junctions" />
                <CircleGrid data={rotariesData} />
            </div>

            <div className="rp-subsection">
                <SubSectionHeading text="Statues &amp; Monuments" />
                <CircleGrid data={statuesData} />
            </div>

            <div className="rp-subsection">
                <SubSectionHeading text="Flyovers &amp; Underpasses" />
                <CircleGrid data={flyoversData} />
            </div>
        </section>
    );
}

/* =============================================
   HIGHLIGHT CARDS SECTION (Two-Column)
   ============================================= */
function HighlightCardsSection() {
    return (
        <section className="hc-section">
            <SectionHeading text="Rotaries, Junctions &amp; Parks of Kota" dark={false} />
            <div className="hc-grid">
                {highlightCards.map((card) => (
                    <div className="hc-card" key={card.id}>
                        <div className="hc-img-wrap">
                            <img src={card.src} alt={card.title} className="hc-img" />
                            <div className="hc-img-overlay" />
                        </div>
                        <div className="hc-text">
                            <h3 className="hc-title">{card.title}</h3>
                            <p className="hc-subtitle">{card.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

/* =============================================
   CRF SECTION — Redesigned
   ============================================= */
function CRFSection() {
    return (
        <section className="crf-section">
            {/* decorative blobs */}
            <div className="crf-blob crf-blob--1" />
            <div className="crf-blob crf-blob--2" />

            {/* heading */}
            <div className="crf-heading-wrap">
                <span className="crf-heading-line" />
                <h2 className="crf-heading">Key Transformations</h2>
                <span className="crf-heading-line" />
            </div>

            {/* cards grid */}
            <div className="crf-grid">
                {crfData.map((card) => (
                    <div className="crf-card" key={card.id}>
                        {/* image */}
                        <div className="crf-img-wrap">
                            <img src={card.src} alt={card.title} className="crf-img" />
                            <div className="crf-img-overlay" />
                            <span className="crf-tag">{card.tag}</span>
                        </div>

                        {/* text */}
                        <div className="crf-body">
                            <div className="crf-accent-bar" />
                            <h3 className="crf-title">{card.title}</h3>
                            <p className="crf-desc">{card.desc}</p>
                            <button className="crf-btn">
                                Learn More
                                <svg viewBox="0 0 24 24" fill="none" className="crf-btn-icon">
                                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

/* =============================================
   MAIN EXPORT
   ============================================= */
export default function KotaCityTransformation() {
    const { current, animClass, safeNext, safePrev, jumpTo } = useSlider(slides.length, 4000);
    const slide = slides[current];

    return (
        <>
            {/* ── Banner ── */}
            <div className="Kota-Banner">
                <img src="/Kota-1.jpeg" alt="Kota City" />
            </div>

            {/* ── Then & Now ── */}
            <section className="kota-section-2">
                <div className="kota-bg-glow kota-bg-glow--left" />
                <div className="kota-bg-glow kota-bg-glow--right" />

                <SectionHeading text="Kota: Then &amp; Now" dark={true} />

                <div className={`kota-slider ${animClass}`}>
                    <div className="kota-slide-panel kota-slide-panel--old">
                        <div className="kota-panel-label kota-panel-label--old">Earlier</div>
                        <img src={slide.oldImage} alt="Kota Earlier" className="kota-slide-img" />
                        <div className="kota-img-overlay kota-img-overlay--old" />
                    </div>

                    <div className="kota-badge">
                        <span className="kota-badge-text">OLD</span>
                        <div className="kota-badge-arrows">
                            <span className="kota-arrow kota-arrow--left">&#8592;</span>
                            <span className="kota-arrow kota-arrow--right">&#8594;</span>
                        </div>
                        <span className="kota-badge-text">NEW</span>
                    </div>

                    <div className="kota-slide-panel kota-slide-panel--new">
                        <div className="kota-panel-label kota-panel-label--new">Now</div>
                        <img src={slide.newImage} alt="Kota Now" className="kota-slide-img" />
                        <div className="kota-img-overlay kota-img-overlay--new" />
                    </div>
                </div>

                <div className="kota-content">
                    <div className="kota-content-col kota-content-col--old">
                        <ul className="kota-content-list">
                            {slide.oldPoints.map((point, i) => (
                                <li key={i} className="kota-content-item kota-content-item--old">{point}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="kota-content-divider">
                        <div className="kota-divider-line" />
                        <span className="kota-divider-icon">⟷</span>
                        <div className="kota-divider-line" />
                    </div>
                    <div className="kota-content-col kota-content-col--new">
                        <ul className="kota-content-list">
                            {slide.newPoints.map((point, i) => (
                                <li key={i} className="kota-content-item kota-content-item--new">{point}</li>
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

            {/* ── CRF Section — Redesigned ── */}
            <CRFSection />

            {/* ── Rotaries, Junctions & Parks (3 sub-sections) ── */}
            <RotariesParksSection />

            {/* ── Highlight Cards (Two-Column) ── */}
            <HighlightCardsSection />
        </>
    );
}