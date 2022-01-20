import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const EditDeal = () => {
  const { store, actions } = useContext(Context);

  const { id } = useParams();

  let deal = store.listOfDeals.find((item, index) => {
    if (item.id == id) {
      return item;
    }
  });

  const [updatedDeal, setUpdatedDeal] = useState(deal);

  const handleChange = (e) =>
    setUpdatedDeal({ ...updatedDeal, [e.target.name]: e.target.value });

  return (
    <div className="container py-4 px-3 text-center text-dark fs-4 my-3">
      <h1 className="text-center my-5">Edit Deal Information</h1>

      <h2>Change deal information on the fields below</h2>

      <form className="text-start">
        <div className="form-group my-1">
          <label>Deal Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Edit Deal Title"
            name="deal_title"
            onChange={handleChange}
            value={updatedDeal.deal_title}
          />
        </div>
        <div className="form-group my-2">
          <label>Description</label>
          <input
            type="text"
            className="form-control"
            placeholder="Edit Description"
            name="description"
            onChange={handleChange}
            value={updatedDeal.description}
          />
        </div>
        <div className="form-group my-2">
          <label>Deal Owner</label>
          <input
            type="text"
            className="form-control"
            placeholder="Edit Deal Owner"
            name="deal_owner"
            onChange={handleChange}
            value={updatedDeal.deal_owner}
          />
        </div>
        <div className="form-group my-2">
          <label>Deal Value</label>
          <input
            type="text"
            className="form-control"
            placeholder="Edit Deal Value"
            name="deal_value"
            onChange={handleChange}
            value={updatedDeal.deal_value}
          />
        </div>
        <label className="list-group-item d-flex align-items-center m-0">
          <select
            id="inputState"
            className="form-select my-1 shadow-sm"
            name="client_name"
            onChange={handleChange}
            defaultValue={"DEFAULT"}
            value={updatedDeal.client_name}
          >
            <option value="DEFAULT">
              Client Name: {updatedDeal.deal_value}
            </option>
            {store.listOfContacts.length > 0
              ? store.listOfContacts.map((contact, index) => {
                  return <option key={index}>{contact.full_name}</option>;
                })
              : "Loading..."}
          </select>
        </label>
        <div className="form-group my-2">
          <label>Expected Product</label>
          <input
            type="text"
            className="form-control"
            placeholder="Edit Expected Product"
            name="expected_product"
            onChange={handleChange}
            value={updatedDeal.expected_product}
          />
        </div>
        <div className="form-group my-2">
          <label>Status</label>
          <input
            type="text"
            className="form-control"
            placeholder="Edit Status"
            name="status"
            onChange={handleChange}
            value={updatedDeal.status}
          />
        </div>
        <div className="form-group my-2">
          <label>Loss Reasons</label>
          <input
            type="text"
            className="form-control"
            placeholder="Edit Loss Reasons"
            name="loss_reasons"
            onChange={handleChange}
            value={updatedDeal.loss_reasons}
          />
        </div>
        <div className="form-group my-2">
          <label>Win Reasons</label>
          <input
            type="text"
            className="form-control"
            placeholder="Edit Win Reasons"
            name="win_reasons"
            onChange={handleChange}
            value={updatedDeal.win_reasons}
          />
        </div>
        <div className="form-group my-2">
          <label>Notes</label>
          <input
            type="text"
            className="form-control"
            placeholder="Edit Notes"
            name="notes"
            onChange={handleChange}
            value={updatedDeal.notes}
          />
        </div>
        <div className="form-group my-2">
          <label>Estimated Close Date</label>
          <input
            type="text"
            className="form-control"
            placeholder="Edit Estimated Close Date"
            name="estimated_close_date"
            onChange={handleChange}
            value={updatedDeal.estimated_close_date}
          />
        </div>
      </form>
      <Link to="/HomePage">
        <button
          className="btn btn-primary btn-lg p-2 w-75 m-auto my-3"
          onClick={() => {
            actions.updateDealDetails(updatedDeal, id);
          }}
        >
          Save Changes
        </button>
      </Link>
    </div>
  );
};
