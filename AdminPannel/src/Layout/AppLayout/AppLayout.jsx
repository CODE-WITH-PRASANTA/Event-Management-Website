import { useState } from "react";
import { Outlet } from "react-router-dom";
import AppHeader from "../AppHeader/AppHeader";
import AppSidebar from "../AppSidebar/AppSidebar";

const AppLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-[#f5f7fb]">

      {/* SIDEBAR */}
      <AppSidebar
        isOpen={sidebarOpen}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      {/* RIGHT SIDE */}
      <div className="flex flex-col flex-1 overflow-hidden">

        {/* HEADER */}
        <AppHeader
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          setMobileOpen={setMobileOpen}
        />

        {/* SCROLLABLE CONTENT ONLY */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>

      </div>
    </div>
  );
};

export default AppLayout;