import React from "react";
import "./Properties.scss";
import { exploreData } from "../../Data/Data";

const Properties = () => {
  return (
    <div className="propertiez">
      <h1>Properties by locations</h1>
      <p>
        Explore properties by locations in Nigeria Suitable For Real Estate
        Investment In The Best Real Estate Projects. We analyze your
        expectations and make your dream investment a reality.
      </p>

    <div className="exploreContainer">
    <div className="explore">
        {exploreData.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt="card-img" />
            <h1>{item.location}</h1>
          </div>
        ))}

        <button className="left"><img src="https://img.icons8.com/ios-glyphs/30/333333/chevron-left.png" alt="chevron-left"/></button>
        <button className="right"><img src="https://img.icons8.com/ios-glyphs/30/333333/chevron-right.png" alt="chevron-right"/></button>
      </div>
    </div>
    
    </div>
  );
};

export default Properties;
