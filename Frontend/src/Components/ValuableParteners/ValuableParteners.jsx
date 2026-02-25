import React, { useEffect } from "react";
import "./ValuableParteners.css";

const partnersData = [
  { id: 1, name: "L+T" },
  { id: 2, name: "HANI & IORIE" },
  { id: 3, name: "R+S" },
  { id: 4, name: "JK" },
  { id: 5, name: "E&O" },
  { id: 6, name: "OLIVE & MAGIE" },
];

const ValuablePartners = () => {

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 }
    );

    reveals.forEach((el) => observer.observe(el));
  }, []);

  return (
    <section className="partners-section">
      <div className="animated-bg"></div>

      <div className="partners-container">
        <div className="partners-content">

          {/* Left Section */}
          <header className="partners-header reveal">
            <span className="subtitle">THANK YOU FOR GIVING</span>
            <h2 className="title-main">VALUABLE</h2>
            <h2 className="title-sub">PARTNERS</h2>

            <p className="description">
              From the vibrant flowers and trees to the gently flowing streams,
              this park provides the perfect backdrop.
            </p>
          </header>

          {/* Grid Section */}
          <div className="partners-grid">
            {partnersData.map((partner, index) => (
              <div
                key={partner.id}
                className="partner-card reveal"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <span className="logo-text">{partner.name}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ValuablePartners;