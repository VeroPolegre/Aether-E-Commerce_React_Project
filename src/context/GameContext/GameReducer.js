const games = (state, action) => {
  switch (action.type) {
    case "GET_GAMES":
      return {
        ...state,
        games: action.payload,
      };
    case "ADD_CART":
      const existingGame = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingGame) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
        totalPrice: 0,
      };
    case "SET_TOTAL_PRICE":
      return {
        ...state,
        totalPrice: action.payload,
      };
    default:
      return state;
  }
};

export default games;
