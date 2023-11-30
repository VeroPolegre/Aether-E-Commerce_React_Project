import axios from "axios";

const API_URL = "http://localhost:8080/orders";

const createOrder = async (cart) => {
  try {
    const token = JSON.parse(localStorage.getItem("token"));
    const gamesInOrder = cart.map((cartItem) => ({
      GameId: cartItem.id,
      quantity: cartItem.quantity || 1,
    }));

    const order = await axios.post(
      API_URL,
      { games: gamesInOrder },
      {
        headers: {
          Authorization: token,
        },
      }
    );

    console.log("Order created:", order.data);
    return order;
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
