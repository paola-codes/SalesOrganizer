import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const EditProfile = () => {
  const { store, actions } = useContext(Context);

  const [updatedProfile, setUpdatedProfile] = useState({
    full_name: store.loggedUser.full_name,
    email: store.loggedUser.email,
    phone: store.loggedUser.phone,
  });

  const handleChange = (e) =>
    setUpdatedProfile({ ...updatedProfile, [e.target.name]: e.target.value });

  return (
    <div className="container py-4 px-3 text-center text-dark fs-4 my-3">
      <h1 className="text-center mb-2">
        <strong>Edit Profile Information</strong>
      </h1>

      <form className="text-start my-3">
        <div className="form-group my-3">
          <label>Full Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Edit Full Name"
            name="full_name"
            onChange={handleChange}
            value={updatedProfile.full_name}
          />
        </div>
        <div className="form-group my-1">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Edit email"
            name="email"
            onChange={handleChange}
            value={updatedProfile.email}
          />
        </div>
        <div className="form-group my-1">
          <label>Phone</label>
          <input
            type="text"
            className="form-control"
            placeholder="Edit Phone Number"
            name="phone"
            onChange={handleChange}
            value={updatedProfile.phone}
          />
        </div>
      </form>
      <div className="row d-inline-flex justify-content-start p-0 m-0">
        <Link to="/Profile">
          <button
            className="btn btn-primary me-3 mb-3 m-0 fs-5"
            onClick={() => {
              actions.updateUserProfile(updatedProfile, store.loggedUser.id);
            }}
          >
            Save Changes
          </button>
        </Link>

        <Link to="/HomePage">
          <button className="btn btn-dark me-3 m-0 fs-5">Home</button>
        </Link>
      </div>
    </div>
  );
};
