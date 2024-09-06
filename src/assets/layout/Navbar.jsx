import { useEffect, useState } from "react";

// Icon Imports
import facebookIcon from "../icons/facebook.svg";
import instagramIcon from "../icons/instagram.svg";
import linkedInIcon from "../icons/linkedIn.svg";
import twitterIcon from "../icons/twitter.svg";
import blumIcon from "../icons/blum.svg";
import cartIcon from '../icons/light_cart.svg'
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";

const Navbar = () => {
  const brandName = 'Usiju World Event Centre';
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
        <h1>{brandName}</h1>
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
                  <li><NavLink onClick={toggleMenu} to='/'>Home</NavLink></li>
                  <li><NavLink onClick={toggleMenu} to='Shop'>Shop</NavLink></li> 
                  <li><NavLink onClick={toggleMenu} to='Contact'>Contact</NavLink></li>
                  <li><NavLink onClick={toggleMenu} to='Academy'>Academy</NavLink></li>
                  <li><NavLink onClick={toggleMenu} to='Planning'>Planning</NavLink></li>
                  <li><NavLink onClick={toggleMenu} to='Cart'><img src={cartIcon} alt="" /></NavLink></li>
                </ul>
              </nav>
            </aside>
          </div>
        </nav>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>
        <div className="container">
          <h2>{brandName}</h2>
          <section className="contactUs">
            <h3>CONTACT US</h3>
            <p>Any where, Any City, 44533</p>
            <p>Call Us: +23470000000000</p>
            <p>info@chochocho.com</p>
          </section>
          <div className="footAdmin">
            <Link to='Admin'>Admin</Link>
          </div>
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
              <img src={facebookIcon} alt="Facebook" />
            </li>
            <li>
              <img src={instagramIcon} alt="Instagram" />
            </li>
            <li>
              <img src={linkedInIcon} alt="LinkedIn" />
            </li>
            <li>
              <img src={twitterIcon} alt="Twitter" />
            </li>
            <li>
              <img src={blumIcon} alt="Blum" />
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Navbar;
