import { Link, useParams } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import { propertiesData } from "../../Data/Data";
import "./FeatPropertyInfo.scss";
import CommentSection from "../../Components/CommentSection/CommentSection";
import Aside from "../../Components/Aside/Aside";

const FeatPropertyInfo = () => {
  const { id } = useParams();
  const post: any = propertiesData.find((item) => item.id.toString() === id);

  return (
    <div className="propertyInfo">
      <Navbar />

      <div className="apInfo">
        <Link to="/">
          <img
            className="prev"
            src="https://img.icons8.com/external-solid-adri-ansyah/64/333333/external-music-music-player-button-solid-adri-ansyah-26.png"
            alt="external-music-music-player-button-solid-adri-ansyah-26"
          />
        </Link>

        <header>
          <Link to="/">
            <span>Home</span>
          </Link>

          <img
            src="https://img.icons8.com/external-others-inmotus-design/67/333333/external-Next-basic-web-ui-elements-others-inmotus-design-2.png"
            alt="external-Next-basic-web-ui-elements-others-inmotus-design-2"
          />
          <p>{post.title}</p>
        </header>

        <div className="infoWrapper">
          <div className="mainInfo">
            <div className="mainImg">
              <img src={post.img} alt="" />
            </div>

            <div className="scroll">
              <img
                src="https://img.icons8.com/external-those-icons-fill-those-icons/24/333333/external-swipe-touch-gestures-those-icons-fill-those-icons.png"
                alt="external-swipe-touch-gestures-those-icons-fill-those-icons"
              />
              <p>Swipe to see more images</p>
            </div>

            <div className="title">
              <div className="left">
                <h1>{post.title}</h1>
                <div className="location">
                  <img
                    src="https://img.icons8.com/material-sharp/24/206ca0/marker.png"
                    alt="marker"
                  />
                  <p>{post.location}</p>
                </div>
              </div>

              <h2>₦{post.price}</h2>
            </div>

            <div className="statusM">
              <div className="item">
                <img
                  src="https://img.icons8.com/material-sharp/24/206ca0/mark-as-favorite.png"
                  alt="mark-as-favorite"
                />
                <p>
                  Availability Status: {post.status ? (
                    <span className="green">Available</span>
                  ) : (
                    <span className="red">Not Available</span>
                  )}
                </p>
              </div>
              <div className="item">
                <img
                  src="https://img.icons8.com/metro/52/206ca0/key-exchange.png"
                  alt="key-exchange"
                />
                <p>
                  {" "}
                  Property Type: <span className="package">{post.package}</span>
                </p>
              </div>
            </div>

            <div className="featuredx">
              <h3>Features</h3>
              <div className="item">
                <img
                  src="https://img.icons8.com/fluency-systems-filled/48/206ca0/instagram-check-mark.png"
                  alt="instagram-check-mark"
                />
                <p>Tastefully furnished.</p>
              </div>

              <div className="item">
                <img
                  src="https://img.icons8.com/fluency-systems-filled/48/206ca0/instagram-check-mark.png"
                  alt="instagram-check-mark"
                />
                <p>Smart TV for Netflix..</p>
              </div>

              <div className="item">
                <img
                  src="https://img.icons8.com/fluency-systems-filled/48/206ca0/instagram-check-mark.png"
                  alt="instagram-check-mark"
                />
                <p>Housekeeping.</p>
              </div>

              <div className="item">
                <img
                  src="https://img.icons8.com/fluency-systems-filled/48/206ca0/instagram-check-mark.png"
                  alt="instagram-check-mark"
                />
                <p>Easy road access.</p>
              </div>

              <div className="item">
                <img
                  src="https://img.icons8.com/fluency-systems-filled/48/206ca0/instagram-check-mark.png"
                  alt="instagram-check-mark"
                />
                <p>Equipped kitchen.</p>
              </div>

              <div className="item">
                <img
                  src="https://img.icons8.com/fluency-systems-filled/48/206ca0/instagram-check-mark.png"
                  alt="instagram-check-mark"
                />
                <p>Clean sheets and water.</p>
              </div>

              <div className="item">
                <img
                  src="https://img.icons8.com/fluency-systems-filled/48/206ca0/instagram-check-mark.png"
                  alt="instagram-check-mark"
                />
                <p>Serene environment.</p>
              </div>
            </div>

            <div className="desc">
              <h3>Description</h3>
              <p>
                This Luxury {post.title} goes for ₦{post.price} located at{" "}
                {post.location}, Well furnished with awesome electricity and
                very tight security. This is for sure, a place you would love to
                call home!
              </p>
            </div>

            <CommentSection />
          </div>
          <Aside />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FeatPropertyInfo;
