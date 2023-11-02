import "./Featured.scss";
import { propertiesData } from "../../Data/Data";
import Card from "../Card/Card";


const Featured = () => {

  return (
    <div className="featured">

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
