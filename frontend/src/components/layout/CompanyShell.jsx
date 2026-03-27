import { useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import CompanyDashboard from "../pages/CompanyDashboard";
import CompanyApplicants from "../pages/CompanyApplicants";
import CompanyProfile from "../pages/CompanyProfile";
import PostInternshipModal from "../pages/PostInternshipModal";
import "./CompanyShell.css"



function CompanyShell({ onLogout }) {
  const NAV = [
  { key: "dashboard",  label: "Dashboard",       icon: "home"      },
  { key: "post",       label: "Post Internship",  icon: "briefcase" },
  { key: "applicants", label: "Applicants",       icon: "users"     },
  { key: "profile",    label: "Profile",          icon: "user"      },
];
  const navigate   = useNavigate();
  const location   = useLocation();
  const active     = location.pathname.split("/")[2] || "dashboard";
  const [modal, setModal] = useState(false);

  const handleSelect = (key) => {
    if (key === "post") { setModal(true); return; }
    navigate(`/company/${key}`);
  };

  return (
    <div className="app-shell">
      {modal && <PostInternshipModal onClose={() => setModal(false)} />}

      <Sidebar
        items={NAV}
        active={active}
        onSelect={handleSelect}
        onLogout={onLogout}
        onLogoClick={() => navigate("/")}
      />

      <div className="app-main">
        <Topbar name="Alex Johnson" role="Company" />

        <Routes>
          <Route index              element={<CompanyDashboard onPost={() => setModal(true)} />} />
          <Route path="dashboard"   element={<CompanyDashboard onPost={() => setModal(true)} />} />
          <Route path="applicants"  element={<CompanyApplicants />} />
          <Route path="profile"     element={<CompanyProfile />} />
        </Routes>

      </div>
    </div>
  );
}
export default CompanyShell