import React from "react";
export default function SearchBar({ query, setQuery }) {
  return (
    <div className="search-bar-box">
      <input
        type="text"
        placeholder="Search by name or specialization"
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="search-bar-input"
      />
    </div>
  );
}
