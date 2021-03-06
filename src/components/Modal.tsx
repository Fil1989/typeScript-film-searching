// import { useState } from 'react'
import Button from '@mui/material/Button'
import likeThumb from '../assets/like.png'
import dislikeThumb from '../assets/dislike.png'
import { IInfo, IInfoCb } from '../interfaces/main.interface'

interface IProps {
  plot: string
  actors: string
  rating: string
  writer: string
  setInfo: (cb: IInfoCb | IInfo) => void
}

const Modal = ({ plot, actors, rating, writer, setInfo }: IProps) => {
  //   const [thumb, setThumb] = useState(null)

  return (
    <div aria-label="Modal window" className="modal_main">
      <div className="modal_back" aria-label="Background of modal window"></div>
      <div className="modal_wrapper">
        <ul className="modal" aria-label="Characteristics of movie">
          <Button
            type="button"
            className="close_button"
            variant="contained"
            onClick={() => {
              setInfo(previousValue => ({
                ...previousValue,
                open: false,
              }))
              document.body.style.overflow = 'scroll'
            }}
          >
            X
          </Button>
          <li className="characteristics">{plot}</li>
          <li className="characteristics">
            <span>Actors: </span>
            {actors}
          </li>
          <li className="characteristics">
            <span>Writer: </span> {writer}
          </li>
          <li className="characteristics">
            <span>Rating: </span>
            {rating}{' '}
            {Number.parseInt(rating) < 7 ? (
              <img src={dislikeThumb} alt="Dislike" />
            ) : (
              <img src={likeThumb} alt="Like" />
            )}
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Modal
