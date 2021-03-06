import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const LoginRequired = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container py-4 px-3 text-center text-dark fs-4 mt-3">
      <h1 className="mt-2 mb-1">
        <strong>
          Please Login or Sign Up to access SalesOrganizer Services
        </strong>
      </h1>

      <div className="my-4">
        <Link to="/SignUpPage">
          <button className="btn btn-primary btn-lg">Sign Up Now!</button>
        </Link>
      </div>

      <div className="my-4">
        <Link to="/LoginPage">
          <button className="btn btn-primary btn-lg mb-5">Sign In</button>
        </Link>
      </div>
    </div>
  );
};
