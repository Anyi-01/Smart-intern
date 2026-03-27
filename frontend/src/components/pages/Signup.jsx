import { useState } from "react";
import Icon from "../ui/Icon";
import "./signUp.css"

export default function Signup({ onLogin, onBack }) {
  const [role, setRole] = useState("student");

  return (
    <div className="auth">
      <div className="ac">
        <h2>Create Account</h2>
        <p className="sub">Join thousands finding their perfect internship</p>

        {/* Role toggle */}
        <p style={{ fontSize: ".82rem", color: "#4b5563", marginBottom: "10px" }}>I am a:</p>
        <div className="rtog">
          {[
            ["student", "Student", "Looking for internships"],
            ["company", "Company", "Hiring interns"],
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

        {/* Conditional fields */}
        {role === "student" ? (
          <>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
              <div className="fg2" style={{ marginBottom: 0 }}>
                <label>First Name</label>
                <div className="iw"><input placeholder="Alex" /></div>
              </div>
              <div className="fg2" style={{ marginBottom: 0 }}>
                <label>Last Name</label>
                <div className="iw"><input placeholder="Johnson" /></div>
              </div>
            </div>
            <div className="fg2">
              <label>University</label>
              <div className="iw"><input placeholder="State University" /></div>
            </div>
            <div className="fg2">
              <label>Field of Study</label>
              <div className="iw"><input placeholder="Computer Science" /></div>
            </div>
          </>
        ) : (
          <>
            <div className="fg2">
              <label>Company Name</label>
              <div className="iw"><input placeholder="TechCorp Inc." /></div>
            </div>
            <div className="fg2">
              <label>Industry</label>
              <div className="iw"><input placeholder="Technology" /></div>
            </div>
          </>
        )}

        <div className="fg2">
          <label>Email Address</label>
          <div className="iw">
            <Icon name="mail" size={16} />
            <input type="email" placeholder="you@university.edu" />
          </div>
        </div>

        <div className="fg2" style={{ marginBottom: "1.25rem" }}>
          <label>Password</label>
          <div className="iw">
            <Icon name="lock" size={16} />
            <input type="password" placeholder="Create a password" />
          </div>
        </div>

        <button className="bf" onClick={() => onLogin(role)}>
          Create Account
        </button>

        <p className="af">
          Already have an account? <a onClick={onLogin}>LogIn</a>
        </p>
      </div>

      <p className="bh" onClick={onBack}>← Back to home</p>
    </div>
  );
}
