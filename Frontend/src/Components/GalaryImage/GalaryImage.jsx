import React, { useState } from "react";
import "./GalaryImage.css";

import img1 from "../../assets/page-2.webp";
import img2 from "../../assets/page-3.webp";
import img3 from "../../assets/page-4.webp";
import img4 from "../../assets/page-5.webp";
import img5 from "../../assets/page-6.webp";
import img6 from "../../assets/page-7.webp";

const images = [img1, img2, img3, img4, img5, img6];

const GalaryImage= () => {
  const [preview, setPreview] = useState(null);

  return (
    <div className="galaryimage--section">

      <div className="galaryimage--container">
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

      {/* IMAGE POPUP */}
      {preview && (
        <div className="galaryimage--popup" onClick={() => setPreview(null)}>
          <img src={preview} alt="preview" />
        </div>
      )}
    </div>
  );
};

export default GalaryImage;