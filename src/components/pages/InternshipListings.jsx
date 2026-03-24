import { useState } from "react";
import Icon from "../ui/Icon";
import { INTERNSHIPS } from "../../data/mockData";

export default function InternshipListings() {
  const [query,    setQuery]    = useState("");
  const [location, setLocation] = useState("all");
  const [domain,   setDomain]   = useState("all");
  const [duration, setDuration] = useState("all");
  const [selected, setSelected] = useState(null);
  const [applied,  setApplied]  = useState([]);

  const filtered = INTERNSHIPS.filter((i) => {
    const q = query.toLowerCase();
    const matchSearch   = !q || i.title.toLowerCase().includes(q) || i.company.toLowerCase().includes(q);
    const matchLocation = location === "all" || i.type.toLowerCase().includes(location);
    const matchDomain   = domain   === "all" || i.domain.toLowerCase().includes(domain);
    const matchDuration = duration === "all" || i.duration.startsWith(duration);
    return matchSearch && matchLocation && matchDomain && matchDuration;
  });

  const handleApply = (id) => {
    if (!applied.includes(id)) setApplied((prev) => [...prev, id]);
  };

  return (
    <div className="pc">
      <div className="ph">
        <h1>Find Internships</h1>
        <p>Explore {filtered.length} internships matching your profile</p>
      </div>

      {/* Search + Filters */}
      <div className="sbw">
        <div className="siw">
          <Icon name="search" size={18} />
          <input
            className="si2"
            placeholder="Search internships by title or company..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="fr">
          <select className="fs" value={location} onChange={(e) => setLocation(e.target.value)}>
            <option value="all">📍 All Locations</option>
            <option value="remote">Remote</option>
            <option value="on-site">On-site</option>
            <option value="hybrid">Hybrid</option>
          </select>

          <select className="fs" value={domain} onChange={(e) => setDomain(e.target.value)}>
            <option value="all">🏢 All Domains</option>
            <option value="engineering">Engineering</option>
            <option value="design">Design</option>
            <option value="data">Data Science</option>
            <option value="product">Product</option>
          </select>

          <select className="fs" value={duration} onChange={(e) => setDuration(e.target.value)}>
            <option value="all">⏰ All Durations</option>
            <option value="3">3 months</option>
            <option value="4">4 months</option>
            <option value="6">6 months</option>
          </select>

          <button className="bf2">
            <Icon name="filter" size={15} /> More Filters
          </button>
        </div>
      </div>

      <p className="ht">Showing <strong>{filtered.length} internships</strong></p>

      {/* Listing cards */}
      {filtered.map((i) => (
        <div className="lc" key={i.id}>
          <div className="ll">{i.logo}</div>

          <div className="lb">
            <div className="lt">
              <div>
                <h3>{i.title}</h3>
                <div className="cn">{i.company}</div>
              </div>
              <span className="mb">{i.match}% Match</span>
            </div>

            <p>{i.description}</p>

            <div className="sr" style={{ marginBottom: "8px" }}>
              {i.skills.map((s) => <span key={s} className="st">{s}</span>)}
            </div>

            <div className="lf">
              <div className="lm">
                <span><Icon name="mappin"   size={13} />{i.location}</span>
                <span><Icon name="clock"    size={13} />{i.duration}</span>
                <span><Icon name="building" size={13} />{i.type}</span>
                <span>🔥 {i.stipend}</span>
              </div>
              <button className="bb" style={{ fontSize: ".82rem", padding: "7px 16px" }} onClick={() => setSelected(i)}>
                View Details
              </button>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "6px" }}>
              <span className="pt">Posted {i.posted}</span>
              <span className="ct">{i.category}</span>
            </div>
          </div>
        </div>
      ))}

      {/* Detail panel */}
      {selected && (
        <div className="do" onClick={() => setSelected(null)}>
          <div className="dp" onClick={(e) => e.stopPropagation()}>
            <button className="dc" onClick={() => setSelected(null)}>&times;</button>

            <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "1rem" }}>
              <div className="ll" style={{ width: "52px", height: "52px" }}>{selected.logo}</div>
              <div>
                <h2>{selected.title}</h2>
                <div style={{ color: "#6b7280", fontSize: ".85rem" }}>{selected.company}</div>
              </div>
            </div>

            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "1rem" }}>
              <span className="mb">{selected.match}% Match</span>
              {[selected.type, selected.stipend, selected.duration].map((t) => (
                <span key={t} className="st" style={{ padding: "4px 10px" }}>{t}</span>
              ))}
            </div>

            <div className="lm" style={{ marginBottom: "1rem" }}>
              <span><Icon name="mappin" size={13} />{selected.location}</span>
              <span><Icon name="clock"  size={13} />{selected.duration}</span>
            </div>

            <div className="ds">
              <h4>Description</h4>
              <p style={{ fontSize: ".88rem", color: "#4b5563", lineHeight: "1.7" }}>{selected.description}</p>
            </div>

            <div className="ds">
              <h4>Requirements</h4>
              <ul>{selected.requirements.map((r) => <li key={r}>{r}</li>)}</ul>
            </div>

            <div className="ds">
              <h4>Required Skills</h4>
              <div className="sr">
                {selected.skills.map((s) => (
                  <span key={s} className="schip">{s}</span>
                ))}
              </div>
            </div>

            <button
              className={`apb ${applied.includes(selected.id) ? "done" : ""}`}
              onClick={() => handleApply(selected.id)}
            >
              {applied.includes(selected.id) ? "✓ Applied!" : "Apply Now"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
