import logo from "../assets/logo_CR_1.png";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="header-item">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Vehical Models</li>
          <li>Testominals</li>
          <li>FAQ</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="header-btn">
        <button className="nav-btn" style={{ backgroundColor: "white" }}>
          Sign In
        </button>
        <button
          className="nav-btn"
          style={{ backgroundColor: "orangered", color: "white" }}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Header;
