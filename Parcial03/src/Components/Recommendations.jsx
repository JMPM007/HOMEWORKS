export function Recommendations({ recommendedSongs }) {
return(
        <div className='container'>
          <div className='card'>
              <h2>Recomendaciones</h2>
              <p>hacer click en la cancion para ver recomendaciones</p>
              {
                recommendedSongs.length > 0
                ?(
                  recommendedSongs.map((songs, index) =>(
                    <p key={index}>🎵 {songs}</p>
                  ))
                )
                :(
                  <p>No hay recomendaciones</p>
                )
              }
          </div>
        </div>
)
}


