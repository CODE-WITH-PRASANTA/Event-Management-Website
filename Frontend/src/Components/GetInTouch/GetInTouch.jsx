// GetInTouch.jsx
import React from "react";
import "./GetInTouch.css";

// Import Images
import gallery1 from "../../assets/gallery4-1.webp";
import gallery2 from "../../assets/gallery4-2.webp";
import gallery3 from "../../assets/gallery4-3.webp";
import gallery4 from "../../assets/gallery4-4.webp";
import gallery5 from "../../assets/gallery4-5.webp";
import gallery6 from "../../assets/gallery4-6.webp";
import ctaFlower from "../../assets/cta-flowers.webp";

const GetInTouch = () => {
  return (
    <section className="getintouch">
      {/* Background Word */}
      <h1 className="getintouch-bg-text">CONTACT</h1>

      {/* Floating Flowers */}
      <img src={ctaFlower} alt="flower" className="getintouch-flower getintouch-flower-left" />
      <img src={ctaFlower} alt="flower" className="getintouch-flower getintouch-flower-right" />

      <div className="getintouch-container">
        {/* Left Side */}
        <div className="getintouch-info">
          <h2>Contact Information</h2>

          <div className="getintouch-info-item">
            <span>📧</span>
            <p>username@domain.com</p>
          </div>

          <div className="getintouch-info-item">
            <span>📱</span>
            <p>+ (123) 456 - 7890 - 456 - 7890</p>
          </div>

          <div className="getintouch-info-item">
            <span>📍</span>
            <p>Street New York</p>
          </div>

          <h3 className="getintouch-connect-title">Get Connected</h3>

          <div className="getintouch-social-icons">
            <div>F</div>
            <div>G+</div>
            <div>X</div>
          </div>
        </div>

        {/* Right Side */}
        <div className="getintouch-form">
          <h2>
            <span>Here’s</span> how to plan a wedding
          </h2>

          <div className="getintouch-form-row">
            <input type="text" placeholder="Complete Name" />
            <input type="email" placeholder="Email Address" />
          </div>

          <textarea placeholder="Message"></textarea>

          <button>Send Message</button>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="getintouch-gallery">
        <img src={gallery1} alt="" />
        <img src={gallery2} alt="" />
        <img src={gallery3} alt="" />
        <img src={gallery4} alt="" />
        <img src={gallery5} alt="" />
        <img src={gallery6} alt="" />
      </div>

     
    </section>
  );
};

export default GetInTouch;