import React from "react";
import "./PhotoSection.css";

import img1 from "../../assets/gallery3-1.webp";
import img2 from "../../assets/gallery3-3.webp";
import img3 from "../../assets/gallery3-4.webp";
import img4 from "../../assets/gallery3-5.webp";
import img5 from "../../assets/gallery3-7.webp";

const PhotoSection = () => {
  const photos = [
    { id: 1, src: img1, tall: true },   // Left tall
    { id: 2, src: img2 },               // Middle
    { id: 3, src: img3, tall: true },   // Right tall
    { id: 4, src: img4 },               // Bottom left
    { id: 5, src: img5 },               // Bottom right
  ];

  return (
    <section className="gallery-wrapper">

      {/* Header */}
      <h2 className="gallery-title">Wedding Photography</h2>
      <p className="gallery-subtitle">
        Capturing the most beautiful moments with elegance & emotion.
      </p>

      {/* GRID */}
      <div className="gallery-grid">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className={`gallery-item ${photo.tall ? "tall" : ""}`}
          >
            <img src={photo.src} alt="Wedding" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoSection;