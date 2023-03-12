import React from "react";

export default function CharacterCard({ character }) {
  return (
    <div className="card">
      <img src={character.image} alt={character.name} className="card__image" />
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
}
