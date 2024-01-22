import { FaRegCalendarDays } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
import BookingDetails from "./BookingDetails";

const BookCar = () => {
  const handler = () => {
    <BookingDetails />;
  };

  return (
    <div className="book-car" id="book">
      <h2>Book a car</h2>
      <div className="book-container">
        <div className="book-item">
          <p style={{ marginBottom: "10px" }}>
            <FaCar style={{ color: "orangered" }} /> Select car type{" "}
            <span style={{ color: "orangered" }}>*</span>
          </p>
          <select className="book-input">
            <option value="Select your car type">Select your car type</option>
            <option value="Maruti Suzuki Swift LXI">
              Maruti Suzuki Swift LXI
            </option>
            <option value="Tata Altroz XE">Tata Altroz XE</option>
            <option value="Mahindra Thar AX">Mahindra Thar AX</option>
            <option value="Tata Nexon XZA+">Tata Nexon XZA+</option>
            <option value="MG Hector Sharp">MG Hector Sharp</option>
            <option value="BMW 3 Series 320i">BMW 3 Series 320i</option>
          </select>
        </div>
        <div className="book-item">
          <p style={{ marginBottom: "10px" }}>
            <FaLocationDot style={{ color: "orangered" }} /> Pick up{" "}
            <span style={{ color: "orangered" }}>*</span>
          </p>
          <select className="book-input">
            <option value="Select pick up location">
              Select pick up location
            </option>
            <option value="Bangalore">Bangalore</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Pune">Pune</option>
            <option value="Hyderabad">Hyderabad</option>
          </select>
        </div>
        <div className="book-item">
          <p style={{ marginBottom: "10px" }}>
            <FaLocationDot style={{ color: "orangered" }} /> Drop off{" "}
            <span style={{ color: "orangered" }}>*</span>
          </p>
          <select className="book-input">
            <option value="Select drop off location">
              Select drop off location
            </option>
            <option value="Bangalore">Bangalore</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Pune">Pune</option>
            <option value="Hyderabad">Hyderabad</option>
          </select>
        </div>
        <div className="book-item">
          <p style={{ marginBottom: "10px" }}>
            <FaRegCalendarDays style={{ color: "orangered" }} /> Pick up{" "}
            <span style={{ color: "orangered" }}>*</span>
          </p>
          <input type="date" className="book-input" />
        </div>
        <div className="book-item">
          <p style={{ marginBottom: "10px" }}>
            <FaRegCalendarDays style={{ color: "orangered" }} /> Drop off{" "}
            <span style={{ color: "orangered" }}>*</span>
          </p>
          <input type="date" className="book-input" />
        </div>
        <div className="book-item">
          <button className="search-btn" onClick={handler()}>
            Book Car
          </button>
        </div>
      </div>
    </div>
  );
};
export default BookCar;
