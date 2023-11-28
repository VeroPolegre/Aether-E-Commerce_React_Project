const games = (state, action) => {
  switch (action.type) {
    case "GET_GAMES":
      return {
        ...state,
        games: action.payload,
      };
  }
};
export default games;
