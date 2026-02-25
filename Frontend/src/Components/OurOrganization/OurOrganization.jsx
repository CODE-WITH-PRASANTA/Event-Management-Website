import React from "react";
import "./OurOrganization.css";

import team1 from "../../assets/team4-1.webp";
import team2 from "../../assets/team4-2.webp";
import team3 from "../../assets/team4-3.webp";

const OurOrganization = () => {
  const teamMembers = [
    { name: "PETAR WALKER", role: "Lead Assistant", image: team1 },
    { name: "QARLOS ROBIN", role: "Planner", image: team2 },
    { name: "ROKKI ILUES", role: "Executive", image: team3 },
  ];

  return (
    <section className="organizers-section">

      {/* Animated Background Blobs */}
      <div className="bg-blob blob1"></div>
      <div className="bg-blob blob2"></div>
      <div className="bg-blob blob3"></div>

      <div className="organizers-container">
        <div className="organizers-header">
          <p className="organizers-subtitle">ORGANIZERS</p>
          <h2 className="organizers-title">Our Lovely Team</h2>
        </div>

        <div className="organizers-grid">
          {teamMembers.map((member, index) => (
            <div
              className="organizer-card"
              key={index}
              style={{ "--delay": `${index * 0.3}s` }}
            >
              <div className="diamond-wrapper">

                <div className="svg-flower svg-top">🌸</div>

                <div className="diamond-container">
                  <div className="diamond-shape">
                    <img src={member.image} alt={member.name} />
                  </div>
                </div>

                <div className="svg-flower svg-bottom">🌿</div>

              </div>

              <div className="member-info">
                <h3 className="organizer-name">{member.name}</h3>
                <p className="organizer-role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurOrganization;