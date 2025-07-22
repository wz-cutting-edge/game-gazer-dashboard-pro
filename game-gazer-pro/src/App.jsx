import { useState, useEffect } from 'react'
import './App.css'
import { fetchGames, fetchGenres } from './utils/rawgAPI';
import Stats from './components/Stats'
import GameList from './components/GameList'
import SearchBar from './components/SearchBar'
import GenreFilter from './components/GenreFilter'
import Charts from './components/Charts';
import SideBar from './components/SideBar';

function App() {
  const [games, setGames] = useState([]);
  const [genres, setGenres] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedGenres, setSelectedGenres] = useState('All');

  useEffect(() => {
    async function loadData() {
      const gamesData = await fetchGames();
      setGames(gamesData);
      const genresData = await fetchGenres();
      setGenres(genresData);
    }
    loadData();
  }, []);

  const filteredGames = games.filter(game =>
    (selectedGenres === "All" ||
      game.genres.some(g => g.name === selectedGenres)) &&
    game.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
        <SideBar/>
      <div className='header'>
        <div className='header-content'>
          <h2>GG</h2>
          <h2>DASH</h2>
          <p>Game Gazer Dashboard</p>
        </div>
      </div>

      <div className='stats'>
        <h3>STATS</h3>
        <Stats games={filteredGames} />
        <h4>CHARTS</h4>
        <Charts games={filteredGames} />
      </div>

      <div className='filter'>
        <div className='filter-group'>
          <label className='filter-label'>Search Games</label>
          <SearchBar search={search} setSearch={setSearch}/>
        </div>
        <div className='filter-group'>
          <label className='filter-label'>Filter by Genre</label>
          <GenreFilter
            genres={genres}
            selectedGenres={selectedGenres}
            setSelectedGenres={setSelectedGenres}
          />
        </div>
      </div>

      <div className='list'>
        <GameList games={filteredGames}/>
      </div>
    </div>
  )
}

export default App