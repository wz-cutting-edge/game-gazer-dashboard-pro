const SearchBar = ({search, setSearch}) => {
    
    return(
        <div>
            <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search Games"
            />
        </div>
    )
}

export default SearchBar