import "./PatrikaGate.css";

const CornerSVG = () => (
    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M2 2 L2 14 M2 2 L14 2"
            stroke="#C9963A"
            strokeWidth="2.5"
            strokeLinecap="round"
        />
        <path
            d="M6 6 L6 12 M6 6 L12 6"
            stroke="#C9963A"
            strokeWidth="1"
            strokeLinecap="round"
        />
        <circle cx="2" cy="2" r="2" fill="#C9963A" />
        <circle cx="14" cy="2" r="1.5" fill="#C9963A" fillOpacity="0.5" />
        <circle cx="2" cy="14" r="1.5" fill="#C9963A" fillOpacity="0.5" />
    </svg>
);

const OrnamentLine = () => (
    <>
        <div className="PatrikaGate-ornament-line">
            <div className="PatrikaGate-ornament-diamond" />
        </div>
    </>
);

const galleryCards = [
    {
        id: "gc1",
        badge: "ART",
        img: "/PatrikaGate-4.jpeg",
        imgAlt: "Elegant Sculptures",
        title: "Intricate Detailing",
        desc: "Every inch is covered with fine carvings, motifs, and ornamental patterns inspired by royal heritage",
    },
    {
        id: "gc2",
        badge: "ICON",
        img: "/PatrikaGate-10.webp",
        imgAlt: "Guardian Elephants",
        title: "Guardian Elephants",
        desc: "Majestic stone elephants guard the entrance, symbolising power and grandeur.",
    },
    // "featured" card is rendered separately (see below)
    {
        id: "gc4",
        badge: "EPIC",
        img: "/PatrikaGate-4.jpeg",
        imgAlt: "Rajput Soldiers",
        title: "Rajput Soldiers",
        desc: "Carvings of brave Rajput soldiers in detailed traditional armour guarding the gate.",
    },
    {
        id: "gc5",
        badge: "FOLK",
        img: "/PatrikaGate-11.webp",
        imgAlt: "Festival and Folk Art",
        title: "Pink Sandstone Look",
        desc: "Traditional hues of red, pink, yellow, and gold reflect Rajasthan’s royal legacy and timeless cultural artistry.",
    },
];

const footerTags = ["Rajput Style", "Mughal Influence", "Rajasthani Heritage"];

/** Standard gallery card */
const GalleryCard = ({ badge, img, imgAlt, title, desc }) => (
    <>
        <div className="PatrikaGate-gallery-card">
            {badge && (
                <span className="PatrikaGate-gallery-card-badge">{badge}</span>
            )}
            <img
                className="PatrikaGate-gallery-card-img"
                src={img}
                alt={imgAlt}
                loading="lazy"
            />
            <div className="PatrikaGate-gallery-card-body">
                <div className="PatrikaGate-gallery-card-title">{title}</div>
                <div className="PatrikaGate-gallery-card-desc">{desc}</div>
            </div>
        </div>
    </>
);

/** Featured (dark) gallery card */
const FeaturedCard = () => (
    <>
        <div className="PatrikaGate-gallery-card PatrikaGate-gallery-card--featured">
            <div>
                <div className="PatrikaGate-featured-title">Heritage Symbolism</div>
                <div className="PatrikaGate-featured-deco" />
                <p className="PatrikaGate-featured-desc">
                    The guardian sculptures embody Rajasthan’s royal legacy, representing protection, strength, and the timeless tradition of welcoming visitors with grandeur
                </p>
            </div>
            <div className="PatrikaGate-gallery-card-img">
                <img src="/PatrikaGate-8.webp" alt="" />
            </div>
        </div>
    </>
);

/* =============================================
   Main Component — PatrikaGate
   ============================================= */
export default function PatrikaGate() {
    return (
        <>
            <div className="PatrikaGate">
                <div className="PatrikaGate-wrap">
                    <div className="PatrikaGate-frame">
                        {/* ══════════════════════════════════════  HERO BANNER  ══════════════════════════════════════ */}
                        <section className="PatrikaGate-hero-zone">
                            <div className="PatrikaGate-banner-wrap">
                                <img
                                    src="/Patrika-Gate-Banner-2.png"
                                    alt="Patrika Gate — Jaipur"
                                />
                                <div className="PatrikaGate-hero-overlay" />
                            </div>
                        </section>

                        {/* ══════════════════════════════════════  DIVIDER  ══════════════════════════════════════ */}
                        <div className="PatrikaGate-divider-container">
                            <div className="PatrikaGate-divider">
                                <div className="PatrikaGate-divider-inner">
                                    <div className="PatrikaGate-divider-line" />
                                    <div className="PatrikaGate-divider-motif">✦ &nbsp; ART &amp; CRAFT &nbsp; ✦</div>
                                    <div className="PatrikaGate-divider-line" />
                                </div>
                            </div>

                            {/* ══════════════════════════════════════  GALLERY  ══════════════════════════════════════ */}
                            <section className="PatrikaGate-gallery">

                                <div className="PatrikaGate-gallery-label">
                                    <OrnamentLine />
                                    <h3>Craftsmanship &amp; Cultural Heritage</h3>
                                    <OrnamentLine />
                                </div>

                                <div className="PatrikaGate-gallery-grid">
                                    {/* First 2 standard cards */}
                                    {galleryCards.slice(0, 1).map((card) => (
                                        <GalleryCard key={card.id} {...card} />
                                    ))}

                                    {/* Featured center card */}
                                    <FeaturedCard />

                                    {/* Last 2 standard cards */}
                                    {galleryCards.slice(3).map((card) => (
                                        <GalleryCard key={card.id} {...card} />
                                    ))}
                                </div>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="PatrikaGate-gallery-Box-1">
                                                <img src="/PatrikaGate-6.jpeg" alt="" />
                                                <div className="PatrikaGate-gallery-Box-section">
                                                    <div className="PatrikaGate-gallery-card-title">
                                                        Rajputana Design
                                                    </div>
                                                    <div className="PatrikaGate-gallery-card-desc">
                                                        Built in traditional Rajasthani style with grand arches (torans), domes, and symmetrical layout.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="PatrikaGate-gallery-Box-2">
                                                <img src="/PatrikaGate-3.jpeg" alt="" />
                                                <div className="PatrikaGate-gallery-Box-section">
                                                    <div className="PatrikaGate-gallery-card-title">
                                                        Cultural Storytelling
                                                    </div>
                                                    <div className="PatrikaGate-gallery-card-desc">
                                                        Paintings depict Rajasthan’s history, traditions, festivals, and famous monuments
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </section>

                            {/* ══════════════════════════════════════  FOOTER  ══════════════════════════════════════ */}
                            <div className="PatrikaGate-footer-footer-section">
                                <footer className="PatrikaGate-footer">
                                    <div className="PatrikaGate-footer-eyebrow">
                                        ✦ &nbsp; Jaipur, Rajasthan, India &nbsp; ✦
                                    </div>
                                    <h2 className="PatrikaGate-footer-heading">A Masterpiece of Art</h2>
                                    <div className="PatrikaGate-footer-divider" />
                                    <p className="PatrikaGate-footer-text">
                                        <em>Patrika Gate</em> stands as a testament to the{" "}
                                        <strong>rich cultural heritage of Rajasthan</strong>, welcoming
                                        visitors with its breathtaking beauty and intricate{" "}
                                        <strong>craftsmanship</strong>. A fusion of Rajput, Mughal and
                                        traditional Rajasthani styles, it remains an enduring symbol of
                                        artistic grandeur.
                                    </p>
                                    <div className="PatrikaGate-footer-tags">
                                        {footerTags.map((tag, i) => (
                                            <span key={tag}>
                                                <span className="PatrikaGate-footer-tag">{tag}</span>
                                                {i < footerTags.length - 1 && (
                                                    <span className="PatrikaGate-footer-tag-sep"> &nbsp;✦&nbsp; </span>
                                                )}
                                            </span>
                                        ))}
                                    </div>
                                </footer>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}