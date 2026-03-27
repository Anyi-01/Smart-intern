import { useState } from "react";
import Icon from "../ui/Icon";
import "./PostInternshipModal.css"

const INITIAL = {
  title:       "",
  location:    "",
  type:        "",
  duration:    "",
  stipend:     "",
  description: "",
  requirements:"",
  skills:      "",
};

export default function PostInternshipModal({ onClose }) {
  const [form, setForm] = useState(INITIAL);

  const update = (key, value) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = () => {
    console.log("New internship posted:", form);
    onClose();
  };

  return (
    <div className="mo" onClick={onClose}>
      <div className="md" onClick={(e) => e.stopPropagation()}>

        {/* Header */}
        <div className="mh">
          <div>
            <h2>Post New Internship</h2>
            <p>Fill in the details to create a new internship posting</p>
          </div>
          <button className="mc" onClick={onClose}>&times;</button>
        </div>

        {/* Job Title — full width */}
        <div className="mf">
          <label>Job Title</label>
          <input
            placeholder="e.g., Frontend Developer Intern"
            value={form.title}
            onChange={(e) => update("title", e.target.value)}
          />
        </div>

        {/* Two-column grid */}
        <div className="mgrid">
          <div className="mf">
            <label>Location</label>
            <input
              placeholder="San Francisco, CA"
              value={form.location}
              onChange={(e) => update("location", e.target.value)}
            />
          </div>

          <div className="mf">
            <label>Type</label>
            <input
              value={form.type}
              placeholder="Remote / On-site / Hybrid"
              onChange={(e) => update("type", e.target.value)}
            />
          </div>

          <div className="mf">
            <label>Duration</label>
            <input
              placeholder="3 months"
              value={form.duration}
              onChange={(e) => update("duration", e.target.value)}
            />
          </div>

          <div className="mf">
            <label>Stipend</label>
            <input
              placeholder="$2,000/month"
              value={form.stipend}
              onChange={(e) => update("stipend", e.target.value)}
            />
          </div>
        </div>

        {/* Description */}
        <div className="mf">
          <label>Description</label>
          <textarea
            placeholder="Describe the internship role and responsibilities..."
            value={form.description}
            onChange={(e) => update("description", e.target.value)}
          />
        </div>

        {/* Requirements */}
        <div className="mf">
          <label>Requirements (one per line)</label>
          <textarea
            placeholder={"Strong JavaScript skills\nExperience with React\nGood communication skills"}
            value={form.requirements}
            onChange={(e) => update("requirements", e.target.value)}
          />
        </div>

        {/* Skills */}
        <div className="mf">
          <label>Required Skills (comma separated)</label>
          <input
            placeholder="React, TypeScript, CSS, Git"
            value={form.skills}
            onChange={(e) => update("skills", e.target.value)}
          />
        </div>

        {/* Actions */}
        <div style={{ display: "flex", gap: "10px", marginTop: "1rem" }}>
          <button className="bf" onClick={handleSubmit}>
            Post Internship
          </button>
          <button
            style={{
              flex: 1,
              padding: "12px",
              background: "#e5e7eb",
              color: "#374151",
              border: "solid 2px",
              borderRadius: "10px",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              cursor: "pointer",
            }}
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
