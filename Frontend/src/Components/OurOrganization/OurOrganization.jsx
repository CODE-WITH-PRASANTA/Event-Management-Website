import React from 'react';
import './OurOrganization.css';

// Replace these paths with your actual image locations
import Member1 from '../../team4-1.jpg'; 
import Member2 from './team4-2.jpg';
import Member3 from './team4-3.jpg';

const OurOrganization = () => {
  const teamMembers = [
    {
      id: 1,
      name: "PETAR WALKER",
      role: "Lead Assistant",
      image: Member1,
    },
    {
      id: 2,
      name: "QARLOS ROBIN",
      role: "Planner",
      image: Member2,
    },
    {
      id: 3,
      name: "ROKKI ILUES",
      role: "Executive",
      image: Member3,
    },
  ];

  return (
    <section className="team-section">
      <div className="container">
        <header className="team-header">
          <span className="sub-title">ORGANIZERS</span>
          <h2 className="main-title">Our Lovely Team</h2>
        </header>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <div className="image-wrapper">
                {/* Decorative Floral Elements (Simulated with spans/divs) */}
                <div className="floral-decoration top-left"></div>
                <div className="floral-decoration bottom-right"></div>
                
                <div className="diamond-shape">
                  <img src={member.image} alt={member.name} />
                </div>
              </div>
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurOrganization;