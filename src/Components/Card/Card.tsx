
import { Link } from "react-router-dom";
import './Card.scss'
import { useContext } from "react";
import { AppContext } from "../../hooks/ContextApi";

const Card = ({item}: any) => {
  const {scrollToTop} = useContext(AppContext)

  return (
    <Link to={`/card/${item.id}`} className="card" key={item.id} onClick={scrollToTop}>
    <img className="cardImage" src={item.img} alt="card-img" />
    <div className="details">
      <div className="title">
        <h4>{item.title}</h4>
        <img
          src="https://img.icons8.com/ios/100/206ca0/like--v1.png"
          alt="like--v1"
        />
      </div>

      <div className="location">
          <img src="https://img.icons8.com/ios-filled/100/333333/marker.png" alt="marker"/>
          <span>{item.location}</span>
      </div>

      <h3>₦{item.price}</h3>
    </div>

    <div className="view">
    <img width="14" src="https://img.icons8.com/ios-filled/100/333333/slr-camera.png" alt="slr-camera"/>
      <span>{item.views}</span>
    </div>

    <div className={`status ${item.status ? 'av' : 'na'}`}>
      {
          item.status ? 
          <span >Available</span> :
          <span >Not Available</span>
      }
    </div>

    <div className="package">
          <span>{item.package}</span>
        </div>

  </Link>
  )
}

export default Card