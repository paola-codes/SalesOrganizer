import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const ListOfDeals = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container text-center text-dark mt-0 p-0">
      <h1 className="text-center mb-3">Deals List</h1>
      <ul
        className="list-group position-relative mx-auto mt-2"
        style={{ width: "80%" }}
      >
        {store.listOfDeals.length > 0
          ? store.listOfDeals.map((deal, index) => {
              return (
                <li
                  className="list-group-item d-flex flex-column mx-1 mb-3 shadow-lg border border-primary border-4 rounded-3"
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
                    <Link to={`/DealDetails/${deal.id}`}>
                      <button
                        className="btn btn-primary m-2 fs-5"
                        onClick={() => actions.getDeals()}
                      >
                        Details
                      </button>
                    </Link>
                    <Link to={`/EditDeal/${deal.id}`}>
                      <button className="btn btn-dark m-2 fs-5">Edit</button>
                    </Link>
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
    </div>
  );
};
