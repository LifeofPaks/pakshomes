import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import { propertiesData } from "../Data/Data";
import Card from '../Components/Card/Card';

const Shortlet = () => {
  return (
  <div className="listing">
      <Navbar />

      <div className="proContent">
        <h1>Properties for shortlet</h1>

        <div className="proContainer">
          {propertiesData.map(
            (item) =>
            item.shortlet &&
              <Card item={item}/>

          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Shortlet