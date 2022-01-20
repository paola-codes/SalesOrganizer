import React, { useState, useContext } from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
  const { actions, store } = useContext(Context);

  const [newContact, setNewContact] = useState({
    full_name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) =>
    setNewContact({ ...newContact, [e.target.name]: e.target.value });

  return (
    <div className="container p-4 text-center text-dark fs-6 m-auto mt-3">
      <div>
        <h1 className="text-center mt-2 mb-3">Add New Contact</h1>
        <form className="text-start">
          <div className="form-group my-2">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ex. Mary Johnson"
              name="full_name"
              onChange={handleChange}
            />
          </div>
          <div className="form-group my-2">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ex. maryj@mail.com"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="form-group my-2">
            <label>Phone</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ex. 954 786 5894"
              name="phone"
              onChange={handleChange}
            />
          </div>
        </form>
        <Link to="/HomePage">
          <button
            className="btn btn-primary btn-lg p-2 m-3"
            onClick={() => {
              actions.addContact(newContact);
              actions.getContacts();
              actions.getDeals();
            }}
          >
            Add Contact
          </button>
        </Link>
        <Link to="/HomePage">
          <button className="btn btn-primary btn-lg p-2 m-3">Home</button>
        </Link>
      </div>
    </div>
  );
};

AddContact.propTypes = {
  history: PropTypes.object,
};
