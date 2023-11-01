import React, { ChangeEvent, FormEvent, useState } from "react";
import "./Guest.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Dashboard from "../../Components/Dashboard/Dashboard";

const Guest = () => {
  const [showInfo, setShowInfo] = useState<boolean>(false);

  const guestInit = {
    name: "",
    email: "",
    phone: "",
    type: "",
  };

  const [guestInfo, setGuestInfo] = useState(guestInit);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setGuestInfo((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      guestInfo.name === "" &&
      guestInfo.email === "" &&
      guestInfo.phone === ""
    ) {
      setShowInfo(false);
    } else {
      setShowInfo(true)
    }

  };

  return (
    <div className="guestPage">
      <Navbar />
      <Dashboard />

      <div className="guestInfo">
        {showInfo ? (
          <div className="guestDisplayInfo">
            <p>
              Name: <span>{guestInfo.name}</span>
            </p>
            <p>
              Email: <span>{guestInfo.email}</span>
            </p>
            <p>
              Phone: <span>{guestInfo.phone}</span>
            </p>
            <p>
              Property Type: <span>{guestInfo.type}</span>
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Enter Your Full Name</label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              name="name"
              value={guestInfo.name}
              onChange={handleChange}
            />

            <label htmlFor="email">Enter Your Email</label>
            <input
              type="text"
              id="email"
              placeholder="Email"
              name="email"
              value={guestInfo.email}
              onChange={handleChange}
            />

            <label htmlFor="name">Enter Your Phone Number</label>
            <input
              type="text"
              id="name"
              placeholder="Phone"
              name="phone"
              value={guestInfo.phone}
              onChange={handleChange}
            />

            <label htmlFor="name">
              What Property type are you looking for?
            </label>
            <input
              type="text"
              id="name"
              placeholder="Property Type i.e For Rent"
              name="type"
              value={guestInfo.type}
              onChange={handleChange}
            />

            <button>Submit</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Guest;
