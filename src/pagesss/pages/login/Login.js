import React, { useState } from "react";
import "./Login.scss";
import {
  KEY_ACCESS_TOKEN,
  setItem,
} from "../../../utils/localStoragemanager.js";
import { Link, useNavigate } from "react-router-dom";
import { axiosClient } from "../../../utils/axiosClient";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDeafult();
    try {
      const result = await axiosClient.post("/auth/Login", {
        email,
        password,
      });
      setItem(KEY_ACCESS_TOKEN, result.accessToken);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="Login">
      <div className="login-box">
        <h2 className="heading">Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlfor="email"> Email</label>
          <input
            type="email"
            className="="
            email
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlfor="password"> password</label>
          <input
            type="password"
            className="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <input type="submit" className="submit" />
          <p className="subheading">
            Do not have an account? signup <Link to="/signup">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
