const styles = {
  box: {
    marginTop: 24,
    padding: "32px 24px",
    border: "1px dashed #2E3644",
    borderRadius: 10,
    textAlign: "center",
  },
  khmer: {
    fontFamily:
      "'Noto Sans Khmer', 'Khmer OS Battambang', 'Khmer OS', 'Leelawadee UI', 'Nokora', sans-serif",
    fontSize: 17,
    lineHeight: 1.9,
    color: "#C7CEDA",
    margin: "0 0 14px",
  },
  english: { fontSize: 15, color: "#97A1B3", lineHeight: 1.6, margin: 0 },
  query: { color: "#2EE6A8" },
};

// The empty state is the archive talking, not the framework. Rewrite the
// wording here whenever the archive's voice changes.
export default function NoResults({ query }) {
  return (
    <div style={styles.box}>
      <p lang="km" style={styles.khmer}>
        រកមិនឃើញល្បែងឈ្មោះនេះទេ។ បណ្ណសារនេះមានតែល្បែងដែលមានអ្នកនិយាយប្រាប់ប៉ុណ្ណោះ។
        បើអ្នកស្គាល់ល្បែងនេះ សូមមកប្រាប់យើង។
      </p>
      <p style={styles.english}>
        No game called <span style={styles.query}>{query}</span> in here — not
        yet. This archive only holds games somebody has actually sat down and
        described. If you know this one, you are the missing entry.
      </p>
    </div>
  );
}
