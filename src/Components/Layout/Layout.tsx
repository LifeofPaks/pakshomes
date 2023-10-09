import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Featured from '../Featured/Featured'
import Properties from '../Properties/Properties'
import Footer from '../Footer/Footer'
import ContactUs from '../ContactUs/ContactUs'

const Layout = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Featured/>
        <Properties/>
        <ContactUs/>
        <Footer/>
    </div>
  )
}

export default Layout