import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const EditContact = () => {
  const { store, actions } = useContext(Context);

  const { id } = useParams();

  let contact = store.listOfContacts.find((item, index) => {
    if (item.id == id) {
      return item;
    }
  });

  const [updatedContact, setUpdatedContact] = useState(contact);

  const handleChange = (e) =>
    setUpdatedContact({ ...updatedContact, [e.target.name]: e.target.value });

  return (
    <div className="container py-4 px-3 text-center text-dark fs-4 my-3">
      <h1 className="text-center mb-2">Edit Contact Information</h1>

      <form className="text-start my-3">
        <div className="form-group my-1">
          <label>Full Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Edit Full Name"
            name="full_name"
            onChange={handleChange}
            value={updatedContact.full_name}
          />
        </div>
        <div className="form-group my-1">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Edit email"
            name="email"
            onChange={handleChange}
            value={updatedContact.email}
          />
        </div>
        <div className="form-group my-1">
          <label>Phone</label>
          <input
            type="text"
            className="form-control"
            placeholder="Edit Phone Number"
            name="phone"
            onChange={handleChange}
            value={updatedContact.phone}
          />
        </div>
      </form>
      <div className="row d-flex justify-content-start p-0 m-0">
        <Link to="/HomePage">
          <button
            className="btn btn-primary me-3 mb-3 m-0 fs-5"
            onClick={() => {
              actions.updateContactDetails(updatedContact, id);
            }}
          >
            Save Changes
          </button>
        </Link>

        <Link to="/HomePage">
          <button className="btn btn-secondary me-3 m-0 fs-5">Home</button>
        </Link>
      </div>
    </div>
  );
};
