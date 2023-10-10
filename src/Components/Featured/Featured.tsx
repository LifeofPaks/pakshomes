import "./Featured.scss";
import { propertiesData } from "../../Data/Data";
import Card from "../Card/Card";


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
          {propertiesData.map((item) => (
            <Card item={item} key={item.id}/>
           
          ))}
        </div>
      </section>
    </div>
  );
};

export default Featured;
