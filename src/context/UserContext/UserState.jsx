import { createContext, useReducer } from "react";
import axios from "axios";
import UserReducer from "./UserReducer";

const token = JSON.parse(localStorage.getItem("token"));

const initialState = {
  token: token ? token : null,
  user: null,
};

const API_URL = "http://localhost:8080/users";

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  const create = async (user) => {
    const res = await axios.post(API_URL + "/join", user);
    dispatch({
      type: "JOIN",
      payload: res.data,
    });
    if (res.data) {
      localStorage.setItem("token", JSON.stringify(res.data.token));
    }
  };
  return (
    <UserContext.Provider
      value={{
        token: state.token,
        create,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
