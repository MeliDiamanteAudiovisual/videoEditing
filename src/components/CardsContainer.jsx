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
        description="Video Editor"
      />
      <WistiaPlayer
        videoId="rswf2l0btc"
        wrapper="wistia-player-container-2"
        title="Her way"
        description="Video Editor"
      />
      {/* <WistiaPlayer
        videoId="w4zi4i858p"
        wrapper="wistia-player-container-3"
        title="Marta"
        description="Video Editor"
      /> */}
      <WistiaPlayer
        videoId="tkyurifk6d"
        wrapper="wistia-player-container-4"
        title="Largados e pelados Brasil"
        description="Video Editor"
      />
      <WistiaPlayer
        videoId="fk07u3v8nq"
        wrapper="wistia-player-container-5"
        title="Bake off Colombia"
        description="Video Editor"
      />
      <WistiaPlayer
        videoId="pvc70rob64"
        wrapper="wistia-player-container-6"
        title="Bake off - famosos al horno España"
        description="Video Editor"
      />
      <WistiaPlayer
        videoId="zrqne7cvij"
        wrapper="wistia-player-container-7"
        title="Messi Maradona - FIFA"
        description="Video Editor"
      />
      <WistiaPlayer
        videoId="w4ymf9hgk1"
        wrapper="wistia-player-container-8"
        title="Always queens - Netflix"
        description="Video Editor"
      />
      <WistiaPlayer
        videoId="2on7yamdp3"
        wrapper="wistia-player-container-9"
        title="Sweden vs USA - FIFA"
        description="Video Editor"
      />
      <WistiaPlayer
        videoId="vmqmyz1ggt"
        wrapper="wistia-player-container-10"
        title="The Argentine movie"
        description="Video Editor"
      />
    </div>
  );
}

export default CardsContainer;
