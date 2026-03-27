import { useState } from "react";
import Icon from "../ui/Icon";
import StatusBadge from "../ui/StatusBadge";
import { APPLICATIONS } from "../../data/mockData";
import "./MyApplications.css"

const STATS = [
  { icon: "file",        label: "Total Applications", value: "5", bg: "#eff6ff", color: "#2563eb" },
  { icon: "clock",       label: "Pending",            value: "3", bg: "#fef3c7", color: "#d97706" },
  { icon: "checkCircle", label: "Accepted",           value: "1", bg: "#f0fdf4", color: "#16a34a" },
  { icon: "xCircle",     label: "Rejected",           value: "1", bg: "#fef2f2", color: "#dc2626" },
];

const TABS = ["all", "pending", "accepted", "rejected"];

export default function MyApplications() {
  const [tab, setTab] = useState("all");

  const counts = {
    pending:  APPLICATIONS.filter((a) => a.status === "pending").length,
    accepted: APPLICATIONS.filter((a) => a.status === "accepted").length,
    rejected: APPLICATIONS.filter((a) => a.status === "rejected").length,
  };

  const filtered =
    tab === "all" ? APPLICATIONS : APPLICATIONS.filter((a) => a.status === tab);

  const tabLabel = (t) => {
    if (t === "all") return `All (${APPLICATIONS.length})`;
    return `${t.charAt(0).toUpperCase() + t.slice(1)} (${counts[t]})`;
  };

  return (
    <div className="pc">
      <div className="ph">
        <h1>My Applications</h1>
        <p>Track the status of all your internship applications</p>
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

      {/* Tabs */}
      <div className="tabs">
        {TABS.map((t) => (
          <button
            key={t}
            className={`tb ${tab === t ? "active" : ""}`}
            onClick={() => setTab(t)}
          >
            {tabLabel(t)}
          </button>
        ))}
      </div>

      {/* Application cards */}
      {filtered.map((a) => (
        <div className="appc" key={a.id}>
          <div>
            <h3>{a.title}</h3>
            <div className="co2">{a.company}</div>
            <div className="dt">Applied on {a.appliedDate} • {a.daysAgo}</div>
          </div>

          <div className="ar">
            <StatusBadge status={a.status} />
            <button className="bv">
              <Icon name="eye" size={14} /> View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
