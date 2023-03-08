import React from "react";
import { Link } from "react-router-dom";

function Character(props) {
  const { character } = props;
  return (
    <Link to={`/character/${character.id}`} className="character">
      <div className="character-image">
        <img src={character.image} alt={character.name} />
      </div>
      <div className="character-name">{character.name}</div>
      <div className="character-species">{character.species}</div>
    </Link>
  );
}

export default Character;
