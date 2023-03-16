import React from "react";
import { Link } from "react-router-dom";

interface CharacterProps {
  character: {
    id: number,
    image: string,
    name: string,
    species: string,
  };
}

const Character: React.FC<CharacterProps> = ({ character }) => {
  return (
    <Link to={`/character/${character.id}`} className="character">
      <div className="character-image">
        <img src={character.image} alt={character.name} />
      </div>
      <div className="character-text">
        <p className="character-name">{character.name}</p>
        <p className="character-species">{character.species}</p>
      </div>
    </Link>
  );
};

export default Character;
