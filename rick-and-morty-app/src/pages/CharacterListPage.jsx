import React, { useState, useEffect } from "react";
import CharacterList from "../components/CharacterList";
import Header from "../components/Header";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";
import { fetchCharacters } from "../services/api";
import { sortCharactersByName } from "../utils/sort";

const CharacterListPage = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage] = useState(8);

  useEffect(() => {
    const storedSearchTerm = localStorage.getItem("searchTerm") || "";
    setSearchTerm(storedSearchTerm);

    async function fetchData() {
      const charactersData = await fetchCharacters();
      const sortedCharacters = sortCharactersByName(charactersData);
      setCharacters(sortedCharacters);
    }

    fetchData();
  }, []);

  useEffect(() => {
    setCurrentPage(1); // Reset current page to 1 when the search term changes
  }, [searchTerm]);

  const handleSearch = (term) => {
    setSearchTerm(term);
    localStorage.setItem("searchTerm", term);
  };

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedCharacters = sortCharactersByName(filteredCharacters);

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
    <div className="container">
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
