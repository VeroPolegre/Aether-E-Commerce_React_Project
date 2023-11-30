// Cart.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GameContext } from "../../context/GameContext/GameState";
import orderService from "../../services/OrderService";

const Cart = () => {
  const { cart, clearCart, totalPrice } = useContext(GameContext);

  return (
    <div className="mt-10 bg-[#171a21] p-4 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>

      {cart.length === 0 ? (
        <p className="text-white">There's nothing to order.</p>
      ) : (
        <div>
          <ul className="list-disc pl-6">
            {cart.map((cartItem, index) => (
              <li key={index} className="mb-2">
                <span className="text-blue-500"></span> {cartItem.title}
                <span className="ml-2 text-blue-500">Price:</span>{" "}
                {cartItem.price} $
              </li>
            ))}
          </ul>

          <div className="mt-4">
            <p className="text-blue-500">Total Price:</p>
            <p className="text-white">{totalPrice} $</p>
          </div>
        </div>
      )}

      <div className="mt-4 flex justify-between items-center">
        <button
          onClick={() => {
            clearCart();
          }}
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
            className="bg-[#192533] py-2 px-4 rounded focus:outline-none hover:bg-[#1d2f4a] text-white-500"
          >
            Continue Shopping
          </Link>
        )}
      </div>
    </div>
  );
};

export default Cart;
