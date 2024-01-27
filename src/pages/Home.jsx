import Hero from "../components/Hero";
import BookCar from "../components/BookCar.jsx";
import InfoSection from "../components/InfoSection.jsx";
import CarModel from "../components/CarModel.jsx";
import ChooseUs from "../components/ChooseUs.jsx";
import Testimonial from "../components/Testimonial.jsx";
import Footer from "../components/Footer.jsx";
import Download from "../components/Download.jsx";

const Home = () => {
  return (
    <>
      <Hero />
      <BookCar />
      <InfoSection />
      <CarModel />
      <ChooseUs />
      <Testimonial />
      <Download />
      <Footer />
    </>
  );
};

export default Home;
