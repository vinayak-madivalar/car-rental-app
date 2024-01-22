import { FaApple } from "react-icons/fa";
import playStore from "../assets/google-play.png";

const AppDownload = () => {
  const openGooglePlay = () => {
    window.location.href = "https://play.google.com";
  };

  const openAppStore = () => {
    window.location.href = "https://www.apple.com/in/app-store/";
  };

  return (
    <div style={{ display: "flex" }}>
      <button className="app-btn" onClick={openGooglePlay}>
        <div>
          <img src={playStore} alt="" width={30} />
        </div>
        <div>
          <span style={{ fontSize: 10 }}>GET IT ON</span>
          <br />
          <span style={{ fontSize: 20 }}>Google Play</span>
        </div>
      </button>
      <button className="app-btn" onClick={openAppStore}>
        <div>
          <FaApple size={35} />
        </div>
        <div>
          <span style={{ fontSize: 10 }}>Download on the</span>
          <br />
          <span style={{ fontSize: 20 }}>App Store</span>
        </div>
      </button>
    </div>
  );
};

export default AppDownload;
