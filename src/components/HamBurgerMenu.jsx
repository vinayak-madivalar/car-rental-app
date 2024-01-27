import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import "../styles/HamBurgerMenu.css";
import { Link } from "react-router-dom";

const HamBurgerMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}>
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes size={30} /> : <GiHamburgerMenu size={30} />}
      </div>
      {isMenuOpen && <div className="overlay" onClick={closeMenu}></div>}
      <div className="menu-content" onClick={closeMenu}>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/car-models"}>Car Models</Link>
        <Link to={"/testimonials"}>Reviews</Link>
        <Link to={"/contactus"}>Contact</Link>
      </div>
    </div>
  );
};

export default HamBurgerMenu;
