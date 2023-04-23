import React, { useState } from "react";

const SearchView = ({ onSearch, isLoading }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Loading..." : "Search"}
      </button>
    </form>
  );
};

export default SearchView;