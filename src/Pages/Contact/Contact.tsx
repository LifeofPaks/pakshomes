import './Contact.scss'
import ContactUs from '../../Components/ContactUs/ContactUs'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'



const Contact = () => {

  return (
    <>
     <div className='contactUs'>
        <Navbar />
        <div className="heroSec">
        <img
          src="https://images.unsplash.com/photo-1467250123231-1813550b3fd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80"
          alt="hero-img"
        />
      </div>
        <ContactUs/>

        <div className="map">

        </div>
    </div>
            <Footer/>
    </>
   
  )
}

export default Contact