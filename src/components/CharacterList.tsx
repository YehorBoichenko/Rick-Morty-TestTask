import React from "react";
import { memo } from "react";
import Character from "./Character";

interface CharacterListProps {
  characters: {
    id: number,
    image: string,
    name: string,
    species: string,
  }[];
}

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
