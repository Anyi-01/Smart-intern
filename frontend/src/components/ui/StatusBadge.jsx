export default function StatusBadge({ status }) {
  const styleMap = {
    pending:  { background: "#fef3c7", color: "#d97706" },
    accepted: { background: "#000000", color: "#ffffff" },
    rejected: { background: "#dc2626", color: "#ffffff" },
  };

  return (
    <span
      style={{
        fontSize: ".72rem",
        fontWeight: 600,
        padding: "3px 10px",
        borderRadius: "20px",
        whiteSpace: "nowrap",
        ...(styleMap[status] || { background: "#f3f4f6", color: "#6b7280" }),
      }}
    >
      {status}
    </span>
  );
}
