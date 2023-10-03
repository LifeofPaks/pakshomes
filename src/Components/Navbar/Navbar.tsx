import  { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [showCTA, setShowCTA] = useState(false);

  return (
    <nav className="navbar">
      <section className="top">
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
          <div className="sec">
            <img
              src="https://img.icons8.com/ios-filled/100/ffffff/like--v1.png"
              alt="like--v1"
            />
            <p className="wishlist">
              Wishlist <span>(0)</span>
            </p>
          </div>

          <div className="ctaWrapper" onClick={() => setShowCTA(!showCTA)}>
           
            <div className="profile">
              <img
                src="https://img.icons8.com/material-rounded/48/ffffff/thumbnails.png"
                alt="thumbnails"
              />
              <img
                className="avatar"
                src="https://img.icons8.com/windows/64/ffffff/user-male-circle.png"
                alt="user-male-circle"
              />
              <div className="onlineStatus"></div>
            </div>


              <div className={` cta ${showCTA ? 'in' : 'ex'}`}>
                <div className=" su action">
                  <img
                    src="https://img.icons8.com/pastel-glyph/64/333333/add-user-male--v2.png"
                    alt="add-user-male--v2"
                  />
                  <Link to="/signup">Sign up</Link>
                </div>
                <div className="hl"></div>
                <div className="action">
                  <img
                    src="https://img.icons8.com/ios-filled/100/333333/login-rounded-right.png"
                    alt="login-rounded-right"
                  />
                  <Link to="/login">Log in</Link>
                </div>
              </div>

          </div>
        </div>
      </section>

      <section className="bottom">
        <div className="logo">
          <img
            src="https://img.icons8.com/ios-filled/100/206ca0/dynamics-365.png"
            alt="dynamics-365"
          />
          <h1>
            Paks <span>Homes</span>
          </h1>
        </div>

        <ul className="navLinks">
          <li className="properties">
            Properties
            <img
              src="https://img.icons8.com/metro/52/333333/chevron-down.png"
              alt="chevron-down"
            />
            <ul className="pLists">
              <li>
                <Link to="">For rent</Link>
              </li>
              <li>
                <Link to="">for shortlet</Link>
              </li>
              <li>
                <Link to="">for sale</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="">Blog</Link>
          </li>
          <li>
            <Link to="">News</Link>
          </li>
          <li>
            <Link to="">About Us</Link>
          </li>
          <li>
            <Link to="">Contact</Link>
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
