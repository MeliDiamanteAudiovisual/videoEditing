import Photo1 from "../assets/images/photo-1.png";
import Photo2 from "../assets/images/photo-2.jpeg";
import "../App.css";

function Hero() {
  return (
    <div className="d-flex w-100">
      <h2 className="hero-heading">
        I believe in the experience you can create <br />
        with video and sound
      </h2>
      <div
        className="hero w-50"
        style={{ backgroundImage: `url(${Photo1})` }}
      ></div>
      <div
        className="hero w-50"
        style={{ backgroundImage: `url(${Photo2})` }}
      ></div>
    </div>
  );
}

export default Hero;
