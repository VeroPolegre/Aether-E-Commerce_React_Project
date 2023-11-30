import axios from "axios";

const API_URL = "http://localhost:8080/orders";

const createOrder = async (cart) => {
  try {
    const token = JSON.parse(localStorage.getItem("token"));
    cart.forEach(async (game) => {
      await axios.post(
        API_URL,
        { GameId: game.id, quantity: game.quantity },
        {
          headers: {
            Authorization: token,
          },
        }
      );
    });
    return cart;
  } catch (error) {
    console.error(
      "Error creating order:",
      error.response?.data || error.message
    );
    throw error;
  }
};

const orderService = {
  createOrder,
};

export default orderService;
