import { useEffect, useState } from "react";
import "./WorldTradePark.css";

/* ════════════════════ DATA  ═══════════════════ */

const streets = [
    {
        img: "/WorldTradePark-13.jpeg",
        title: "Pyramid Street",
        desc: "Charming ambience with an Eiffel Tower replica and Parisian cafes",
    },
    {
        img: "/WorldTradePark-12.jpeg",
        title: "Roman Street",
        desc: "Elegant Roman architecture, marble statues and columns",
    },
    {
        img: "/WorldTradePark-10.jpeg",
        title: "Oxford Street",
        desc: "Classic British design with a vintage vibe",
    },
];

const luxSpaces = [
    {
        img: "/WorldTradePark-18.jpeg",
        title: "Plush Multiplex",
        desc: "High-end multiplex with plush seats, advanced sound & projection",
    },
    {
        img: "/WorldTradePark-6.jpg",
        title: "Vibrant Food Hall",
        desc: "Toran Dwar Jaipur stands as a stirring blend of tradition and modernity, drawing inspiration from India's rich past to create an iconic landmark for the",
    },

];

const luxTags = [
    // "Big Atriums",
    // "World-Class Theatre",
    // "Convention Centre",
    // "Gourmet Food Court",
];


/* ════════════════ SHARED — Gold Divider ═════════════════ */

function GoldDivider() {
    return (
        <div className="sec-divider">
            <span className="sd-line l" />
            <span className="sd-gem">✦ ✦ ✦</span>
            <span className="sd-line r" />
        </div>
    );
}


/* ═══════════════ SHARED — SVG Corner ════════════════ */

function Corner({ pos }) {
    return (
        <svg className={`wtp-corner ${pos}`} viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2 L32 2 L2 32 Z" fill="none" stroke="#c9a227" strokeWidth="1.5" />
            <path d="M6 2 L6 9 M2 6 L9 6" stroke="#c9a227" strokeWidth="1" />
            <circle cx="6" cy="6" r="2" fill="#c9a227" opacity=".7" />
            <path d="M16 2 L2 16" stroke="#c9a227" strokeWidth=".6" opacity=".45" />
        </svg>
    );
}


/* ══════════════ HERO SECTION ═════════════════ */

function HeroSection() {
    const [ready, setReady] = useState(false);
    useEffect(() => {
        const t = setTimeout(() => setReady(true), 80);
        return () => clearTimeout(t);
    }, []);

    return (
        <>
            <div className="wtp-wrapper">
                <img
                    src="/WorldTradePark-Banner-1.png"
                    alt="World Trade Park Jaipur"
                    className="wtp-bg"
                />

                {/* Dark overlay — now properly styled */}
                <div className="wtp-overlay" />

                {/* Text Content */}
                <div className="wtp-content">
                    <h1 className="wtp-title">WORLD TRADE PARK</h1>
                    <h2 className="wtp-subtitle">Jaipur</h2>
                    <div className="wtp-divider">
                        <span className="wtp-line" />
                        <span className="wtp-diamond">◆</span>
                        <span className="wtp-line" />
                    </div>
                    <p className="wtp-tagline">
                        The Iconic Shopping and Entertainment Destination
                    </p>
                </div>
            </div>
        </>
    );
}


/* ════════════════ GLOBAL THEMED INTERIORS ═══════════════════ */

function StreetCard({ card }) {
    return (
        <>
            <div className="street-card">
                <div className="street-card-img-wrap">
                    <img src={card.img} alt={card.title} />
                </div>
                <div className="street-card-body">
                    <div className="street-card-title-row">
                        <span className="stc-line l" />
                        <h3 className="street-card-title">{card.title}</h3>
                        <span className="stc-line r" />
                    </div>
                    <p className="street-card-desc">{card.desc}</p>
                </div>
            </div>
        </>
    );
}

function LeftThumb() {
    return (
        <>
            <div className="global-thumb left">
                <p className="global-thumb-tip">
                    Futuristic facade with<br />sleek glass exteriors
                </p>
                <img src="/WorldTradePark-19.jpeg" alt="Sleek Glass Facade" />
                <div className="global-thumb-label">Sleek Glass Facade</div>
            </div>
        </>
    );
}

function RightThumb() {
    return (
        <>
            <div className="global-thumb right">
                <p className="global-thumb-tip">
                     contemporary interior designs seamlessly<br />blending with refined luxury
                </p>
                <img src="/WorldTradePark-20.jpeg" alt="Grand Atrium" />
                <div className="global-thumb-label">Grand Atrium</div>
            </div>
        </>
    );
}

function GlobalSection() {
    return (
        <>
            <section className="global-section">
                <LeftThumb />
                <RightThumb />

                <div className="global-header">
                    <h2 className="global-title">Global Themed Interiors</h2>
                    <div className="global-ornament">
                        <span className="global-orn-line l" />
                        <span className="global-orn-stars">✦ ✦ ✦</span>
                        <span className="global-orn-line r" />
                    </div>
                    <p className="global-subtitle">Streets Style Based on Famous Cities</p>
                </div>

                <div className="">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-6">
                                <div className="global-cards-Box">
                                    <img src="/WorldTradePark-2.JPG" alt="" />
                                    <div className="WorldTradePark-content">
                                        <div class="street-card-title-row" bis_skin_checked="1">
                                            <span class="stc-line l"></span>
                                            <h3 class="street-card-title"> Ethnic Street</h3>
                                            <span class="stc-line r"></span>
                                        </div>
                                        <p class="street-card-desc">Charming ambience with an Eiffel Tower replica and Parisian cafes</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="global-cards-Box">
                                    <img src="/WorldTradePark-9.jpeg" alt="" />
                                    <div className="WorldTradePark-content">
                                        <div class="street-card-title-row" bis_skin_checked="1">
                                            <span class="stc-line l"></span>
                                            <h3 class="street-card-title">Mexican Street</h3>
                                            <span class="stc-line r"></span>
                                        </div>
                                        <p class="street-card-desc">Charming ambience with an Eiffel Tower replica and Parisian cafes</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="global-cards-grid">
                    {streets.map((card, i) => (
                        <StreetCard key={i} card={card} />
                    ))}
                </div>
            </section>
        </>
    );
}


/* ══════════════════ LUXURIOUS SPACES ══════════════════ */

function LuxCard({ card }) {
    return (
        <>
            <div className="lux-card">
                <div className="lux-card-img-wrap">
                    <img src={card.img} alt={card.title} />
                </div>
                <div className="lux-card-overlay" />
                <div className="lux-card-body">
                    <div className="lux-card-title-row">
                        <span className="lux-line l" />
                        <h3 className="lux-card-title">{card.title}</h3>
                        <span className="lux-line r" />
                    </div>
                    <p className="lux-card-desc">{card.desc}</p>
                </div>
            </div>
        </>
    );
}

function LuxuriousSection() {
    return (
        <>
            <section className="lux-section">
                <div className="sec-header">
                    <h2 className="sec-header-title-dark">Luxurious Spaces</h2>
                    <GoldDivider />
                    <p className="sec-header-sub-dark">
                        <span className="arr">❮—</span>
                        Unparalleled Grandeur at Every Turn
                        <span className="arr">—❯</span>
                    </p>
                </div>

                <div className="lux-tags">
                    {luxTags.map((t, i) => (
                        <span key={i} className="lux-tag">
                            <span className="t-gem">✦</span>
                            {t}
                            <span className="t-gem">✦</span>
                        </span>
                    ))}
                </div>

                {/*  */}

                <div className="">
                    <div className="World-Class-Heading">
                        <span className="World-Class-tag">Big Atriums</span>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-6">
                                <div className="World-Class-Box">
                                    <img src="/WorldTradePark-16.jpeg" alt="" />
                                    <div class="lux-card-overlay" bis_skin_checked="1"></div>
                                    <div className="World-Class-Box-container">
                                        <div className="World-Class-Box-title">
                                            <div class="lux-card-title-row" bis_skin_checked="1">
                                                <span class="lux-line l"></span>
                                                <h3 class="lux-card-title">North Block</h3>
                                                <span class="lux-line r"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="World-Class-Box">
                                    <img src="/WorldTradePark-17.jpeg" alt="" />
                                    <div class="lux-card-overlay" bis_skin_checked="1"></div>
                                    <div className="World-Class-Box-container">
                                        <div className="World-Class-Box-title">
                                            <div class="lux-card-title-row" bis_skin_checked="1">
                                                <span class="lux-line l"></span>
                                                <h3 class="lux-card-title">South Block</h3>
                                                <span class="lux-line r"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="">
                    <div className="World-Class-Heading">
                        <span className="World-Class-tag">Vibrant Food Hall</span>
                    </div>
                    <div className="lux-cards-grid">
                        {luxSpaces.map((card, i) => (
                            <LuxCard key={i} card={card} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}


/* ═════════════ HERITAGE FOOTER ══════════════ */

function HeritageSection() {
    return (
        <>
            <section className="heritage-section">
                <GoldDivider />
                <h2 className="WorldTradePark-title">A Symbol of Heritage &amp; Splendor</h2>
                <GoldDivider />
                <p className="heritage-desc">
                    Toran Dwar Jaipur stands as a stirring blend of tradition and modernity,
                    drawing inspiration from India's rich past to create an iconic landmark
                    for the <em>Pink City</em>.
                </p>
                <div className="heritage-bottom">
                    <span className="hb-line l" />
                    <span className="hb-gem">✦</span>
                    <span className="hb-text"> WORLD TRADE PARK • JAIPUR </span>
                    <span className="hb-gem">✦</span>
                    <span className="hb-line r" />
                </div>
            </section>
        </>
    );
}


/* ═══════════════ ROOT EXPORT ════════════════ */

export default function WorldTradePark() {
    return (
        <div className="wtp-page">
            <HeroSection />
            <GlobalSection />
            <LuxuriousSection />
            <HeritageSection />
        </div>
    );
}