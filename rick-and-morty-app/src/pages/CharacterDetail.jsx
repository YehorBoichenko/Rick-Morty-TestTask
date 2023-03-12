import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchCharacterById } from "../services/api";
import Loader from "../components/Loader";
import Goback from "../components/GoBack";
import CharacterCard from "../components/CharacterCard";
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

  const prevPage = navigate.state?.from ?? "/";

  return (
    <div className="container">
      {character ? (
        <>
          <Goback to={prevPage} />
          <CharacterCard character={character} />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default CharacterDetail;
