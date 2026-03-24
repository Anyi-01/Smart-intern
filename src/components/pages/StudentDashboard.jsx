import { useNavigate } from "react-router-dom";
import Icon from "../ui/Icon";
import StatusBadge from "../ui/StatusBadge";
import { INTERNSHIPS, APPLICATIONS } from "../../data/mockData";

const STATS = [
  { icon: "file",        label: "Applications Sent",  value: "12",   bg: "#eff6ff", color: "#2563eb" },
  { icon: "trendUp",     label: "Profile Views",       value: "48",   bg: "#f0fdf4", color: "#16a34a" },
  { icon: "checkCircle", label: "Matches Found",       value: "6",    bg: "#faf5ff", color: "#9333ea" },
  { icon: "briefcase",   label: "Active Internships",  value: "120+", bg: "#fff7ed", color: "#ea580c" },
];

export default function StudentDashboard() {
  const navigate = useNavigate();

  return (
    <div className="pc">
      {/* Header */}
      <div className="ph">
        <h1>Welcome back, Alex! 👋</h1>
        <p>Here's what's happening with your internship search</p>
      </div>

      {/* Stats */}
      <div className="sg">
        {STATS.map((s) => (
          <div className="sc" key={s.label}>
            <div className="si" style={{ background: s.bg }}>
              <Icon name={s.icon} color={s.color} />
            </div>
            <div className="sl2">{s.label}</div>
            <div className="sv">{s.value}</div>
          </div>
        ))}
      </div>

      {/* Main grid */}
      <div className="dg">
        {/* Recommended */}
        <div className="card">
          <div className="ch">
            <h3>Recommended for You</h3>
            <button className="va" onClick={() => navigate("/student/internships")}>
              View All <Icon name="arrowRight" size={14} />
            </button>
          </div>

          {INTERNSHIPS.slice(0, 3).map((i) => (
            <div className="ii" key={i.id}>
              <div className="ilogo">{i.logo}</div>
              <div className="iinfo" style={{ flex: 1 }}>
                <h4>{i.title}</h4>
                <div className="co">{i.company}</div>
                <div className="imeta">
                  <span><Icon name="mappin" size={12} />{i.location}</span>
                  <span><Icon name="clock"  size={12} />{i.duration}</span>
                  <span>🔥 {i.stipend}</span>
                </div>
                <div className="sr">
                  {i.skills.slice(0, 3).map((s) => (
                    <span key={s} className="st">{s}</span>
                  ))}
                </div>
              </div>
              <span className="mb">{i.match}% Match</span>
            </div>
          ))}
        </div>

        {/* Right column */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {/* Profile Strength */}
          <div className="card">
            <div className="ch"><h3>Profile Strength</h3></div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: ".82rem", color: "#4b5563" }}>Completion</span>
              <span className="sp">75%</span>
            </div>
            <div className="sbar"><div className="sf" style={{ width: "75%" }} /></div>
            <div className="sis">
              {[
                ["Profile photo added", true],
                ["Skills listed",       true],
                ["Add resume",          false],
                ["Complete education",  false],
              ].map(([text, done]) => (
                <div key={text} className={`sit ${done ? "done" : "todo"}`}>
                  {done
                    ? <Icon name="checkCircle" size={16} color="#16a34a" />
                    : <Icon name="circle"      size={16} color="#d1d5db" />}
                  {text}
                </div>
              ))}
            </div>
            <button className="bf" onClick={() => navigate("/student/profile")}>
              Complete Profile
            </button>
          </div>

          {/* Recent Applications */}
          <div className="card">
            <div className="ch"><h3>Recent Applications</h3></div>
            {APPLICATIONS.slice(0, 3).map((a) => (
              <div className="ai" key={a.id}>
                <div>
                  <strong>{a.title}</strong>
                  <span>{a.company}</span>
                </div>
                <StatusBadge status={a.status} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
