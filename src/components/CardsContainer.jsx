import "../App.css";
import WistiaPlayer from "./WistiaPlayer";

function CardsContainer() {
  return (
    <div className="cards-container">
      <div className="background"></div>
      <WistiaPlayer
        videoId="vmqmyz1ggt"
        wrapper="wistia-player-container-1"
        title="The Argentine movie"
        description="Video Editing"
      />
      <WistiaPlayer
        videoId="rswf2l0btc"
        wrapper="wistia-player-container-2"
        title="Her way"
        description="Video Editing"
      />
      <WistiaPlayer
        videoId="tkyurifk6d"
        wrapper="wistia-player-container-3"
        title="Largados e pelados Brasil"
        description="Video Editing"
      />
      <WistiaPlayer
        videoId="fk07u3v8nq"
        wrapper="wistia-player-container-4"
        title="Bake off Colombia"
        description="Video Editing"
      />
      <WistiaPlayer
        videoId="pvc70rob64"
        wrapper="wistia-player-container-5"
        title="Bake off - famosos al horno España"
        description="Video Editing"
      />
      <WistiaPlayer
        videoId="zrqne7cvij"
        wrapper="wistia-player-container-6"
        title="Messi Maradona - FIFA"
        description="Video Editing"
      />
      <WistiaPlayer
        videoId="w4ymf9hgk1"
        wrapper="wistia-player-container-7"
        title="Always queens - Netflix"
        description="Video Editing"
      />
      <WistiaPlayer
        videoId="2on7yamdp3"
        wrapper="wistia-player-container-8"
        title="Sweden vs USA - FIFA"
        description="Video Editing"
      />
    </div>
  );
}

export default CardsContainer;
