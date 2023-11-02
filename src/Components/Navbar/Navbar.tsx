import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.scss";
import { AppContext } from "../../hooks/ContextApi";
import { signOut } from "firebase/auth";
import { auth } from "../../config/Firebase";
import MobileMenu from "../MobileMenu/MobileMenu";

const Navbar = () => {
  const [showCTA, setShowCTA] = useState(false);
  const {
    asGuest,
    loggedIn,
    setAsGuest,
    isOnline,
    setIsOnline,
    setLoggedIn,
    setShowMenu,
    showMenu,
  } = useContext(AppContext);

  const handleSwitchUser = () => {
    setAsGuest(false);
    setIsOnline(false);
    setLoggedIn(false);
    signOutUser();
  };

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const checkUser = asGuest ? "gu" : loggedIn ? "user" : "";

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

              {asGuest | loggedIn ? (
                <div className={checkUser}>{checkUser}</div>
              ) : (
                <img
                  className="avatar"
                  src="https://img.icons8.com/windows/64/ffffff/user-male-circle.png"
                  alt="user-male-circle"
                />
              )}

              <div
                className={` offline ${isOnline ? "onlineStatus" : ""}`}
              ></div>
            </div>

            <div className={` cta ${showCTA ? "in" : "ex"}`}>
              {asGuest | loggedIn ? (
                <div className="act">
                  <div className=" su action">
                    <img
                      src="https://img.icons8.com/material-rounded/48/333333/dashboard-layout.png"
                      alt="dashboard-layout"
                    />
                    <Link to={asGuest ? "/guest" : loggedIn ? "/user" : "/"}>
                      Dashboard
                    </Link>
                  </div>

                  <div className="hl"></div>
                  <div className="action">
                    <img
                      src="https://img.icons8.com/ios-filled/100/333333/login-rounded-right.png"
                      alt="login-rounded-right"
                    />
                    <Link onClick={handleSwitchUser} to="/">
                      Log out
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="act">
                  <div className=" su action">
                    <img
                      src="https://img.icons8.com/pastel-glyph/64/333333/add-user-male--v2.png"
                      alt="add-user-male--v2"
                    />
                    <Link onClick={handleSwitchUser} to="/signup">
                      Sign up
                    </Link>
                  </div>

                  <div className="hl"></div>
                  <div className="action">
                    <img
                      src="https://img.icons8.com/windows/64/333333/login-rounded.png"
                      alt="login-rounded"
                    />
                    <Link onClick={handleSwitchUser} to="/login">
                      Log in
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bottom">
        <Link to="/">
          <div className="logo">
            <img
              src="https://img.icons8.com/ios-filled/100/206ca0/dynamics-365.png"
              alt="dynamics-365"
            />
            <h1>
              Paks <span>Homes</span>
            </h1>
          </div>
        </Link>

        <ul className="navLinks">
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive
                  ? {
                      color: "#00d4ff",
                    }
                  : {}
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="properties">
            Properties
            <img
              src="https://img.icons8.com/metro/52/333333/chevron-down.png"
              alt="chevron-down"
            />
            <ul className="pLists">
              <li>
                <Link to="/rent">For rent</Link>
              </li>
              <li>
                <Link to="/shortlet">for shortlet</Link>
              </li>
              <li>
                <Link to="/sale">for sale</Link>
              </li>
            </ul>
          </li>
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive
                  ? {
                      color: "#00d4ff",
                    }
                  : {}
              }
              to="/about"
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive
                  ? {
                      color: "#00d4ff",
                    }
                  : {}
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {!showMenu && (
          <img
            onClick={()=> setShowMenu(true)}
            className="menu"
            width="20"
            height="20"
            src="https://img.icons8.com/ios-filled/50/000000/menu--v1.png"
            alt="menu--v1"
          />
        )}

        <MobileMenu/>
      </section>
    </nav>
  );
};

export default Navbar;
