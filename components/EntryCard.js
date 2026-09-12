import Highlight from "./Highlight.js";

const KHMER_STACK =
  "'Noto Sans Khmer', 'Khmer OS Battambang', 'Khmer OS', 'Leelawadee UI', 'Nokora', sans-serif";

const styles = {
  card: {
    padding: 24,
    backgroundColor: "#1C222C",
    border: "1px solid #2E3644",
    borderRadius: 10,
    marginTop: 24,
  },
  khmerTitle: {
    fontFamily: KHMER_STACK,
    fontSize: 26,
    lineHeight: 1.6,
    color: "#2EE6A8",
    margin: "0 0 4px",
  },
  title: { fontSize: 20, fontWeight: 700, margin: "0 0 12px" },
  description: {
    fontSize: 16,
    color: "#C7CEDA",
    lineHeight: 1.6,
    margin: "0 0 16px",
  },
  label: {
    fontFamily: "'Courier New', monospace",
    fontSize: 11,
    letterSpacing: 1,
    color: "#5A6373",
    margin: "0 0 6px",
  },
  howToPlay: {
    fontSize: 15,
    color: "#97A1B3",
    lineHeight: 1.6,
    margin: "0 0 20px",
    paddingLeft: 14,
    borderLeft: "2px solid #2E3644",
  },
  facts: { display: "flex", flexWrap: "wrap", gap: "10px 24px", marginBottom: 16 },
  fact: { fontSize: 13, color: "#97A1B3", margin: 0 },
  factLabel: { color: "#5A6373" },
  credit: {
    fontFamily: "'Courier New', monospace",
    fontSize: 12,
    color: "#97A1B3",
    borderTop: "1px solid #2E3644",
    paddingTop: 14,
    margin: 0,
  },
  unsourced: { color: "#C9A227" },
};

function Fact({ label, value, query }) {
  if (!value) return null;
  return (
    <p style={styles.fact}>
      <span style={styles.factLabel}>{label} </span>
      <Highlight text={value} query={query} />
    </p>
  );
}

export default function EntryCard({
  title,
  khmerTitle,
  description,
  howToPlay,
  players,
  materials,
  occasion,
  place,
  contributor,
  source,
  query,
}) {
  return (
    <article style={styles.card}>
      {khmerTitle ? (
        <h2 lang="km" style={styles.khmerTitle}>
          <Highlight text={khmerTitle} query={query} />
        </h2>
      ) : null}
      <h3 style={styles.title}>
        <Highlight text={title} query={query} />
      </h3>

      <p style={styles.description}>
        <Highlight text={description || "No description yet."} query={query} />
      </p>

      {howToPlay ? (
        <>
          <p style={styles.label}>HOW IT IS PLAYED</p>
          <p style={styles.howToPlay}>
            <Highlight text={howToPlay} query={query} />
          </p>
        </>
      ) : null}

      <div style={styles.facts}>
        <Fact label="Players" value={players} query={query} />
        <Fact label="You need" value={materials} query={query} />
        <Fact label="Played at" value={occasion} query={query} />
        <Fact label="Where" value={place} query={query} />
      </div>

      <p style={styles.credit}>
        {contributor ? (
          <>
            Told by <Highlight text={contributor} query={query} />
          </>
        ) : (
          // `source` is deliberately not highlighted: ArchiveSearch does not
          // search it, so marking it would promise a match that is not there.
          <span style={styles.unsourced}>
            {source || "No contributor recorded yet"}
          </span>
        )}
      </p>
    </article>
  );
}
