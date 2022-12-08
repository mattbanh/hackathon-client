import "./CardTwo.scss";
import imageTwo from "../../assets/images/card_image2.png";

const CardTwo = () => {
  return (
    <article className="cardTwo">
      <div className="cardTwo__container-left">
        <div className="cardTwo__title">NHL Championship 2023</div>
        <div className="cardTwo__text">
          Log in for a week of gaming fun, log out with lifetime friends
        </div>
        <div className="cardTwo__event-text">Event Start: Jan 2023</div>
        <div className="cardTwo__cta-wrapper">
          <button className="cardTwo__cta">Join Now</button>
        </div>
      </div>
      <div className="cardTwo__container-right">
        <img className="cardTwo__image" src={imageTwo} alt="NHL Player" />
      </div>
    </article>
  );
};

export default CardTwo;
