import "./HeroPlayReal.scss";
import image from "../../assets/images/gamingLady.png";

export default function HeroPlayReal() {
  return (
    <main className="main">
      <h1 className="main__title">Play Real Time</h1>
    
      <div className="main__hero">
        <video
          className="main__hero-video"
          control="controls"
          src="https://www.youtube.com/watch?v=orJSJGHjBLI&ab_channel=EdSheeran"
          poster={image}
        ></video>
        <div className="main__text">
          <h2 className="main__text-title">Diana Slay</h2>
          <h3 className="main__text-info">
            eSports Champion Diana Slay shares how the EA App elevates her
            streams
          </h3>
        </div>
      </div>
    </main>
  );
}