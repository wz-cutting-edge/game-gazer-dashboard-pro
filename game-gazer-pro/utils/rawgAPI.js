const RAWG_API_KEY = import.meta.env.VITE_RAWG_API_KEY;

export async function fetchGames(searchTerm = "") {
  const response = await fetch(
    `https://api.rawg.io/api/games?key=${RAWG_API_KEY}&search=${searchTerm}`
  );
  const data = await response.json();
  return data.results;
}

export async function fetchGenres() {
  const response = await fetch(
    `https://api.rawg.io/api/genres?key=${RAWG_API_KEY}`
  );
  const data = await response.json();
  return data.results;
}