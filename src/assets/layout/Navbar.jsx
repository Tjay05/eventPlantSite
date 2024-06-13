import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import AboutUs from "../pages/Avout";
import Contact from "../pages/Contact";
import Gallery from "../pages/GAllery";
import Home from "../pages/Home";
import Services from "../pages/Services";

// Icon Imports
import facebookIcon from '../icons/facebook.svg';
import instagramIcon from '../icons/instagram.svg';
import linkedInIcon from '../icons/linkedIn.svg';
import twitterIcon from '../icons/twitter.svg';
import blumIcon from '../icons/blum.svg';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="container">
      <header>
        <h1>Events and Weddings</h1>
        <nav className="navbar">
          {isMobile && 
            <li className='hamburger' onClick={toggleMenu}>
              <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </li>
          }
          {!isMobile && 
            <ul className="mainNav">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Gallery</li>
              <li>Conatct</li>
            </ul>
          }
        </nav>
      </header>
      <main>
        <Home/>
        <AboutUs/>
        <Services/>
        <Gallery/>
        <Contact/>
      </main>
      <footer>
        <h2>Events and Weddings</h2>
        <section className="contactUs">
          <h3>CONATCT US</h3>
          <p>Any where, Any City, 44533</p>
          <p>Call Us: +23470000000000</p>
          <p>info@chochocho.com</p>
        </section>
        <div className="newsLetter">
          <h3>News Letter</h3>
          <form>
            <input type="email" />
            <button>Subscribe</button>
          </form>
          <p>Sign up with your email to recieve news and updates</p>
        </div>
        <ul className="socialIcons">
          <li><img src={facebookIcon} alt="" /></li>
          <li><img src={instagramIcon} alt="" /></li>
          <li><img src={linkedInIcon} alt="" /></li>
          <li><img src={twitterIcon} alt="" /></li>
          <li><img src={blumIcon} alt="" /></li>
        </ul>
      </footer>
    </div>
  );
}
 
export default Navbar;