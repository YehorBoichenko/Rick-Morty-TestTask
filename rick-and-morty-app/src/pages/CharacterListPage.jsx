import React, { useState, useEffect } from "react";
import CharacterList from "../components/CharacterList";
import Header from "../components/Header";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";
import { fetchCharacters } from "../services/api";
import { sortCharactersByName } from "../utils/sort";
import { saveToLocalStorage, getFromLocalStorage } from "../utils/storage";

const CharacterListPage = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const storedSearchTerm = getFromLocalStorage("searchTerm");
    if (storedSearchTerm) {
      setSearchTerm(storedSearchTerm);
    }

    const fetchCharactersData = async () => {
      const charactersData = await fetchCharacters();
      const sortedCharacters = sortCharactersByName(charactersData);
      setCharacters(sortedCharacters);
    };

    fetchCharactersData();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    saveToLocalStorage("searchTerm", term);
  };

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header />
      <SearchBar value={searchTerm} onChange={handleSearch} />
      <CharacterList characters={filteredCharacters} />
      <Pagination />
    </div>
  );
};

export default CharacterListPage;
