const BASE_URL = "https://rickandmortyapi.com/api/";
const CACHE_EXPIRATION_TIME = 60 * 60 * 1000; // 1 hour

async function fetchCharacters() {
  const cachedData = getCachedData("characters");
  if (cachedData) {
    return cachedData;
  }

  const response = await fetch(`${BASE_URL}character`);
  const data = await response.json();
  let characters = data.results;

  let currentPage = data.info.next;

  // While there are more pages of characters, fetch them and concatenate the results
  while (currentPage) {
    const nextPageResponse = await fetch(currentPage);
    const nextPageData = await nextPageResponse.json();
    characters = characters.concat(nextPageData.results);
    currentPage = nextPageData.info.next;
  }

  setCachedData("characters", characters);

  return characters;
}

async function fetchCharacterById(id) {
  const response = await fetch(`${BASE_URL}character/${id}`);
  const data = await response.json();
  return data;
}

function getCachedData(key) {
  const cachedData = localStorage.getItem(key);
  if (cachedData) {
    const { data, timestamp } = JSON.parse(cachedData);
    const expirationTime = timestamp + CACHE_EXPIRATION_TIME;
    const isExpired = expirationTime < Date.now();
    if (!isExpired) {
      return data;
    }
  }
  return null;
}

function setCachedData(key, data) {
  const timestamp = Date.now();
  const cacheData = { data, timestamp };
  localStorage.setItem(key, JSON.stringify(cacheData));
}

export { fetchCharacters, fetchCharacterById };
