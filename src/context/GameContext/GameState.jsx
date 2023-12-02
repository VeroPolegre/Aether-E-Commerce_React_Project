import axios from "axios";
import React, { createContext, useEffect, useReducer } from "react";
import GameReducer from "./GameReducer";

const cart = JSON.parse(localStorage.getItem("cart"));

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

      dispatch({
        type: "SET_TOTAL_PRICE",
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

    dispatch({
      type: "SET_TOTAL_PRICE",
    });
  };

  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };

  const removeOneItem = (itemId) => {
    dispatch({
      type: "REMOVE_ONE_ITEM",
      payload: itemId,
    });
  };

  const signOut = () => {
    dispatch({
      type: "LOGOUT",
    });
    dispatch({
      type: "CLEAR_CART",
    });
  };

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      dispatch({
        type: "SET_CART",
        payload: storedCart,
      });

      dispatch({
        type: "SET_TOTAL_PRICE",
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
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
        removeOneItem,
        signOut,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
