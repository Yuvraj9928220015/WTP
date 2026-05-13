import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Main from "../Main/main";
import "./Header.css";

export default function Header() {
  const navigate = useNavigate();

  const slides = [
    { image: "/Chambal-River-Front-Banner.jpeg", title: "Chambal River Front", link: "/chambal-riverFront" },
    { image: "/Sustainability-City-Park-Kota.jpg", title: "City Park, Kota", link: "/CityPark" },
    { image: "/New-17.png", title: "World Trade Park", link: "/WorldTradePark" },
    { image: "/Patrika-Gate-Banner.jpeg", title: "Patrika Gate, Jaipur", link: "/PatrikaGate  " },
    { image: "/torandwar.webp", title: "Toran Dwar, Jaipur", link: "/" },
    { image: "/Heritage-banner.jpg", title: "Heritage Street, Amritsar", link: "/heritage" },
    { image: "/Facade.jpg", title: "Shiv Vilas Hotel, Jaipur", link: "/" },
    { image: "/IMG-20250820-WA0001.jpg", title: "Amar Jawan Jyoti Memorial", link: "/" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  /* ==== AUTO SLIDE ==== */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(interval);
  }, [slides.length]);

  /* ==== NAVIGATION ==== */
  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => setCurrentSlide(index);

  const handleSlideClick = () => {
    navigate(slides[currentSlide].link);
  };

  return (
    <>
      <div className="Header-slider-container">

        {/* ==== SLIDES ==== */}
        <div className="Header-slider-wrapper">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`Header-slide ${index === currentSlide ? "active" : ""}`}
              onClick={index === currentSlide ? handleSlideClick : undefined}
              style={{ cursor: index === currentSlide ? "pointer" : "default" }}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="Header-slide-image"
              />
              <div className="Header-slide-overlay"></div>
            </div>
          ))}
        </div>

        {/* ==== PREV BUTTON ==== */}
        <button className="nav-arrow nav-arrow-left" onClick={prevSlide}>
          <ChevronLeft size={28} />
        </button>

        {/* ==== NEXT BUTTON ==== */}
        <button className="nav-arrow nav-arrow-right" onClick={nextSlide}>
          <ChevronRight size={28} />
        </button>

        {/* ==== DOT INDICATORS ==== */}
        <div className="dot-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? "dot-active" : ""}`}
              onClick={(e) => {
                e.stopPropagation();
                goToSlide(index);
              }}
            />
          ))}
        </div>

        {/* ==== SLIDE COUNTER ==== */}
        <div className="Header-slide-counter">
          {currentSlide + 1} / {slides.length}
        </div>

        {/* ==== TITLE ==== */}
        <div className="Header-content-container">
          <div className="Header-content-wrapper">
            <div className="Header-text-content">
              <h1
                className="Header-about-title"
                onClick={handleSlideClick}
                style={{ cursor: "pointer" }}
              >
                {slides[currentSlide].title}
              </h1>
            </div>
          </div>
        </div>

      </div>

      <Main />
    </>
  );
}