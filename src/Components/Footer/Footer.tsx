
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <h1 className="heading">Get in touch</h1>
          <div className="info">
            <img
              src="https://.icons8.com/ios-filled/100/ffffff/apple-phone.png"
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

        <div className="bottom">
          <div className="col">
            <div className="logo">
              <img
                src="https://img.icons8.com/ios-filled/100/206ca0/dynamics-365.png"
                alt="dynamics-365"
              />
              <h1>
                Paks <span>Homes</span>
              </h1>
            </div>
            <p>
              PAKS HOMES is a property agency with luxury projects and the best
              deals. Dozens of real estate luxury apartments, smart homes,
              elegantly designed offices, modern constructions. We help buyers
              to buy and sellers to sell.
            </p>
          </div>
          <ul className="col">
            <li className="title">Properties in Nigeria</li>
            <li>Properties in Lagos</li>
            <li>Properties in Abuja</li>
            <li>Properties in PH</li>
            <li>Properties in Benin</li>
          </ul>

          <ul className="col">
            <li className="title">BLOG</li>
            <li> Latest news</li>
            <li> House architecture</li>
            <li> House design</li>
            <li> Tips & Tricks</li>
            <li> Building materials</li>
          </ul>

          <ul className="col">
            <li className="title">CUSTOM MENU</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <p className="cr">© 2023 Paks Homes. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
