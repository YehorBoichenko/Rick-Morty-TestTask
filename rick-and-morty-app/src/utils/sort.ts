import { Character } from "../services/api";

function sortCharactersByName(
  characters: Character[],
  searchQuery: string = ""
): Character[] {
  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedCharacters = filteredCharacters.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) {
      return -1;
    } else if (nameA > nameB) {
      return 1;
    } else {
      return 0;
    }
  });

  return sortedCharacters;
}

export { sortCharactersByName };
