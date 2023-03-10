function sortCharactersByName(characters, searchQuery = "") {
  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedCharacters = filteredCharacters.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA === nameB) {
      // If names are equal, sort by ID instead to ensure consistent order
      return a.id - b.id;
    } else if (nameA < nameB) {
      return -1;
    } else {
      return 1;
    }
  });

  return sortedCharacters;
}

export { sortCharactersByName };
