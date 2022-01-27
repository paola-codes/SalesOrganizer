import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const HomePage = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getDeals();
    actions.getContacts();
  }, []);

  const OpenDealsFilter = (deal) => {
    return deal["status"] !== "lost" && deal["status"] !== "won";
  };

  const OpenDeals = Object.values(store.listOfDeals).filter(OpenDealsFilter);

  const WonDealsFilter = (deal) => {
    return deal["status"] == "won";
  };

  const WonDeals = Object.values(store.listOfDeals).filter(WonDealsFilter);

  const LostDealsFilter = (deal) => {
    return deal["status"] == "lost";
  };

  const LostDeals = Object.values(store.listOfDeals).filter(LostDealsFilter);

  return (
    <div className="container py-4 mb-4 px-3 text-center text-dark fs-4 mt-0">
      <h1 className="text-center mt-2 mb-1">
        <strong>Home Page</strong>
      </h1>
      <div className="row mt-4 mx-0 px-0 d-flex justify-content-center ">
        <div className="col-10 d-flex flex-column justify-content-center px-0">
          <table className="table table-dark table-hover table-striped w-75 mx-auto">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Your Stats</th>
              </tr>
            </thead>
            <tbody>
              <tr className="">
                <th scope="row">{OpenDeals.length}</th>
                <td>Open Deals</td>
              </tr>
              <tr className="">
                <th scope="row">{WonDeals.length}</th>
                <td>Won Deals</td>
              </tr>
              <tr className="">
                <th scope="row">{LostDeals.length}</th>
                <td>Lost Deals</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-10 d-flex flex-column justify-content-center p-0">
          <Link to="/AddContact">
            <button className="btn btn-primary fs-4 p-2 w-75 my-2">
              Add Contact
            </button>
          </Link>
          <Link to="/AddDeal">
            <button className="btn btn-primary fs-4 p-2 w-75 my-2">
              Add Deal
            </button>
          </Link>

          <Link to="/ListOfContactsPage">
            <button
              className="btn btn-dark fs-4 p-2 w-75 my-2"
              onClick={() => actions.getContacts()}
            >
              Contacts List
            </button>
          </Link>
          <Link to="/ListOfDealsPage">
            <button
              className="btn btn-dark fs-4 p-2 w-75 my-2"
              onClick={() => actions.getDeals()}
            >
              Deals List
            </button>
          </Link>
          <Link to="/Profile">
            <button className="btn btn-info fs-4 p-2 w-75 my-2">Profile</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
