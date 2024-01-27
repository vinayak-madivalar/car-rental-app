import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import "../styles/Footer.css";

const currYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="contact-wrap">
      <div className="contact-container">
        <div className="contact-item">
          <h3>CAR RENTAL</h3>
          <p style={{ color: "gray" }}>
            We offer a big range of vehicals
            <br /> for all your driving needs. We have
            <br />
            the perfect car to meet you needs.
          </p>
          <p>
            <IoCall />
            <strong>12345 56789</strong>
          </p>
          <p>
            <MdEmail />
            <strong>carent@gmail.com</strong>
          </p>
        </div>
        <div className="contact-item">
          <h3>COMPANY</h3>
          <p>New Dehli</p>
          <p>Careers</p>
          <p>Mobiles</p>
          <p>Blog</p>
          <p>How we work</p>
        </div>
        <div className="contact-item">
          <h3>WORKING HOURS</h3>
          <p>Mon - Fri: 9:00AM to 9:00PM</p>
          <p>Sat: 9:00AM to 7:00PM</p>
          <p>Sun: Closed</p>
        </div>
        <div
          className="contact-item"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <h3>NEWSLETTER</h3>
          <p>
            Subscribe your Email address <br />
            for latest news & updates.
          </p>
          <input placeholder="Enter your email"></input>
          <button>Submit</button>
        </div>
      </div>
      <div className="copyright">
        <p>
          Copyrights&copy; {currYear}. <strong>Carent.</strong> All Rights
          Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
