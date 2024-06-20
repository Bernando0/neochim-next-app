"use client";
import Slider from "react-slick";
import React, { useState, useEffect } from "react";


const SliderComponent = ({ objectImages }) => {
  const [isMobile, setIsMobile] = useState(typeof window !== "undefined" && window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile?1:3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      {objectImages.map((object, index) => (
        <div key={index} className="object-item">
          <a href="/objects">
          <img src={object.src} alt={object.title} />
          <h3>{object.title}</h3>
          <p>{object.address}</p></a>
        </div>
      ))}
    </Slider>
  );
};

export default SliderComponent;
