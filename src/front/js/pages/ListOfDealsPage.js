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
      <div className="row d-flex justify-content-center">
        <h1 className="mb-3">
          <strong>Deals List</strong>
        </h1>
        <div className="col-10 d-inline-flex justify-content-start p-0">
          <Link to="/AddDeal">
            <button className="btn btn-primary fs-5 p-2 mt-2 mb-4 me-2">
              Add Deal
            </button>
          </Link>
          <Link to="/HomePage">
            <button className="btn btn-dark fs-5 p-2 mt-2 mb-4">Home</button>
          </Link>
        </div>

        <ListOfDeals />
      </div>
    </div>
  );
};
