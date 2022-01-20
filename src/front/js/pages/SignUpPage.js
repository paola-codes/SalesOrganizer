import React, { useState, useContext } from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const SignUpPage = () => {
  const { actions, store } = useContext(Context);

  const [newUser, setNewUser] = useState({
    full_name: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChange = (e) =>
    setNewUser({ ...newUser, [e.target.name]: e.target.value });

  const addUser = (newUser) => {
    console.log("new user");
    fetch(`${store.backEndUrl}/api/user`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.error("Error:", err));
  };

  return (
    <div className="container p-4 pt-3 text-start text-dark fs-6">
      <h1 className="mt-2 mb-1 text-center">Sign Up Page</h1>
      <form className="text-start">
        <div className="form-group my-1">
          <label>Full Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Full Name"
            name="full_name"
            onChange={handleChange}
          />
        </div>
        <div className="form-group my-1">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="form-group my-1">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter Password"
            name="password"
            onChange={handleChange}
          />
        </div>
        <div className="form-group my-1">
          <label>Phone</label>
          <input
            type="phone"
            className="form-control"
            placeholder="Enter phone"
            name="phone"
            onChange={handleChange}
          />
        </div>
      </form>
      <Link to="/LoginPage">
        <button
          className="btn btn-primary btn-lg col-4 p-2 mt-3 mb-5"
          onClick={() => addUser(newUser)}
        >
          Save
        </button>
      </Link>
    </div>
  );
};

SignUpPage.propTypes = {
  history: PropTypes.object,
};
