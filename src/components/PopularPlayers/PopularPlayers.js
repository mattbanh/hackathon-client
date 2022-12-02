import "./PopularPlayers.scss";
import iconsBar from "../../assets/icons/icons-bar.png";

const PopularPlayers = ({ img, avatar, user, game, views }) => {
  return (
    <article className="pp-card">
      <div className="pp-card__image-container">
        <img className="pp-card__image" src={img} alt="Player" />
        <div className="pp-card__icons-bar">
          <img src={iconsBar} alt="icons" />
        </div>
      </div>

      <div className="pp-card__wrapper">
        <div className="pp-card__icon">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="pp-card__text-container">
          <div className="pp-card__title">{user}</div>
          <div className="pp-card__game">{game}</div>
          <div className="pp-card__views">{views} views</div>
        </div>
      </div>
    </article>
  );
};

export default PopularPlayers;
