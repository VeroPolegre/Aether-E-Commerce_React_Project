const users = (state, action) => {
  switch (action.type) {
    case "JOIN":
      return {
        ...state,
        token: action.payload.token,
        user: action.payload,
      };
    case "CONFIRMED":
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };
    case "GET_INFO":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default users;
