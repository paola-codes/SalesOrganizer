import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { ListOfDeals } from "../component/ListOfDeals";

export const ListOfDealsPage = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getDeals();
  }, []);

  return (
    <div className="container py-4 px-3 text-center text-dark fs-4 mt-0">
      <h1 className="text-center mt-3 mb-1">List Of Deals</h1>
      <div className="row m-0 d-flex justify-content-center">
        <Link to="/AddDeal">
          <button className="btn btn-primary btn-lg p-2 w-75 m-auto my-3">
            Add Deal
          </button>
        </Link>
        <Link to="/HomePage">
          <button className="btn btn-primary btn-lg p-2 m-3">Home</button>
        </Link>
        <div className="my-3">
          <ListOfDeals />
        </div>
      </div>
    </div>
  );
};
