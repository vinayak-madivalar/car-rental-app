import user from "../assets/user.png";

const ReviewCard = (props) => {
  const { reviewData } = props;
  const { name, town, review } = reviewData;

  return (
    <div>
      <div className="review-card">
        <div className="container">
          <div>
            <img src={user} alt="" className="user" />
          </div>
          <div>
            <h4>{name}</h4>
            <h6>{town}</h6>
          </div>
        </div>
        <p>{review}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
