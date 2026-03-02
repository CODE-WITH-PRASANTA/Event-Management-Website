import { useState } from "react";
import AppSidebar from "../AppSidebar/AppSidebar";
import AppHeader from "../AppHeader/AppHeader";
import "../Layout.css";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
   <div className="app-container">
  <AppSidebar
    sidebarOpen={sidebarOpen}
    mobileOpen={mobileOpen}
    setMobileOpen={setMobileOpen}
  />

  <div className={`main-section ${sidebarOpen ? "" : "collapsed"}`}>
    <AppHeader
      sidebarOpen={sidebarOpen}
      setSidebarOpen={setSidebarOpen}
      setMobileOpen={setMobileOpen}
    />

    <div className="content-area">
      <Outlet />
    </div>
  </div>
</div>
  );
};

export default AppLayout;