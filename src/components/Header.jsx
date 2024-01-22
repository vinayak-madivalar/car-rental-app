import logo from "../assets/logo_CR_1.png";
import HamBurgerMenu from "./HamBurgerMenu";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className={`header-item  `}>
        <ul>
          <li>
            <a href="#home" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="#vehical" className="nav-link">
              Vehical Models
            </a>
          </li>
          <li>
            <a href="#review" className="nav-link">
              Testominals
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="header-btn">
        <a href="#footer">
          <button
            className="nav-btn"
            style={{ backgroundColor: "orangered", color: "white" }}
          >
            Download App
          </button>
        </a>
      </div>
      <HamBurgerMenu />
    </div>
  );
};

export default Header;
