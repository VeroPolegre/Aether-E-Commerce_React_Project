import React, { useContext, useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserState";

const Profile = () => {
  const { getInfo, user, token } = useContext(UserContext);
  useEffect(() => {
    getInfo();
  }, []);
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);
  if (!user) {
    return <FaSpinner>Loading...</FaSpinner>;
  }
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
};

export default Profile;
