import React, { useState } from "react";
import "./AppLayout.css";
import AppSidebar from "../Appsidebar/Appsidebar";
import AppHeader from "../Appheader/Appheader";

const AppLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`AppLayout ${collapsed ? "collapsed" : ""}`}>
      <AppSidebar collapsed={collapsed} />

      <div className="AppLayout-main">
        <AppHeader
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />

        {/* Scrollable middle page */}
        <div className="AppLayout-content">
          {/* YOUR PAGE CONTENT HERE */}
        </div>
      </div>
    </div>
  );
};

export default AppLayout;