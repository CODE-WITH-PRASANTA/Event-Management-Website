import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  FiHome,
  FiEdit,
  FiUsers,
  FiTag,
  FiDollarSign,
  FiMail,
  FiStar,
  FiChevronRight,
  FiX,
  FiPhoneCall,
} from "react-icons/fi";
import logo from "../../Assets/Cloud X Secure.png";

/* ================= MENU CONFIG ================= */

const MENU = [
  {
    type: "link",
    label: "Dashboard",
    icon: <FiHome size={18} />,
    path: "/dashboard",
  },
  {
    type: "submenu",
    key: "gallery",
    label: "Gallery",
    icon: <FiEdit size={18} />,
    children: [
      { label: "Photo Gallery", path: "/photo/gallery" },
      { label: "Video Gallery", path: "/video/gallery" },
    ],
  },
  {
    type: "submenu",
    label: "Wedding Stories",
    icon: <FiUsers size={18} />,
    children: [
      { label: "Post Stories", path: "/post/story" },
      { label: "Preview Stories", path: "/preview/story" },
    ],
  },
  {
    type: "link",
    label: "Contact Data",
    icon: <FiTag size={18} />,
    path: "/contact",
  },
  {
    type: "submenu",
    key: "news",
    label: "News Management",
    icon: <FiDollarSign size={18} />,
    children: [
      { label: "News Post", path: "/news/post" },
      { label: "News Preview", path: "/news/preview" },
    ],
  },
  {
    type: "link",
    label: "Pricing Management",
    icon: <FiMail size={18} />,
    path: "/pricing",
  },
  {
    type: "link",
    label: "Collaboration Company",
    icon: <FiPhoneCall size={18} />,
    path: "/collaboration",
  },
  {
    type: "link",
    label: "Contact Management",
    icon: <FiStar size={18} />,
    path: "/contact",
  },

   {
    type: "link",
    label: "Team Management",
    icon: <FiStar size={18} />,
    path: "/team",
  },
   {
    type: "link",
    label: "Profile Management",
    icon: <FiStar size={18} />,
    path: "/profile",
  },
];

const AppSidebar = ({ isOpen, mobileOpen, setMobileOpen }) => {
  const [openMenu, setOpenMenu] = useState(null);
  const location = useLocation();

  // Auto open submenu based on route
  useEffect(() => {
    if (location.pathname.startsWith("/blog")) {
      setOpenMenu("blog");
    } else if (location.pathname.startsWith("/pricing")) {
      setOpenMenu("pricing");
    } else {
      setOpenMenu(null);
    }
  }, [location.pathname]);

  const toggleMenu = (key) => {
    setOpenMenu((prev) => (prev === key ? null : key));
  };

  return (
    <>
      {/* MOBILE OVERLAY */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed lg:static z-50 h-screen
          bg-[#2b3a4a] text-slate-200
          transition-all duration-300
          ${isOpen ? "w-80" : "w-18"}
          ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* LOGO */}
        <div className="flex items-center gap-3 px-5 py-5 border-b border-white/10">
          <img src={logo} className="w-20 h-20" alt="logo" />
          {isOpen && (
            <span className="font-semibold tracking-wide">Event Admin</span>
          )}
          <button
            className="ml-auto lg:hidden text-white"
            onClick={() => setMobileOpen(false)}
          >
            <FiX size={20} />
          </button>
        </div>

        {/* PROFILE */}
        <div className="flex flex-col items-center py-6 border-b border-white/10">
          <img
            src="https://i.pravatar.cc/100"
            className="w-16 h-16 rounded-full mb-3 ring-2 ring-indigo-500/70"
            alt="profile"
          />
          {isOpen && (
            <>
              <p className="text-sm font-semibold">SHAHBAAZ SAYED</p>
              <p className="text-xs text-slate-400">Admin</p>
            </>
          )}
        </div>

        {/* MENU */}
        <nav className="px-3 py-4 text-sm">
          <ul className="space-y-1">
            {MENU.map((item, index) => {
              if (item.type === "link") {
                return (
                  <SidebarLink
                    key={index}
                    to={item.path}
                    icon={item.icon}
                    label={item.label}
                    open={isOpen}
                  />
                );
              }

              if (item.type === "submenu") {
                return (
                  <li key={index}>
                    <button
                      onClick={() => toggleMenu(item.key)}
                      className="sidebar-item w-full justify-between"
                    >
                      <div className="flex items-center gap-3">
                        {item.icon}
                        {isOpen && <span>{item.label}</span>}
                      </div>

                      {isOpen && (
                        <FiChevronRight
                          className={`transition-transform duration-300 ${
                            openMenu === item.key ? "rotate-90" : ""
                          }`}
                        />
                      )}
                    </button>

                    {openMenu === item.key && isOpen && (
                      <div className="ml-9 mt-1 space-y-1">
                        {item.children.map((sub, i) => (
                          <NavLink
                            key={i}
                            to={sub.path}
                            className="submenu"
                          >
                            {sub.label}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </li>
                );
              }

              return null;
            })}
          </ul>
        </nav>
      </aside>

      {/* STYLES */}
   <style>{`

      /* ================= SIDEBAR BACKGROUND ================= */
      aside {
        background: linear-gradient(160deg, #0f172a 0%, #1e293b 60%, #1e1b4b 100%);
        box-shadow: 8px 0 40px rgba(0, 0, 0, 0.4);
        backdrop-filter: blur(20px);
        overflow-y: auto;
      }

      /* Logo Text */
      aside span {
        font-size: 15px;
        letter-spacing: 1.2px;
        font-weight: 700;
        color: #ffffff;
      }

      /* Profile Section */
      aside img {
        transition: transform 0.4s ease, box-shadow 0.4s ease;
      }

      aside img:hover {
        transform: scale(1.08);
        box-shadow: 0 8px 20px rgba(99, 102, 241, 0.5);
      }

      /* ================= MAIN MENU ITEMS ================= */
      .sidebar-item {
        position: relative;
        display: flex;
        align-items: center;
        gap: 16px;
        padding: 14px 16px;
        border-radius: 14px;
        font-size: 16px;
        font-weight: 500;
        transition: all 0.3s ease;
        cursor: pointer;
        color: #cbd5e1;
      }

      /* Hover Effect */
      .sidebar-item:hover {
        background: linear-gradient(90deg, #6366f1, #8b5cf6);
        color: #fff;
        transform: translateX(6px);
        box-shadow: 0 6px 20px rgba(139, 92, 246, 0.4);
      }

      /* Active Link */
      .sidebar-item.bg-white\\/10 {
        background: linear-gradient(90deg, #3b82f6, #6366f1);
        color: #fff;
        font-weight: 600;
        box-shadow: 0 8px 25px rgba(59, 130, 246, 0.5);
      }

      /* Active Left Indicator */
      .sidebar-item.bg-white\\/10::before {
        content: "";
        position: absolute;
        left: -8px;
        top: 20%;
        height: 60%;
        width: 5px;
        border-radius: 10px;
        background: #22d3ee;
      }

      /* Bigger Icons */
      .sidebar-item svg {
        font-size: 20px;
        transition: transform 0.3s ease;
      }

      .sidebar-item:hover svg {
        transform: scale(1.1);
      }

      /* ================= SUBMENU ================= */
      .submenu {
        display: block;
        padding: 10px 14px;
        border-radius: 10px;
        font-size: 15px;
        font-weight: 500;
        color: #94a3b8;
        transition: all 0.3s ease;
      }

      .submenu:hover {
        background: linear-gradient(90deg, #22c55e, #16a34a);
        color: #fff;
        transform: translateX(8px);
        box-shadow: 0 6px 15px rgba(34, 197, 94, 0.4);
      }

      /* ================= MOBILE OPTIMIZATION ================= */
      @media (max-width: 1024px) {
        aside {
          box-shadow: 0 0 40px rgba(0,0,0,0.6);
        }

        .sidebar-item {
          font-size: 17px;
        }
      }

      /* ================= SCROLLBAR ================= */
      aside::-webkit-scrollbar {
        width: 6px;
      }

      aside::-webkit-scrollbar-thumb {
        background: #475569;
        border-radius: 10px;
      }

      aside::-webkit-scrollbar-thumb:hover {
        background: #64748b;
      }

`}</style>
    </>
  );
};

const SidebarLink = ({ to, icon, label, open }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `sidebar-item ${isActive ? "active" : ""}`
    }
  >
    {icon}
    {open && <span>{label}</span>}
  </NavLink>
);

export default AppSidebar;