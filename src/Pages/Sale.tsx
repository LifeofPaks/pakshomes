import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import { propertiesData } from "../Data/Data";
import Card from '../Components/Card/Card';

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
                <Card item={item}/>
              )
          )}
        </div>

    </div>
        <Footer/>
    </div>
  )
}

export default Sale