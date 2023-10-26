import { useContext, useState } from "react";
import "./cta.scss";
import { Link } from "react-router-dom";
import { AppContext } from "../../hooks/ContextApi";
import Loader from "react-loaders";

const SIgnup = () => {
  const {
    nameErr,
    emailErr,
    phoneErr,
    passwordErr,
    handleFullname,
    handlePhone,
    handleEmail,
    handlePassword,
    register,
    name,
    email,
    phone,
    password,
    nameErrMsg,
    phoneErrMsg,
    emailErrMsg,
    passwordErrMsg,
    signedUp
  } = useContext(AppContext);

  return (
    <div className="signup ctaction">
      <div className="container">
        <h1>Creat an account</h1>
        {nameErr | emailErr | phoneErr | passwordErr ? (
          <p className="errMsg">
            {nameErr
              ? nameErrMsg
              : emailErr
              ? emailErrMsg
              : phoneErr
              ? phoneErrMsg
              : passwordErrMsg}
          </p>
        ) : ''}
        <form onSubmit={register}>
          <label htmlFor="fname">Full Name</label>
          <div className="inputWrapper">
            <img
              src="https://img.icons8.com/ios-glyphs/30/cccccc/user--v1.png"
              alt="user--v1"
            />
            <input
              type="text"
              placeholder="Full Name"
              id="fname"
              onChange={handleFullname}
              name="name"
              value={name}
            />

          </div>

          <label htmlFor="fname">Phone Number</label>
          <div className="inputWrapper">
            <img
              src="https://img.icons8.com/ios-filled/100/cccccc/phone.png"
              alt="phone"
            />
            <input
              type="text"
              placeholder="Phone Number"
              onChange={handlePhone}
              name="phone"
              value={phone}
            />

          </div>

          <label htmlFor="fname">Email</label>
          <div className="inputWrapper">
            <img
              src="https://img.icons8.com/ios-filled/100/cccccc/new-post.png"
              alt="new-post"
            />
            <input
              type="text"
              placeholder="Email"
              onChange={handleEmail}
              name="email"
              value={email}
            />

          </div>

          <label htmlFor="fname">Password</label>
          <div className="inputWrapper">
            <img
              src="https://img.icons8.com/ios-filled/100/cccccc/password.png"
              alt="password"
            />
            <input
              type="password"
              placeholder="Password"
              onChange={handlePassword}
              name="password"
              value={password}
            />

          </div>

          <button>
          {signedUp ? <Loader type="ball-beat" /> : "Continue"}
          </button>
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
            homes, elegantly designed offices, modern constructions. We help
            buyers to buy and sellers to sell.
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
