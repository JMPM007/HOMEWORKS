import { useState } from 'react'
import './App.scss'
import { recommendations } from './Data/Recommendations'
import { songs } from './Data/songs'
import { Graph } from './Structures/Graph'
import { Trie } from './Structures/Trie'
import { TopSongs } from './Components/TopSongs'
import { Recommendations } from './Components/Recommendations'
import { SearchBar } from './Components/SearchBar'


const trie = new Trie()

songs.forEach(songs => {
  trie.insert(songs.word, songs.pop)
})

const graph = new Graph()

songs.forEach(songs =>{
  graph.addNode(songs.word)
})

recommendations.forEach(([song1, song2]) =>{
  graph.addEdge(song1, song2)
})

function App() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState(trie.searchPref("", 5))
  const [recommendedSongs, setRecommendedSongs] = useState([])

  const handleSearch = (e) =>{
    const value = e.target.value

    setQuery(value)

    if(value.trim() === ""){
      setResults(trie.searchPref("", 5))
      return
    }

    const filteredSongs  = trie.searchPref(value, 5)
    setResults(filteredSongs)
  }

  const showRecommendations = (song) =>{
    const rec = graph.adjlist[song] || []
  
    setRecommendedSongs(rec)
  }

  return(
    <div className='dashboard'>
      <h1>Spotify</h1>

      <SearchBar 
      query={query}
      handleSearch={handleSearch}
      />

      <div className='container'>
        <TopSongs 
        results={results}
        showRecommendations={showRecommendations}/>

        <Recommendations
        recommendedSongs={recommendedSongs}/>
      </div>
    </div>
  )
}

export default App
