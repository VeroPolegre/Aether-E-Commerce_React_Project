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
  };

  const confirmed = async (email) => {
    const res = await axios.get(API_URL + "/confirm/" + email);
    dispatch({
      type: "CONFIRMED",
      payload: res.data,
    });
    console.log(res.data);
    if (res.data) {
      localStorage.setItem("token", JSON.stringify(res.data.token));
    }
  };

  const getInfo = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const res = await axios.get(API_URL + "/info", {
      headers: {
        authorization: token,
      },
    });
    dispatch({
      type: "GET_INFO",
      payload: res.data,
    });
  };

  return (
    <UserContext.Provider
      value={{
        token: state.token,
        user: state.user,
        create,
        confirmed,
        getInfo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
