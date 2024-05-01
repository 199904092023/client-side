import React, { useState } from "react";
import "./Signup.scss";
import { axiosClient } from "../../../utils/axiosClient";
import { Link } from "react-router-dom";

function Signup() {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    // console.log(userDetails);
    try {
      const response = await axiosClient.post("/auth/signup", userDetails);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="signup">
      <div className="signup-box">
        <h2 className="heading">Signup</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            className="email"
            id="firstName"
            onChange={(e) =>
              setUserDetails((prev) => ({ ...prev, firstName: e.target.value }))
            }
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            className="email"
            id="lastName"
            onChange={(e) =>
              setUserDetails((prev) => ({ ...prev,lastName: e.target.value }))
            }
          />

          <label htmlFor="email"> Email</label>
          <input
            type="email"
            className="="
            id="email"
            onChange={(e) =>
              setUserDetails((prev) => ({ ...prev, email: e.target.value }))
            }
          />

          <label htmlFor="password"> password</label>
          <input
            type="password"
            className="password"
            id="password"
            onChange={(e) =>
              setUserDetails((prev) => ({ ...prev, password: e.target.value }))
            }
          />
          <button type="submit">Signup</button>
        </form>

        <p className="subheading">
          Already have a acouunt Log in <Link to="/login">Login-Here</Link>
        </p>
      </div>
    </div>
  );
}
export default Signup;
