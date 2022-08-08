// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {name, imgUrl} = destinationDetails
  return (
    <li className="list-container">
      <img src={imgUrl} alt={name} className="image" />
      <p className="heading">{name}</p>
    </li>
  )
}

export default DestinationItem
