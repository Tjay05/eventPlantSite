import facebookIcon from "../icons/facebook.svg";
import instagramIcon from "../icons/instagram.svg";
import linkedInIcon from "../icons/linkedIn.svg";
import twitterIcon from "../icons/twitter.svg";
import blumIcon from "../icons/blum.svg";
import profIcon from '../icons/profile.svg';

import { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation, Link } from 'react-router-dom';
import ProfilePage from '../pages/admin/Profile';

const AdminWrapper = () => {
  const brandName = 'Usiju World Event Centre';
  const [isMobile, setIsMobile] = useState(false);
  const [showPorofile, setProfile] = useState(false);
  const location = useLocation();

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
    <>
    {showPorofile && <ProfilePage setProfile={setProfile}/>}
    <header className="header">
      <h1>{brandName}</h1>
    </header>
    <main className="container">
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
}
 
export default AdminWrapper;