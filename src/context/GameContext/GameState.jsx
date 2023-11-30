import axios from "axios";
import React, { createContext, useEffect, useReducer } from "react";
import GameReducer from "./GameReducer";

const cart = JSON.parse(localStorage.getItem("orders"));

const initialState = {
  games: [],
  cart: cart || [],
  total: 0,
};

const API_URL = "http://localhost:8080/games";
export const GameContext = createContext(initialState);

export const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GameReducer, initialState);

  const getGames = async () => {
    try {
      const res = await axios.get(API_URL);
      const gamesWithQuantity = res.data.map((game) => ({
        ...game,
        quantity: 1,
      }));

      dispatch({
        type: "GET_GAMES",
        payload: gamesWithQuantity,
      });

      const totalPrice = res.data.reduce((acc, game) => acc + game.price, 0);
      dispatch({
        type: "SET_TOTAL_PRICE",
        payload: totalPrice,
      });
    } catch (error) {
      console.error(error);
    }
  };
  const addCart = (game) => {
    dispatch({
      type: "ADD_CART",
      payload: game,
    });

    const totalPrice = state.cart.reduce((acc, game) => acc + game.price, 0);
    dispatch({
      type: "SET_TOTAL_PRICE",
      payload: totalPrice,
    });
  };
  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };

  useEffect(() => {
    const total = state.cart.reduce(
      (accumulator, item) => accumulator + item.price * item.quantity,
      0
    );
    dispatch({
      type: "SET_TOTAL_PRICE",
      payload: total,
    });
  }, [state.cart]);

  return (
    <GameContext.Provider
      value={{
        games: state.games,
        cart: state.cart,
        totalPrice: state.totalPrice,
        getGames,
        addCart,
        clearCart,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
