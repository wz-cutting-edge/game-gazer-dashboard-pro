const Stats = ({ games }) => {
  const totalGames = games.length;
  const averageRating = totalGames > 0 
    ? (games.reduce((sum, game) => sum + game.rating, 0) / totalGames).toFixed(1)
    : 0;

  const topGenre = totalGames > 0 
    ? games
        .flatMap(game => game.genres)
        .reduce((acc, genre) => {
          acc[genre.name] = (acc[genre.name] || 0) + 1;
          return acc;
        }, {})
    : {};

  const mostPopularGenre = Object.keys(topGenre).length > 0
    ? Object.keys(topGenre).reduce((a, b) => topGenre[a] > topGenre[b] ? a : b)
    : "None";

  const highRatedGames = games.filter(game => game.rating >= 4.0).length;

  return (
    <div className='stats-container'>
      <div className='stat-card'>
        <div className='stat-value'>{totalGames}</div>
        <div className='stat-label'>Total Games</div>
      </div>
      <div className='stat-card'>
        <div className='stat-value'>{averageRating}</div>
        <div className='stat-label'>Average Rating</div>
      </div>
      <div className='stat-card'>
        <div className='stat-value'>{mostPopularGenre}</div>
        <div className='stat-label'>Top Genre</div>
      </div>
      <div className='stat-card'>
        <div className='stat-value'>{highRatedGames}</div>
        <div className='stat-label'>High Rated (4.0+)</div>
      </div>
    </div>
  );
};

export default Stats;