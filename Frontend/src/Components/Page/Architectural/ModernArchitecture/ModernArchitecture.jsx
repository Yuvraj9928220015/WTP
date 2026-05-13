import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Clock, MapPin, Phone, Users, Maximize2, Star, ChevronLeft, ChevronRight, Menu, X, Facebook, Twitter, Instagram, Youtube, Rss, Mail } from 'lucide-react';
import "./ModernArchitecture.css";

// ── DATA ──

const rooms = [
    {
        id: 1,
        badge: "ONLY 2 ROOMS LEFT",
        image: "/ModernArchitecture-4.jpg",
        guests: 2,
        size: 30,
        title: "STANDARD ROOM",
        desc: "Most hotels and major hospitality companies have set industry standards to classify hotel types. An upscale full-service hotel facility offers luxury...",
        price: 29,
    },
    {
        id: 2,
        badge: "ONLY 1 ROOM LEFT",
        image: "/ModernArchitecture-1.jpg",
        guests: 2,
        size: 35,
        title: "DELUXE ROOM",
        desc: "Most hotels and major hospitality companies have set industry standards to classify hotel types. An upscale full-service hotel facility offers luxury...",
        price: 39,
    },
    {
        id: 3,
        badge: "ONLY 3 ROOMS LEFT",
        image: "/ModernArchitecture-3.jpg",
        guests: 2,
        size: 40,
        title: "PREMIER ROOM",
        desc: "Most hotels and major hospitality companies have set industry standards to classify hotel types. An upscale full-service hotel facility offers luxury...",
        price: 49,
    },
];

const testimonials = [
    {
        id: 1,
        quote: "They were extremely accommodating and allowed us to check in early at like 10am. We got to hotel super early and I didn't wanna wait. So this was a big plus.",
        author: "Doretta Mccourtney",
        role: "Customer",
    },
    {
        id: 2,
        quote: "An absolutely breathtaking experience. The attention to detail in every corner of the hotel reflects true architectural mastery. The spaces were designed to make you feel at home yet in awe.",
        author: "Rajiv Sharma",
        role: "Business Traveler",
    },
    {
        id: 3,
        quote: "From the moment we arrived, every detail was perfect. The architectural design created an ambiance unlike any other. We will definitely be returning next year.",
        author: "Priya Mehta",
        role: "Leisure Guest",
    },
];

// ── COMPONENT ──

export default function ModernArchitecture() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const [scrolled, setScrolled] = useState(false);

    // Scroll listener for sticky nav
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Auto-rotate testimonials
    useEffect(() => {
        const t = setInterval(() => {
            setActiveTestimonial(prev => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(t);
    }, []);

    const prevTestimonial = () => setActiveTestimonial(p => (p - 1 + testimonials.length) % testimonials.length);
    const nextTestimonial = () => setActiveTestimonial(p => (p + 1) % testimonials.length);

    return (
        <>
            <div className="sh-root">

                {/* ── HERO ── */}
                <section className="sh-hero" id="home">
                    <img src="/Slider-2.jpg" alt="Modern Architecture Interior" className="sh-hero__img" />
                    <div className="sh-hero__overlay" />
                    <div className="sh-hero__content">
                        <p className="sh-hero__eyebrow">Architecture Studio</p>
                        <h1 className="sh-hero__title">
                            Modern<br />Architecture
                        </h1>
                        <p className="sh-hero__sub">
                            Modern Architecture is the right choice for clients who are searching for a combination of innovation, beauty, and timeless design.
                        </p>
                        <a href="#rooms" className="sh-hero__cta">EXPLORE WORK</a>
                    </div>
                </section>

                {/* ── INFO BAR ── */}
                <div className="sh-infobar">
                    <div className="sh-infobar__item">
                        <Clock size={26} className="sh-infobar__icon" />
                        <div>
                            <p className="sh-infobar__label">WORKING HOURS</p>
                            <p className="sh-infobar__val">Monday – Friday: 09:00 – 18:00</p>
                        </div>
                    </div>
                    <div className="sh-infobar__item">
                        <MapPin size={26} className="sh-infobar__icon" />
                        <div>
                            <p className="sh-infobar__label">STUDIO LOCATION</p>
                            <p className="sh-infobar__val">100 Design Ave, Jaipur, RJ</p>
                        </div>
                    </div>
                    <div className="sh-infobar__item">
                        <Phone size={26} className="sh-infobar__icon" />
                        <div>
                            <p className="sh-infobar__label">CLIENT SUPPORT</p>
                            <p className="sh-infobar__val">+91 98765 43210</p>
                        </div>
                    </div>
                </div>

                {/* ── OUR ROOMS / PROJECTS ── */}
                <section className="sh-rooms" id="rooms">
                    <div className="sh-rooms__bg" />
                    <div className="sh-rooms__inner">
                        <h2 className="sh-rooms__title">Our Projects</h2>
                        <div className="sh-rooms__grid">
                            {rooms.map((room, i) => (
                                <div className="sh-room-card" key={room.id} style={{ animationDelay: `${i * 0.15}s` }}>
                                    <div className="sh-room-card__img-wrap">
                                        {/* <span className="sh-room-card__badge">{room.badge}</span> */}
                                        <img src={room.image} alt={room.title} className="sh-room-card__img" />
                                    </div>
                                    <div className="sh-room-card__body">
                                        <h3 className="sh-room-card__title">{room.title}</h3>
                                        <p className="sh-room-card__desc">{room.desc}</p>
                                        <a href="#contact" className="sh-room-card__cta">
                                            BOOK NOW FOR ${room.price} <ArrowRight size={13} />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── LUXURY BANNER ── */}
                <div className="sh-luxury-container">
                    <section className="sh-luxury" id="about">
                        <div className="sh-luxury__images">
                            <div className="sh-luxury__img-wrap sh-luxury__img-wrap--1">
                                <img src="/Slider-2.jpg" alt="Luxury space 1" />
                            </div>
                            <div className="sh-luxury__img-wrap sh-luxury__img-wrap--2">
                                <img src="/ModernArchitecture-1.jpg" alt="Luxury space 2" />
                            </div>
                        </div>
                        <div className="sh-luxury__text">
                            <h2 className="sh-luxury__title">The Architecture Experience You'll Remember</h2>
                            <div className="sh-luxury__divider" />
                            <p className="sh-luxury__desc">
                                Every space we create is a story — told through light, material, and proportion. We believe great architecture isn't just seen; it's felt in the way a room makes you breathe easier and inspires you to create. Our work blends functionality with timeless elegance.
                            </p>
                            <a href="#contact" className="sh-luxury__cta">
                                BOOK CONSULTATION <ArrowRight size={14} />
                            </a>
                        </div>
                    </section>
                </div>

                {/* ── TESTIMONIALS ── */}
                <section className="sh-testimonials" id="testimonials">
                    <div className="sh-testimonials__bg" />
                    <div className="sh-testimonials__inner">
                        <h2 className="sh-testimonials__heading">Testimonials</h2>
                        <div className="sh-testimonials__slider">
                            <div className="sh-testimonials__quote-icon">"</div>
                            <blockquote className="sh-testimonials__quote" key={activeTestimonial}>
                                {testimonials[activeTestimonial].quote}
                            </blockquote>
                            <p className="sh-testimonials__author">
                                {testimonials[activeTestimonial].author},&nbsp;
                                <span>{testimonials[activeTestimonial].role}</span>
                            </p>
                            <div className="sh-testimonials__dots">
                                {testimonials.map((_, i) => (
                                    <button
                                        key={i}
                                        className={`sh-testimonials__dot ${i === activeTestimonial ? 'is-active' : ''}`}
                                        onClick={() => setActiveTestimonial(i)}
                                        aria-label={`Testimonial ${i + 1}`}
                                    />
                                ))}
                            </div>
                            <div className="sh-testimonials__arrows">
                                <button className="sh-testimonials__arrow" onClick={prevTestimonial} aria-label="Previous"><ChevronLeft size={18} /></button>
                                <button className="sh-testimonials__arrow" onClick={nextTestimonial} aria-label="Next"><ChevronRight size={18} /></button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── FOOTER ──*/}

            </div>
        </>
    );
}