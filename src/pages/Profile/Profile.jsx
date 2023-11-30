import React, { useContext, useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserState";

const Profile = () => {
  const { getInfo, user, token } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    getInfo();
  }, []);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <FaSpinner className="text-4xl text-white" />
      </div>
    );
  }

  return (
    <div className="bg-grey-lighter pt-10 flex flex-col items-center justify-center">
      <div className="bg-[#171a21] px-6 py-8 rounded shadow-md text-white w-full max-w-3xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">{user.name}</h1>
          </div>
          <div>
            <img
              src={user.avatar || "default-avatar-url"} // Replace with the correct avatar URL or a default avatar
              alt="User Avatar"
              className="w-20 h-20 rounded-full"
            />
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Profile Information:</h2>
          <ul className="text-white space-y-2">
            <li>
              <strong>Name:</strong> {user.name}
            </li>
            <li>
              <strong>Email:</strong> {user.email}
            </li>
            <li>
              <strong>Joined on:</strong>{" "}
              {new Date(user.createdAt).toLocaleDateString()}
            </li>
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Reviews:</h2>
          {user.Reviews && user.Reviews.length == 0 ? (
            <ul className="text-white space-y-2">
              {user.Reviews.map((review) => {
                return (
                  <li key={review.id}>
                    <strong>{review.game.title}:</strong> {review.content}
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="text-white">No reviews yet.</p>
          )}
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Orders:</h2>
          {user.Orders && user.Orders.length > 0 ? (
            <ul className="text-white space-y-4">
              {user.Orders.map((order) => (
                <li key={order.id} className="mb-4">
                  <strong>Order nº:</strong> {order.id},{" "}
                  <strong>Total Amount:</strong> $
                  {Number(order.total).toFixed(2)}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-white">No orders yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
