import Modal from "react-bootstrap/Modal";

function VideoModal({ show, onHide, video }) {
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
        <video
          src={video}
          width="100%"
          height="440"
          autoPlay={false}
          controls={true}
          type="video/mp4"
        ></video>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}

export default VideoModal;
