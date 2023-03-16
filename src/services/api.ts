const BASE_URL = "https://rickandmortyapi.com/api/";
const CACHE_EXPIRATION_TIME = 60 * 60 * 1000; // 1 hour

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

async function fetchCharacters(): Promise<Character[]> {
  const cachedData = getCachedData<Character[]>("characters");
  if (cachedData) {
    return cachedData;
  }

  const response = await fetch(`${BASE_URL}character`);
  const data = await response.json();
  let characters: Character[] = data.results;

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

async function fetchCharacterById(id: number): Promise<Character> {
  const response = await fetch(`${BASE_URL}character/${id}`);
  const data = await response.json();
  return data;
}

function getCachedData<T>(key: string): T | null {
  const cachedData = localStorage.getItem(key);
  if (cachedData) {
    const { data, timestamp } = JSON.parse(cachedData);
    const expirationTime = timestamp + CACHE_EXPIRATION_TIME;
    const isExpired = expirationTime < Date.now();
    if (!isExpired) {
      return data;
    }
    localStorage.removeItem(key);
  }
  return null;
}

function setCachedData<T>(key: string, data: T): void {
  const timestamp = Date.now();
  const cacheData = { data, timestamp };
  localStorage.setItem(key, JSON.stringify(cacheData));
}

export { fetchCharacters, fetchCharacterById, type Character };
