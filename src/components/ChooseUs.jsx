import jeep from "../assets/cars.png";
import car from "../assets/new-car.png";
import dollar from "../assets/dollar.png";
import charge from "../assets/reward.png";

const ChooseUs = () => {
  return (
    <div id="about">
      <div className="banner">
        <h1>Save big with our cheap rental car deals</h1>
        <p>
          Top Condition Cars. Local Suppliers.{" "}
          <span style={{ color: "orangered" }}>24/7</span> Support.
        </p>
      </div>
      <div className="img-container">
        <img src={jeep} alt="" className="banner-img" />
      </div>
      <div className="info-sec">
        <div className="info-sec-left">
          <h3>Why Choose us</h3>
          <h1>Best valued deals you will ever find</h1>
          <p>
            Embark on worry-free journeys with our car rental app, where the
            promise of unbeatable deals meets unparalleled customer support.
            Tailored for your convenience, our app ensures a seamless booking
            experience with budget-friendly rates, complemented by our Best
            Price Guarantee.
          </p>
          <button className="find-details-btn">Find Details </button>
        </div>
        <div className="info-sec-right">
          <div className="images">
            <div>
              <img src={car} alt="" className="img-set" />
            </div>
            <div>
              <h3>Cross Country Drive</h3>
              <p className="para-item">
                Take your driving experience to the next level with our
                top-notch vehicles for your cross-country adventures.
              </p>
            </div>
          </div>
          <div className="images">
            <div>
              <img src={dollar} alt="" className="img-set" />
            </div>
            <div>
              <h3>All Inclusive Pricing</h3>
              <p className="para-item">
                Get everything you need in one convenient transparent price with
                our all-inclusive pricing policy.
              </p>
            </div>
          </div>
          <div className="images">
            <div>
              <img src={charge} alt="" className="img-set" />
            </div>
            <div>
              <h3>No Hidden Charges</h3>
              <p className="para-item">
                Say goodbye to hidden costs as transparent pricing takes center
                stage, allowing you to plan your trip with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
