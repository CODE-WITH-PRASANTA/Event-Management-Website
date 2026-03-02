import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiImage,
  FiCamera,
  FiVideo,
  FiBookOpen,
  FiEdit,
  FiEye,
  FiDatabase,
  FiFileText,
  FiPlusSquare,
  FiDollarSign,
  FiBriefcase,
  FiMail,
  FiUsers,
  FiUser,
  FiChevronDown,
  FiX,
} from "react-icons/fi";

const AppSidebar = ({ sidebarOpen, mobileOpen, setMobileOpen }) => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <>
      <div className={`sidebar ${sidebarOpen ? "" : "collapsed"} ${mobileOpen ? "mobile-open" : ""}`}>
        <div className="sidebar-header">
          <h2>Event Admin</h2>
          <FiX className="close-btn" onClick={() => setMobileOpen(false)} />
        </div>

        <ul>
          <li>
            <NavLink to="/dashboard">
              <FiHome /> <span>Dashboard</span>
            </NavLink>
          </li>

          {/* Gallery */}
          <li onClick={() => toggleMenu("gallery")}>
            <div className="menu-title">
              <FiImage /> <span>Gallery</span>
              <FiChevronDown className={openMenu === "gallery" ? "rotate" : ""} />
            </div>
          </li>

          {openMenu === "gallery" && (
            <ul className="submenu">
              <li>
                <NavLink to="/gallery/photos">
                  <FiCamera /> Photo Gallery
                </NavLink>
              </li>
              <li>
                <NavLink to="/gallery/videos">
                  <FiVideo /> Video Gallery
                </NavLink>
              </li>
            </ul>
          )}

          {/* Wedding Stories */}
          <li onClick={() => toggleMenu("stories")}>
            <div className="menu-title">
              <FiBookOpen /> <span>Wedding Stories</span>
              <FiChevronDown className={openMenu === "stories" ? "rotate" : ""} />
            </div>
          </li>

          {openMenu === "stories" && (
            <ul className="submenu">
              <li>
                <NavLink to="/stories/add">
                  <FiEdit /> Add Post Stories
                </NavLink>
              </li>
              <li>
                <NavLink to="/stories/preview">
                  <FiEye /> Preview Stories
                </NavLink>
              </li>
            </ul>
          )}

          <li>
            <NavLink to="/contact-data">
              <FiDatabase /> <span>Contact Data</span>
            </NavLink>
          </li>

          {/* News */}
          <li onClick={() => toggleMenu("news")}>
            <div className="menu-title">
              <FiFileText /> <span>News Management</span>
              <FiChevronDown className={openMenu === "news" ? "rotate" : ""} />
            </div>
          </li>

          {openMenu === "news" && (
            <ul className="submenu">
              <li>
                <NavLink to="/news/add">
                  <FiPlusSquare /> Add News
                </NavLink>
              </li>
              <li>
                <NavLink to="/news/preview">
                  <FiEye /> Preview News
                </NavLink>
              </li>
            </ul>
          )}

          <li>
            <NavLink to="/pricing">
              <FiDollarSign /> <span>Pricing</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/collaboration">
              <FiBriefcase /> <span>Collaboration</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact-management">
              <FiMail /> <span>Contact Management</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/team">
              <FiUsers /> <span>Team</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/profile">
              <FiUser /> <span>Profile</span>
            </NavLink>
          </li>
        </ul>
      </div>

      {mobileOpen && <div className="overlay" onClick={() => setMobileOpen(false)} />}
    </>
  );
};

export default AppSidebar;