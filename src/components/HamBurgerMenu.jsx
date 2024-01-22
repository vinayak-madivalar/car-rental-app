import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import "./HamBurgerMenu.css";

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
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#vehical">Car Models</a>
        <a href="#review">Reviews</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default HamBurgerMenu;
