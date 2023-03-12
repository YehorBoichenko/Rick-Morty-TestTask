import React from "react";
import LeadingIcon from "../images/LeadingIcon.png";
function SearchBar(props) {
  const { value, onChange } = props;
  return (
    <div className="search-bar">
      <img src={LeadingIcon} alt="search icon" />
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
