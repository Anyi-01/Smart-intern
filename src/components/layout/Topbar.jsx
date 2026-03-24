import Icon from "../ui/Icon";

export default function Topbar({ name, role }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <header className="topbar">
      <div className="topbar-logo">
        <Icon name="star" size={16} />
        Smart Internship Finder
      </div>

      <div className="topbar-right">
        <button className="notification-btn">
          <Icon name="bell" size={20} />
          <span className="notification-dot">2</span>
        </button>

        <div className="user-info">
          <strong>{name}</strong>
          <span>{role}</span>
        </div>

        <div className="avatar">{initials}</div>
      </div>
    </header>
  );
}
