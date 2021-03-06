import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import queryString from "query-string";

export const ListOfDeals = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getDeals();
  }, []);

  useEffect(() => {
    const qs = queryString.parse(location.hash);
    console.log("This is parsed info: ", qs);
    searchFunction(qs.keyword);
  }, [store.listOfDeals]);

  let wonStatus = { status: "Won" };
  let lostStatus = { status: "Lost" };
  let pendingStatus = { status: "Pending" }

  const [deals, setDeals] = useState(store.listOfDeals);

  const searchFunction = (keyword) => {
    console.log("Search function keyword: ", keyword);
    let filteredArray = store.listOfDeals.filter((item) => {
      if (keyword == "" || keyword == undefined) {
        return item;
      } else if (
        item.deal_title.toLowerCase().includes(keyword.toLowerCase())
      ) {
        return item;
      } else if (
        item.description.toLowerCase().includes(keyword.toLowerCase())
      ) {
        return item;
      } else if (
        item.client_name.toLowerCase().includes(keyword.toLowerCase())
      ) {
        return item;
      }
    });
    setDeals(filteredArray);
  };

  const searchHash = (event) => {
    searchFunction(event.target.value);
    if (event.target.value == "") {
      setDeals(store.listOfDeals);
    }
    location.hash = `keyword=${event.target.value}`;
  };

  return (
    <div className="text-center text-dark m-auto p-0">
      <ul
        className="list-group position-relative mx-auto"
        style={{ width: "85%" }}
      >
        <div className="input-group mb-3 mx-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Filter by Title"
            aria-label="Deals Filter"
            aria-describedby="button-addon2"
            onChange={(e) => searchHash(e)}
          />
        </div>
        {store.listOfDeals.length > 0
          ? deals.map((deal, index) => {
            return (
              <li
                className="list-group-item d-flex flex-column mb-3 border shadow-lg border-primary border-4 rounded-3 mx-auto"
                key={index}
                style={{ width: "100%" }}
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
                  <strong>Status:</strong>{" "}
                  <span
                    className={
                      deal.status == "Lost"
                        ? "text-danger"
                        : deal.status == "Won"
                          ? "text-success"
                          : "text-dark"
                    }
                  >
                    {deal.status}
                  </span>
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
                  <Link to="/HomePage">
                    <button
                      type="button"
                      className="btn btn-secondary my-2 me-2 fs-5"
                      onClick={() => actions.pendingDeal(pendingStatus, deal.id)}
                    >
                      Pending
                    </button>
                  </Link>
                  <Link to="/HomePage">
                    <button
                      type="button"
                      className="btn btn-success my-2 me-2 fs-5"
                      onClick={() => actions.wonDeal(wonStatus, deal.id)}
                    >
                      Won
                    </button>
                  </Link>
                  <Link to="/HomePage">
                    <button
                      type="button"
                      className="btn btn-danger my-2 fs-5"
                      onClick={() => actions.lostDeal(lostStatus, deal.id)}
                    >
                      Lost
                    </button>
                  </Link>
                </p>
              </li>
            );
          })
          : "Loading"}
      </ul>
    </div>
  );
};