"use client";

import { useState } from "react";
import EntryList from "./EntryList.js";
import Pagination from "./Pagination.js";

const PER_PAGE = 4;

// Owns the page number, so it needs "use client" even though ArchiveSearch
// has already opened the client boundary above it. Whoever renders this
// decides *which* entries exist; this only decides which four you see.
export default function PagedEntryList({ entries, query }) {
  const [page, setPage] = useState(1);

  const pageCount = Math.max(1, Math.ceil(entries.length / PER_PAGE));
  // If the list shrank under us, page 2 of 1 is not a thing. Clamp rather
  // than render an empty page.
  const current = Math.min(page, pageCount);
  const start = (current - 1) * PER_PAGE;

  return (
    <>
      <EntryList
        entries={entries.slice(start, start + PER_PAGE)}
        query={query}
      />
      <Pagination page={current} pageCount={pageCount} onChange={setPage} />
    </>
  );
}
