import Photo3 from "../assets/images/photo-1.jpeg";
import Photo4 from "../assets/images/photo-2.jpeg";
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
        style={{ backgroundImage: `url(${Photo3})` }}
      ></div>
      <div
        className="hero w-50"
        style={{ backgroundImage: `url(${Photo4})` }}
      ></div>
    </div>
  );
}

export default Hero;
