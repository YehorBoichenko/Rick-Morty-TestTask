/**
A search bar component with a filter input field and an icon
@param {object} props - Component props
@param {string} props.value - The current value of the search input field
@param {function} props.onChange - The callback function to be executed on input change
@returns {JSX.Element} - A React component that renders a search bar with a filter input field and an icon
*/

import React, { ChangeEvent } from "react";
import LeadingIcon from "../images/LeadingIcon.png";
import { SearchProps } from "../types/types";


function SearchBar(props: SearchProps) {
const { value, onChange } = props;

const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
onChange(event.target.value);
};

return (
<div className="search-bar">
<img src={LeadingIcon} alt="search icon" />
<input
     type="text"
     placeholder="Filter by name..."
     value={value}
     onChange={handleInputChange}
   />
</div>
);
}

export default SearchBar;