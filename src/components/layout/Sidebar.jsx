import Icon from "../ui/Icon";

 function Sidebar({ items, active, onSelect, onLogout, onLogoClick }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo" onClick={onLogoClick}>
        <Icon name="star" size={20} />
        Smart Internship Finder
      </div>

      <nav className="sidebar-nav">
        {items.map((item) => (
          <button
            key={item.key}
            className={`nav-item ${active === item.key ? "active" : ""}`}
            onClick={() => onSelect(item.key)}
          >
            <Icon name={item.icon} size={18} />
            {item.label}
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <button className="btn-logout" onClick={onLogout}>
          <Icon name="logout" size={16} />
          Logout
        </button>
      </div>
    </aside>
  );
}
export default Sidebar;