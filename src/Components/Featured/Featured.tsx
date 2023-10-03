import React from "react";
import "./Featured.scss";
import { featuredData } from "../../Data/Data";

const Featured = () => {
  return (
    <div className="featured">
      <section className="searchBox section">
        <h1>Find your Property in Nigeria</h1>
        <button>
          <img
            src="https://img.icons8.com/ios-filled/100/333333/search--v1.png"
            alt="search--v1"
          />
        </button>
        <input type="text" placeholder="Enter Keyword..." />
        <button>
          <img
            src="https://img.icons8.com/ios/100/333333/center-direction.png"
            alt="center-direction"
          />
        </button>
        <div className="inputBox">
          <input type="text" placeholder="City, State" />
          <button>Search</button>
        </div>
      </section>

      <section className="listing section">
        <h2>Recommended Properties</h2>
        <p>
          Explore Our Best Properties For Sale In Nigeria At Cheap Prices And
          Suitable For Real Estate Investment In The Best Real Estate Projects.
          We analyze your expectations and make your dream investment a reality.
        </p>

        <div className="cardContainer">
          {featuredData.map((item) => (
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
                    <span>{item.location}</span>
                    <img src="https://img.icons8.com/ios-filled/100/000000/marker.png" alt="marker"/>
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

            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Featured;
