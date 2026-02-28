import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./AppSidebar.css";
import logo from "../../assets/website-logo.webp";

import {
  Home,
  LayoutDashboard,
  Mail,
  MessageCircle,
  Calendar,
  Tag,
  Diamond,
  Edit,
  Layers,
  PieChart,
  Map,
  Gift,
  Lock,
  ChevronDown
} from "lucide-react";

/* ================= SIDEBAR MENU ================= */

const menuSections = [
  {
    title: "Main",
    items: [
      {
        icon: <Home size={18} />,
        name: "My Page",
        subItems: [
          { name: "My Dashboard", path: "/dashboard" },
          { name: "Web Analytics", path: "/web-analytics" },
          { name: "Event Monitoring", path: "/event-monitoring" },
          { name: "Finance Performance", path: "/finance" },
          { name: "Sales Monitoring", path: "/sales" },
          { name: "Campaign Monitoring", path: "/campaign" },
          { name: "University Analytics", path: "/university" },
          { name: "eCommerce Analytics", path: "/ecommerce" },
        ],
      },
      {
        icon: <LayoutDashboard size={18} />,
        name: "Dashboard",
        path: "/",
      },
    ],
  },

  {
    title: "App",
    items: [
      {
        icon: <Layers size={18} />,
        name: "Contact",
        subItems: [
          { name: "List View", path: "/contact/list" },
          { name: "Grid View", path: "/contact/grid" },
        ],
      },
      { icon: <Mail size={18} />, name: "Email", path: "/email" },
      { icon: <MessageCircle size={18} />, name: "Messenger", path: "/messenger" },
      {
        icon: <MessageCircle size={18} />,
        name: "Project",
        subItems: [
          { name: "Taskboard", path: "/project/taskboard" },
          { name: "Project List", path: "/project/list" },
          { name: "Ticket List", path: "/project/ticket" },
          { name: "Ticket Details", path: "/project/details" },
          { name: "Clients", path: "/project/clients" },
          { name: "Todo List", path: "/project/todo" },
        ],
      },
      { icon: <Calendar size={18} />, name: "Calendar", path: "/calendar" },
    ],
  },

  {
    title: "UI Elements",
    items: [
      {
        icon: <Tag size={18} />,
        name: "Icons",
        subItems: [{ name: "FontAwesome", path: "/icons/fontawesome" }],
      },
      {
        icon: <Diamond size={18} />,
        name: "Components",
        subItems: [
          { name: "Bootstrap UI", path: "/components/bootstrap" },
          { name: "Typography", path: "/components/typography" },
          { name: "Colors", path: "/components/colors" },
          { name: "Buttons", path: "/components/buttons" },
          { name: "Tabs", path: "/components/tabs" },
          { name: "Progress Bars", path: "/components/progress" },
          { name: "Modals", path: "/components/modals" },
          { name: "Notifications", path: "/components/notifications" },
          { name: "Dialogs", path: "/components/dialogs" },
          { name: "List Group", path: "/components/list" },
          { name: "Media Object", path: "/components/media" },
          { name: "Nestable", path: "/components/nestable" },
          { name: "Range Sliders", path: "/components/range" },
        ],
      },
      {
        icon: <Edit size={18} />,
        name: "Forms",
        subItems: [
          { name: "Basic Elements", path: "/forms/basic" },
          { name: "Advanced Elements", path: "/forms/advanced" },
          { name: "Form Validation", path: "/forms/validation" },
          { name: "Form Wizard", path: "/forms/wizard" },
          { name: "Summernote", path: "/forms/summernote" },
          { name: "Drag & Drop Upload", path: "/forms/upload" },
          { name: "CKEditor", path: "/forms/ckeditor" },
          { name: "Image Cropping", path: "/forms/crop" },
        ],
      },
      {
        icon: <Layers size={18} />,
        name: "Tables",
        subItems: [
          { name: "Normal Tables", path: "/tables/normal" },
          { name: "Jquery Datatables", path: "/tables/datatable" },
          { name: "Table Filter", path: "/tables/filter" },
          { name: "Editable Tables", path: "/tables/editable" },
          { name: "Table dragger", path: "/tables/dragger" },
          { name: "Tables Color", path: "/tables/color" },
        ],
      },
      {
        icon: <PieChart size={18} />,
        name: "Charts",
        subItems: [{ name: "Apex Charts", path: "/charts/apex" }],
      },
      { icon: <Map size={18} />, name: "jVector Map", path: "/jvectormap" },
    ],
  },

  {
    title: "Extra",
    items: [
      { icon: <Gift size={18} />, name: "Widgets", path: "/widgets" },
      {
        icon: <Lock size={18} />,
        name: "Authentication",
        subItems: [
          { name: "Login", path: "/auth/login" },
          { name: "Register", path: "/auth/register" },
          { name: "Forgot Password", path: "/auth/forgot" },
          { name: "Page 404", path: "/auth/404" },
          { name: "Maintenance", path: "/auth/maintenance" },
        ],
      },
    ],
  },
];

export default function AppSidebar({ collapsed }) {
  const [open, setOpen] = useState(null);

  const toggle = (key, hasSub) => {
    if (!hasSub) return;
    setOpen(open === key ? null : key);
  };

  return (
    <aside className={`AppSidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="AppSidebar-logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="AppSidebar-menu">
        {menuSections.map((section, sIndex) => (
          <div key={sIndex}>
            <p className="menu-title">{section.title}</p>

            {section.items.map((item, i) => {
              const key = `${sIndex}-${i}`;

              return (
                <div key={key}>
                  <div
                    className="AppSidebar-item"
                    onClick={() => toggle(key, item.subItems)}
                  >
                    <span className="icon">{item.icon}</span>
                    {!collapsed && (
                      <>
                        <span className="label">{item.name}</span>
                        {item.subItems && (
                          <ChevronDown
                            size={16}
                            className={`arrow ${
                              open === key ? "open" : ""
                            }`}
                          />
                        )}
                      </>
                    )}
                  </div>

                  {!collapsed &&
                    item.subItems &&
                    open === key && (
                      <div className="AppSidebar-sub">
                        {item.subItems.map((sub, idx) => (
                          <NavLink
                            key={idx}
                            to={sub.path}
                            className="AppSidebar-subItem"
                          >
                            {sub.name}
                          </NavLink>
                        ))}
                      </div>
                    )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </aside>
  );
}