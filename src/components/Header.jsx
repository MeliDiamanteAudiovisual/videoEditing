import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import { GrLinkedin } from "react-icons/gr";
import { FaEnvelope } from "react-icons/fa";

import "../App.css";

function Header({ setModalShow }) {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Navbar.Brand href="" className="navbar-text navbar-brand mx-auto">
        MELINA DIAMANTE <span className="blue-bar">| VIDEO EDITOR</span>
      </Navbar.Brand>

      <Nav className="links-container">
        <Nav.Link
          href=""
          className="navbar-text navbar-link"
          onClick={() => setModalShow(true)}
        >
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
    </Navbar>
  );
}

export default Header;
