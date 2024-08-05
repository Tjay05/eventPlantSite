import { useEffect, useState } from "react";
import AboutUs from "../pages/About";
import Contact from "../pages/Contact";
import Gallery from "../pages/GAllery";
import Home from "../pages/Home";
import Services from "../pages/Services";

// Icon Imports
import facebookIcon from "../icons/facebook.svg";
import instagramIcon from "../icons/instagram.svg";
import linkedInIcon from "../icons/linkedIn.svg";
import twitterIcon from "../icons/twitter.svg";
import blumIcon from "../icons/blum.svg";
import { NavLink } from "react-router-dom";

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

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header className="header">
        <h1>Events and Weddings</h1>
        <nav className="navbar">
          <div className="container">
            {isMobile && (
              <li className="hamburger" onClick={toggleMenu}>
                <div className={`hamburger-icon ${isMenuOpen ? "open" : ""}`}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </li>
            )}
            <aside className={`${isMobile ? 'active' : ''}`}>
              <nav className={`secondNav ${isMenuOpen ? 'open' : ''}`}>
                <ul className={`${isMobile ? 'sideNav' : 'mainNav'}`}>
                  <li><NavLink>Home</NavLink></li>
                  <li><NavLink to='#About'>About</NavLink></li> 
                  <li><NavLink to='#Services'>Services</NavLink></li>
                  <li><NavLink to='#Gallery'>Gallery</NavLink></li>
                  <li><NavLink to='#Contact'>Contact</NavLink></li>
                </ul>
              </nav>
            </aside>
          </div>
        </nav>
      </header>
      <main>
        <Home />
        <AboutUs />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <footer>
        <div className="container">
          <h2>Events and Weddings</h2>
          <section className="contactUs">
            <h3>CONTACT US</h3>
            <p>Any where, Any City, 44533</p>
            <p>Call Us: +23470000000000</p>
            <p>info@chochocho.com</p>
          </section>
          <div className="newsLetter">
            <h3>News Letter</h3>
            <form>
              <input type="email" placeholder="Email" />
              <button>Subscribe</button>
            </form>
            <p>Sign up with your email to recieve news and updates</p>
          </div>
          <ul className="socialIcons">
            <li>
              <img src={facebookIcon} alt="" />
            </li>
            <li>
              <img src={instagramIcon} alt="" />
            </li>
            <li>
              <img src={linkedInIcon} alt="" />
            </li>
            <li>
              <img src={twitterIcon} alt="" />
            </li>
            <li>
              <img src={blumIcon} alt="" />
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Navbar;
