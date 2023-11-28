import React, { createContext, useReducer } from "react";
import axios from "axios";
import GameReducer from "./GameReducer";

const initialState = {
  games: [],
};

const API_URL = "http://localhost:8080/games";
export const GameContext = createContext(initialState);

export const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GameReducer, initialState);

  const getGames = async () => {
    try {
      const res = await axios.get(API_URL);
      dispatch({
        type: "GET_GAMES",
        payload: res.data,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <GameContext.Provider
      value={{
        games: state.games,
        getGames,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
