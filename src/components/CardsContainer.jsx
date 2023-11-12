import "../App.css";
import VideoCard from "./VideoCard";
import video1 from "../assets/videos/1-peliargentina.mp4";
import video2 from "../assets/videos/2-herway.mp4";
import video3 from "../assets/videos/3-marta.mp4";
import video4 from "../assets/videos/4-bakeoff.mp4";
import video5 from "../assets/videos/5-siemprereinas.mp4";
import video6 from "../assets/videos/6-arteautoexamen.mp4";
import video7 from "../assets/videos/7-messimaradona.mp4";
import video8 from "../assets/videos/8-swedenvsusa.mp4";
import photo1 from "../assets/images/1-peliargentina.png";
import photo2 from "../assets/images/2-herway.png";
import photo3 from "../assets/images/3-marta.png";
import photo4 from "../assets/images/4-bakeoff.png";
import photo5 from "../assets/images/5-siemprereinas.png";
import photo6 from "../assets/images/6-arteautoexamen.png";
import photo7 from "../assets/images/7-messimaradona.png";
import photo8 from "../assets/images/8-swdenvsusa.png";

function CardsContainer() {
  return (
    <div className="cards-container">
      <div className="background"></div>
      <VideoCard
        img={photo1}
        title="Titulo Video"
        description="Breve descripcion video"
        video={
          "https://github.com/MeliDiamanteAudiovisual/videoEditing/1-peliargentina.mp4"
        }
      />
      {/* <VideoCard
        img={photo2}
        title="Titulo Video"
        description="Breve descripcion video"
        video={video2}
      />
      <VideoCard
        img={photo3}
        title="Titulo Video"
        description="Breve descripcion video"
        video={video3}
      />
      <VideoCard
        img={photo4}
        title="Titulo Video"
        description="Breve descripcion video"
        video={video4}
      />
      <VideoCard
        img={photo5}
        title="Titulo Video"
        description="Breve descripcion video"
        video={video5}
      />
      <VideoCard
        img={photo6}
        title="Titulo Video"
        description="Breve descripcion video"
        video={video6}
      />
      <VideoCard
        img={photo7}
        title="Titulo Video"
        description="Breve descripcion video"
        video={video7}
      />
      <VideoCard
        img={photo8}
        title="Titulo Video"
        description="Breve descripcion video"
        video={video8}
      /> */}
    </div>
  );
}

export default CardsContainer;
