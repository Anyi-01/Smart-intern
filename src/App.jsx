import { useNavigate, Routes, Route } from "react-router-dom";
import Landing from "./components/pages/Landing";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import StudentShell from "./components/layout/StudentShell";
import CompanyShell from "./components/layout/CompanyShell";

function App() {
  const navigate = useNavigate();

  const handleLogin = (role) => {
    navigate(role === "company" ? "/company/dashboard" : "/student/dashboard");
  };

  return (
    <Routes>
      <Route path="/" element={<Landing onLogin={() => navigate("/login")} onSignup={() => navigate("/signup")} />} />
      <Route path="/login" element={<Login onLogin={handleLogin} onSignup={() => navigate("/signup")} onBack={() => navigate("/")} />} />
      <Route path="/signup" element={<Signup onLogin={() => navigate("/login")} onBack={() => navigate("/")} />} />
      <Route path="/student/*" element={<StudentShell onLogout={() => navigate("/")} />} />
      <Route path="/company/*" element={<CompanyShell onLogout={() => navigate("/")} />} />
    </Routes>
  );
}
export default App;<div className="container bg-light">
  <button className="bg-primary">Click me</button>
</div>