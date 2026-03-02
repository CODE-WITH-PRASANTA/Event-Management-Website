import React, { useState, useRef } from "react";
import "./GalaryImage.css";

import img1 from "../../assets/page-2.webp";
import img2 from "../../assets/page-3.webp";
import img3 from "../../assets/page-4.webp";
import img4 from "../../assets/page-5.webp";
import img5 from "../../assets/page-6.webp";
import img6 from "../../assets/page-7.webp";

import leaf from "../../assets/Leaf-1.webp";

const images = [img1, img2, img3, img4, img5, img6];

const GalaryImage = () => {
  const [preview, setPreview] = useState(null);
  const scrollRef = useRef(null);

  /* ⭐ mobile pagination scroll */
  const scrollGallery = (dir) => {
    if (!scrollRef.current) return;

    const width = scrollRef.current.offsetWidth;

    scrollRef.current.scrollBy({
      left: dir === "next" ? width * 0.9 : -width * 0.9,
      behavior: "smooth",
    });
  };

  return (
    <div className="galaryimage--section">

      <img src={leaf} alt="" className="galaryimage--leaf left" />
      <img src={leaf} alt="" className="galaryimage--leaf right" />

      <div
        className="galaryimage--container"
        ref={scrollRef}
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="galaryimage--item"
            onClick={() => setPreview(img)}
          >
            <img src={img} alt="gallery" />
          </div>
        ))}
      </div>

      {/* ⭐ MOBILE PAGINATION ONLY */}
      <div className="galaryimage--mobileNav">
        <button onClick={() => scrollGallery("prev")}>‹</button>
        <button onClick={() => scrollGallery("next")}>›</button>
      </div>

      {preview && (
        <div className="galaryimage--popup" onClick={() => setPreview(null)}>
          <img src={preview} alt="preview" />
        </div>
      )}
    </div>
  );
};

export default GalaryImage;