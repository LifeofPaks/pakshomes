import React from "react";
import "./cta.scss";
import { Link } from "react-router-dom";

const SIgnup = () => {
  return (
    <div className="signup ctaction">
      <div className="container">
        <h1>Creat an account</h1>
        <form>
          <label htmlFor="fname">Full Name</label>
          <div className="inputWrapper">
            <img
              src="https://img.icons8.com/ios-glyphs/30/cccccc/user--v1.png"
              alt="user--v1"
            />
            <input type="text" placeholder="Full Name" id="fname" />
          </div>

          <label htmlFor="fname">Phone Number</label>
          <div className="inputWrapper">
            <img
              src="https://img.icons8.com/ios-filled/100/cccccc/phone.png"
              alt="phone"
            />
            <input type="text" placeholder="Phone Number" />
          </div>

          <label htmlFor="fname">Email</label>
          <div className="inputWrapper">
            <img
              src="https://img.icons8.com/ios-filled/100/cccccc/new-post.png"
              alt="new-post"
            />
            <input type="text" placeholder="Email" />
          </div>

          <label htmlFor="fname">Password</label>
          <div className="inputWrapper">
            <img
              src="https://img.icons8.com/ios-filled/100/cccccc/password.png"
              alt="password"
            />
            <input type="password" placeholder="Password" />
          </div>

          <button>Continue</button>
        </form>

        <p>
          Own a Paks Homes account? <Link to="/login">Login</Link>
        </p>
      </div>

      <div className="exec">
        <div className="modal">
          <p>
            <span> Paks Homes</span> is a property agency with luxury projects
            and the best deals. Dozens of real estate luxury apartments, smart
            homes, elegantly designed offices, modern constructions and all
            consultancy services are available on the Property Superiors
            website. We help buyers to buy and sellers to sell.
          </p>
        </div>
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

        <img
          className="bg"
          src="https://i.pinimg.com/564x/1e/52/48/1e5248687d15a9727858396931d8bf31.jpg"
          alt="bgbg"
        />
      </div>
    </div>
  );
};

export default SIgnup;
