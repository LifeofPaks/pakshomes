import './ContactUs.scss'

const ContactUs = () => {
  return (
    <div className="contact">
      <div className="left">
        <h1>CONTACT INFORMATION</h1>
        <p className="intro">
          Founded on September 12, 2023. Paks Homes operates in the
          field of real estate business, building houses for rent, lease and for sale. Slogan
          "Anything is Possible".
        </p>
        <p>Address: Bannex Plaza, Abuja FCT</p>
        <p>Hotline: +234 12345678</p>
        <p>Email: info@pakshomes.com</p>
      </div>
      <div className="right">
        <h2>HOW CAN WE HELP YOU?</h2>

        <form >
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Phone" />
            <textarea placeholder="Message"/>
            <button>Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
