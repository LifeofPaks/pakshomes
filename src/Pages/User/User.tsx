import React, { useContext } from "react";
import "./User.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Dashboard from "../../Components/Dashboard/Dashboard";
import { AppContext } from "../../hooks/ContextApi";

const User = () => {
  const {name, email} = useContext(AppContext)
  return (
    <div>
      <Navbar />
      <Dashboard />

      <div className="userInfo">

      <p><span>Name: </span>{name}</p>
      <p> <span>Email: </span>{email}</p>
      </div>
    </div>
  );
};

export default User;
