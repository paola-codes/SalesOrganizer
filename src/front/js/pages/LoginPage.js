import React, { useState, useContext } from "react";
import { PropTypes } from "prop-types";
import { Context } from "../store/appContext";

export const LoginPage = (props) => {
  const { actions, store } = useContext(Context);

  const [newContact, setnewContact] = useState({
    email: null,
    password: null,
  });

  const handleChange = (e) =>
    setnewContact({ ...newContact, [e.target.name]: e.target.value });

  const myFetch = (contactInfo) => {
    fetch(`${store.backEndUrl}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contactInfo),
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
    <div className="container p-4 pt-3 text-start text-light fs-6">
      <h1 className="text-center m-3">Login</h1>
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

      <button
        type="button"
        className="btn btn-warning btn-lg p-2 m-0 mt-3"
        onClick={() => myFetch(newContact)}
      >
        Next
      </button>
    </div>
  );
};

LoginPage.propTypes = {
  history: PropTypes.object,
  setUserLogin: PropTypes.func,
};
