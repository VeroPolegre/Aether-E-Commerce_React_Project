import React, { useContext } from "react";
import { GameContext } from "../../../context/GameContext/GameState";

const Game = () => {
  const { games } = useContext(GameContext);

  const game = games.map((game) => {
    return (
      <div key={game.id}>
        <div className=" mt-[2rem] text-white text-[24px] ">
          <div className="bg-[#0f1922] h-full w-full  flex flex-col justify-between ">
            <div className="flex flex-col h-full w-full items-center">
              <h2 className="text-[30px] mt-3">{game.title}</h2>
              <div className="bg-[#8cc414] w-[6rem] rounded-[0.5rem] mt-1">
                <p className="text-[15px] text-center">{game.price} $</p>
              </div>
            </div>
          </div>
          <div className="h-full md:h-[24rem] w-full flex flex-col  md:flex-row pt-3">
            <div className="w-full h-full bg-black-400 flex ">
              <img alt="" className="object-cover w-full" />
            </div>
          </div>

          <div className="pl-4 pb-2 ">
            <p>{game.description}</p>
          </div>
        </div>
      </div>
    );
  });
  return <div>{game}</div>;
};

export default Game;
