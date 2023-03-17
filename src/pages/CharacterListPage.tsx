import React, { useState, useEffect } from "react";
import CharacterList from "../components/CharacterList";
import Footer from "../components/Footer";
import  Hero  from "../components/Hero";
import Login from "../components/Login";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";
import { fetchCharacters, Character } from "../services/api";
import { sortCharactersByName } from "../utils/sort";

const CharacterListPage = (): JSX.Element => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [charactersPerPage] = useState<number>(8);

  useEffect(() => {
    const storedSearchTerm = localStorage.getItem("searchTerm") || "";
    setSearchTerm(storedSearchTerm);

    const fetchData = async (): Promise<void> => {
      const charactersData = await fetchCharacters();
      const sortedCharacters = sortCharactersByName(charactersData);
      setCharacters(sortedCharacters);
    };

    fetchData();
  }, []);

  useEffect(() => {
    setCurrentPage(1); // Reset current page to 1 when the search term changes
  }, [searchTerm]);

  const handleSearch = (term: string): void => {
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

  const onChangePage = (pageNumber: number): void => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
       <header><Login/></header>
      <main>
            <div className="container">
      <Hero />
      <SearchBar value={searchTerm} onChange={handleSearch} />
      <CharacterList characters={currentCharacters} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onChangePage={onChangePage}
        itemsPerPage={charactersPerPage}
        totalItems={sortedCharacters.length}
      />
      <Footer author={""} website={""}/>
    </div>
      </main>
    </>

  );
};

export default CharacterListPage;
