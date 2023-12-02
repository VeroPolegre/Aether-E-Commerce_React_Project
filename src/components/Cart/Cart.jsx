// Cart.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GameContext } from "../../context/GameContext/GameState";
import orderService from "../../services/OrderService";

const Cart = () => {
  const { cart, clearCart, removeOneItem } = useContext(GameContext);

  return (
    <div className="mt-10 bg-[#171a21] p-4 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-white">Cart</h2>

      {cart.length === 0 ? (
        <p className="text-white">There's nothing to order.</p>
      ) : (
        <div>
          {cart.map((cartItem, index) => (
            <div key={index} className="mb-4 p-4 bg-gray-700 rounded">
              <p className="text-white">
                <span className="text-blue-500"></span> {cartItem.title}
              </p>
              <p className="text-white">Price: {cartItem.price} $</p>
              <p className="text-white">Quantity: {cartItem.quantity}</p>
              <button
                onClick={() => removeOneItem(cartItem.id)}
                className="text-red-500 underline focus:outline-none hover:no-underline hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="mt-4 p-4 bg-gray-700 rounded text-white">
            <p className="text-blue-500">Total Price:</p>
            <p>
              {cart.reduce(
                (acc, cartItem) => acc + cartItem.price * cartItem.quantity,
                0
              )}{" "}
              $
            </p>
          </div>
        </div>
      )}

      <div className="mt-4 flex justify-between items-center">
        <button
          onClick={clearCart}
          className="text-white-500 underline rounded focus:outline-none hover:no-underline hover:text-blue-500"
        >
          Remove all items
        </button>
        {cart.length > 0 ? (
          <button
            onClick={() => {
              const orderData = cart.map((cartItem) => ({
                id: cartItem.id,
                quantity: cartItem.quantity || 1,
              }));
              orderService.createOrder(orderData);
              clearCart();
            }}
            className="bg-green-500 text-white py-2 px-4 rounded focus:outline-none hover:bg-green-600"
          >
            Create Order
          </button>
        ) : (
          <Link
            to="/home"
            className="bg-blue-600 py-2 px-4 rounded focus:outline-none hover:bg-blue-700 text-white"
          >
            Continue Shopping
          </Link>
        )}
      </div>
    </div>
  );
};

export default Cart;
