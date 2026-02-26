import React from "react";
import "./Eventsimage.css";

/* replace with your images */
import img1 from "../../assets/page-2.webp";
import img2 from "../../assets/page-4.webp";
import img3 from "../../assets/page-6.webp";

const Eventsimage = () => {
  return (
    <section className="eventsimage-section">

      <div className="eventsimage-container">

        {/* LEFT FRAME */}
        <div className="eventsimage-frame eventsimage-left">
          <img src={img1} alt="event" />
        </div>

        {/* CENTER FRAME */}
        <div className="eventsimage-frame eventsimage-center">
          <img src={img2} alt="event" />
        </div>

        {/* RIGHT FRAME */}
        <div className="eventsimage-frame eventsimage-right">
          <img src={img3} alt="event" />
        </div>

      </div>

    </section>
  );
};

export default Eventsimage;