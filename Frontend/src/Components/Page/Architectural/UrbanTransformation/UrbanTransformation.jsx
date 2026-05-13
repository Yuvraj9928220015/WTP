import React, { useState, useEffect, useRef, useCallback } from 'react';
import './UrbanTransformation.css';

// ─── CONFIG ───────────────────────────────────────────────
const AUTOPLAY_DELAY = 2000;
const TRANSITION_MS = 500;
const GAP = 20; // px gap between cards

function GallerySlider({ images, sectionId }) {
    const [visibleCount, setVisibleCount] = useState(3);
    const [offset, setOffset] = useState(0);
    const [animated, setAnimated] = useState(false);
    const [cardWidth, setCardWidth] = useState(0);
    const [dotIndex, setDotIndex] = useState(0);

    const viewportRef = useRef(null);
    const isPausedRef = useRef(false);
    const indexRef = useRef(0);
    const cardWidthRef = useRef(0);
    const visibleRef = useRef(3);

    const origLen = images.length;

    const cloneCountRef = useRef(visibleCount);
    cloneCountRef.current = visibleCount;

    const buildTripled = (vis) => [
        ...images.slice(origLen - vis),
        ...images,
        ...images.slice(0, vis),
    ];

    // ── Compute raw px offset from logical index ────────────
    const getOffset = useCallback((logicalIdx, cw, clones) => {
        const rawPos = logicalIdx + clones;
        return -((rawPos) * (cw + GAP));
    }, []);

    // ── Jump silently (no animation) ────────────────────────
    const jumpTo = useCallback((logicalIdx, cw, clones) => {
        indexRef.current = logicalIdx;
        setDotIndex(((logicalIdx % origLen) + origLen) % origLen);
        setAnimated(false);
        setOffset(getOffset(logicalIdx, cw, clones));
    }, [origLen, getOffset]);

    // ── Slide with animation ─────────────────────────────────
    const slideTo = useCallback((logicalIdx, cw, clones) => {
        indexRef.current = logicalIdx;
        setDotIndex(((logicalIdx % origLen) + origLen) % origLen);
        setAnimated(true);
        setOffset(getOffset(logicalIdx, cw, clones));
    }, [origLen, getOffset]);

    // ── Measure viewport → derive cardWidth ─────────────────
    const measure = useCallback(() => {
        if (!viewportRef.current) return;
        const vw = window.innerWidth;

        let vis = 3;
        if (vw < 580) vis = 1;
        else if (vw < 900) vis = 2;

        const vpWidth = viewportRef.current.clientWidth;
        const cw = (vpWidth - GAP * (vis - 1)) / vis;

        visibleRef.current = vis;
        cardWidthRef.current = cw;

        setVisibleCount(vis);
        setCardWidth(cw);

        // Immediately reposition without animation so there's no jump
        jumpTo(indexRef.current, cw, vis);
    }, [jumpTo]);

    useEffect(() => {
        measure();
        const ro = new ResizeObserver(measure);
        if (viewportRef.current) ro.observe(viewportRef.current);
        return () => ro.disconnect();
    }, [measure]);

    // ── Handle infinite‑loop wrap ────────────────────────────
    const handleTransitionEnd = useCallback(() => {
        const cur = indexRef.current;
        const cw = cardWidthRef.current;
        const clones = visibleRef.current;

        if (cur >= origLen) {
            jumpTo(cur - origLen, cw, clones);
        } else if (cur < 0) {
            jumpTo(cur + origLen, cw, clones);
        }
    }, [origLen, jumpTo]);

    // ── Autoplay ─────────────────────────────────────────────
    useEffect(() => {
        const tick = () => {
            if (isPausedRef.current) return;
            if (cardWidthRef.current === 0) return;
            slideTo(
                indexRef.current + 1,
                cardWidthRef.current,
                visibleRef.current,
            );
        };
        const id = setInterval(tick, AUTOPLAY_DELAY);
        return () => clearInterval(id);
    }, [slideTo]);

    // ── Manual nav ───────────────────────────────────────────
    const prev = () => {
        if (cardWidthRef.current === 0) return;
        slideTo(indexRef.current - 1, cardWidthRef.current, visibleRef.current);
    };
    const next = () => {
        if (cardWidthRef.current === 0) return;
        slideTo(indexRef.current + 1, cardWidthRef.current, visibleRef.current);
    };

    // ── Dot nav ──────────────────────────────────────────────
    const goToDot = (di) => {
        if (cardWidthRef.current === 0) return;
        slideTo(di, cardWidthRef.current, visibleRef.current);
    };

    // ── Build tripled array for render ───────────────────────
    const tripled = buildTripled(visibleCount);
    const totalCards = tripled.length;
    const trackWidth = totalCards * (cardWidth + GAP) - GAP;

    return (
        <div
            className="gs-root"
            id={sectionId}
            onMouseEnter={() => { isPausedRef.current = true; }}
            onMouseLeave={() => { isPausedRef.current = false; }}
        >
            <div className="gs-slider-row">

                {/* Prev */}
                <button className="gs-side-btn gs-side-btn--prev" onClick={prev} aria-label="Previous">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.5"
                            strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                {/* Viewport — clips the moving track */}
                <div className="gs-viewport" ref={viewportRef}>
                    <div
                        className="gs-track"
                        style={{
                            transform: `translateX(${offset}px)`,
                            transition: animated
                                ? `transform ${TRANSITION_MS}ms cubic-bezier(0.4,0,0.2,1)`
                                : 'none',
                            width: cardWidth > 0 ? `${trackWidth}px` : 'auto',
                            gap: `${GAP}px`,
                        }}
                        onTransitionEnd={handleTransitionEnd}
                    >
                        {tripled.map((img, i) => (
                            <div
                                className="gs-card"
                                key={i}
                                style={{ width: cardWidth > 0 ? `${cardWidth}px` : undefined }}
                            >
                                <div className="gs-img-wrap">
                                    <img src={img.url} alt={img.title} loading="lazy" />
                                    <div className="gs-overlay" />
                                </div>
                                <div className="gs-info">
                                    <h3 className="gs-title">{img.title}</h3>
                                    {img.desc && <p className="gs-desc">{img.desc}</p>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Next */}
                <button className="gs-side-btn gs-side-btn--next" onClick={next} aria-label="Next">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2.5"
                            strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>

            {/* Dots */}
            <div className="gs-dots">
                {images.map((_, di) => (
                    <button
                        key={di}
                        className={`gs-dot${di === dotIndex ? ' gs-dot--active' : ''}`}
                        onClick={() => goToDot(di)}
                        aria-label={`Go to ${di + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

// ═══════════════════════════════════════════════════════════
//  MAIN COMPONENT
// ═══════════════════════════════════════════════════════════
export default function UrbanTransformation() {

    const jaipurGalleryImages = [
        { url: "/New-16.png", title: "Heritage Tourist Destinations", desc: "Integrated transport and utility corridors improving urban mobility across Jaipur." },
        { url: "/Urban-8.jpeg", title: "War Memorial", desc: "Revitalized old city lanes blending Rajput heritage with modern pedestrian design." },
        { url: "/New-19.png", title: "Modern Flyovers and Underpasses", desc: "Facade restoration and street-level beautification of Jaipur's iconic pink zone." },
        { url: "/Urban-9.jpeg", title: "Sculptures and Monuments", desc: "Transit-oriented development creating vibrant mixed-use zones near metro stations." },
        { url: "/Urban-10.jpeg", title: "Urban Green Lungs", desc: "New parks and green corridors woven into the urban fabric for ecological balance." },
    ];

    const kotaGalleryImages = [
        { url: "/Urban-3.jpeg", title: "Chambal River Front", desc: "Waterfront transformation with ghats, plazas and cultural spaces." },
        { url: "/Urban-4.jpeg", title: "City Park Kota", desc: "One of the largest urban parks developed with landscape architecture and public recreation zones." },
        { url: "/Urban-5.png", title: "Seven Wonders Park", desc: "Iconic themed public attraction enhancing tourism and city identity." },
        { url: "/UrbanTransformation-Kota-4.JPG", title: "World Class UnderPass", desc: "Redesigned intersections with smart signals improving pedestrian safety and traffic flow." },
        { url: "/Urban-7.jpeg", title: "Old Market Revival", desc: "Heritage market street revamped with modern amenities while preserving cultural character." },
        { url: "/Urban-6.jpeg", title: "Public Art Murals", desc: "Large-scale murals transforming blank walls into vibrant canvases of local history." },
        { url: "/New-29.png", title: "Urban Street Lighting", desc: "Solar-powered LED streetscape upgrade making Kota safer and more energy-efficient." },
    ];

    const amritsarGalleryImages = [
        { url: "/Urban-11.jpeg", title: "Golden Temple Precinct", desc: "Pedestrianised heritage precinct around the Golden Temple enhancing pilgrim experience." },
        { url: "/UrbanTransformation-Kota-4.JPG", title: "Hall Bazaar Revival", desc: "Iconic marketplace restored with uniform facades, improved lighting and signage." },
        { url: "/Urban-14.png", title: "Jalianwala Bagh Mashal", desc: "Memorial gardens sensitively redesigned for remembrance, education and reflection." },
        { url: "/Urban-13.jpeg", title: "Street Sculpture", desc: "Upgraded public plaza and tourist facilities at the iconic Wagah–Attari crossing." },
        { url: "/Urban-17.png", title: "Public Space Restoration", desc: "Mughal-era garden revived with original layout, water features and heritage signage." },
    ];

    const newspaperImages = [
        { url: "/Urban-1.jpeg", alt: "Kota City News" },
        { url: "/Urban-2.jpeg", alt: "Kota Front Page" },
        { url: "/Kota-Transformation2.jpg", alt: "Jaipur Front Page 2046" },
        { url: "/Kota-Transformation1.jpg", alt: "Dainik Bhaskar" },
        { url: "/Jaipur-Transformation.jpg", alt: "Rajasthan Patrika" },
    ];

    return (
        <div className="scotland-container">

            {/* ── Hero ── */}
            <div className="About_container_image">
                <img src="/66X48-Night10.jpg" alt="Modern Architecture Interior Design" loading="lazy" />
                <div className="image_overlay">
                    <div className="overlay_content">
                        <h1>Urban Transformation</h1>
                        <p>Experience the Evolution</p>
                    </div>
                </div>
            </div>

            {/* ── Fan / Newspaper section ── */}
            <section className="awesome-section">
                <div className="awesome-right">
                    <div className="fan-stage">
                        <div className="fan-card fan-far-left">
                            <img src={newspaperImages[0].url} alt={newspaperImages[0].alt} />
                            <div className="fan-shine" />
                        </div>
                        <div className="fan-card fan-near-left">
                            <img src={newspaperImages[1].url} alt={newspaperImages[1].alt} />
                            <div className="fan-shine" />
                        </div>
                        <div className="fan-card fan-center">
                            <img src={newspaperImages[2].url} alt={newspaperImages[2].alt} />
                            <div className="fan-shine" />
                            <div className="fan-badge">FEATURED</div>
                        </div>
                        <div className="fan-card fan-near-right">
                            <img src={newspaperImages[3].url} alt={newspaperImages[3].alt} />
                            <div className="fan-shine" />
                        </div>
                        <div className="fan-card fan-far-right">
                            <img src={newspaperImages[4].url} alt={newspaperImages[4].alt} />
                            <div className="fan-shine" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Kota Gallery ── */}
            <div className="gallery-section kota-gallery">
                <h2 className="gallery-section-title">KOTA CITY TRANSFORMATION</h2>
                <GallerySlider images={kotaGalleryImages} sectionId="kota-Tours-container" />
            </div>

            {/* ── Jaipur Gallery ── */}
            <div className="gallery-section">
                <h2 className="gallery-section-title">JAIPUR CITY TRANSFORMATION</h2>
                <GallerySlider images={jaipurGalleryImages} sectionId="jaipur-Tours-container" />
            </div>

            {/* ── Amritsar Gallery ── */}
            <div className="gallery-section amritsar-gallery">
                <h2 className="gallery-section-title">AMRITSAR CITY TRANSFORMATION</h2>
                <GallerySlider images={amritsarGalleryImages} sectionId="amritsar-Tours-container" />
            </div>

        </div>
    );
}