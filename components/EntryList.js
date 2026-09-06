import EntryCard from "./EntryCard.js";

// Dumb on purpose: it is handed an array and it renders it. Deciding
// *which* entries belong in that array is somebody else's job.
export default function EntryList({ entries }) {
  return (
    <section>
      {entries.map((entry) => (
        <EntryCard key={entry.id} {...entry} />
      ))}
    </section>
  );
}
