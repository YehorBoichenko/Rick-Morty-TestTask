/**

A React component that displays a single character's information
@param {Object} props - Component props
@param {Object} props.character - An object representing the character to be displayed
@param {number} props.character.id - The id of the character
@param {string} props.character.image - The url of the character's image
@param {string} props.character.name - The name of the character
@param {string} props.character.species - The species of the character
@returns {JSX.Element} - A React component that displays the character's information
*/
import React from "react";
import {CharacterCardProps} from "../types/types";


const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <div className="card">
      <img loading="lazy" src={character.image} alt={character.name} className="card__image" />
      <h1 className="card__name">{character.name}</h1>
      <h2 className="card__title">Informations</h2>
      <ul className="info">
        <div className="info__container">
          <li className="info__item">
            <h3 className="info__title">Gender</h3>
            <p className="info__descr">{character.gender}</p>
          </li>
          <li className="info__item">
            <h3 className="info__title">Status</h3>
            <p className="info__descr">{character.status}</p>
          </li>
          <li className="info__item">
            <h3 className="info__title">Specie</h3>
            <p className="info__descr">{character.species}</p>
          </li>
          <li className="info__item">
            <h3 className="info__title">Origin</h3>
            <p className="info__descr">
              {character.origin && character.origin.name}
            </p>
          </li>
          <li className="info__item">
            <h3 className="info__title">Type</h3>
            <p className="info__descr">
              {character.type ? character.type : "Unknown"}
            </p>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default CharacterCard;
