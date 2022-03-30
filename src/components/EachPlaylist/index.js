import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const EachPlaylist = props => {
  const {itemDetails, onDelete} = props
  const {id, name, imageUrl, genre, duration} = itemDetails

  const onDeleteItem = () => {
    onDelete(id)
  }
  return (
    <li className="song-item">
      <img src={imageUrl} alt="track" />
      <p className="name">{name}</p>
      <p className="genre">{genre}</p>
      <p className="duration">{duration}</p>
      <button
        type="button"
        className="del-btn"
        testid="delete"
        onClick={onDeleteItem}
      >
        <AiOutlineDelete />
      </button>
    </li>
  )
}
export default EachPlaylist
