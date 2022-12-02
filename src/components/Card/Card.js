import "./Card.scss";
import imageOne from "../../assets/images/card_image1.png";

const Card = () => {
  return (
    <article className="card">
      <div className="card__container-left">
        <div className="card__title">Play Real Time</div>
        <div className="card__text">
          eSports Champion Diana Slay shares how the EA App elevates her streams
        </div>
        <div className="card__cta">Listen Now</div>
      </div>
      <div className="card__container-right">
        <img
          className="card__image"
          src={imageOne}
          alt="Girl Playing"
          width="676"
        />
      </div>
    </article>
  );
};

export default Card;
