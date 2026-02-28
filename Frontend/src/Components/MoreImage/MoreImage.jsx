import React, { useState, useRef } from "react";
import "./MoreImage.css";

import {
  FaTimes,
  FaArrowLeft,
  FaArrowRight,
  FaPlay,
  FaTh,
  FaShareAlt
} from "react-icons/fa";

import img1 from "../../assets/page-1.webp";
import img2 from "../../assets/page-2.webp";
import img3 from "../../assets/page-3.webp";
import img4 from "../../assets/page-4.webp";
import img5 from "../../assets/page-5.webp";

const images = [img1, img2, img3, img4, img5];

const MoreImage = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const scrollRef = useRef(null);

  const next = () =>
    setActiveIndex((prev) => (prev + 1) % images.length);

  const prev = () =>
    setActiveIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );

  /* ⭐ mobile horizontal pagination */
  const scrollGallery = (dir) => {
    if (!scrollRef.current) return;

    const width = scrollRef.current.offsetWidth;

    scrollRef.current.scrollBy({
      left: dir === "next" ? width * 0.9 : -width * 0.9,
      behavior: "smooth",
    });
  };

  return (
    <div className="miGallery-wrapper">

      {/* GRID */}
      <div className="miGallery-grid" ref={scrollRef}>
        {images.map((img, i) => (
          <div
            key={i}
            className={`miGallery-item miGallery-item-${i}`}
            onClick={() => setActiveIndex(i)}
          >
            <img src={img} alt="" />
            <div className="miGallery-hover"></div>
          </div>
        ))}
      </div>

      {/* ⭐ MOBILE PAGINATION BUTTONS */}
      <div className="miGallery-mobileNav">
        <button onClick={() => scrollGallery("prev")}>‹</button>
        <button onClick={() => scrollGallery("next")}>›</button>
      </div>

      {/* LIGHTBOX */}
      {activeIndex !== null && (
        <div className="miGallery-lightbox">

          <div className="miGallery-topbar">
            <span>
              {activeIndex + 1} / {images.length}
            </span>

            <div className="miGallery-icons">
              <FaPlay />
              <FaTh />
              <FaShareAlt />
              <FaTimes onClick={() => setActiveIndex(null)} />
            </div>
          </div>

          <button className="miGallery-prev" onClick={prev}>
            <FaArrowLeft />
          </button>

          <img
            src={images[activeIndex]}
            className="miGallery-popupImg"
            alt=""
          />

          <button className="miGallery-next" onClick={next}>
            <FaArrowRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default MoreImage;