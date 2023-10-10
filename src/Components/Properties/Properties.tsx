
import "./Properties.scss";
import { exploreData } from "../../Data/Data";

const Properties = () => {

  const nextSlide = () => {
    const slider: any = document.getElementById('explore')
    slider.scrollLeft = slider.scrollLeft - 350
  };

  const prevSlide = () => {
    const slider: any = document.getElementById('explore')
    slider.scrollLeft = slider.scrollLeft + 350
  };
  return (
    <div className="propertiez">
      <h1>Properties by locations</h1>
      <p>
        Explore properties by locations in Nigeria Suitable For Real Estate
        Investment In The Best Real Estate Projects. We analyze your
        expectations and make your dream investment a reality.
      </p>

    <div className="exploreContainer">
    <div className="explore" id="explore">
        {exploreData.map((item) => (
          <div className="cardX" key={item.id}>
            <img src={item.image} alt="card-img" />
            <h1>{item.location}</h1>
          </div>
        ))}

        <button onClick={prevSlide} className="left"><img src="https://img.icons8.com/ios-glyphs/30/333333/chevron-left.png" alt="chevron-left"/></button>
        <button onClick={nextSlide} className="right"><img src="https://img.icons8.com/ios-glyphs/30/333333/chevron-right.png" alt="chevron-right"/></button>
      </div>
    </div>
    
    </div>
  );
};

export default Properties;
