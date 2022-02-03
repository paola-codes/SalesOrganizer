import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/index.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container p-4 text-center text-dark fs-6 m-auto mt-3">
      <h1 className="my-3 mb-5">
        <strong>Welcome to SalesOrganizer</strong>
      </h1>

      <h3 className="mt-4">
        The app that helps you get your contacts and deals organized!
      </h3>
      <h3 className="my-3">If you want to get started, sign up now!</h3>
      <div className="my-5">
        <Link to="/SignUpPage">
          <button className="btn btn-primary btn-lg">Sign Up Now!</button>
        </Link>
      </div>

      <h3 className="my-3">Already memeber?</h3>
      <h3 className="my-3">Sign in below!</h3>
      <div className="my-5">
        <Link to="/LoginPage">
          <button className="btn btn-primary btn-lg mb-5">Sign In</button>
        </Link>
      </div>
    </div>
  );
};
