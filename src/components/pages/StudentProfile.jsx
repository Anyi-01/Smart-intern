import { useRef, useState } from "react";
import Icon from "../ui/Icon";

const SKILLS      = ["React", "TypeScript", "Python", "Node.js", "SQL", "Git"];
const LEARN_SKILLS = ["Docker", "AWS", "GraphQL", "Next.js", "MongoDB", "Testing (Jest)"];

export default function StudentProfile() {
  const fileInputRef = useRef(null);
  const [resumeName, setResumeName] = useState("");

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setResumeName(file.name);
      // Real upload logic should be added here (API call, form data, etc.)
      console.log("Selected resume:", file);
    }
  };

  return (
    <div style={{ flex: 1, overflowY: "auto", padding: "2rem", background: "#f3f4f6" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.75rem" }}>
        <div>
          <h1 style={{ fontSize: "1.65rem", fontWeight: 800, color: "#111827" }}>Profile</h1>
          <p style={{ color: "#6b7280", fontSize: "0.9rem", marginTop: "3px" }}>Manage your personal information and skills</p>
        </div>
        <button style={{ padding: "9px 18px", border: "1.5px solid #e5e7eb", background: "white", borderRadius: "9px", fontSize: "0.85rem", fontWeight: 500, cursor: "pointer", color: "#374151", transition: "all 0.15s" }}>Edit Profile</button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "1.25rem" }}>
        {/* ── Left column ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {/* Photo card */}
          <div style={{ background: "white", borderRadius: "12px", padding: "2rem 1.5rem", textAlign: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
            <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "#2563eb", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem", margin: "0 auto 0.75rem" }}>🧑‍💻</div>
            <h3 style={{ fontWeight: 700, fontSize: "1.05rem", marginBottom: "2px" }}>Alex Johnson</h3>
            <span style={{ fontSize: "0.8rem", color: "#6b7280" }}>alex.johnson@university.edu</span>
            <button style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", width: "100%", marginTop: "1rem", padding: "9px", border: "1.5px solid #e5e7eb", borderRadius: "8px", background: "none", fontSize: "0.82rem", cursor: "pointer", color: "#4b5563", transition: "all 0.15s" }}>
              <Icon name="upload" size={14} /> Change Photo
            </button>
          </div>

          {/* Profile Strength */}
          <div className="card">
            <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "1rem", marginBottom: "1rem" }}>
              Profile Strength
            </h3>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: ".82rem", color: "#4b5563" }}>Completion</span>
              <span className="sp">75%</span>
            </div>
            <div className="sbar"><div className="sf" style={{ width: "75%" }} /></div>
            <p style={{ fontSize: ".8rem", color: "#6b7280", marginTop: ".5rem" }}>
              Complete your profile to increase your chances of getting noticed.
            </p>
          </div>

          {/* Recommended Skills */}
          <div className="card">
            <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: ".95rem", marginBottom: "1rem" }}>
              Recommended Skills to Learn
            </h3>
            <div className="stl">
              {LEARN_SKILLS.map((s) => (
                <div key={s} className="li">
                  {s}
                  <button className="ba">+</button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Right column ── */}
        <div className="pr">
          {/* Personal Information */}
          <div className="card">
            <div className="stitle">
              <Icon name="user" size={18} />
              Personal Information
            </div>
            <div className="fgrid">
              <div className="ff">
                <label>Full Name</label>
                <input defaultValue="Alex Johnson" />
              </div>
              <div className="ff">
                <label>Email Address</label>
                <input defaultValue="alex.johnson@university.edu" />
              </div>
              <div className="ff full">
                <label>Bio</label>
                <textarea defaultValue="Passionate computer science student with a focus on web development and data structures. Looking for opportunities to apply my skills in real-world projects." />
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="card">
            <div className="stitle">
              <Icon name="book" size={18} />
              Education
            </div>
            <div className="fgrid">
              <div className="ff">
                <label>University</label>
                <input defaultValue="State University" />
              </div>
              <div className="ff">
                <label>Degree</label>
                <input defaultValue="Computer Science" />
              </div>
              <div className="ff">
                <label>Year</label>
                <input defaultValue="Junior (3rd Year)" />
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="card">
            <div className="stitle">
              <Icon name="user" size={18} />
              Skills
            </div>
            <div className="sw2">
              {SKILLS.map((s) => (
                <span key={s} className="schip">{s}</span>
              ))}
            </div>
          </div>

          {/* Resume */}
          <div className="card">
            <div className="stitle">
              <Icon name="mail" size={18} />
              Resume / CV
            </div>
            <div className="rz">
              <Icon name="upload" size={40} color="#9ca3af" />
              <p>Upload your resume to share with potential employers</p>
              <span className="sm">Supported formats: PDF, DOC, DOCX (Max 5MB)</span>

              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.doc,.docx"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />

              <div>
                <button type="button" className="bup" onClick={handleUploadClick}>
                  <Icon name="upload" size={14} /> Upload Resume
                </button>
                {resumeName && <p style={{ marginTop: "0.5rem" }}>Selected file: {resumeName}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
