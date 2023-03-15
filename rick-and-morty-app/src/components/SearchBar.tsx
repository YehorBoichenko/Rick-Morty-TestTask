import React, { ChangeEvent } from "react";
import LeadingIcon from "../images/LeadingIcon.png";

interface Props {
value: string;
onChange: (value: string) => void;
}

function SearchBar(props: Props) {
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