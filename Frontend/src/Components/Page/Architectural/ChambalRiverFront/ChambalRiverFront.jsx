import './ChambalRiverFront.css';
import { useEffect, useState, useRef } from 'react';

const ITEM_SPACING = 380;
const AMPLITUDE = 90;
const SVG_H = 760;
const TOTAL_ITEMS = 16;
const TRACK_WIDTH = TOTAL_ITEMS * ITEM_SPACING;

function generateWavePath(totalWidth, h, amplitude, freq) {
    const cy = h / 2;
    const cp = freq * 0.36;
    let d = `M 0,${cy}`;
    const steps = Math.ceil(totalWidth / freq) + 2;
    for (let i = 0; i < steps; i++) {
        const x0 = i * freq;
        const xEnd = (i + 1) * freq;
        const yPeak = i % 2 === 0 ? cy - amplitude : cy + amplitude;
        const yNext = i % 2 === 0 ? cy + amplitude : cy - amplitude;
        d += ` C ${x0 + cp},${yPeak} ${xEnd - cp},${yPeak} ${xEnd},${cy}`;
        if (i + 1 < steps) {
            const xEnd2 = (i + 2) * freq;
            d += ` C ${xEnd + cp},${yNext} ${xEnd2 - cp},${yNext} ${xEnd2},${cy}`;
            i++;
        }
    }
    return d;
}

const wavePath = generateWavePath(TRACK_WIDTH * 2, SVG_H, AMPLITUDE, ITEM_SPACING);

const timelineData = [
    { title: "Barrage Garden Entry Plaza", img: "/East-Bank-1.jpg", position: "bottom" },
    { title: "Jawahar Ghat", img: "/West-Bank-1.jpg", position: "top" },
    { title: "Mukut Mahal ", img: "/East-Bank-2.png", position: "bottom" },
    { title: "Geeta Ghat", img: "/West-Bank-2.JPG", position: "top" },
    { title: "Chambal Mata Ghat", img: "/East-Bank-3.JPG", position: "bottom" },
    { title: "Shanti Ghat", img: "/West-Bank-3.JPG", position: "top" },
    { title: "ganesh Pole", img: "/East-Bank-4.JPG", position: "bottom" },
    { title: "Nandi ghat", img: "/West-Bank-4.JPG", position: "top" },
    { title: "Maru Ghat", img: "/East-Bank-5.JPG", position: "bottom" },
    { title: "Roshan Ghat", img: "/West-Bank-5.JPG", position: "top" },
    { title: "Jantar Mantar Ghat", img: "/East-Bank-6.JPG", position: "bottom" },
    { title: "Tiranga Ghat", img: "/West-Bank-6.JPG", position: "top" },
    { title: "Vishwamatri Ghat", img: "/East-Bank-7.JPG", position: "bottom" },
    { title: "Shaurya Ghat", img: "/West-Bank-7.JPG", position: "top" },
    { title: "Hadoti Ghat", img: "/East-Bank-8.JPG", position: "bottom" },
    { title: "Rajputana Ghat", img: "/West-Bank-8.JPG", position: "top" },
    { title: "Innovation", img: "/East-Bank-9.JPG", position: "bottom" },
    { title: "Jugnu ghat", img: "/West-Bank-9.jpg", position: "top" },
    { title: "Landmark", img: "/East-Bank-10.JPG", position: "bottom" },
    { title: "Hathi ghat", img: "/West-Bank-10.JPG", position: "top" },
    { title: "Legacy", img: "/East-Bank-11.JPG", position: "bottom" },
    { title: "Balaji Ghat", img: "/West-Bank-11.png", position: "top" },
    { title: "Resilience", img: "/East-Bank-12.jpg", position: "bottom" },
    { title: "Pride", img: "/West-Bank-12.JPG", position: "top" },
];

const ChambalRiverFront = () => {
    const splideRef = useRef(null);
    const typingSectionRef = useRef(null);
    const [visibleSections, setVisibleSections] = useState({ section1: false });

    useEffect(() => {
        let splideInstance = null;
        const initSplide = async () => {
            if (!splideRef.current) return;
            try {
                const { default: Splide } = await import('@splidejs/splide');
                await import('@splidejs/splide/dist/css/splide.min.css');
                splideInstance = new Splide(splideRef.current, {
                    perPage: 3, focus: 'center', type: 'loop',
                    arrows: true, pagination: false, gap: '1rem',
                    autoplay: true, interval: 3000, pauseOnHover: true,
                    speed: 800, easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    breakpoints: { 992: { perPage: 2, gap: '0.8rem' }, 768: { perPage: 1, gap: '0.5rem' } },
                });
                splideInstance.mount();
            } catch (err) { console.warn('Splide load failed:', err); }
        };
        initSplide();
        return () => { if (splideInstance) splideInstance.destroy(); };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const id = entry.target.getAttribute('data-section');
                    if (id) setVisibleSections(prev => ({ ...prev, [id]: entry.isIntersecting }));
                });
            },
            { threshold: 0.3 }
        );
        const el = typingSectionRef.current;
        if (el) observer.observe(el);
        return () => { if (el) observer.unobserve(el); };
    }, []);

    return (
        <>
            <div className="chambal-container">

                {/* ── Hero ── */}
                <div className="hero-section">
                    <div className="hero-image-container">
                        <img src="/ChambalRiverFront-Banner.JPG" alt="Chambal River Front" className="hero-image" />
                        <div className="hero-overlay">
                            <div className="hero-content">
                                <h1 className="hero-title">Chambal River Front</h1>
                                <p className="hero-subtitle">Innovative Spaces. Timeless Design.</p>
                                <button className="hero-cta">Watch Our Story</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Typing Section ── */}
                <section
                    ref={typingSectionRef}
                    data-section="section1"
                    className={`typing-section ${visibleSections.section1 ? 'is-visible' : ''}`}
                />

                {/* ── Tours + Timeline ── */}
                <div className="tours-section-main-container">
                    <div className="tours-section-container">
                        <div className="container-fluid">
                            <div className="row">
                                {[
                                    { src: "/ChambalRiverFront-New-1.jpeg", title: "Largest Marble Statue Of World" },
                                    { src: "/ChambalRiverFront-New-2.jpeg", title: "World's Largest Nandi Statue" },
                                    { src: "/ChambalRiverFront-New-3.jpeg", title: "Biggest Face Mask Architecture of the World" },
                                ].map((box, i) => (
                                    <div className="col-4" key={i}>
                                        <div className="tours-section-Box">
                                            <img src={box.src} alt={box.title} />
                                            <div>
                                                <div className="tours-section-Box-title">{box.title}</div>
                                                <div className="tours-section-Box-desc">ChambalRiverFront</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ── Timeline ── */}
                    <section className="tours-section">
                        <div className="Futura-Line-container">
                            <div className="Futura-Line">
                                <div className="timeline-scroll-wrapper">
                                    <div
                                        className="timeline-track"
                                        style={{
                                            width: `${TRACK_WIDTH * 2}px`,
                                            animationDuration: `${TOTAL_ITEMS * 3}s`,
                                            '--scroll-dist': `-${TRACK_WIDTH}px`,
                                        }}
                                    >
                                        <svg
                                            className="timeline-wave-svg"
                                            viewBox={`0 0 ${TRACK_WIDTH * 2} ${SVG_H}`}
                                            preserveAspectRatio="none"
                                            style={{ width: `${TRACK_WIDTH * 2}px`, height: `${SVG_H}px` }}
                                        >
                                            <defs>
                                                <linearGradient id="tlWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                                    <stop offset="0%" stopColor="#42b0e7" stopOpacity="0.20" />
                                                    <stop offset="10%" stopColor="#55b7e7" stopOpacity="0.70" />
                                                    <stop offset="100%" stopColor="#4fa9d6" stopOpacity="0.20" />
                                                </linearGradient>
                                            </defs>
                                            <path d={wavePath} stroke="url(#tlWaveGrad)" strokeWidth="30" fill="none" />
                                        </svg>

                                        <TimelineItems items={timelineData} prefix="main" />
                                        <TimelineItems items={timelineData} prefix="dup" extraStyle={{ left: `${TRACK_WIDTH}px` }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

/* ── Timeline Items Component ── */
const TimelineItems = ({ items, prefix, extraStyle = {} }) => {
    const half = SVG_H / 2;
    return (
        <div
            className={`timeline-items-container ${prefix === 'dup' ? 'duplicate' : ''}`}
            style={{ width: `${TRACK_WIDTH}px`, height: `${SVG_H}px`, ...extraStyle }}
        >
            {items.map((item, idx) => {
                const xPos = idx * ITEM_SPACING + ITEM_SPACING / 2;
                return (
                    <div
                        key={`${prefix}-${idx}`}
                        className={`timeline-point ${item.position}`}
                        style={{
                            left: `${xPos}px`,
                            height: `${half}px`,
                            top: item.position === 'bottom' ? `${half}px` : '0',
                        }}
                    >
                        <div className="timeline-content-box">
                            {item.year && <div className="timeline-year">{item.year}</div>}
                            {item.title && <div className="timeline-title-label">{item.title}</div>}
                            <div className="timeline-img-wrap">
                                {item.img
                                    ? <img src={item.img} alt={item.title || ''} className="timeline-img" loading="lazy" />
                                    : <div className="timeline-img-placeholder" />
                                }
                            </div>
                        </div>
                        <div className="timeline-connector" />
                        <div className="timeline-dot-wrap">
                            <div className="timeline-dot-ring" />
                            <div className="timeline-dot" />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ChambalRiverFront;