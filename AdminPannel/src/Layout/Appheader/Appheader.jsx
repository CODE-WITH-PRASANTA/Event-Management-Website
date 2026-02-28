import React from "react";
import "./AppHeader.css";

import {
  FiMail,
  FiBell,
  FiSettings,
  FiSearch,
  FiMessageSquare,
  FiPower,
  FiMenu
} from "react-icons/fi";

const AppHeader = ({ collapsed, setCollapsed }) => {
  return (
    <header className="TopHeader">

      {/* LEFT SIDE */}
      <div className="TopHeader-leftIcons">

        {/* ⭐ HAMBURGER MENU */}
        <button
          className="iconBox menuToggle"
          onClick={() => setCollapsed(!collapsed)}
        >
          <FiMenu />
        </button>

        <span className="iconBox">
          <FiMail />
          <span className="badge">4</span>
        </span>

        <span className="iconBox">
          <FiBell />
          <span className="badge blue">4</span>
        </span>

        <span className="iconBox">
          <FiSettings />
        </span>
      </div>

      {/* CENTER MENU */}
      <nav className="TopHeader-menu">
        <a href="#">Mega</a>
        <a href="#">Social</a>
        <a href="#">News</a>
        <a href="#">Blog</a>
      </nav>

      {/* RIGHT SIDE */}
      <div className="TopHeader-rightIcons">
        <span className="iconBox">
          <FiSearch />
        </span>

        <span className="iconBox">
          <FiMessageSquare />
          <span className="badge pink">2</span>
        </span>

        <span className="iconBox">
          <FiPower />
        </span>
      </div>

    </header>
  );
};

export default AppHeader;