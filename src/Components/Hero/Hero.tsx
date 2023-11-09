import { useState } from "react";
import { heroData } from "../../Data/Data";
import "./Hero.scss";

const Hero = () => {
  const [dataIndex, setDataIndex] = useState(1);
  const currentPage = heroData[dataIndex];

  return (
    <div className="hero section">
      <div className="modal">
            <h1>{currentPage.title}</h1>
            <p>{currentPage.desc}</p>
            <button>More Details</button>
        <div className="navigateBtns">
          {heroData.map((item, index) => (
            <div
              onClick={() => setDataIndex(index)}
              className={`navBtn ${dataIndex == index ? 'active' : ''} `}
              key={index}
            >
              {item.btn}
            </div>
          ))}

        </div>
      </div>
      <img className="displayImage" src={currentPage.Img} alt="hero-img" loading="lazy" />
    </div>
  );
};

export default Hero;
