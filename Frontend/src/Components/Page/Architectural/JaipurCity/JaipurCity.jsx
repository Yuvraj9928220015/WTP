import "./JaipurCity.css";

/* ── Reusable Image Card ── */
function ImgCard({ src, alt, label, subLabel, labelColor, tall }) {
    return (
        <>
            <div className={`jc-card${tall ? " jc-card--tall" : ""}`}>
                <img src={src} alt={alt || label} loading="lazy" />
                <div className="jc-gradient" />
                <div className="jc-label">
                    <span className="jc-label-text">{label}</span>
                    {subLabel && (
                        <span
                            className="jc-label-sub"
                            style={{ color: labelColor || "#f5c842" }}
                        >
                            {subLabel}
                        </span>
                    )}
                </div>
            </div>
        </>
    );
}

/* ── Section Heading ── */
function SectionHeading({ title }) {
    return (
        <>
            <div className="jc-section-heading">
                <span className="jc-sec-line" />
                <h3 className="jc-sec-title">{title}</h3>
                <span className="jc-sec-line" />
            </div>
        </>
    );
}

export default function JaipurCity() {
    return (
        <>
            <div className="jc-page">

                {/* ══ 100vh BANNER HEADER ══ */}
                <header className="jc-header">
                    {/* Real banner image as background */}
                    <img
                        className="jc-header-bg"
                        src="/JaipurCity-Banner.png"
                        alt="Jaipur Banner"
                    />

                    {/* Centered Text */}
                    <div className="jc-header-content">
                        <h1 className="jc-main-title">
                            <span className="jc-jaipur">Jaipur</span>
                            <span className="jc-by"> by </span>
                            <span className="jc-anoop">ANOOP</span>
                        </h1>
                        <div className="jc-header-divider" />
                        <p className="jc-header-sub">
                            Architectural Marvels by Dr. Anoop Bartaria
                        </p>
                    </div>

                    {/* Scroll hint */}
                    <div className="jc-scroll-hint">
                        <span>Scroll</span>
                        <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9" />
                        </svg>
                    </div>
                </header>

                {/* ══ IMAGE SECTIONS ══ */}
                <main className="jc-main">

                    {/* ── Section Block 1 ── */}
                    <div className="jc-section-block">
                        {/* ROW 1 — 3 + 5 + 4 */}
                        <div className="jc-row">
                            {/* <div className="jc-col-3">
                                <ImgCard src="/New-8.png" label="Patrika Gate" />
                            </div> */}
                            <div className="jc-col-5">
                                <ImgCard src="/JaipurCity-1.JPG" label="Peacock Garden" />
                            </div>
                            <div className="jc-col-7">
                                <ImgCard src="/JaipurCity-16.jpg" label="Constitution Park" />
                            </div>
                        </div>

                        {/* ROW 3 — 4 + 4 + 4 */}
                        <div className="jc-row">
                            <div className="jc-col-5">
                                <ImgCard src="/JaipurCity-5.jpg" label="Luxurious Spaces" />
                            </div>
                            <div className="jc-col-3">
                                <ImgCard src="/JaipurCity-6.jpg" label="Mexican Street" />
                            </div>
                            <div className="jc-col-4">
                                <ImgCard src="/JaipurCity-7.JPG" label="Mahatma Gandhi" />
                            </div>
                        </div>

                        {/* ROW 2 — 4 + 8 */}
                        <div className="jc-row">
                            <div className="jc-col-6">
                                <ImgCard src="/JaipurCity-3.JPG" label="World Trade Park" />
                            </div>
                            <div className="jc-col-6">
                                <ImgCard src="/JaipurCity-11.jpg" label="Toran Dwar" />
                            </div>
                        </div>
                    </div>

                    {/* ── Section Block 2 ── */}
                    <div className="jc-section-block">
                        {/* ROW 3 — 4 + 4 + 4 */}
                        <div className="jc-row">
                            <div className="jc-col-4">
                                <ImgCard src="/JaipurCity-5.jpg" label="Luxurious Spaces" />
                            </div>
                            <div className="jc-col-4">
                                <ImgCard src="/JaipurCity-6.jpg" label="Mexican Street" />
                            </div>
                            <div className="jc-col-4">
                                <ImgCard src="/JaipurCity-7.JPG" label="Mahatma Gandhi" />
                            </div>
                        </div>


                        {/* ── Section Block 3 — 4 cards ── */}
                        <div className="jc-section-block">
                            <div className="jc-row">
                                <div className="jc-col-3">
                                    <ImgCard src="/KotaCity-7.jpeg" label="Mayur Stambh" />
                                </div>
                                <div className="jc-col-3">
                                    <ImgCard src="/KotaCity-8.jpeg" label="Ambedkar Statue" />
                                </div>
                                <div className="jc-col-3">
                                    <ImgCard
                                        src="/JaipurCity-14.png"
                                        label="Constitution Of India"
                                        // subLabel="Raj Mahal Circle"
                                        labelColor="#f5c842"
                                    />
                                </div>
                                <div className="jc-col-3">
                                    <ImgCard
                                        src="/JaipurCity-4.jpg"
                                        label="Johari Bazar"
                                        // subLabel="Pech Choraha"
                                        labelColor="#ffffff"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* ROW 4 — 4 + 4 + 4 */}
                        <div className="jc-row">
                            <div className="jc-col-4">
                                <ImgCard src="/New-8.png" label="Patrika Gate" />
                            </div>
                            <div className="jc-col-4">
                                <ImgCard src="/JaipurCity-15.jpg" label="National Symbols" />
                            </div>
                            <div className="jc-col-4">
                                <ImgCard src="/JaipurCity-12.JPG" label="Woman in Constitution Assembly" />
                            </div>
                        </div>

                        {/* Section Block 1 cards */}
                        <div className="jc-row">
                            <div id="jc-row-container" className="jc-col-12">
                                <img src="/JaipurCity-Banner.png" alt="" />
                            </div>
                            <div id="jc-row-container" className="jc-col-12">
                                <img src="/JaipurCity-Banner.png" alt="" />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}