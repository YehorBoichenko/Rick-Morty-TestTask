const BASE_URL = "https://rickandmortyapi.com/api/";

async function fetchCharacters() {
  const response = await fetch(`${BASE_URL}character`);
  const data = await response.json();
  return data.results;
}

async function fetchCharacterById(id) {
  const response = await fetch(`${BASE_URL}character/${id}`);
  const data = await response.json();
  return data;
}

export { fetchCharacters, fetchCharacterById };
