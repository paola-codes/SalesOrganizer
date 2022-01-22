import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const ListOfDeals = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getDeals();
  }, []);

  let wonStatus = { status: "won" };
  let lostStatus = { status: "lost" };

  const [title, setTitle] = useState("");
  const [contact, setContact] = useState("");
  const [owner, setOwner] = useState("");
  const [lost, setLost] = useState("");
  const [won, setwon] = useState("");

  return (
    <div style={{ width: "85%" }} className="text-center text-dark m-auto p-0">
      <ul className="list-group position-relative d-flex justify-content-center">
        <div className="input-group mb-3 mx-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Filter by Title"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            onChange={(e) =>
              setTitle(e.target.value.toLowerCase().replace(" ", ""))
            }
          />
        </div>
        {store.listOfDeals.length > 0
          ? !title
            ? store.listOfDeals.map((deal, index) => {
                return (
                  <li
                    className="list-group-item d-flex flex-column mb-3 border shadow-lg border-primary border-4 rounded-3 mx-auto"
                    key={index}
                  >
                    <p className="mx-2 m-1 text-start">
                      <strong>Title:</strong> {deal.deal_title}
                    </p>
                    <p className="mx-2 m-1 text-start">
                      <strong>Description:</strong> {deal.description}
                    </p>
                    <p className="mx-2 m-1 text-start">
                      <strong>Client Name:</strong> {deal.client_name}
                    </p>
                    <p className="mx-2 m-1 text-start">
                      <strong>Status:</strong> {deal.status}
                    </p>
                    <p className="text-center m-1 mt-3">
                      <Link to={`/DealDetails/${deal.id}`}>
                        <button
                          className="btn btn-primary my-2 me-2 fs-5"
                          onClick={() => actions.getDeals()}
                        >
                          Details
                        </button>
                      </Link>
                      <Link to={`/EditDeal/${deal.id}`}>
                        <button className="btn btn-dark my-2 me-2 fs-5">
                          Edit
                        </button>
                      </Link>
                      <button
                        type="button"
                        className="btn btn-warning my-2 me-2 fs-5"
                        onClick={() => actions.deleteDeal(deal.id)}
                      >
                        Delete
                      </button>
                      <button
                        type="button"
                        className="btn btn-success my-2 me-2 fs-5"
                        onClick={() => actions.wonDeal(wonStatus, deal.id)}
                      >
                        Won
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger my-2 fs-5"
                        onClick={() => actions.lostDeal(lostStatus, deal.id)}
                      >
                        Lost
                      </button>
                    </p>
                  </li>
                );
              })
            : store.listOfDeals
                .filter((deal, index) => deal.deal_title.includes(title))
                .map((deal, index) => {
                  return (
                    <li
                      className="list-group-item d-flex flex-column mb-3 border shadow-lg border-primary border-4 rounded-3 mx-auto"
                      key={index}
                    >
                      <p className="mx-2 m-1 text-start">
                        <strong>Title:</strong> {deal.deal_title}
                      </p>
                      <p className="mx-2 m-1 text-start">
                        <strong>Description:</strong> {deal.description}
                      </p>
                      <p className="mx-2 m-1 text-start">
                        <strong>Client Name:</strong> {deal.client_name}
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
                          <button className="btn btn-dark m-2 fs-5">
                            Edit
                          </button>
                        </Link>
                        <button
                          type="button"
                          className="btn btn-danger m-2 fs-5"
                          onClick={() => actions.lostDeal(lostStatus, deal.id)}
                        >
                          Lost
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger m-2 fs-5"
                          onClick={() => actions.wonDeal(wonStatus, deal.id)}
                        >
                          Won
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger m-2 fs-5"
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
