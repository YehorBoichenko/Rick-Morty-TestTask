import { Link } from "react-router-dom";
import sprite from "../images/sprite.svg";

const BackLink = ({ to }) => {
  return (
    <Link to={to} className="back">
      <div className="back-content">
        <svg className="back-icon">
          <use href={sprite + "#back"} />
        </svg>
        <p className="back-text">Go back</p>
      </div>
    </Link>
  );
};

export default BackLink;
