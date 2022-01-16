import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const listOfContacts = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container text-center text-dark mt-3 p-4">
      <h1 className="text-center my-5">Vehicles List</h1>
      <ul
        className="list-group position-relative mx-auto"
        style={{ width: "70%" }}
      >
        {store.listOfContacts.length > 0
          ? store.listOfContacts.map((contact, index) => {
              return (
                <li
                  className="list-group-item d-flex flex-column mx-1 mb-3 shadow-lg border border-warning border-4 rounded-3"
                  key={index}
                >
                  <p className="mx-2 m-1 text-start">
                    <strong>Full Name:</strong> {contact.full_name}
                  </p>
                  <p className="mx-2 m-1 text-start">
                    <strong>Email:</strong> {contact.email}
                  </p>
                  <p className="mx-2 m-1 text-start">
                    <strong>Phone:</strong> {contact.phone}
                  </p>
                  <p className="text-center m-1 mt-3">
                    <button
                      type="button"
                      className="btn btn-danger mx-2 mb-0 px-1"
                      onClick={() => actions.deleteContact(contact.id)}
                    >
                      Delete
                    </button>
                  </p>
                </li>
              );
            })
          : "Loading..."}
      </ul>
      <Link to="/AddContact">
        <button className="btn btn-warning btn-lg p-2 m-3">Add Contact</button>
      </Link>
      <Link to="/HomePage">
        <button className="btn btn-warning btn-lg p-2 m-3">Home</button>
      </Link>
    </div>
  );
};
