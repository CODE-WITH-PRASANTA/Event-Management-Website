import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/website-logo.webp";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileNewsOpen, setMobileNewsOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">

          {/* Logo */}
          <div className="nav-logo">
            <NavLink to="/">
              <img src={logo} alt="Logo" />
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <ul className="nav-menu">
            <li>
              <NavLink to="/" className="nav-link">Home</NavLink>
            </li>

            <li className="dropdown">
              <span className="nav-link">About Us ▾</span>
              <ul className="dropdown-menu">
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/rsvp">RSVP</NavLink></li>
                <li><NavLink to="/event">Event</NavLink></li>
                <li><NavLink to="/event-details">Event Details</NavLink></li>
                <li><NavLink to="/our-team">Our Team</NavLink></li>
              </ul>
            </li>

            <li><NavLink to="/gallery" className="nav-link">Gallery</NavLink></li>
            <li><NavLink to="/services" className="nav-link">Services</NavLink></li>
            <li><NavLink to="/prices" className="nav-link">Prices</NavLink></li>

            <li className="dropdown">
              <span className="nav-link">News ▾</span>
              <ul className="dropdown-menu">
                <li><NavLink to="/news">News</NavLink></li>
                <li><NavLink to="/news-details">News Details</NavLink></li>
              </ul>
            </li>

            <li><NavLink to="/faq" className="nav-link">FAQ</NavLink></li>
            <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
          </ul>

          <NavLink to="/appointment" className="appointment-btn">
            Book an Appointment
          </NavLink>

          {/* Mobile Hamburger */}
          <div className="hamburger" onClick={() => setMobileOpen(true)}>
            ☰
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`mobile-menu ${mobileOpen ? "active" : ""}`}>
        <div className="mobile-header">
          <img src={logo} alt="Logo" />
          <span onClick={() => setMobileOpen(false)}>✕</span>
        </div>

        <ul>
          <li><NavLink to="/" onClick={()=>setMobileOpen(false)}>Home</NavLink></li>

          <li className="mobile-parent">
            <div onClick={() => setMobileAboutOpen(!mobileAboutOpen)}>
              About Us ▾
            </div>
            <ul className={`mobile-sub ${mobileAboutOpen ? "show" : ""}`}>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/rsvp">RSVP</NavLink></li>
              <li><NavLink to="/event">Event</NavLink></li>
              <li><NavLink to="/event-details">Event Details</NavLink></li>
              <li><NavLink to="/our-team">Our Team</NavLink></li>
            </ul>
          </li>

          <li><NavLink to="/gallery">Gallery</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/prices">Prices</NavLink></li>

          <li className="mobile-parent">
            <div onClick={() => setMobileNewsOpen(!mobileNewsOpen)}>
              News ▾
            </div>
            <ul className={`mobile-sub ${mobileNewsOpen ? "show" : ""}`}>
              <li><NavLink to="/news">News</NavLink></li>
              <li><NavLink to="/news-details">News Details</NavLink></li>
            </ul>
          </li>

          <li><NavLink to="/faq">FAQ</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>

        <NavLink to="/appointment" className="mobile-appointment">
          Book an Appointment
        </NavLink>
      </div>

      {mobileOpen && (
        <div className="overlay" onClick={() => setMobileOpen(false)}></div>
      )}
    </>
  );
};

export default Navbar;