import "../App.css";
import VideoCard from "./VideoCard";
import video from "../assets/videos/Beginners Guide to Video Editing (Start to Finish).mp4";

function CardsContainer() {
  return (
    <div className="cards-container">
      <div className="background"></div>
      <VideoCard
        img="https://s3-us-west-2.amazonaws.com/s.cdpn.io/103389/chaps_1x.jpg"
        title="Titulo Video"
        description="Breve descripcion video"
        video={video}
      />
      <VideoCard
        img="https://s3-us-west-2.amazonaws.com/s.cdpn.io/103389/chaps_1x.jpg"
        title="Titulo Video"
        description="Breve descripcion video"
      />
      <VideoCard
        img="https://s3-us-west-2.amazonaws.com/s.cdpn.io/103389/chaps_1x.jpg"
        title="Titulo Video"
        description="Breve descripcion video"
      />
      <VideoCard
        img="https://s3-us-west-2.amazonaws.com/s.cdpn.io/103389/chaps_1x.jpg"
        title="Titulo Video"
        description="Breve descripcion video"
      />
      <VideoCard
        img="https://s3-us-west-2.amazonaws.com/s.cdpn.io/103389/chaps_1x.jpg"
        title="Titulo Video"
        description="Breve descripcion video"
      />
      <VideoCard
        img="https://s3-us-west-2.amazonaws.com/s.cdpn.io/103389/chaps_1x.jpg"
        title="Titulo Video"
        description="Breve descripcion video"
      />
    </div>
  );
}

export default CardsContainer;
