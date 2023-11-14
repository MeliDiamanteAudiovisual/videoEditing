import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Modal from "react-bootstrap/Modal";

function ContactForm({ show, onHide }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k8rjt5s",
        "template_jx07cs8",
        form.current,
        "NlEwAk_a-ykFIaFft"
      )
      .then(
        (result) => {
          alert("Enviado");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name*</label>
          <input type="text" name="from_name" required />
          <label>Email*</label>
          <input type="email" name="from_email" required />
          <label>Subject*</label>
          <input type="text" name="subject" required />
          <label>Message*</label>
          <textarea name="message" required />
          <label>Phone Number</label>
          <input type="text" name="from_phone" />

          <input type="submit" value="Send" />
        </form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}

export default ContactForm;
