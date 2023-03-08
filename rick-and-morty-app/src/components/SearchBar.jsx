import React from "react";

function SearchBar(props) {
  const { value, onChange } = props;
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Filter by name..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;
