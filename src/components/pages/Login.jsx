import { useState } from "react";
import Icon from "../ui/Icon";

export default function Login({ onLogin, onSignup, onBack }) {
  const [role, setRole]       = useState("student");
  const [email, setEmail]     = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  return (
    <div className="auth">
      <div className="ac">
        <h2>Sign In</h2>
        <p className="sub">Enter your credentials to access your account</p>

        {/* Role toggle */}
        <p style={{ fontSize: ".82rem", color: "#4b5563", marginBottom: "10px" }}>I am a:</p>
        <div className="rtog">
          {[
            ["student", "Student",  "Looking for internships"],
            ["company", "Company",  "Hiring interns"],
          ].map(([k, label, sub]) => (
            <button
              key={k}
              className={`rb ${role === k ? "active" : ""}`}
              onClick={() => setRole(k)}
            >
              <strong>{label}</strong>
              <span>{sub}</span>
            </button>
          ))}
        </div>

        {/* Email */}
        <div className="fg2">
          <label>Email Address</label>
          <div className="iw">
            <Icon name="mail" size={16} />
            <input
              type="email"
              placeholder="you@university.edu"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        {/* Password */}
        <div className="fg2">
          <label>Password</label>
          <div className="iw">
            <Icon name="lock" size={16} />
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        {/* Remember / Forgot */}
        <div className="frow">
          <label>
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            Remember me
          </label>
          <a>Forgot password?</a>
        </div>

        <button className="bf" onClick={() => onLogin(role)}>Sign In</button>

        <p className="af">
          Don't have an account?{" "}
          <a onClick={onSignup}>Sign up</a>
        </p>
      </div>

      <p className="bh" onClick={onBack}>← Back to home</p>
    </div>
  );
}
