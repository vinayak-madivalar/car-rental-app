import Footer from "../components/Footer";
import { MdStar } from "react-icons/md";
import { MdStarHalf } from "react-icons/md";
import { IoLogoModelS } from "react-icons/io";
import { FaCalendar } from "react-icons/fa6";
import { GiCarDoor } from "react-icons/gi";
import { BsFillFuelPumpFill } from "react-icons/bs";
import swift from "../assets/carImgs/swift-lxi.jpg";
import altroz from "../assets/carImgs/tata.jpg";
import thar from "../assets/carImgs/thar.jpg";
import nexon from "../assets/carImgs/nexon.jpg";
import hector from "../assets/carImgs/hector.jpg";
import bmw from "../assets/carImgs/bmw.png";
import "../styles/CarDetails.css";

const CarDetails = () => {
  return (
    <>
      <div className="headline">
        <h1>Car Details</h1>
      </div>
      <div className="car-card-wrap">
        <div className="car-detail-wrap">
          <img src={swift} width={300} height={200} />
          <div className="car-container">
            <div>
              <h2>Maruti Suzuki Swift</h2>
              <span>
                <MdStar color="gold" />
                <MdStar color="gold" />
                <MdStar color="gold" />
                <MdStar color="gold" />
              </span>
            </div>
            <div className="details">
              <span>
                <IoLogoModelS color="orangered" size={20} /> LXI
              </span>
              <span>
                <FaCalendar color="orangered" size={15} /> 2022
              </span>
              <span>
                <GiCarDoor color="orangered" size={20} /> 4 Doors
              </span>
              <span>
                <BsFillFuelPumpFill color="orangered" size={15} /> Petrol
              </span>
            </div>
            <div className="price">
              <div>
                <p style={{ fontSize: "1.5rem" }}>
                  <strong>$50</strong>/Day
                </p>
              </div>
              <button className="rent-btn">Rent Car</button>
            </div>
          </div>
        </div>
        <div className="car-detail-wrap">
          <img src={altroz} width={300} height={200} />
          <div className="car-container">
            <div>
              <h2>Tata Altroz</h2>
              <span>
                <MdStar color="gold" />
                <MdStar color="gold" />
                <MdStar color="gold" />
                <MdStar color="gold" />
                <MdStarHalf color="gold" />
              </span>
            </div>
            <div className="details">
              <span>
                <IoLogoModelS color="orangered" size={20} /> XE
              </span>
              <span>
                <FaCalendar color="orangered" size={15} /> 2021
              </span>
              <span>
                <GiCarDoor color="orangered" size={20} /> 4 Doors
              </span>
              <span>
                <BsFillFuelPumpFill color="orangered" size={15} /> Diesel
              </span>
            </div>
            <div className="price">
              <div>
                <p style={{ fontSize: "1.5rem" }}>
                  <strong>$45</strong>/Day
                </p>
              </div>
              <button className="rent-btn">Rent Car</button>
            </div>
          </div>
        </div>
        <div className="car-detail-wrap">
          <img src={thar} width={300} height={200} />
          <div className="car-container">
            <div>
              <h2>Mahindra Thar</h2>
              <span>
                <MdStar color="gold" />
                <MdStar color="gold" />
                <MdStar color="gold" />
                <MdStar color="gold" />
                <MdStarHalf color="gold" />
              </span>
            </div>
            <div className="details">
              <span>
                <IoLogoModelS color="orangered" size={20} /> AX
              </span>
              <span>
                <FaCalendar color="orangered" size={15} /> 2023
              </span>
              <span>
                <GiCarDoor color="orangered" size={20} /> 4 Doors
              </span>
              <span>
                <BsFillFuelPumpFill color="orangered" size={15} /> Petrol
              </span>
            </div>
            <div className="price">
              <div>
                <p style={{ fontSize: "1.5rem" }}>
                  <strong>$60</strong>/Day
                </p>
              </div>
              <button className="rent-btn">Rent Car</button>
            </div>
          </div>
        </div>
        <div className="car-detail-wrap">
          <img src={nexon} width={300} height={200} />
          <div className="car-container">
            <div>
              <h2>Tata Nexon</h2>
              <span>
                <MdStar color="gold" />
                <MdStar color="gold" />
                <MdStar color="gold" />
                <MdStar color="gold" />
                <MdStarHalf color="gold" />
              </span>
            </div>
            <div className="details">
              <span>
                <IoLogoModelS color="orangered" size={20} /> XZA+
              </span>
              <span>
                <FaCalendar color="orangered" size={15} /> 2022
              </span>
              <span>
                <GiCarDoor color="orangered" size={20} /> 4 Doors
              </span>
              <span>
                <BsFillFuelPumpFill color="orangered" size={15} /> Petrol
              </span>
            </div>
            <div className="price">
              <div>
                <p style={{ fontSize: "1.5rem" }}>
                  <strong>$50</strong>/Day
                </p>
              </div>
              <button className="rent-btn">Rent Car</button>
            </div>
          </div>
        </div>
        <div className="car-detail-wrap">
          <img src={hector} width={300} height={200} />
          <div className="car-container">
            <div>
              <h2>MG Hector</h2>
              <span>
                <MdStar color="gold" />
                <MdStar color="gold" />
                <MdStar color="gold" />
                <MdStar color="gold" />
              </span>
            </div>
            <div className="details">
              <span>
                <IoLogoModelS color="orangered" size={20} /> Sharp
              </span>
              <span>
                <FaCalendar color="orangered" size={15} /> 2023
              </span>
              <span>
                <GiCarDoor color="orangered" size={20} /> 4 Doors
              </span>
              <span>
                <BsFillFuelPumpFill color="orangered" size={15} /> Petrol
              </span>
            </div>
            <div className="price">
              <div>
                <p style={{ fontSize: "1.5rem" }}>
                  <strong>$45</strong>/Day
                </p>
              </div>
              <button className="rent-btn">Rent Car</button>
            </div>
          </div>
        </div>
        <div className="car-detail-wrap">
          <img src={bmw} width={300} height={200} />
          <div className="car-container">
            <div>
              <h2>BMW 3 Series</h2>
              <span>
                <MdStar color="gold" />
                <MdStar color="gold" />
                <MdStar color="gold" />
                <MdStar color="gold" />
                <MdStarHalf color="gold" />
              </span>
            </div>
            <div className="details">
              <span>
                <IoLogoModelS color="orangered" size={20} /> 320i
              </span>
              <span>
                <FaCalendar color="orangered" size={15} /> 2022
              </span>
              <span>
                <GiCarDoor color="orangered" size={20} /> 4 Doors
              </span>
              <span>
                <BsFillFuelPumpFill color="orangered" size={15} /> Petrol
              </span>
            </div>
            <div className="price">
              <div>
                <p style={{ fontSize: "1.5rem" }}>
                  <strong>$40</strong>/Day
                </p>
              </div>
              <button className="rent-btn">Rent Car</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default CarDetails;
