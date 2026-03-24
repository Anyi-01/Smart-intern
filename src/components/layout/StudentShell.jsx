import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import StudentDashboard from "../pages/StudentDashboard";
import InternshipListings from "../pages/InternshipListings";
import MyApplications from "../pages/MyApplications";
import StudentProfile from "../pages/StudentProfile";

const NAV = [
  { key: "dashboard",    label: "Dashboard",    icon: "home"      },
  { key: "internships",  label: "Internships",  icon: "briefcase" },
  { key: "applications", label: "Applications", icon: "file"      },
  { key: "profile",      label: "Profile",      icon: "user"      },
];

export default function StudentShell({ onLogout }) {
  const navigate  = useNavigate();
  const location  = useLocation();
  const active    = location.pathname.split("/")[2] || "dashboard";

  return (
    <div className="app-shell">
      <Sidebar
        items={NAV}
        active={active}
        onSelect={(k) => navigate(`/student/${k}`)}
        onLogout={onLogout}
        onLogoClick={() => navigate("/")}
      />

      <div className="app-main">
        <Topbar name="Alex Johnson" role="Student" />

        <Routes>
          <Route index                  element={<StudentDashboard />} />
          <Route path="dashboard"       element={<StudentDashboard />} />
          <Route path="internships"     element={<InternshipListings />} />
          <Route path="applications"    element={<MyApplications />} />
          <Route path="profile"         element={<StudentProfile />} />
        </Routes>
      </div>
    </div>
  );
}
