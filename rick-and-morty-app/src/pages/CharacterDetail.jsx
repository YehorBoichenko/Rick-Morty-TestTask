import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchCharacterById } from "../services/api";

function CharacterDetail() {
  const [character, setCharacter] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const data = await fetchCharacterById(id);
        setCharacter(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCharacter();
  }, [id]);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="character-detail">
      {character ? (
        <>
          <img
            src={character.image}
            alt={character.name}
            className="character-detail__image"
          />
          <div className="character-detail__info">
            <h1 className="character-detail__name">{character.name}</h1>
            <p>
              <strong>Status:</strong> {character.status}
            </p>
            <p>
              <strong>Species:</strong> {character.species}
            </p>
            <p>
              <strong>Type:</strong> {character.type || "Unknown"}
            </p>
            <p>
              <strong>Gender:</strong> {character.gender}
            </p>
            <p>
              <strong>Origin:</strong> {character.origin.name}
            </p>
            <p>
              <strong>Location:</strong> {character.location.name}
            </p>
            <button
              onClick={handleGoBack}
              className="character-detail__back-btn"
            >
              Go back
            </button>
          </div>
        </>
      ) : (
        <p>Loading character...</p>
      )}
    </div>
  );
}

export default CharacterDetail;
