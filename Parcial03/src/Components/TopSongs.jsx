export function TopSongs({ results, showRecommendations }){

    return(
            <div className='card'>
                <h2>Top canciones</h2>
                {
                results.length > 0
                ? (
                    results.map((song, index) =>(
                    <div className='song'
                        key={index}
                        onClick={() => showRecommendations(song.word)}>

                        <p>🎵 {song.word}</p>
                        <span>{song.pop}Reproducciones</span>
                    </div>
                    ))
                    ) : (
                    <p>No hay canciones</p>
                    )

                }
            </div>
    )
}
