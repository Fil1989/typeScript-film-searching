import info from '../assets/Information_icon.svg.png'
import { useSelector } from 'react-redux'

function FilmTemplate({ searchResults, setInfo }) {
  console.log(searchResults)
  const token = useSelector(state => state.token)

  return (
    <>
      {searchResults.length !== 0 &&
        searchResults.map(film => (
          <li key={film.id}>
            <div
              className="film"
              style={{ backgroundImage: `url(${film.poster})` }}
              aria-label={film.title}
            >
              <span className="title">{film.title}</span>
            </div>
            {token && (
              <div className="info">
                <span>{film.genre} </span>
                <span>{film.director} </span>
                <span>{film.year}</span>

                <img
                  src={info}
                  alt="icon info"
                  className="info_icon"
                  onClick={() => {
                    setInfo({
                      open: true,
                      plot: film.plot,
                      writer: film.writer,
                      actors: film.actors,
                      rating: film.imdbrating,
                    })
                    document.body.style.overflow = 'hidden'
                  }}
                />
              </div>
            )}
          </li>
        ))}
    </>
  )
}

export default FilmTemplate
