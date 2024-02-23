import HeroPicture from "../assets/images/hero.jpg";
import "../App.css";

function Hero() {
  return (
    <div className="d-flex w-100">
      <h2 className="hero-heading">
        I believe in the experience <br />
        you can create with video
      </h2>
      <div
        className="hero w-100"
        style={{ backgroundImage: `url(${HeroPicture})` }}
      ></div>
    </div>
  );
}

export default Hero;
