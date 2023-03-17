/**

React component that displays a list of characters.
@param {Object} props - Component props
@param {Object[]} props.characters - An array of objects representing the characters to be displayed
@param {number} props.characters[].id - The id of the character
@param {string} props.characters[].image - The url of the character's image
@param {string} props.characters[].name - The name of the character
@param {string} props.characters[].species - The species of the character
@returns {JSX.Element} - A React component that displays the list of characters
*/
import React from "react";
import { memo } from "react";
import Character from "./Character";
import { CharacterListProps } from "../types/types";


const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {
  return (
    <div className="character-list">
      {characters.map((character) => (
        <Character key={character.id} character={character} />
      ))}
    </div>
  );
};

export default memo(CharacterList);
