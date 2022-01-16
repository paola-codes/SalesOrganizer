import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const listOfDeals = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container text-center text-dark mt-3 p-4">
      <h1 className="text-center my-5">Add Deal</h1>
      <ul
        className="list-group position-relative mx-auto"
        style={{ width: "70%" }}
      >
        {store.listOfDeals.length > 0
          ? store.listOfDeals.map((deal, index) => {
              return (
                <li
                  className="list-group-item d-flex flex-column mx-1 mb-3 shadow-lg border border-warning border-4 rounded-3"
                  key={index}
                >
                  <p className="mx-2 m-1 text-start">
                    <strong>Title:</strong> {deal.title}
                  </p>
                  <p className="mx-2 m-1 text-start">
                    <strong>Description:</strong> {deal.description}
                  </p>
                  <p className="mx-2 m-1 text-start">
                    <strong>Contact Name:</strong> {deal.contact_name}
                  </p>
                  <p className="mx-2 m-1 text-start">
                    <strong>Status:</strong> {deal.status}
                  </p>
                  <p className="text-center m-1 mt-3">
                    <button
                      type="button"
                      className="btn btn-danger mx-2 mb-0 px-1"
                      onClick={() => actions.deleteDeal(deal.id)}
                    >
                      Delete
                    </button>
                  </p>
                </li>
              );
            })
          : "Loading..."}
      </ul>
      <Link to="/AddDeal">
        <button className="btn btn-warning btn-lg p-2 m-3">Add Deal</button>
      </Link>
      <Link to="/HomePage">
        <button className="btn btn-warning btn-lg p-2 m-3">Home</button>
      </Link>
    </div>
  );
};
