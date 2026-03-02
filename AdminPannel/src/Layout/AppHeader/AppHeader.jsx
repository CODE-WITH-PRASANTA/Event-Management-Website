import { useState, useRef, useEffect } from "react";
import {
  FiMenu,
  FiSearch,
  FiBell,
  FiMessageSquare,
  FiStar,
  FiSettings,
  FiLogOut,
  FiUser,
} from "react-icons/fi";

const AppHeader = ({ sidebarOpen, setSidebarOpen, setMobileOpen }) => {
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="h-20 bg-gradient-to-r from-slate-50 via-white to-slate-100 backdrop-blur-xl border-b border-slate-200 flex items-center justify-between px-6 lg:px-10 shadow-sm z-50 relative">

      {/* ================= LEFT ================= */}
      <div className="flex items-center gap-5">
        <button
          onClick={() => {
            if (window.innerWidth >= 1024) {
              setSidebarOpen(!sidebarOpen);
            } else {
              setMobileOpen(true);
            }
          }}
          className="text-2xl text-slate-700 hover:text-indigo-600 transition-all duration-300"
        >
          <FiMenu />
        </button>

        <div className="hidden sm:block">
          <p className="text-xs text-slate-400 uppercase tracking-wider">
            Admin Panel
          </p>
          <p className="text-sm font-semibold text-slate-700">
            Dashboard Overview
          </p>
        </div>
      </div>

      {/* ================= SEARCH ================= */}
      <div className="hidden lg:flex items-center bg-white shadow-inner border border-slate-200 rounded-full px-6 py-2 w-[450px] focus-within:ring-2 focus-within:ring-indigo-400 transition-all">
        <FiSearch className="text-slate-400 text-lg" />
        <input
          placeholder="Search reports, students, settings..."
          className="bg-transparent outline-none ml-3 w-full text-sm text-slate-600 placeholder-slate-400"
        />
      </div>

      {/* ================= RIGHT ================= */}
      <div
        className="flex items-center gap-5 relative"
        ref={profileRef}
      >
        {/* Language */}
        <span className="hidden md:block text-sm font-medium text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
          EN
        </span>

        {/* Notification */}
        <div className="relative cursor-pointer">
          <FiBell className="text-xl text-slate-600 hover:text-indigo-600 transition-all" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] px-1.5 rounded-full">
            3
          </span>
        </div>

        {/* Messages */}
        <FiMessageSquare className="text-xl text-slate-600 hover:text-indigo-600 transition-all cursor-pointer" />

        {/* Favorite */}
        <FiStar className="text-xl text-yellow-400 hover:scale-110 transition-transform cursor-pointer" />

        {/* PROFILE */}
        <div className="relative">
          <img
            src="https://i.pravatar.cc/150?img=12"
            className="w-10 h-10 rounded-full cursor-pointer border-2 border-indigo-500 shadow-md hover:scale-105 transition-all"
            onClick={() => setProfileOpen(!profileOpen)}
            alt="profile"
          />

          {/* ================= DROPDOWN ================= */}
          {profileOpen && (
            <div className="absolute right-0 top-14 w-60 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-dropdown">
              
              {/* Profile Info */}
              <div className="px-5 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                <p className="text-sm font-semibold">
                  Jone Copper
                </p>
                <p className="text-xs opacity-90">
                  Super Admin
                </p>
              </div>

              {/* Menu */}
              <ul className="text-sm text-slate-600">
                <li className="flex items-center gap-3 px-5 py-3 hover:bg-slate-100 cursor-pointer transition-all">
                  <FiUser />
                  My Profile
                </li>

                <li className="flex items-center gap-3 px-5 py-3 hover:bg-slate-100 cursor-pointer transition-all">
                  <FiSettings />
                  Account Settings
                </li>

                <li className="flex items-center gap-3 px-5 py-3 text-red-500 hover:bg-red-50 cursor-pointer transition-all border-t">
                  <FiLogOut />
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* ================= ANIMATION STYLE ================= */}
      <style>
        {`
          .animate-dropdown {
            animation: dropdownFade 0.25s ease forwards;
          }

          @keyframes dropdownFade {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </header>
  );
};

export default AppHeader;