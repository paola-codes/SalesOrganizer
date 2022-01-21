import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { ListOfDeals } from "../component/ListOfDeals";
import { ListOfContacts } from "../component/ListOfContacts";

export const HomePage = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getDeals();
    actions.getContacts();
  }, []);

  return (
    <div className="container py-4 mb-4 px-3 text-center text-dark fs-4 mt-0">
      <h1 className="text-center mt-2 mb-1">
        <strong>Home Page</strong>
      </h1>
      <div className="row mt-4 d-flex justify-content-center">
        <div className="col-10 d-inline-flex justify-content-center">
          <Link to="/AddContact">
            <button className="btn btn-primary fs-4 p-2 mt-2 mb-4 mx-2">
              Add Contact
            </button>
          </Link>
          <Link to="/AddDeal">
            <button className="btn btn-primary fs-4 p-2 mt-2 mb-4 mx-2">
              Add Deal
            </button>
          </Link>
        </div>
        <ListOfContacts />
        <ListOfDeals />
      </div>
    </div>
  );
};
