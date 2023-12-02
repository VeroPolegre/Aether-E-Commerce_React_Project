// orderService.js
import axios from "axios";

const API_URL = "http://localhost:8080/orders";

const createOrder = async (cart) => {
  try {
    const token = JSON.parse(localStorage.getItem("token"));
    const orderData = cart.map((game) => ({
      GameId: game.id,
      quantity: game.quantity,
    }));

    await axios.post(
      API_URL,
      { games: orderData },
      {
        headers: {
          Authorization: token,
        },
      }
    );

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
