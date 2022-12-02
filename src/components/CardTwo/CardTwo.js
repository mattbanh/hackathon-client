import "./CardTwo.scss";
import imageTwo from "../../assets/images/card_image2.png";

const CardTwo = () => {
  return (
    <article className="cardTwo">
      <div className="cardTwo__container-left">
        <div className="cardTwo__float-text">Event Start: Jan 2023</div>
        <div className="cardTwo__title">
          NHL <br />
          Championship <br />
          2023
        </div>
        <div className="cardTwo__text">
          Log in for a week of gaming fun, log out with lifetime friends
        </div>
        <div className="cardTwo__cta">Get Connected!</div>
      </div>
      <div className="cardTwo__container-right">
        <img
          className="cardTwo__image"
          src={imageTwo}
          alt="Several Games Images"
          width="676"
        />
      </div>
    </article>
  );
};

export default CardTwo;
