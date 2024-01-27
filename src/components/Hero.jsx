import car from "../assets/car.jpg";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-text">
        <h3>Plan your trip now</h3>
        <h1>
          Save <span style={{ color: "orangered" }}>big</span> with our car
          rental
        </h1>
        <p>
          Rent the car of your dream, Unbeatable prices, unlimited miles,
          flexible pick-up options and much more.
        </p>
        <div>
          <a href="#book">
            <button
              className="hero-btn"
              style={{ backgroundColor: "orangered" }}
            >
              Book Ride
            </button>
          </a>
          <a href="#info">
            <button className="hero-btn" style={{ backgroundColor: "black" }}>
              Learn More{" "}
            </button>
          </a>
        </div>
      </div>
      <div>
        <img src={car} alt="car-img" className="hero-image" />
      </div>
    </div>
  );
};

export default Hero;
