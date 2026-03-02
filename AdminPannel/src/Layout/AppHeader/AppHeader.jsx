import {
  FiMenu,
  FiBell,
  FiMessageSquare,
  FiGift,
  FiSearch,
  FiChevronDown,
} from "react-icons/fi";

const AppHeader = ({ sidebarOpen, setSidebarOpen, setMobileOpen }) => {
  return (
    <header className="app-header">
      {/* LEFT SECTION */}
      <div className="header-left">
        <FiMenu
          className="menu-icon"
          onClick={() => {
            window.innerWidth < 768
              ? setMobileOpen(true)
              : setSidebarOpen(!sidebarOpen);
          }}
        />

        <div className="search-container">
          <FiSearch className="search-icon" />
          <input type="text" placeholder="Search here..." />
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="header-right">
        <div className="icon-wrapper">
          <FiBell />
          <span className="badge">12</span>
        </div>

        <div className="icon-wrapper">
          <FiMessageSquare />
          <span className="badge">5</span>
        </div>

        <div className="icon-wrapper">
          <FiGift />
          <span className="badge">2</span>
        </div>

        <div className="language-select">
          ENGLISH <FiChevronDown size={14} />
        </div>

        <div className="profile-section">
          <div className="profile-info">
            <span className="profile-name">James P. Sullivan</span>
            <span className="profile-role">Super Admin</span>
          </div>
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="profile"
          />
        </div>
      </div>
    </header>
  );
};

export default AppHeader;