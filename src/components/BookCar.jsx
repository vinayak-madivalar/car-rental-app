import { FaRegCalendarDays } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
import "../styles/BookCar.css";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import swift from "../assets/carImgs/swift-lxi.jpg";
import altroz from "../assets/carImgs/tata.jpg";
import thar from "../assets/carImgs/thar.jpg";
import nexon from "../assets/carImgs/nexon.jpg";
import hector from "../assets/carImgs/hector.jpg";
import bmw from "../assets/carImgs/bmw.png";

const BookCar = () => {
  //state for booking car
  const [formData, setFormData] = useState({
    carType: "",
    pickUp: "",
    dropOff: "",
    pickTime: "",
    dropTime: "",
  });

  const [personalData, setPersonalData] = useState({
    name: "",
    lastName: "",
    age: "",
    phone: "",
    email: "",
    address: "",
    zipCode: "",
    city: "",
  });

  const [openDetails, setOpenDetails] = useState(false);

  const [carImage, setCarImage] = useState("");

  const images = [
    { imgName: "Tata Altroz XE", img: altroz },
    { imgName: "Maruti Suzuki Swift LXI", img: swift },
    { imgName: "Mahindra Thar AX", img: thar },
    { imgName: "Tata Nexon XZA+", img: nexon },
    { imgName: "MG Hector Sharp", img: hector },
    { imgName: "BMW 3 Series 320i", img: bmw },
  ];

  const showImage = (imgPath) => {
    const carImage = images.find((img) => img.imgName === imgPath);
    setCarImage(carImage);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handlePersonalDataChange = (e) => {
    const { name, value } = e.target;
    setPersonalData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorMsg = document.querySelector(".error-msg");
    if (
      formData.carType === "" ||
      formData.pickUp === "" ||
      formData.dropOff === "" ||
      formData.pickTime === "" ||
      formData.dropTime === ""
    ) {
      errorMsg.style.display = "flex";
    } else {
      setOpenDetails(!openDetails);
      errorMsg.style.display = "none";
      const openDetailDiv = document.querySelector(".booking-details");
      openDetailDiv.scroll(0, 0);
      showImage(formData.carType);
    }
  };

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    const bookingDone = document.querySelector(".booking-done");
    bookingDone.style.display = "flex";
    setOpenDetails(!openDetails);
  };

  const hideMsg = () => {
    const bookingDone = document.querySelector(".booking-done");
    bookingDone.style.display = "none";
  };

  useEffect(() => {
    if (openDetails === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openDetails]);

  const minDate = () => {
    const today = new Date().toISOString().split("T")[0];
    return today;
  };

  return (
    <div className="book-car" id="book">
      <div
        onClick={handleSubmit}
        className={`form-overlay ${openDetails ? "active-form" : ""}`}
      ></div>

      <h2>Book a car</h2>

      <p className="error-msg">
        All fields requied! <IoClose size={20} />
      </p>

      <p className="booking-done" onClick={hideMsg}>
        Check your email to confirm an order. <IoClose size={20} />
      </p>

      <form className="book-form" onSubmit={handleSubmit}>
        <div className="book-item">
          <label style={{ marginBottom: "10px" }}>
            <FaCar color="orangered" /> Select car type{" "}
            <span style={{ color: "orangered" }}>*</span>
          </label>
          <select
            className="book-input"
            name="carType"
            value={formData.carType}
            onChange={handleChange}
          >
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
          <label style={{ marginBottom: "10px" }}>
            <FaLocationDot color="orangered" /> Pick up{" "}
            <span style={{ color: "orangered" }}>*</span>
          </label>
          <select
            className="book-input"
            name="pickUp"
            value={formData.pickUp}
            onChange={handleChange}
          >
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
          <label style={{ marginBottom: "10px" }}>
            <FaLocationDot color="orangered" /> Drop off{" "}
            <span style={{ color: "orangered" }}>*</span>
          </label>
          <select
            className="book-input"
            name="dropOff"
            value={formData.dropOff}
            onChange={handleChange}
          >
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
          <label style={{ marginBottom: "10px" }}>
            <FaRegCalendarDays color="orangered" /> Pick up{" "}
            <span style={{ color: "orangered" }}>*</span>
          </label>
          <input
            type="date"
            min={minDate()}
            className="book-input"
            name="pickTime"
            value={formData.pickTime}
            onChange={handleChange}
          />
        </div>
        <div className="book-item">
          <label style={{ marginBottom: "10px" }}>
            <FaRegCalendarDays color="orangered" /> Drop off{" "}
            <span style={{ color: "orangered" }}>*</span>
          </label>
          <input
            type="date"
            min={minDate()}
            className="book-input"
            name="dropTime"
            value={formData.dropTime}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Book Car</button>
      </form>

      {/* booking details section */}

      <div className={`booking-details ${openDetails ? "active-form" : ""}`}>
        {/* title */}
        <div className="booking-title">
          <h2>
            Complete Reservation{" "}
            <IoClose size={30} onClick={() => setOpenDetails(!openDetails)} />
          </h2>
        </div>
        {/* message */}
        <div className="booking-message">
          <h3>Upon completing this reservation enquiry, you will receive:</h3>
          <p>
            Your rental voucher to produce on arrival at the rental desk and a
            toll-free customer support number.
          </p>
        </div>
        {/* car info */}
        <div className="booking-car-info">
          <div className="dates-div">
            <div className="booking-car-info-dates">
              <h5>Location & Date</h5>
              <span>
                <IoLocationSharp size={20} />
                <div>
                  <h6>Pick-Up Date & Time</h6>
                  <p>
                    {formData.pickTime} /{" "}
                    <input type="time" className="input-time"></input>
                  </p>
                </div>
              </span>
            </div>

            <div className="booking-car-info-dates">
              <span>
                <IoLocationSharp size={20} />
                <div>
                  <h6>Drop-Off Date & Time</h6>
                  <p>
                    {formData.dropTime} /{" "}
                    <input type="time" className="input-time"></input>
                  </p>
                </div>
              </span>
            </div>

            <div className="booking-car-info-dates">
              <span>
                <IoLocationSharp size={20} />
                <div>
                  <h6>Pick-Up Location</h6>
                  <p>{formData.pickUp}</p>
                </div>
              </span>
            </div>

            <div className="booking-car-info-dates">
              <span>
                <IoLocationSharp size={20} />
                <div>
                  <h6>Drop-Off Location</h6>
                  <p>{formData.dropOff}</p>
                </div>
              </span>
            </div>
          </div>
          <div className="booking-car-info-model">
            <h5>
              <span>Car -</span> {formData.carType}
            </h5>
            {formData.carType && (
              <img src={carImage.img} alt="car_img" width={400} height={300} />
            )}
          </div>
        </div>
        {/* personal info */}
        <div className="booking-person-info">
          <h4>Personal Information</h4>
          <form className="info-form" onSubmit={handleConfirmBooking}>
            <div className="info-form-2col">
              <span>
                <label>
                  First Name <b>*</b>
                </label>
                <input
                  name="name"
                  value={personalData.name}
                  onChange={handlePersonalDataChange}
                  type="text"
                  placeholder="Enter your first name"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label>
                  Last Name <b>*</b>
                </label>
                <input
                  name="lastName"
                  value={personalData.lastName}
                  onChange={handlePersonalDataChange}
                  type="text"
                  placeholder="Enter your last name"
                ></input>
                <p className="error-modal ">This field is required.</p>
              </span>

              <span>
                <label>
                  Phone Number <b>*</b>
                </label>
                <input
                  name="phone"
                  value={personalData.phone}
                  onChange={handlePersonalDataChange}
                  type="tel"
                  placeholder="Enter your phone number"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label>
                  Age <b>*</b>
                </label>
                <input
                  name="age"
                  value={personalData.age}
                  onChange={handlePersonalDataChange}
                  type="number"
                  placeholder="18"
                ></input>
                <p className="error-modal ">This field is required.</p>
              </span>
            </div>

            <div className="info-form-1col">
              <span>
                <label>
                  Email <b>*</b>
                </label>
                <input
                  name="email"
                  value={personalData.email}
                  onChange={handlePersonalDataChange}
                  type="email"
                  placeholder="Enter your email address"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label>
                  Address <b>*</b>
                </label>
                <input
                  name="address"
                  value={personalData.address}
                  onChange={handlePersonalDataChange}
                  type="text"
                  placeholder="Enter your street address"
                ></input>
                <p className="error-modal ">This field is required.</p>
              </span>
            </div>

            <div className="info-form-2col">
              <span>
                <label>
                  City <b>*</b>
                </label>
                <input
                  name="city"
                  value={personalData.city}
                  onChange={handlePersonalDataChange}
                  type="text"
                  placeholder="Enter your city"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label>
                  Zip Code <b>*</b>
                </label>
                <input
                  name="zipcode"
                  value={personalData.zipcode}
                  onChange={handlePersonalDataChange}
                  type="text"
                  placeholder="Enter your zip code"
                ></input>
                <p className="error-modal ">This field is required.</p>
              </span>
            </div>

            <span className="info-form-checkbox">
              <input type="checkbox"></input>
              <p>Please send me latest news and updates</p>
            </span>

            <div className="info-form-submit">
              <input type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default BookCar;
