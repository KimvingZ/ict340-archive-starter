import EntryCard from "./EntryCard.js";

// Dumb on purpose: it is handed an array and it renders it. Deciding
// *which* entries belong in that array is somebody else's job. `query` is
// just passed through, so each card can mark the word that matched.
export default function EntryList({ entries, query }) {
  return (
    <section>
      {entries.map((entry) => (
        <EntryCard key={entry.id} {...entry} query={query} />
      ))}
    </section>
  );
}
