import "./Footer.scss";
import facebook from "../../assets/icons/Icon-facebook.png";
import twitter from "../../assets/icons/Icon-twitter.png";

import youtube from "../../assets/icons/Icon-youtube.png";
import instagram from "../../assets/icons/Icon-instagram.png";
import twitch from "../../assets/icons/Icon-twitch.png";

export default function Header() {
  return (
    <footer className="footer">
      <img
        className="footer__logo"
        src="https://media.contentapi.ea.com/content/dam/eacom/en-us/common/october-ea-ring.png"
        alt="Electronics Arts Home"
      />
      <div className="footer__link-left">
        <div className="footer__link">Careers</div>
        <div className="footer__link">Executives</div>
        <div className="footer__link">Impact Report</div>
        <div className="footer__link">Our Commitments</div>
        <div className="footer__link">Patner With Us</div>
      </div>

      <div className="footer__link-right">
        <div className=" footer__link footer__link-join">
          Join The Conversation
        </div>
        <div className="footer__icons">
          <img
            className="footer__bottom-logo-face"
            src={facebook}
            alt="facebook"
          />
          <img
            className="footer__bottom-logo-twit"
            src={twitter}
            alt="twitch"
          />
          <img
            className="footer__bottom-logo-you"
            src={youtube}
            alt="InStock Logo"
          />
          <img
            className="footer__bottom-logo-inst"
            src={instagram}
            alt="InStock Logo"
          />
          <img
            className="footer__bottom-logo-twitch"
            src={twitch}
            alt="twitch"
          />
        </div>
      </div>
    </footer>
  );
}
