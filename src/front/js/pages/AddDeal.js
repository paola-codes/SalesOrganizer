import React, { useState, useContext } from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddDeal = () => {
  const { actions, store } = useContext(Context);

  const [newDeal, setNewDeal] = useState({
    deal_title: "",
    description: "",
    deal_owner: "",
    deal_value: "",
    client_name: "",
    expected_product: "",
    notes: "",
    estimated_close_date: "",
    contact_id: "",
    user_id: store.loggedUser.id,
  });

  const handleChange = (e) =>
    setNewDeal({ ...newDeal, [e.target.name]: e.target.value });

  return (
    <div className="container p-4 text-center text-dark fs-6 m-auto mt-3">
      <div>
        <h1 className="text-center mt-2 mb-3">
          <strong>Add New Deal</strong>
        </h1>
        <form className="text-start">
          <div className="form-group my-2">
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ex. Joe's Merch Order #3456"
              name="deal_title"
              onChange={handleChange}
            />
          </div>
          <div className="form-group my-2">
            <label>Description</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ex. Merchandise Order #3456"
              name="description"
              onChange={handleChange}
            />
          </div>
          <div className="form-group my-2">
            <label>Deal Owner</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ex. Freddy Smith"
              name="deal_owner"
              onChange={handleChange}
            />
          </div>
          <div className="form-group my-2">
            <label>Deal Value</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ex. $150"
              name="deal_value"
              onChange={handleChange}
            />
          </div>
          <div className="form-group my-2">
            <label>Client Name</label>
            <label className="list-group-item d-flex align-items-start p-0 m-0">
              <select
                id="inputState"
                className="form-select m-0"
                name="client_name"
                onChange={handleChange}
                defaultValue={"DEFAULT"}
              >
                <option value="DEFAULT">Ex. Andrea Villarroel</option>
                {store.listOfContacts.length > 0
                  ? store.listOfContacts.map((contact, index) => {
                      return <option key={index}>{contact.full_name}</option>;
                    })
                  : "Loading..."}
              </select>
            </label>
          </div>
          <div className="form-group my-2">
            <label>Expected Product</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ex. 24 units on merchandise"
              name="expected_product"
              onChange={handleChange}
            />
          </div>
          <div className="form-group my-2">
            <label>Notes</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ex. Customer paid express delivery"
              name="notes"
              onChange={handleChange}
            />
          </div>
          <div className="form-group my-2">
            <label>Estimated Close Date</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ex. Feb 3, 2022"
              name="estimated_close_date"
              onChange={handleChange}
            />
          </div>
        </form>
        <Link to="/HomePage">
          <button
            className="btn btn-primary btn-lg p-2 m-3"
            onClick={() => {
              actions.addDeal(newDeal);
              actions.getDeals();
            }}
          >
            Add Deal
          </button>
        </Link>
        <Link to="/HomePage">
          <button className="btn btn-dark btn-lg p-2 m-3">Home</button>
        </Link>
      </div>
    </div>
  );
};

AddDeal.propTypes = {
  history: PropTypes.object,
};
