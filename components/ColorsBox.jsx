"use client";

import React from "react";

const ColorsBox = ({ colorDescriptions }) => {
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  return (
    <div className="colors-box">
      <h2 className="colors-title">
        Надежность и стиль для каждой поверхности
      </h2>
      <div className="colors-content">
        <div className="scrolling-image-container">
          <img
            src={isMobile ? "/imgs/colorsMob.jpg" : "/imgs/colors.jpg"}
            alt="Colors"
            className={`scrolling-image ${isMobile ? "mobile" : ""}`}
          />
        </div>
        <div className="colors-text">
          {Object.keys(colorDescriptions).map((color) => (
            <div className="color-box" key={color}>
              <span>{color}</span>
              <span className="color-description">
                {colorDescriptions[color]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorsBox;
