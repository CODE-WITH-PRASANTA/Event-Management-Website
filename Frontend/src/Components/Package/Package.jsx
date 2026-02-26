import React, { useState } from "react";
import "./Package.css";
import { FaCheck } from "react-icons/fa";

import img1 from "../../assets/page-15.webp";
import img2 from "../../assets/page-16.webp";
import flower from "../../assets/leftFlower-1.webp";

const data = [
  { title: "Full Wedding", image: img1 },
  { title: "Religious Wedding", image: img2 },
];

export default function Package() {
  const [active, setActive] = useState(null);

  return (
    <section className="luxPkg-section">
      <div className="luxPkg-container">

        {data.map((item, i) => (
          <div className="luxPkg-card" key={i}>

            {/* IMAGE */}
            <div className="luxPkg-image">
              <img src={item.image} alt="" />
            </div>

            {/* CONTENT */}
            <div className="luxPkg-content">

              <img src={flower} className="luxPkg-flower" />

              <h3 className="luxPkg-title">{item.title}</h3>

              <ul className="luxPkg-list">
                <li><FaCheck /> Blairquhan Castle</li>
                <li><FaCheck /> Three-course wedding meal</li>
                <li><FaCheck /> Evening buffet with tea</li>
                <li><FaCheck /> One wedding per day</li>
                <li><FaCheck /> Regency architecture</li>
              </ul>

              <div className="luxPkg-price">
                $3400 <span>/1 Night Package</span>
              </div>

              <button
                className={`luxPkg-btn ${active === i ? "active" : ""}`}
                onClick={() => setActive(i)}
              >
                Get Package
              </button>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}