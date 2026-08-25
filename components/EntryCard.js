const styles = {
  card: {
    padding: 24,
    backgroundColor: "#1C222C",
    border: "1px solid #2E3644",
    borderRadius: 10,
    marginTop: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: 700,
    margin: "0 0 8px",
  },
  description: {
    fontSize: 16,
    color: "#C7CEDA",
    lineHeight: 1.6,
    margin: "0 0 16px",
  },
  meta: {
    display: "flex",
    gap: 16,
    fontFamily: "'Courier New', monospace",
    fontSize: 13,
    color: "#97A1B3",
  },
};

export default function EntryCard({ title, description, contributor, place }) {
  return (
    <article style={styles.card}>
      <h2 style={styles.title}>{title}</h2>
      <p style={styles.description}>
        {description || "No description yet."}
      </p>
      <div style={styles.meta}>
        <span>Contributed by {contributor}</span>
        <span>&middot;</span>
        <span>{place}</span>
      </div>
    </article>
  );
}
