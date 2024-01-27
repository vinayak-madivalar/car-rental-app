import logo from "../assets/logo_CR_1.png";
import HamBurgerMenu from "./HamBurgerMenu";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className={`header-item  `}>
        <ul>
          <li>
            <Link to={"/"} className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/about"} className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link to={"/car-models"} className="nav-link">
              Car Models
            </Link>
          </li>
          <li>
            <Link to={"/testimonials"} className="nav-link">
              Testominals
            </Link>
          </li>
          <li>
            <Link to={"/contactus"} className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="header-btn">
        <button className="nav-btn-sign-in">Sign In</button>
        <button className="nav-btn-register">Register</button>
      </div>
      <HamBurgerMenu />
    </div>
  );
};

export default Header;
