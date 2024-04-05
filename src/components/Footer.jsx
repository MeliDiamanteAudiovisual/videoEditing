import "../App.css";
import { GrLinkedin } from "react-icons/gr";
import { FaEnvelope } from "react-icons/fa";
import Whatsapp from "../assets/images/WhatsApp.png";

function Footer({ setModalShow }) {
  return (
    <footer className="footer-container">
      <div className="d-flex justify-content-center">
        <a
          href="https://www.linkedin.com/in/melina-diamante-821270126/"
          target="_blank"
          className="footer-link me-3"
        >
          <GrLinkedin />
        </a>
        <span className="footer-link me-3" onClick={() => setModalShow(true)}>
          <FaEnvelope />
        </span>

        <a
          className="footer-link me-3"
          href="https://api.whatsapp.com/send/?phone=34672517170"
        >
          <img src={Whatsapp} style={{ width: "25px", height: "25px" }} />
        </a>
      </div>

      <h6 className="footer-text mt-3">
        melidiamante.audiovisual@gmail.com | +34 672 517 170
      </h6>
      <p className="footer-text developed">
        Developed by{" "}
        <a
          href="https://www.linkedin.com/in/sofia-ferrer-038575187/"
          target="_blank"
          className="developer-link"
        >
          Sofia Ferrer©
        </a>
      </p>
    </footer>
  );
}

export default Footer;
