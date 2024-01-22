import protection from "../assets/car.png";
import custom from "../assets/online-service.png";
import car1 from "../assets/car_1.png";

const InfoSection = () => {
  return (
    <div className="info-section" id="info">
      <div className="info-header">
        <h3>Plan your trip now</h3>
        <h1>Quick & easy car rental</h1>
      </div>
      <div className="info-container">
        <div className="info-item">
          <img src={protection} alt="" className="info-img" />
          <h4>Select Car</h4>
          <p>
            We offer a wide range of vehicals for all your needs. We have
            perfect car to meet you need.
          </p>
        </div>
        <div className="info-item">
          <img src={custom} alt="" className="info-img" />
          <h4>Customer Support</h4>
          <p>
            Our knowledgeable and friendly operators are always ready to help
            with any questions or concerns.
          </p>
        </div>
        <div className="info-item">
          <img src={car1} alt="" className="info-img" />
          <h4>Let{"'"}s Drive</h4>
          <p>
            Whether you{"'"}re hitting the open road, we{"'"}ve got you coverd
            with our wide range of cars.
          </p>
        </div>
      </div>
    </div>
  );
};
export default InfoSection;
