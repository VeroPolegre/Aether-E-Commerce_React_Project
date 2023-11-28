const users = (state, action) => {
  switch (action.type) {
    case "JOIN":
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};

export default users;
