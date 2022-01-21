import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DealDetails = () => {
  const { store, actions } = useContext(Context);

  const { id } = useParams();

  let deal = store.listOfDeals.find((item, index) => {
    if (item.id == id) {
      return item;
    }
  });

  if (deal) {
    return (
      <div className="container-fluid p-4 m-0">
        <div className="row p-0 m-0 mb-3 d-flex d-inline-column flex-wrap">
          <div className="fs-1 m-0 mb-2 p-0">
            <strong>{deal.deal_title}</strong>
          </div>

          <div className="col p-0 d-flex align-items-start flex-column">
            <div className="col mb-3 p-2 bg-light bg-opacity-25 w-100">
              <h4>
                <strong>Description:</strong>
              </h4>
              <h5>{deal.description}</h5>
            </div>
            <div className="col mb-3 p-2 bg-light bg-opacity-25 w-100">
              <h4>
                <strong>Deal Owner:</strong>
              </h4>
              <h5>{deal.deal_owner}</h5>
            </div>
            <div className="col mb-3 p-2 bg-light bg-opacity-25 w-100">
              <h4>
                <strong>Deal Value:</strong>
              </h4>
              <h5>{deal.deal_value}</h5>
            </div>
            <div className="col mb-3 p-2 bg-light bg-opacity-25 w-100">
              <h4>
                <strong>Client Name:</strong>
              </h4>
              <h5>{deal.client_name}</h5>
            </div>
            <div className="col mb-3 p-2 bg-light bg-opacity-25 w-100">
              <h4>
                <strong>Expected Product:</strong>
              </h4>
              <h5>{deal.expected_product}</h5>
            </div>
            <div className="col mb-3 p-2 bg-light bg-opacity-25 w-100">
              <h4>
                <strong>Status:</strong>
              </h4>
              <h5 className="pe-4">{deal.status}</h5>
            </div>
            <div className="col mb-3 p-2 bg-light bg-opacity-25 w-100">
              <h4>
                <strong>Loss Reasons:</strong>
              </h4>
              <h5>{deal.loss_reasons}</h5>
            </div>
            <div className="col mb-3 p-2 bg-light bg-opacity-25 w-100">
              <h4>
                <strong>Win Reasons:</strong>
              </h4>
              <h5>{deal.win_reasons}</h5>
            </div>
            <div className="col mb-3 p-2 bg-light bg-opacity-25 w-100">
              <h4>
                <strong>Notes:</strong>
              </h4>
              <h5>{deal.notes}</h5>
            </div>
            <div className="col mb-3 p-2 bg-light bg-opacity-25 w-100">
              <h4>
                <strong>Estimated Close Date:</strong>
              </h4>
              <h5>{deal.estimated_close_date}</h5>
            </div>
          </div>
        </div>

        <div className="row d-inline-flex justify-content-start p-0 m-0">
          <div className="col p-0 m-0">
            <Link to={`/EditDeal/${id}`}>
              <button type="button" className="btn btn-dark me-3 mb-3 m-0 fs-5">
                Edit Deal
              </button>
            </Link>

            <button
              type="button"
              className="btn btn-danger me-3 mb-3 m-0 fs-5"
              onClick={() => actions.deleteDeal(id)}
            >
              Delete
            </button>

            <Link to="/HomePage">
              <button
                type="button"
                className="btn btn-primary me-3 mb-3 m-0 fs-5"
              >
                Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return <h1>Loading</h1>;
};
