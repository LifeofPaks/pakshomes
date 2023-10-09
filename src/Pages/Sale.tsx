import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import { propertiesData } from "../Data/Data";

const Sale = () => {
  return (
  <div className="listing">
      <Navbar />

      <div className="proContent">
        <h1>Properties for Sale</h1>

        <div className="proContainer">
          {propertiesData.map(
            (item) =>
              item.sale && (
                <div className="card" key={item.id}>
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
                      <img
                        src="https://img.icons8.com/ios-filled/100/333333/marker.png"
                        alt="marker"
                      />
                      <span>{item.location}</span>
                    </div>

                    <h3>₦{item.price}</h3>
                  </div>

                  <div className="view">
                    <img
                      width="14"
                      src="https://img.icons8.com/ios-filled/100/333333/slr-camera.png"
                      alt="slr-camera"
                    />
                    <span>{item.views}</span>
                  </div>

                  <div className={`status ${item.status ? "av" : "na"}`}>
                    {item.status ? (
                      <span>Available</span>
                    ) : (
                      <span>Not Available</span>
                    )}
                  
                  </div>

                  <div className="package">
                    <span>{item.package}</span>
                  </div>
               
                </div>
              )
          )}
        </div>

    </div>
        <Footer/>
    </div>
  )
}

export default Sale