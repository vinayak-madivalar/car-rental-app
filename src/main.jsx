import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import "./index.css";
import "./mediaQueries.css";
import Hero from "./components/Hero.jsx";
import BookCar from "./components/BookCar.jsx";
import InfoSection from "./components/InfoSection.jsx";
import CarModel from "./components/CarModel.jsx";
import ChooseUs from "./components/ChooseUs.jsx";
import Testimonial from "./components/Testimonial.jsx";
import Footer from "./components/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Hero />
    <BookCar />
    <InfoSection />
    <CarModel />
    <ChooseUs />
    <Testimonial />
    <Footer />
  </React.StrictMode>
);
