import React, { useContext } from "react";
import { GameContext } from "../../../context/GameContext/GameState";

const Game = () => {
  const { games, addCart } = useContext(GameContext);

  const gameList = games.map((game) => (
    <div key={game.id} className="relative">
      <div className="mt-[2rem] text-white text-[18px] bg-[#0f1922] relative">
        <div className="flex flex-col h-full w-full items-center justify-between">
          <div className="flex items-center absolute top-0 right-0 mt-2">
            <div className="bg-black  py-2 px-6 text-[15px] border border-black text-white">
              {game.price} $
            </div>
            <button
              className="bg-[#8cc414] text-black py-1 px-2 border border-black focus:outline-none hover:bg-green-600"
              onClick={() => addCart(game)}
            >
              Add to Cart
            </button>
          </div>
          <h2 className="text-[22px] mt-3">{game.title}</h2>
          <div className="h-full md:h-[24rem] w-full flex flex-col md:flex-row pt-3">
            <div className="w-full h-full bg-black-400 flex">
              <img alt="" className="object-cover w-full" />
            </div>
          </div>
          <div className="pl-4 pb-2">
            <p>{game.description}</p>
          </div>
        </div>
      </div>
    </div>
  ));
  return <div>{gameList}</div>;
};

export default Game;
