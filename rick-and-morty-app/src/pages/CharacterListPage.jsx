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
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage, setCharactersPerPage] = useState(8);

  useEffect(() => {
    const storedSearchTerm = getFromLocalStorage("searchTerm");
    if (storedSearchTerm) {
      setSearchTerm(storedSearchTerm);
    }

    const fetchCharactersData = async () => {
      const charactersData = await fetchCharacters();
      const sortedCharacters = sortCharactersByName(
        charactersData,
        storedSearchTerm
      );
      setCharacters(sortedCharacters);
    };

    fetchCharactersData();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    saveToLocalStorage("searchTerm", term);
    setCurrentPage(1);
  };

  const sortedCharacters = sortCharactersByName(characters, searchTerm);

  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = sortedCharacters.slice(
    indexOfFirstCharacter,
    indexOfLastCharacter
  );

  const totalPages = Math.ceil(sortedCharacters.length / charactersPerPage);

  const onChangePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Header />
      <SearchBar value={searchTerm} onChange={handleSearch} />
      <CharacterList characters={currentCharacters} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onChangePage={onChangePage}
        itemsPerPage={charactersPerPage}
        totalItems={sortedCharacters.length}
      />
    </div>
  );
};

export default CharacterListPage;
