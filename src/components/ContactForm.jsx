import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

function ContactForm({ show, onHide }) {
  const [isLoading, setLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
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
          setLoading(false);
          onHide();
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
        <Modal.Title
          id="contained-modal-title-vcenter modal-title"
          className="mb-4"
        >
          CONTACT ME
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form ref={form} onSubmit={sendEmail} className="w-80 m-auto">
          <div className="form-container">
            <div className="w-50">
              <FloatingLabel
                controlId="name"
                label="Name*"
                className="mb-3 mr-3"
              >
                <Form.Control
                  required
                  type="text"
                  placeholder="name"
                  name="from_name"
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="email"
                label="Email*"
                className="mb-3 mr-3"
              >
                <Form.Control
                  name="from_email"
                  required
                  type="email"
                  placeholder="email"
                />
              </FloatingLabel>
            </div>
            <div className="w-50">
              <FloatingLabel
                controlId="phone"
                label="Phone Number"
                className="mb-3 ml-3"
              >
                <Form.Control
                  name="from_phone"
                  type="text"
                  placeholder="phone"
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="subject"
                label="Subject*"
                className="mb-3 ml-3"
              >
                <Form.Control
                  name="subject"
                  required
                  type="text"
                  placeholder="subject"
                />
              </FloatingLabel>
            </div>
          </div>

          <FloatingLabel controlId="floatingTextarea2" label="Message*">
            <Form.Control
              required
              as="textarea"
              placeholder="Type your message here"
              style={{ height: "100px" }}
              name="message"
            />
          </FloatingLabel>
          <div className="d-flex justify-content-center mt-4">
            <input
              className="submit-btn"
              type="submit"
              value={isLoading ? "Sending…" : "Send"}
            />
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default ContactForm;
