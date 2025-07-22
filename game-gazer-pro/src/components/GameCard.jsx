import {Link} from 'react-router-dom';

const GameCard = ({game}) => {
    return(
        <Link to= {`/game/${game.id}`}>
            <div className='game-card'>
                <img 
                    src={game.background_image} 
                    alt={game.name}
                    className='game-card-image'
                />
                <div className='game-card-content'>
                    <h3>{game.name}</h3>
                    <div className='game-rating'>
                        ⭐ {game.rating}
                    </div>
                    <div className='game-genres'>
                        {game.genres.map(g => (
                            <span key={g.id} className='genre-tag'>
                                {g.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default GameCard