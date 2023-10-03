import React from "react";
import "./cta.scss";
import { Link } from "react-router-dom";

const SIgnup = () => {
  return (
    <div className="signup cta">
      <div className="container">
        <h1>Creat an account</h1>
        <form>
            <label htmlFor="fname">Full Name</label>
          <div className="inputWrapper">
            <img  src="https://img.icons8.com/ios-glyphs/30/cccccc/user--v1.png" alt="user--v1"/>
            <input type="text" placeholder="Full Name" id="fname"/>
          </div>

            <label htmlFor="fname">Phone Number</label>
          <div className="inputWrapper">
            <input type="text" placeholder="Phone Number" />
          </div>

            <label htmlFor="fname">Email</label>
          <div className="inputWrapper">
            <input type="text" placeholder="Email" />
          </div>

            <label htmlFor="fname">Password</label>
          <div className="inputWrapper">
            <input type="password" placeholder="Password" />
          </div>

          <button>Continue</button>
        </form>

        <p>
          Own a Paks Homes account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SIgnup;
