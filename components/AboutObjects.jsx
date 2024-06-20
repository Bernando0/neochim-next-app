"use client";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import { objectImages } from "../data";
import SkeletonLoader from "./SkeletonLoader";

const DynamicSliderComponent = dynamic(() => import("./SliderComponent"), { 
    loading: () => <SkeletonLoader />, 
    ssr: false 
  });

const AboutObjects = () => {
  const [isMobile, setIsMobile] = useState(typeof window !== "undefined" && window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section id="objects-section" className="objects-block">
         {isMobile && (
          <div className="burger-menu-dark" onClick={handleMenuToggle}>
            <div className={`burger-bar ${menuOpen ? "open" : ""}`}></div>
            <div className={`burger-bar ${menuOpen ? "open" : ""}`}></div>
            <div className={`burger-bar ${menuOpen ? "open" : ""}`}></div>
          </div>
        )}
        {isMobile && (
          <nav className={`nav-links-mobile ${menuOpen ? "open" : ""}`}>
            <a href="/" className="nav-link">Главная</a>
            <a href="/objects" className="nav-link">Объекты</a>
            <a href="/order" className="nav-link highlight">Заказать</a>
            <a href="https://api.whatsapp.com/send?phone=77788840306" className="phone">+7 (778) 884 0306</a>
          </nav>
        )}
        <h1 className="objects-title">Объекты покрашенные нашей краской</h1>
        <DynamicSliderComponent objectImages={objectImages} />
        <div className="objects-text">
          <h2>Обьекты</h2>

          <h4>Торговый центр "MegaPark"</h4>
          <p><strong>Адрес:</strong> г. Алматы, ул. Макатаева 127/1</p>
          <p><strong>Описание:</strong> Торговый центр "MegaPark" является одним из крупнейших коммерческих объектов в Алматы. Наша резиновая краска была использована для окрашивания фасадов и внутренних помещений, что позволило создать долговечное и эстетически привлекательное покрытие.</p>

          <h4>Санаторий "Боровое"</h4>
          <p><strong>Адрес:</strong> озеро Боровое</p>
          <p><strong>Описание:</strong> Санаторий "Боровое" известен своими уникальными условиями для отдыха и лечения. Мы использовали нашу резиновую краску для окрашивания фасадов зданий и бассейнов, обеспечив надежную защиту от влаги и ультрафиолетовых лучей.</p>

          <h4>Автосалон Hyundai Motor</h4>
          <p><strong>Адрес:</strong> г. Алматы, 7-ая ул. 138/5</p>
          <p><strong>Описание:</strong> Автосалон Hyundai Motor выделяется современным дизайном и высоким качеством обслуживания. Благодаря нашей резиновой краске, фасады автосалона получили долговечное покрытие, устойчивое к механическим повреждениям и погодным условиям.</p>

          <h4>Фонтан "Дворец Республики"</h4>
          <p><strong>Адрес:</strong> г. Алматы, пр. Достык 56</p>
          <p><strong>Описание:</strong> Фонтан возле "Дворца Республики" - это архитектурное украшение города, привлекающее множество туристов и жителей. Наша резиновая краска обеспечила долговечное и красивое покрытие, устойчивое к воздействию воды и солнца.</p>

          <h4>Жилой комплекс "Тан Нуры"</h4>
          <p><strong>Адрес:</strong> г. Алматы, мк. Мирас 128</p>
          <p><strong>Описание:</strong> Жилой комплекс "Тан Нуры" - это современное жилье с высокими стандартами качества. Мы использовали нашу резиновую краску для фасадов и общих помещений, что добавило долговечности и улучшило внешний вид зданий.</p>

          <h2>Почему выбирают нас?</h2>
          <p><strong>Качество и надежность:</strong> Наша резиновая краска обеспечивает долговечное и устойчивое покрытие, которое сохраняет свои свойства в течение многих лет.</p>
          <p><strong>Экологичность:</strong> Мы используем безопасные материалы, не содержащие вредных веществ, что делает нашу краску безопасной для использования как внутри, так и снаружи помещений.</p>
          <p><strong>Широкий спектр применения:</strong> Наша краска подходит для различных типов поверхностей, включая дерево, бетон, металл и пластик.</p>

        </div>
      </section>
  );
};

export default AboutObjects;
