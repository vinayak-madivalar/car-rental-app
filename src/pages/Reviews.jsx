import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";

const Reviews = () => {
  return (
    <>
      <div className="headline">
        <h1>Reviews</h1>
      </div>
      <div>
        <Testimonial />
        <div style={{ marginTop: "5rem" }}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Reviews;
