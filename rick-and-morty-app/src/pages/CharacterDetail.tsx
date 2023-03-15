import React, { useState, useEffect } from "react";
import { useParams, useLocation, Navigate } from "react-router-dom";
import { fetchCharacterById } from "../services/api";
import Loader from "../components/Loader";
import GoBack from "../components/GoBack";
import CharacterCard from "../components/CharacterCard";
import { Character } from "../services/api"; // assuming the Character type is defined in a types.ts file

function CharacterDetail() {
  const [character, setCharacter] = useState<Character | null>(null);
  const { id } = useParams<{ id: string }>();
  const location = useLocation();

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const data = await fetchCharacterById(parseInt(id ?? ''));
        setCharacter(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (id) {
      fetchCharacter();
    }
  }, [id]);

  const prevPage = location.state?.from ?? "/";

  if (!id) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container">
      {character ? (
        <>
          <GoBack to={prevPage} />
          <CharacterCard character={character} />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default CharacterDetail;
