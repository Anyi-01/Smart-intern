import { useState } from "react";
import Icon from "../ui/Icon";
import StatusBadge from "../ui/StatusBadge";
import { COMPANY_APPLICANTS } from "../../data/mockData";

const STATS = [
  { icon: "briefcase",   label: "Active Internships", value: "8",   bg: "#eff6ff", color: "#2563eb" },
  { icon: "users",       label: "Total Applicants",   value: "156", bg: "#f0fdf4", color: "#16a34a" },
  { icon: "checkCircle", label: "Accepted",           value: "12",  bg: "#faf5ff", color: "#9333ea" },
  { icon: "clock",       label: "Pending Review",     value: "48",  bg: "#fff7ed", color: "#ea580c" },
];

export default function CompanyDashboard({ onPost }) {
  const [applicants, setApplicants] = useState(COMPANY_APPLICANTS);

  const updateStatus = (id, status) =>
    setApplicants((prev) => prev.map((a) => (a.id === id ? { ...a, status } : a)));

  return (
    <div className="pc">
      {/* Header */}
      <div className="ph" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <h1>Company Dashboard</h1>
          <p>Manage your internship postings and applicants</p>
        </div>
        <button className="bb" style={{ display: "flex", alignItems: "center", gap: "6px" }} onClick={onPost}>
          <Icon name="plus" size={16} /> Post New Internship
        </button>
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

      {/* Recent Applicants */}
      <div className="card">
        <div className="ch">
          <h3>Recent Applicants</h3>
          <span style={{ fontSize: ".82rem", color: "#6b7280" }}>
            Review and manage internship applications
          </span>
        </div>

        {applicants.map((a) => (
          <div className="appc2" key={a.id}>
            <div className="cav">{a.initials}</div>

            <div className="ci">
              <h4>{a.name}</h4>
              <div className="cr">{a.role}</div>
              <div className="sr">
                {a.skills.map((s) => <span key={s} className="st">{s}</span>)}
              </div>
              <div style={{ marginTop: "5px", fontSize: ".78rem", color: "#9ca3af", display: "flex", alignItems: "center", gap: "6px" }}>
                Applied: {a.applied} • <StatusBadge status={a.status} />
              </div>
            </div>

            <div className="cact">
              <span className="mb">{a.match}% Match</span>
              {a.status === "pending" && (
                <>
                  <button className="bac" onClick={() => updateStatus(a.id, "accepted")}>
                    <Icon name="checkCircle" size={14} /> Accept
                  </button>
                  <button className="brj" onClick={() => updateStatus(a.id, "rejected")}>
                    <Icon name="xCircle" size={14} /> Reject
                  </button>
                </>
              )}
              {a.status === "accepted" && (
                <span style={{ color: "#16a34a", fontWeight: 600, fontSize: ".82rem" }}>✓ Accepted</span>
              )}
              {a.status === "rejected" && (
                <span style={{ color: "#dc2626", fontWeight: 600, fontSize: ".82rem" }}>✗ Rejected</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
