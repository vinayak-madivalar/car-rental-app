import Footer from "../components/Footer";
import InfoSection from "../components/InfoSection";
import "../styles/AboutUs.css";
import about from "../assets/about.png";

const AboutUs = () => {
  return (
    <>
      <div className="headline">
        <h1>About Us</h1>
      </div>
      <div className="containers">
        <div className="container-item">
          <img src={about} width={500} />
        </div>
        <div className="container-item">
          <h3>About Company</h3>
          <h1>You start the engine and your adventure begins</h1>
          <p>
            Embark on worry-free journeys with our car rental app, where the
            promise of unbeatable deals meets unparalleled customer support.
            Tailored for your convenience, our app ensures a seamless booking
            experience with budget-friendly rates, complemented by our Best
            Price Guarantee.
          </p>
        </div>
      </div>
      <div>
        <InfoSection />
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
