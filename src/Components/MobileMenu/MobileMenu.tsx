import React, { useContext, useState } from "react";
import "./MobileMenu.scss";
import { Link, NavLink } from "react-router-dom";
import { AppContext } from "../../hooks/ContextApi";

const MobileMenu = () => {
  const { setShowMenu, showMenu, setLoggedIn, setAsGuest } = useContext(AppContext);

  const handleLogout = ()=>{
  setLoggedIn(false)
  setAsGuest(false)
  setShowMenu(false)
}

  return (
    <div className={`mobile ${showMenu ? "show" : ""}`}>
      <img
        onClick={() => setShowMenu(false)}
        className="close"
        width="20"
        height="20"
        src="https://img.icons8.com/metro/52/FCC419/cancel.png"
        alt="cancel"
      />

      <ul className="mobNav" onClick={() => setShowMenu(false)}>
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

        <li>
          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#00d4ff",
                  }
                : {}
            }
            to="/rent"
          >
            For rent
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
            to="/shortlet"
          >
            for shortlet
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
            to="/sale"
          >
            for sale
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

      <div className="mCta" onClick ={handleLogout} >
        <Link  className="mLink" to='/login'>Log in</Link> <p>or</p>
        <button  className="mBtn"><Link  className="mLink" to='/signup'>sign up</Link></button>
      </div>
    </div>
  );
};

export default MobileMenu;
