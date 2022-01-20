import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const ListOfContacts = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container text-center text-dark mt-0 p-0">
      <h1 className="text-center mb-3">Contacts List</h1>
      <ul
        className="list-group position-relative mx-auto mt-2"
        style={{ width: "80%" }}
      >
        {store.listOfContacts.length > 0
          ? store.listOfContacts.map((contact, index) => {
              return (
                <li
                  className="list-group-item d-flex flex-column mx-1 mb-3 shadow-lg border border-primary border-4 rounded-3"
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
                    <Link to={`/ContactDetails/${contact.id}`}>
                      <button className="btn btn-primary m-2 fs-5">
                        Details
                      </button>
                    </Link>
                    <Link to={`/EditContact/${contact.id}`}>
                      <button className="btn btn-dark m-2 fs-5">Edit</button>
                    </Link>
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
    </div>
  );
};
