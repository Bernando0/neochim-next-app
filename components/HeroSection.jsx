"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const HeroSection = ({ images, colorDescriptions }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedSection = searchParams.get("section") || "ИНТЕРЬЕР";
  const [fade, setFade] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  const handleImageChange = (section) => {
    const params = new URLSearchParams(searchParams);
    params.set("section", section);
    router.push(`/?${params.toString()}`);
    setFade(true);
    setTimeout(() => {
      setFade(false);
    }, 200);
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setMenuOpen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!colorDescriptions) {
    return null;
  }

  return (
    <>
      <div className="sub-header">
        {Object.keys(images).map((section) => (
          <div
            key={section}
            className={`sub-header-item ${selectedSection === section ? "highlight" : ""}`}
            onClick={() => handleImageChange(section)}
          >
            {section}
          </div>
        ))}
      </div>
      <div className={`hero-section ${fade ? "fade" : ""}`}>
        {isMobile && (
          <div className="burger-menu" onClick={handleMenuToggle}>
            <div className={`burger-bar ${menuOpen ? "open" : ""}`}></div>
            <div className={`burger-bar ${menuOpen ? "open" : ""}`}></div>
            <div className={`burger-bar ${menuOpen ? "open" : ""}`}></div>
          </div>
        )}
        <div className="hero-image-container">
          <img src={images[selectedSection]} alt="Hero" className="hero-image" />
          <div className="indicator-container">
            {Object.keys(images).map((section) => (
              <div
                key={section}
                className={`indicator ${selectedSection === section ? "active" : ""}`}
                onClick={() => handleImageChange(section)}
              ></div>
            ))}
          </div>
        </div>
        {isMobile && (
          <nav className={`nav-links-mobile ${menuOpen ? "open" : ""}`}>
            <a href="/about" className="nav-link">О краске</a>
            <a href="/objects" className="nav-link">Объекты</a>
            <a href="/order" className="nav-link highlight">Заказать</a>
            <a href="https://api.whatsapp.com/send?phone=77788840306" className="phone">+7 (778) 884 0306</a>
          </nav>
        )}
        <div className="hero-toptext">
          <h6>ОТКРОЙ ЦВЕТ НАЙДИ ВДОХНОВЕНИЕ</h6>
        </div>
        <div className="hero-text">
          <h6>NEOCHIM</h6>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
