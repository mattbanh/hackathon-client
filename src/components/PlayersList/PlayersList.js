import "./PlayersList.scss";

import Player from "../PopularPlayers/PopularPlayers";

import player1Img from "../../assets/images/popular_player1.png";
import player2Img from "../../assets/images/popular_player2.png";
import player3Img from "../../assets/images/popular_player3.png";

import avatar1 from "../../assets/images/avatar1.png";
import avatar2 from "../../assets/images/avatar2.png";
import avatar3 from "../../assets/images/avatar3.png";

const PlayersList = () => {
  return (
    <section className="pp-list">
      <div className="pp-list__title">Popular Players</div>
      <div className="pp-list__card-wrapper">
        <Player
          img={player1Img}
          avatar={avatar1}
          user="PegasusuSpiele"
          game="Stardew Valley"
          views="4,320"
        />

        <Player
          img={player2Img}
          avatar={avatar2}
          user="guzelka_games"
          game="Smite"
          views="3,320"
        />
        <Player
          img={player3Img}
          avatar={avatar3}
          user="DeyaGames"
          game="BoardGames"
          views="3,520"
        />
      </div>
    </section>
  );
};

export default PlayersList;
