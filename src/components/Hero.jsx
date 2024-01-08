import car from "../assets/car.jpg";

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
          <button className="hero-btn" style={{ backgroundColor: "orangered" }}>
            Book Ride{" "}
          </button>
          <button className="hero-btn" style={{ backgroundColor: "black" }}>
            Learn More{" "}
          </button>
        </div>
      </div>
      <div>
        <img src={car} alt="car-img" width={700} />
      </div>
    </div>
  );
};

export default Hero;
