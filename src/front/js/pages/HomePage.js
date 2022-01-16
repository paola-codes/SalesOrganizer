import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const HomePage = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getDeals();
    actions.getContacts();
  }, []);

  return (
    <div className="container py-4 px-3 text-center text-light fs-4 mt-3">
      <h1 className="text-center my-5">Home Page</h1>
      <div className="row m-0 d-flex justify-content-center">
        <Link to="/AddDeal">
          <button className="btn btn-warning btn-lg p-2 w-75 m-auto my-3">
            Add Deal
          </button>
        </Link>
        <Link to="/AddContact">
          <button className="btn btn-warning btn-lg p-2 w-75 m-auto my-3">
            Add Contact
          </button>
        </Link>
      </div>
    </div>
  );
};
