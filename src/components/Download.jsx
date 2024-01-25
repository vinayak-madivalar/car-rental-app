import mobile from "../assets/mobile.png";
import AppDownload from "./AppDownload";

const Download = () => {
  return (
    <div>
      <div className="footer-container" id="footer">
        <div className="footer-item">
          <h1>Download our app to get most out of it</h1>
          <p>
            Drive into adventure seamlessly where every road becomes your own.
            Rent a car today and let the journey unfold with convenience and
            luxury.
          </p>
          <AppDownload />
        </div>
        <div>
          <img src={mobile} alt="" width={600} />
        </div>
      </div>
    </div>
  );
};

export default Download;
