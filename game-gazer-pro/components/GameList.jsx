import GameCard from "./GameCard"

const GameList = ({games}) => {
    if (!games.length) {
        return <div className='empty-state'>No games found.</div>;
    }

    return(
        <div className='game-grid'>
            {games.map(game => (
                <GameCard key={game.id} game={game}/>
            ))}
        </div>
    )
}

export default GameList
