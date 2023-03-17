/**
React component that represents a back link with an icon and text
@param {Object} props - Component props
@param {string} props.to - The path of the page to navigate to when the link is clicked
@returns {JSX.Element} - A React component that represents a back link
*/

import React from "react";
import { Link } from "react-router-dom";
import BackIcon from "../images/Back.svg";
interface BackLinkProps {
  to: string;
}

const BackLink: React.FC<BackLinkProps> = ({ to }) => {
  return (
    <Link to={to} className="back">
      <div className="back-content">
        <svg className="back-icon">
         <use href={`${BackIcon}#back`} />
        </svg>
        <p className="back-text">Go back</p>
      </div>
    </Link>
  );
};

export default BackLink;
