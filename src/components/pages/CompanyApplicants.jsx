import { useState } from "react";
import Icon from "../ui/Icon";
import StatusBadge from "../ui/StatusBadge";
import { COMPANY_APPLICANTS } from "../../data/mockData";

const TABS = ["all", "pending", "accepted"];

export default function CompanyApplicants() {
  const [applicants, setApplicants] = useState(COMPANY_APPLICANTS);
  const [tab, setTab] = useState("all");

  const updateStatus = (id, status) =>
    setApplicants((prev) => prev.map((a) => (a.id === id ? { ...a, status } : a)));

  const filtered =
    tab === "all" ? applicants : applicants.filter((a) => a.status === tab);

  return (
    <div className="pc">
      <div className="ph">
        <h1>All Applicants</h1>
        <p>Manage all internship applications</p>
      </div>

      {/* Tabs */}
      <div className="tabs" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
        {TABS.map((t) => (
          <button
            key={t}
            className={`tb ${tab === t ? "active" : ""}`}
            onClick={() => setTab(t)}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      {/* Applicant cards */}
      {filtered.map((a) => (
        <div className="appc2" key={a.id}>
          <div className="cav">{a.initials}</div>

          <div className="ci">
            <h4>{a.name}</h4>
            <div className="cr">{a.role}</div>
            <div className="sr">
              {a.skills.map((s) => <span key={s} className="st">{s}</span>)}
            </div>
            <div style={{ marginTop: "5px", fontSize: ".78rem", color: "#9ca3af" }}>
              Applied: {a.applied}
            </div>
          </div>

          <div className="cact">
            <span className="mb">{a.match}% Match</span>
            {a.status === "pending" ? (
              <>
                <button className="bac" onClick={() => updateStatus(a.id, "accepted")}>
                  <Icon name="checkCircle" size={14} /> Accept
                </button>
                <button className="brj" onClick={() => updateStatus(a.id, "rejected")}>
                  <Icon name="xCircle" size={14} /> Reject
                </button>
              </>
            ) : (
              <StatusBadge status={a.status} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
