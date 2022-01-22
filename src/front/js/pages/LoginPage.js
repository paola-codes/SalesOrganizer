import React, { useState, useContext } from "react";
import { PropTypes } from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const LoginPage = (props) => {
  const { actions, store } = useContext(Context);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const myFetch = (userInfo) => {
    fetch(`${store.backEndUrl}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        actions.updateUser(data);
      })
      .catch((err) => {
        console.error("Incorrect Information", err);
        alert("Incorrect Information");
      });
  };

  return (
    <div className="container p-4 pt-3 text-start text-dark fs-6">
      <h1 className="text-center mt-2 mb-1">
        <strong>Login</strong>
      </h1>
      <form className="text-start">
        <div className="form-group my-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control shadow-sm"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="form-group my-1">
          <label>Password</label>
          <input
            type="password"
            className="form-control shadow-sm"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
        </div>
      </form>

      <Link to="/HomePage">
        <button
          type="button"
          className="btn btn-primary btn-lg p-2 m-0 mt-3"
          onClick={() => {
            myFetch(user);
            actions.getContacts();
            actions.getDeals();
          }}
        >
          Next
        </button>
      </Link>
    </div>
  );
};

LoginPage.propTypes = {
  history: PropTypes.object,
};
