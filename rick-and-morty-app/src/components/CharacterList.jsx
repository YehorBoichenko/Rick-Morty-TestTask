import React from "react";
import Character from "./Character";

function CharacterList(props) {
  const { characters } = props;
  return (
    <div className="character-list">
      {characters.map((character) => (
        <Character key={character.id} character={character} />
      ))}
    </div>
  );
}

export default CharacterList;
