import { customer_reviews } from "../utilities/mockData";
import ReviewCard from "./ReviewCard";
import "../styles/Testimonial.css";

const Testimonial = () => {
  return (
    <div>
      <div className="test-header">
        <h4>Reviewed by people</h4>
        <h1>Client{"'"}s Testimonials</h1>
        <p>
          Discover the positive impact we{"'"}ve made on the our clients by
          reading through thier testimonials. Our clients have experienced our
          service and results, and they{"'"}re eager to share their positive
          experiences with you.
        </p>
      </div>
      <div className="card-container">
        {customer_reviews.map((cus) => (
          <ReviewCard key={cus.id} reviewData={cus} />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
