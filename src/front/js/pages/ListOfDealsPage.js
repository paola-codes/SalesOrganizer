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
      <h1 className="text-center mt-2 mb-1">
        <strong>List Of Deals</strong>
      </h1>
      <div className="row mt-4 d-flex justify-content-center">
        <div className="col-10 d-inline-flex justify-content-center">
          <Link to="/AddDeal">
            <button className="btn btn-primary fs-4 p-2 mt-2 mb-4 mx-2">
              Add Deal
            </button>
          </Link>
          <Link to="/HomePage">
            <button className="btn btn-primary fs-4 p-2 mt-2 mb-4 mx-2">
              Home
            </button>
          </Link>
        </div>

        <ListOfDeals />
      </div>
    </div>
  );
};
