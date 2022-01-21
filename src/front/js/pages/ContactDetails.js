import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const ContactDetails = () => {
  const { store, actions } = useContext(Context);

  const { id } = useParams();

  let contact = store.listOfContacts.find((item, index) => {
    if (item.id == id) {
      return item;
    }
  });

  if (contact) {
    return (
      <div className="container-fluid p-4 m-0">
        <div className="row p-0 m-0 mb-3 d-flex d-inline-column flex-wrap">
          <div className="fs-1 m-0 mb-2 p-0">
            <strong>{contact.full_name}</strong>
          </div>

          <div className="col p-0 d-flex align-items-start flex-column">
            <div className="col mb-3 p-2 bg-light bg-opacity-25 w-100">
              <h4>
                <strong>Full Name:</strong>
              </h4>
              <h5>{contact.full_name}</h5>
            </div>
            <div className="col mb-3 p-2 bg-light bg-opacity-25 w-100">
              <h4>
                <strong>Email:</strong>
              </h4>
              <h5>{contact.email}</h5>
            </div>
            <div className="col mb-3 p-2 bg-light bg-opacity-25 w-100">
              <h4>
                <strong>Phone:</strong>
              </h4>
              <h5>{contact.phone}</h5>
            </div>
          </div>
        </div>

        <div className="row d-inline-flex justify-content-start p-0 m-0">
          <div className="col p-0 m-0">
            <Link to={`/EditContact/${id}`}>
              <button type="button" className="btn btn-dark me-3 mb-3 m-0 fs-5">
                Edit Contact
              </button>
            </Link>

            <button
              type="button"
              className="btn btn-danger me-3 mb-3 m-0 fs-5"
              onClick={() => actions.deleteContact(id)}
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
