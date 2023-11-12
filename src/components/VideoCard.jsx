import React from "react";

import VideoModal from "./VideoModal";

import "../App.css";

function VideoCard({ img, title, description, video }) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <div className="video-card" onClick={() => setModalShow(true)}>
        <img alt="video capture" src={img} />
        <div className="caption">
          <div className="blur"></div>
          <div className="caption-text">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>

      <VideoModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        video={video}
      />
    </>
  );
}

export default VideoCard;
