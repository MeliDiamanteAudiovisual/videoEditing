import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/Main";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Header setModalShow={setModalShow} />
      <Hero />
      <Main />
      <ContactForm show={modalShow} onHide={() => setModalShow(false)} />
      <Footer setModalShow={setModalShow} />
    </>
  );
}

export default App;
