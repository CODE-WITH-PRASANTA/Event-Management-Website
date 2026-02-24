import React from 'react';
import './Wonderfulcouple.css';

// Assuming images are in your assets folder or passed as props
// Replace these paths with your actual local paths
import event1 from '../../assets/event-1.webp';
import event2 from '../../assets/event-2.webp';

const Wonderfulcouple = () => {
  return (
    <section className="wedding-section">
      {/* Background Watermark Text */}
      <div className="watermark-text">WENDOLA</div>

      <div className="container">
        <div className="wedding-grid">
          
          {/* Left Column: Small Image and Quote */}
          <div className="left-col">
            <div className="image-wrapper-small">
              <img src={event1} alt="Wedding couple at fence" className="event-img-1" />
            </div>
            <div className="quote-box">
              <p>TODAY, WE CELEBRATE THE LOVE AND COMMITMENT OF THIS WONDERFUL COUPLE.</p>
              <button className="view-map-btn">VIEW MAP</button>
            </div>
          </div>

          {/* Right Column: Description and Main Image */}
          <div className="right-col">
            <div className="text-content">
              <p className="description">
                From the vibrant flowers and trees to the gently flowing streams, 
                this park provides the perfect backdrop for the joyous occasion. 
                As we stand here today, surrounded by the beauty of this park, 
                we are reminded of the enduring power of love.
              </p>
              <div className="event-time">
                <span className="clock-icon">🕒</span>
                <span className="time-text">10:30 AM IN THE QUARE VILLA</span>
              </div>
            </div>
            
            <div className="image-wrapper-large">
              <img src={event2} alt="Wedding ceremony" className="event-img-2" />
            </div>
          </div>

        </div>
      </div>
      
      {/* Decorative Floral Element (Optional CSS-based or Image) */}
      <div className="floral-decoration"></div>
    </section>
  );
};

export default Wonderfulcouple;