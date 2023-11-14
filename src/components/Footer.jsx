import "../App.css";
import { GrLinkedin } from "react-icons/gr";
import { FaEnvelope } from "react-icons/fa";

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
        <span className="footer-link" onClick={() => setModalShow(true)}>
          <FaEnvelope />
        </span>
      </div>

      <h6 className="footer-text mt-3">
        melidiamante.audiovisual@gmail.com | +54 9 11 30132288
      </h6>
    </footer>
  );
}

export default Footer;
