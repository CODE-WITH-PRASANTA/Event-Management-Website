import React, { useEffect } from "react";
import "./WonderfullCopule.css";

import event1 from "../../assets/Copule1.webp";
import event2 from "../../assets/Copule2.webp";
import floral from "../../assets/iconflowers-3.webp"; // ⭐ your side decoration image

const WonderfullCopule = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate");
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("show");
      }, index * 300);
    });
  }, []);

  return (
    <section className="wedding-section">

      {/* RIGHT SIDE FLORAL IMAGE */}
      <img src={floral} alt="" className="floral-side" />

      <div className="watermark-text">WENDOLA</div>

      <div className="container">
        <div className="wedding-grid">

          {/* LEFT */}
          <div className="left-col animate">

            <div className="image-wrapper-small">
              <img src={event1} alt="Wedding couple" />
            </div>

            <div className="quote-box">
              <p>
                TODAY, WE CELEBRATE THE LOVE AND COMMITMENT
                OF THIS WONDERFUL COUPLE.
              </p>

              <button className="view-map-btn">VIEW MAP</button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="right-col">

            <div className="text-content animate">
              <p className="description">
                From the vibrant flowers and trees to the gently flowing streams,
                this park provides the perfect backdrop for the joyous occasion.
                As we stand here today, surrounded by the beauty of this park,
                we are reminded of the enduring power of love.
              </p>

              <div className="event-time">
                <span className="clock-icon">🕒</span>
                <span className="time-text">
                  10:30 AM IN THE QUARE VILLA
                </span>
              </div>
            </div>

            <div className="image-wrapper-large animate">
              <img src={event2} alt="Wedding ceremony" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WonderfullCopule;