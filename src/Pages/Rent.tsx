import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import { propertiesData } from "../Data/Data";
import Card from "../Components/Card/Card";

const Rent = () => {
  return (
    <div className="listing">
      <Navbar />

      <div className="proContent">
        <h1>Properties for rent</h1>

        <div className="proContainer">
          {propertiesData.map(
            (item) =>
              item.rent && (
                <Card item={item}/>
              )
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Rent;
