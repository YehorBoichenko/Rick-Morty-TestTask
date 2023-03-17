/**
React component that displays a single character's information
@param {Object} props - Component props
@param {Object} props.character - An object representing the character to be displayed
@param {number} props.character.id - The id of the character
@param {string} props.character.image - The url of the character's image
@param {string} props.character.name - The name of the character
@param {string} props.character.species - The species of the character
@returns {JSX.Element} - A React component that displays the character's information
*/

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
        <img  loading="lazy" src={character.image} alt={character.name} />
      </div>
      <div className="character-text">
        <p className="character-name">{character.name}</p>
        <p className="character-species">{character.species}</p>
      </div>
    </Link>
  );
};

export default Character;
