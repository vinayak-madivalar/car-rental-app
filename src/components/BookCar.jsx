import { FaRegCalendarDays } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";

const BookCar = () => {
  return (
    <div className="book-car">
      <h3>Book a car</h3>
      <div className="book-container">
        <div className="book-item">
          <p style={{ marginBottom: "10px" }}>
            <FaCar style={{ color: "orangered" }} /> Select car type{" "}
            <span style={{ color: "orangered" }}>*</span>
          </p>
          <input
            type="text"
            placeholder="Select your car type"
            className="book-input"
          />
        </div>
        <div className="book-item">
          <p style={{ marginBottom: "10px" }}>
            <FaLocationDot style={{ color: "orangered" }} /> Pick up{" "}
            <span style={{ color: "orangered" }}>*</span>
          </p>
          <input
            type="text"
            className="book-input"
            placeholder="Select pick up location"
          />
        </div>
        <div className="book-item">
          <p style={{ marginBottom: "10px" }}>
            <FaLocationDot style={{ color: "orangered" }} /> Drop of{" "}
            <span style={{ color: "orangered" }}>*</span>
          </p>
          <input
            type="text"
            className="book-input"
            placeholder="Select drop of location"
          />
        </div>
        <div className="book-item">
          <p style={{ marginBottom: "10px" }}>
            <FaRegCalendarDays style={{ color: "orangered" }} /> Pick up{" "}
            <span style={{ color: "orangered" }}>*</span>
          </p>
          <input
            type="text"
            className="book-input"
            placeholder="dd / mm / yyyy"
          />
        </div>
        <div className="book-item">
          <p style={{ marginBottom: "10px" }}>
            <FaRegCalendarDays style={{ color: "orangered" }} /> Drop of{" "}
            <span style={{ color: "orangered" }}>*</span>
          </p>
          <input
            type="text"
            className="book-input"
            placeholder="dd / mm / yyyy"
          />
        </div>
        <div className="book-item">
          <button className="search-btn">Search</button>
        </div>
      </div>
    </div>
  );
};
export default BookCar;
