const GenreFilter = ({genres, selectedGenres, setSelectedGenres}) => {
    return(
        <div>
            <select
                value={selectedGenres}
                onChange={e => setSelectedGenres(e.target.value)}
            >
                <option value="All">All Genres</option>
                {genres.map((genre) => (
                    <option key={genre.id} value={genre.name}>
                        {genre.name}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default GenreFilter