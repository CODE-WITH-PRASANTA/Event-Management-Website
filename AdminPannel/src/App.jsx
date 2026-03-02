import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./layout/AppLayout/AppLayout";
import BlogAdmin from "./Component/BlogPost/BlogPost";
import BlogPage from "./Component/BlogView/BlogView";
import TeamAdmin from "./Component/TeamPost/TeamPost";
import AdminTestimonial from "./pages/AdminTestimonial/AdminTestimonial";
import AdminColdLeads from "./pages/AdminColdLeads/AdminColdLeads";
import AdminContactPage from "./pages/AdminContactPage/AdminContactPage";
import AdminPlanManager from "./pages/AdminPlanManager/AdminPlanManager";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />

        <Route path="dashboard" element={<div>Dashboard</div>} />

        <Route path="blog">
          {/* ✅ FIXED */}
          <Route path="add" element={<BlogAdmin />} />
          <Route path="list" element={<BlogPage />} />
        </Route>

        <Route path="team" element={<TeamAdmin />} />
        <Route path="categories" element={<div>Categories</div>} />

        <Route path="pricing">
          <Route path="post" element={<div>Post Plan</div>} />
          <Route path="list" element={<div>View Plan</div>} />
        </Route>

        <Route path="contacts" element={<div>Contacts</div>} />
        <Route path="/testimonials" element={<AdminTestimonial/>} />
        <Route path="/cold-lead" element={<AdminColdLeads/>} />
        <Route path="/admin-contact" element={<AdminContactPage/>} />
        <Route path="price-plan/post" element={<AdminPlanManager/>} />

      </Route>
    </Routes>
  );
}

export default App;
