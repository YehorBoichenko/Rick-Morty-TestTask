function sortCharactersByName(characters) {
  return characters.sort((a, b) => a.name.localeCompare(b.name));
}

export { sortCharactersByName };
