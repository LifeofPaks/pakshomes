import React, { ChangeEvent, FormEvent, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Dashboard from "../../Components/Dashboard/Dashboard";
import { propertiesData } from "../../Data/Data";
import Aside from "../../Components/Aside/Aside";
import Card from "../../Components/Card/Card";


const User = () => {
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
      setShowInfo(true);
    }
  };

  const mayLike = propertiesData.slice(0, 6);

  return (
    <div className="guestPage">
      <Navbar />
      <Dashboard />
      <div className="guestContainer">
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

          <div className="mayLike">
            <h2>Properties you may Like</h2>
            <div className="content">
              {mayLike.map((item) => (
                <Card
                item={item} key={item.id}/>
              ))}
            </div>
          </div>

          <div className="gitop">
            <h1 className="heading">Get in touch</h1>
            <div className="info">
              <img
                src="https://img.icons8.com/ios-filled/100/ffffff/apple-phone.png"
                alt="apple-phone"
              />
              <p>Hotline: +234 81234567</p>
            </div>
            <div className="info">
              <img
                src="https://img.icons8.com/material-rounded/48/ffffff/mail.png"
                alt="mail"
              />
              <p>Email: info@pakshomes.com</p>
            </div>
            <div className="info">
              <img
                src="https://img.icons8.com/material-sharp/24/ffffff/marker.png"
                alt="marker"
              />
              <p>Bannex Plaza, FCT, Abuja</p>
            </div>

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
          </div>
        </div>

        <Aside />
      </div>
    </div>
  );
};

export default User;
