import React, { useContext, useEffect } from "react";
import { GameContext } from "../../context/GameContext/GameState";
import Game from "./Game/Game";

const Games = () => {
  const { getGames } = useContext(GameContext);

  useEffect(() => {
    getGames();
  }, []);

  return (
    <div className="games-container">
      <Game />
    </div>
  );
};

export default Games;
