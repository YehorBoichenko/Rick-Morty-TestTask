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
