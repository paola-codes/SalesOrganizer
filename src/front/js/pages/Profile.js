import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Profile = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container py-4 px-3 text-center text-dark fs-4 mt-3">
      <h1 className="text-center mt-2 mb-3">Profile</h1>

      <div className="row d-flex justify-content-center mb-3">
        <div className="col-9 mx-4 text-start bg-dark text-light bg-opacity-75 shadow-lg p-3">
          <h3 className="text-center">
            <strong>Profile Information</strong>
          </h3>
          <h5>
            <strong>Full Name: </strong>
            {store.loggedUser.full_name}
          </h5>
          <h5>
            <strong>Email: </strong>
            {store.loggedUser.email}
          </h5>
          <h5>
            <strong>Phone: </strong>
            {store.loggedUser.phone}
          </h5>
        </div>
      </div>
      <div className="row my-3 d-flex flex-column justify-content-center">
        <Link to="/EditProfile">
          <button className="btn btn-warning btn-lg p-2 w-75 m-auto my-3">
            Edit Profile
          </button>
        </Link>
        <Link to="/HomePage">
          <button className="btn btn-primary btn-lg p-2 w-75 m-auto my-3">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};
