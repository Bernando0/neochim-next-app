"use client";

import React, { useState, useEffect } from "react";

const NeochimBlock = () => {
  const [isMobile, setIsMobile] = useState(typeof window !== "undefined" && window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="neochim-block">
      <h1 className="neochim-title">Один продукт - множество решений</h1>
      <div className="neochim-content">
        {isMobile ? (
          <>
            <div className="neochim-flextop">
              <img
                src="imgs/neochim_banka.jpg"
                alt="Краска резиновая NEOCHIM"
                className="neochim-img"
              />
              <div className="neochim-toptext">
                <p>Закажите больше - получите бесплатную колеровку</p>
                <p>
                  Доступны все цвета радуги - выберите свой идеальный оттенок
                </p>
                <p>
                  При покупке от 10 литров краски - бесплатная доставка по всему Казахстану
                </p>
              </div>
            </div>
            <div className="neochim-divider"></div>
            <div className="neochim-text">
              <h3>Краска резиновая NEOCHIM</h3>
              <h3>постоянный контроль качества</h3>
              <a href="/order">Заказать</a>
            </div>
          </>
        ) : (
          <>
            <img
              src="imgs/neochim_banka.jpg"
              alt="Краска резиновая NEOCHIM"
              className="neochim-img"
            />
            <div className="neochim-divider"></div>
            <div className="neochim-text">
              <h3>Краска резиновая NEOCHIM</h3>
              <h3>постоянный контроль качества</h3>
              <p>Закажите больше - получите бесплатную колеровку</p>
              <p>
                Доступны все цвета радуги - выберите свой идеальный оттенок
              </p>
              <p>
                При покупке от 10 литров краски - бесплатная доставка по всему Казахстану
              </p>
              <a href="/order">Заказать</a>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default NeochimBlock;
