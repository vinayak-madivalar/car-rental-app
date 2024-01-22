import { useState } from "react";
import cars from "../utilities/mockData";
import CarDetailCard from "./CarDetailCard";
import swift from "../assets/carImgs/swift-lxi.jpg";
import altroz from "../assets/carImgs/tata.jpg";
import thar from "../assets/carImgs/thar.jpg";
import nexon from "../assets/carImgs/nexon.jpg";
import hector from "../assets/carImgs/hector.jpg";
import bmw from "../assets/carImgs/bmw.png";

const CarModel = () => {
  const [carList] = useState(cars);
  const [selectedCar, setSelectedCar] = useState("");
  const [carImage, setCarImage] = useState("");

  const images = [
    { imgName: "tata", img: altroz },
    { imgName: "swift", img: swift },
    { imgName: "thar", img: thar },
    { imgName: "nexon", img: nexon },
    { imgName: "hector", img: hector },
    { imgName: "bmw", img: bmw },
  ];

  const showDetails = (id) => {
    const selectedCar = carList.find((carId) => carId.id === id);
    setSelectedCar(selectedCar);
    console.log(selectedCar);
  };

  const showImage = (imgPath) => {
    const carImage = images.find((img) => img.imgName === imgPath);
    setCarImage(carImage);
    console.log(carImage);
  };

  return (
    <div className="car-model" id="vehical">
      <div className="car-heading">
        <h3>Vehical Models</h3>
        <h1>Our Rental Fleet</h1>
        <p>
          Choose from variety of our amazing vehicals to rent for your next
          adventures or business trip
        </p>
      </div>
      <div className="car-name">
        <div className="car-name-list">
          {carList.map((car) => (
            <button
              key={car.id}
              className="car-name-btn"
              onClick={() => {
                showDetails(car.id);
                showImage(car.imgPath);
                console.log(car.imgPath);
              }}
            >
              {car.name}
            </button>
          ))}
        </div>
        <div>
          {carImage === "" ? (
            <img className="car-image" src={images[1].img} alt="" />
          ) : (
            <img
              className="car-image"
              src={carImage.img}
              alt={selectedCar.name}
            />
          )}
        </div>
        <div className="car-info">
          {selectedCar === "" ? (
            <CarDetailCard carData={carList[0]} />
          ) : (
            <CarDetailCard carData={selectedCar} />
          )}
          <a href="#book">
            <button className="car-reserve-btn">RESERVE NOW</button>
          </a>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default CarModel;
