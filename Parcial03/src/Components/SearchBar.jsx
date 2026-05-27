export function SearchBar({query, handleSearch}){
    return(
        <input type="text" 
        placeholder="Buscar cancion..."
        value={query}
        onChange={handleSearch}/>
    )
}