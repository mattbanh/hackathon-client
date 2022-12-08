import "./Card.scss";
import imageOne from "../../assets/images/card_image1.png";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <article className="card">
      <div className="card__container-left">
        <div className="card__title">Play Real Time</div>
        <div className="card__text">
          eSports Champion Diana Slay shares how the EA App elevates her streams
        </div>
        <Link to="/live">
          <div className="card__cta-wrapper">
            <button className="card__cta">Watch Now</button>
          </div>
        </Link>
      </div>

      <div className="card__container-right">
        <img className="card__image" src={imageOne} alt="Girl Playing" />
      </div>
    </article>
  );
};

export default Card;
