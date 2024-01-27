import Footer from "../components/Footer";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import "../styles/ContactUs.css";

const ContactUs = () => {
  return (
    <>
      <div className="headline">
        <h1>Contact </h1>
      </div>
      <div className="container-wrap">
        <div className="container-item">
          <h1>Need additional information?</h1>
          <p>
            A multifaceted professional skilled in multiple fields of research,
            development as well as a learning specialist. Over 15 years of
            experience.
          </p>
          <a>
            <FaPhoneVolume size={20} /> 123-456-7890
          </a>
          <a>
            <IoIosMail size={25} /> carent@gmail.com
          </a>
          <a>
            <FaLocationDot size={20} /> Haveri, India
          </a>
        </div>
        <div className="contact-form">
          <form>
            <label>
              Full Name <b>*</b>
            </label>
            <input type="text" placeholder="e.g: 'John Doe'" />
            <label>
              Email <b>*</b>
            </label>
            <input type="email" placeholder="youremail@example.com" />
            <label>
              Ask Your Doubts <b>*</b>
            </label>
            {/* <input type="text" placeholder="write here..." /> */}
            <textarea placeholder="write here..." />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default ContactUs;
