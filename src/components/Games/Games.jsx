import React, { useContext, useEffect } from "react";
import { GameContext } from "../../context/GameContext/GameState";
import Game from "./Game/Game";

const Games = () => {
  const { games, getGames, addCart } = useContext(GameContext);

  useEffect(() => {
    getGames();
  }, []);

  return (
    <div className="games-container">
      {games.map((game) => (
        <Game key={game.id} game={game} addCart={addCart} />
      ))}
    </div>
  );
};

export default Games;
