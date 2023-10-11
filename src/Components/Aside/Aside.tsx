import "./Aside.scss";

const Aside = () => {
  return (
    <div className="aside">
      <div className="agent">
        <div className="agentTitle">
          <img
            width="22"
            src="https://img.icons8.com/fluency-systems-filled/48/206ca0/key-exchange.png"
            alt="key-exchange"
          />
          <h1>Contact Agent</h1>
        </div>

        <p>Elevate & CO Housing</p>
        <button>
          <img
            width="18"
            src="https://img.icons8.com/ios-filled/50/ffffff/outgoing-call.png"
            alt="outgoing-call"
          />
          Call Agent
        </button>
      </div>

      <form className="reachOut">
        <h2>Need to reach out?</h2>

        <div className="inputBox">
        <img width="16"  src="https://img.icons8.com/fluency-systems-regular/96/777777/multiline-text--v1.png" alt="multiline-text--v1"/>
        <input
          type="text"
          placeholder="Subject, e.g Enquiry about a property"
        />
        </div>

       
        <textarea
          placeholder="e.g I want to book 2 bedroom apartment in Lekki
"
        />
        <button>Send message</button>
        <p>
          By proceeding, you consent to receive texts at the email you provided.
          We promise not to spam you.
        </p>
      </form>

      <div className="review">
        <div className="revTitle">
            <h3>Reviews</h3>
            <img width="20"  src="https://img.icons8.com/pastel-glyph/64/206ca0/add-male-user.png" alt="add-male-user"/>
        </div>

        <div className="revProfile">
        <img
            src="https://idealestate.com.ng/wp-content/uploads/2023/05/Legitimate-ways-to-make-money-in-Nigeria.jpg"
            alt="avatar"
          />

          <div className="revLeft">
          <p>Jamil</p>
            <p className='time'>9 months ago</p>
          </div>
          
        </div>

        <div className="star">
        <img width="18" src="https://img.icons8.com/color/48/filled-star--v1.png" alt="filled-star--v1"/>
        <img width="18" src="https://img.icons8.com/color/48/filled-star--v1.png" alt="filled-star--v1"/>
        <img width="18" src="https://img.icons8.com/color/48/filled-star--v1.png" alt="filled-star--v1"/>
        <img width="18" src="https://img.icons8.com/color/48/filled-star--v1.png" alt="filled-star--v1"/>
        <img width="18" src="https://img.icons8.com/color/48/filled-star--v1.png" alt="filled-star--v1"/>
        </div>

        <h5>Great</h5>
      </div>

      <div className="added">
        <img src="https://symbols.getvecta.com/stencil_27/22_bot-services.0fdfc46c2c.jpg" alt="bot" />
        <p>The Merchant <span>added this property 9 months ago</span></p>
      </div>

      <div className="disc">
        <p><span>DISCLAIMER: </span>We do not own any property here. This site is just a personal project to showcase my skills. We are not selling or renting any of these properties </p>
      </div>
    </div>
  );
};

export default Aside;
