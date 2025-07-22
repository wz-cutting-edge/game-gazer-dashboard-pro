import { useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';
import SideBar from '../components/SideBar';

const DetailView = () => {
    const { id } = useParams();
    const [game, setGame] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchGameDetails() {
            try {
                const res = await fetch(
                    `https://api.rawg.io/api/games/${id}?key=${import.meta.env.VITE_RAWG_API_KEY}`
                );
                const data = await res.json();
                setGame(data);
            } catch (error) {
                console.error("Error fetching game details:", error);
            } finally {
                setLoading(false)
            }
        }
        fetchGameDetails();
    },[id]);
  return (
    <div className="whole-page">
      <SideBar />
      <div className="game-details">
        {loading && <p>Loading...</p>}
        {!loading && !game && <p>Game not found.</p>}
        {!loading && game && (
          <div>
            <h1>{game.name}</h1>
            <img
              src={game.background_image}
              alt={game.name}
              style={{ width: '100%', maxWidth: '600px', marginBottom: '1rem' }}
            />
            <p><strong>Release Date:</strong> {game.released}</p>
            <p><strong>Rating:</strong> ⭐ {game.rating} / {game.rating_top}</p>
            <p><strong>Genres:</strong> {game.genres.map(g => g.name).join(', ')}</p>
            <p><strong>Description:</strong></p>
            <div dangerouslySetInnerHTML={{ __html: game.description }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailView;