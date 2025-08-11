import React, { useContext, useState } from "react";

import { IoArrowForwardCircleOutline } from "react-icons/io5";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { authOfpage } from "./@Routes/routes";

const Login = () => {
  const { isauth, setIsauth } = useContext(authOfpage);
  const [userInfo, setUserInfo] = useState({
    userId: "",
    password: "",
  });

  const homenavigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsauth(true);
    homenavigate("/");
  };

  const handleAuth = (e) => {
    e.preventDefault();
    setIsauth(false);
  };
  return (
    <>
      <center>
        {isauth ?  (
          <button onClick={handleAuth} className="btn btn-primary btn-lg" data-toggle="button">logout</button>
        ) :(
          <>
          <form onSubmit={handleSubmit} className="login">
          <h1>Sign Up</h1>
            <label>UserName</label>

            <input
              type="text"
              name="userId"
              placeholder="Enter Email"
              id="userId"
              value={userInfo?.userId}
              onChange={(e) =>
                setUserInfo({ ...userInfo, userId: e.target.value })
              }
            />
            <br />

            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="Enter password"
              id="password"
              value={userInfo?.password}
              onChange={(e) =>
                setUserInfo({ ...userInfo, password: e.target.value })
              }
            />
            <br />
            <button>
              <IoArrowForwardCircleOutline />
            </button>
          </form>
                </>
        )}
      </center>
    </>
  );
};

export default Login;
