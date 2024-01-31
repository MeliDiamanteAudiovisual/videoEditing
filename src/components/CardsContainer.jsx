import "../App.css";
import photo1 from "../assets/images/1-peliargentina.png";
import photo2 from "../assets/images/2-herway.png";
import photo3 from "../assets/images/3-marta.png";
import photo4 from "../assets/images/4-bakeoff.png";
import photo5 from "../assets/images/5-siemprereinas.png";
import photo6 from "../assets/images/6-arteautoexamen.png";
import photo7 from "../assets/images/7-messimaradona.png";
import photo8 from "../assets/images/8-swdenvsusa.png";
import WistiaPlayer from "./WistiaPlayer";

function CardsContainer() {
  return (
    <div className="cards-container">
      <div className="background"></div>
      <WistiaPlayer videoId="vmqmyz1ggt" wrapper="wistia-player-container-1" />
      <WistiaPlayer videoId="rswf2l0btc" wrapper="wistia-player-container-2" />
      <WistiaPlayer videoId="ni1uu7ggph" wrapper="wistia-player-container-3" />
      <WistiaPlayer videoId="fk07u3v8nq" wrapper="wistia-player-container-4" />
      <WistiaPlayer videoId="w4ymf9hgk1" wrapper="wistia-player-container-5" />
      <WistiaPlayer videoId="2lxuihnrtr" wrapper="wistia-player-container-6" />
      <WistiaPlayer videoId="zrqne7cvij" wrapper="wistia-player-container-7" />
      <WistiaPlayer videoId="2on7yamdp3" wrapper="wistia-player-container-8" />
      {/* <VideoCard
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
