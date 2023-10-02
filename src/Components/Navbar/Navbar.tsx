import React from "react";
import { Link } from "react-router-dom";
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="top">
        <div className="left">
          <div className="socials">
            <img
              src="https://img.icons8.com/ios-filled/100/ffffff/facebook-f.png"
              alt="facebook-f"
            />
            <img
              src="https://img.icons8.com/ios/100/ffffff/instagram-new--v1.png"
              alt="instagram-new--v1"
            />
            <img
              src="https://img.icons8.com/material-rounded/48/ffffff/twitter.png"
              alt="twitter"
            />
            <img
              src="https://img.icons8.com/ios-filled/100/ffffff/youtube-play.png"
              alt="youtube-play"
            />
          </div>

          <div className="vl"></div>
          <p className="email">info@pakshomes.com</p>
        </div>
        <div className="right">
          <img
            src="https://img.icons8.com/ios-filled/100/ffffff/like--v1.png"
            alt="like--v1"
          />
          <p className="wishlist">
            Wishlist <span>(0)</span>
          </p>
        </div>
      </div>

      <div className="bottom">
        <div className="logo">
          <img
            src="https://img.icons8.com/ios-filled/100/206ca0/dynamics-365.png"
            alt="dynamics-365"
          />
          <h1>
            Paks <span>Homes</span>
          </h1>
        </div>

        <ul>
            <li className="properties">Properties 
            <img src="https://img.icons8.com/metro/52/333333/chevron-down.png" alt="chevron-down"/>

                <ul className="pLists">
                    <li><Link to=''>Apartment</Link></li>
                    <li><Link to=''>Condo</Link></li>
                    <li><Link to=''>Villa</Link></li>
                    <li><Link to=''>Land</Link></li>
                    <li><Link to=''>Commercial</Link></li>
                    <li><Link to=''>Hotel</Link></li>
                </ul>
            </li>
            <li><Link to=''>Blog</Link></li>
            <li><Link to=''>News</Link></li>
            <li><Link to=''>About Us</Link></li>
            <li><Link to=''>Contact</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
