const styles = {
  mark: {
    backgroundColor: "#2EE6A8",
    color: "#0E1116",
    borderRadius: 3,
    padding: "0 2px",
    fontWeight: 600,
  },
};

// Marks every occurrence of the search word inside one piece of text. It does
// not decide what matched — ArchiveSearch already did that. This only shows
// the reader where, so a hit buried in a paragraph stops looking like magic.
export default function Highlight({ text, query }) {
  const value = String(text || "");
  const needle = String(query || "").trim().toLowerCase();
  if (!needle) return <>{value}</>;

  // indexOf, not a regex: a visitor typing "(" or "*" would break a regex
  // built out of their own input, and escaping that costs more than this loop.
  // Safe on Khmer for the same reason the search is — toLowerCase leaves Khmer
  // untouched, so positions found here still line up with the original string.
  const haystack = value.toLowerCase();
  const parts = [];
  let cursor = 0;
  let at = haystack.indexOf(needle);

  while (at !== -1) {
    if (at > cursor) parts.push(value.slice(cursor, at));
    parts.push(
      <mark key={at} style={styles.mark}>
        {value.slice(at, at + needle.length)}
      </mark>
    );
    cursor = at + needle.length;
    at = haystack.indexOf(needle, cursor);
  }
  parts.push(value.slice(cursor));

  return <>{parts}</>;
}
