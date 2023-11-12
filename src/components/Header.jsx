import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { GrLinkedin } from "react-icons/gr";
import { FaEnvelope } from "react-icons/fa";

import "../App.css";

function Header() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Navbar.Brand href="#home" className="navbar-text">
        MELINA DIAMANTE <span className="blue-bar">|</span> VIDEO EDITOR
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home" className="navbar-text navbar-link">
            <FaEnvelope />
          </Nav.Link>
          <Nav.Link
            href="https://www.linkedin.com/in/melina-diamante-821270126/"
            target="_blank"
            className="navbar-text navbar-link"
          >
            <GrLinkedin />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
