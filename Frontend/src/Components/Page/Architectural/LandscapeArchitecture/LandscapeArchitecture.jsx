import React, { useState, useEffect, useCallback } from 'react';
import './LandscapeArchitecture.css';

const products = [
    {
        title: 'Paving',
        desc: 'Sandstone can be cut into a wide range of sizes for use as paving, capping or step treads. Pavers up to 1000 x 500 are cost effective, and large format pavers can really make a bold statement.',
        img: '/LandscapeArchitecture-6.jpg',
    },
    {
        title: 'Wall Cladding',
        desc: 'Our sandstone wall cladding transforms any surface into a stunning natural feature. Perfect for feature walls, retaining walls, and exterior facades with a timeless, earthy aesthetic.',
        img: '/LandscapeArchitecture-3.jpg',
    },
    {
        title: 'Retaining Walls',
        desc: 'Engineered for strength and beauty, our retaining wall blocks combine natural sandstone character with structural integrity, ideal for landscaping and commercial projects of any scale.',
        img: '/LandscapeArchitecture-7.JPG',
    },
];

const partners = [
    {
        name: 'The Royal\nBOTANIC GARDEN\nSydney',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="#a3b18a" strokeWidth="1.5">
                <path d="M12 22v-8m0-12a6 6 0 0 0-6 6c0 2 1.5 4 3 5m3-11a6 6 0 0 1 6 6c0 2-1.5 4-3 5" />
            </svg>
        ),
    },
    {
        name: 'City of\nBRISBANE\nCouncil',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="#a3b18a" strokeWidth="1.5">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
            </svg>
        ),
    },
    {
        name: 'Barangaroo\nRESERVE\nTrust',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="#a3b18a" strokeWidth="1.5">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
        ),
    },
];

const testimonials = [
    {
        quote:
            'We have been using Capricorn Sandstone for the past 15 years to supply unique finishing\'s for our landscape projects. I find their product and service outstanding. The colour range and quality of the stone is second to none and it\'s always a pleasure when dealing with Capricorn team!',
        author: 'Adam McCall',
        company: 'Adam Eyles Gardens',
    },
    {
        quote:
            'The quality of sandstone delivered was exceptional. Capricorn\'s team was professional and ensured every piece matched our specifications perfectly. Our clients are thrilled with the result — we wouldn\'t use anyone else for major projects.',
        author: 'Sarah Thompson',
        company: 'Thompson Landscape Design',
    },
    {
        quote:
            'Incredible supply chain and communication throughout. For our government contracts we need reliability above all — Capricorn delivers every time. Their sandstone is truly unmatched in durability and natural character.',
        author: 'Mark Jennings',
        company: 'Jennings Civil Contractors',
    },
];

const projects = [
    {
        num: '01',
        title: 'Barangaroo Reserve',
        img: '/LandscapeArchitecture-9.jpg',
    },
    {
        num: '02',
        title: 'Brisbane City Hall',
        img: '/LandscapeArchitecture-4.png',
    },
    {
        num: '03',
        title: 'Queensland Residence',
        img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80',
    },
    {
        num: '04',
        title: 'Public Spaces',
        img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    },
];

// ── Reusable Slider Hook ──────────────────────────────────────────────────────
function useSlider(total, autoMs = 0) {
    const [cur, setCur] = useState(0);

    const go = useCallback((n) => setCur(((n % total) + total) % total), [total]);
    const next = useCallback(() => go(cur + 1), [cur, go]);
    const prev = useCallback(() => go(cur - 1), [cur, go]);

    useEffect(() => {
        if (!autoMs) return;
        const id = setInterval(next, autoMs);
        return () => clearInterval(id);
    }, [next, autoMs]);

    return { cur, go, next, prev };
}

// ── Dots Component ───
function Dots({ total, cur, go, align = 'center' }) {
    return (
        <div className={`la-dots la-dots--${align}`}>
            {Array.from({ length: total }).map((_, i) => (
                <span
                    key={i}
                    className={`dot${i === cur ? ' active' : ''}`}
                    onClick={() => go(i)}
                />
            ))}
        </div>
    );
}

// ── Feature Card ──
function FeatureCard({ icon, label }) {
    return (
        <div className="la-feature-card">
            <div className="la-icon-placeholder">{icon}</div>
            <p dangerouslySetInnerHTML={{ __html: label }} />
            <span className="la-feature-dot" />
        </div>
    );
}

// ── Products Slider ──
function ProductsSlider() {
    const { cur, go, next, prev } = useSlider(products.length, 4000);

    return (
        <>
            <section className="la-products">
                <div className="la-section-header right">
                    <h2>products</h2>
                </div>

                <div className="la-products-container">
                    <button className="la-nav-arrow" onClick={prev}>&#8592;</button>

                    <div className="la-slider-viewport">
                        <div
                            className="la-slider-track"
                            style={{ transform: `translateX(-${cur * 100}%)` }}
                        >
                            {products.map((p, i) => (
                                <div className="la-slide" key={i}>
                                    <div className="la-product-image">
                                        <img src={p.img} alt={p.title} />
                                    </div>
                                    <div className="la-product-text">
                                        <h3>{p.title}</h3>
                                        <p>{p.desc}</p>
                                        <button className="la-btn">FIND OUT MORE</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button className="la-nav-arrow" onClick={next}>&#8594;</button>
                </div>

                <Dots total={products.length} cur={cur} go={go} />
            </section>
        </>
    );
}

// ── Split Section (Partners + Testimonials) ──
function SplitSection() {
    const partnerSlider = useSlider(partners.length, 3500);
    const testimSlider = useSlider(testimonials.length, 5000);

    return (
        <>
            <section className="la-split-section">
                {/* Partners */}
                <div className="la-partners">
                    <h4>Who we have worked with</h4>

                    <div className="la-slider-viewport partner-vp">
                        <div
                            className="la-slider-track"
                            style={{ transform: `translateX(-${partnerSlider.cur * 100}%)` }}
                        >
                            {partners.map((p, i) => (
                                <div className="la-partner-slide" key={i}>
                                    <div className="la-partner-logo">
                                        {p.icon}
                                        <p>
                                            {p.name.split('\n').map((line, j) => (
                                                <React.Fragment key={j}>
                                                    {line}
                                                    <br />
                                                </React.Fragment>
                                            ))}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Dots total={partners.length} cur={partnerSlider.cur} go={partnerSlider.go} />
                </div>

                {/* Testimonials */}
                <div className="la-testimonials">
                    <h4>Testimonials</h4>

                    <div className="la-slider-viewport testim-vp">
                        <div
                            className="la-slider-track"
                            style={{ transform: `translateX(-${testimSlider.cur * 100}%)` }}
                        >
                            {testimonials.map((t, i) => (
                                <div className="la-testim-slide" key={i}>
                                    <p className="la-quote">{t.quote}</p>
                                    <p className="la-author">
                                        <strong>{t.author}</strong>
                                        <span>{t.company}</span>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Dots
                        total={testimonials.length}
                        cur={testimSlider.cur}
                        go={testimSlider.go}
                        align="left"
                    />
                </div>
            </section>
        </>
    );
}

// ── Main Component ──
const LandscapeArchitecture = () => {
    return (
        <>
            <div className="la-container">
                {/* Hero */}
                <section className="la-hero">
                    <div className="la-hero-overlay">
                        <div className="la-hero-content">
                            <h1>
                                High Volume,
                                <br />
                                quality Australian
                                <br />
                                <span>sandstone</span>
                            </h1>
                            <p>
                                Capricorn Sandstone Quarries Pty Ltd is one of the largest
                                suppliers of Australian dimension sandstone to the Commercial,
                                Export, Retaining, Residential &amp; Restoration markets nationally
                                and internationally.
                            </p>
                            <button className="la-btn">FIND OUT MORE</button>
                        </div>
                    </div>
                </section>

                {/* Features */}
                <section className="la-features">
                    <FeatureCard
                        icon={
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />
                            </svg>
                        }
                        label="Real, Natural<br/>Sandstone"
                    />
                    <FeatureCard
                        icon={
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13h-13L12 6.5z" />
                            </svg>
                        }
                        label="Australian Made<br/>(Stanwell, Qld)"
                    />
                    <FeatureCard
                        icon={
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                            </svg>
                        }
                        label="Honestly &amp;<br/>Ethically Produced"
                    />
                    <FeatureCard
                        icon={
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                            </svg>
                        }
                        label="Health &amp; Safety<br/>are top priority"
                    />
                    <FeatureCard
                        icon={
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c3.47.36 6.86-.34 9.42-2.8 3.56-3.44 4.05-9.14 4.05-9.14L17 8z" />
                            </svg>
                        }
                        label="Environmentally<br/>Friendly"
                    />
                </section>

                {/* Products Slider */}
                <ProductsSlider />

                {/* Partners + Testimonials */}
                <SplitSection />

                {/* Projects */}
                <section className="la-projects">
                    <div className="la-section-header left">
                        <h2>projects</h2>
                    </div>
                    <div className="la-projects-grid">
                        {projects.map((p, i) => (
                            <div
                                key={i}
                                className="la-project-card"
                                style={{ backgroundImage: `url(${p.img})` }}
                            >
                                <div className="la-project-overlay">
                                    <span className="la-project-num">{p.num}</span>
                                    <span className="la-project-title">{p.title}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Footer */}
                <footer className="la-footer">
                    <div className="la-contact-info">
                        <h5>Capricorn Sandstone PTY LTD</h5>
                        <p>
                            <strong>Head Office:</strong>
                            <br />
                            Stanwell Qld 4702
                        </p>
                        <p className="la-links">
                            sales@capricornsandstone.com.au
                            <br />
                            www.capricornsandstone.com.au
                        </p>
                        <p>
                            <strong>Phone:</strong> 07 4934 7336
                        </p>
                    </div>

                    <div className="la-contact-form">
                        <h5>Get in touch</h5>
                        <div className="la-form-row">
                            <div className="la-input-group">
                                <label>Name *</label>
                                <input type="text" placeholder="Your name" />
                            </div>
                            <div className="la-input-group">
                                <label>Email *</label>
                                <input type="email" placeholder="your@email.com" />
                            </div>
                        </div>
                        <div className="la-form-row">
                            <div className="la-input-group">
                                <label>Phone *</label>
                                <input type="tel" placeholder="+61 400 000 000" />
                            </div>
                            <div className="la-input-group">
                                <label>What product are you interested in?</label>
                                <select>
                                    <option>Select</option>
                                    <option>Paving</option>
                                    <option>Wall Cladding</option>
                                    <option>Retaining Walls</option>
                                    <option>Restoration</option>
                                </select>
                            </div>
                        </div>
                        <button type="button" className="la-btn la-btn-outline">
                            SEND
                        </button>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default LandscapeArchitecture;