import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const ContactDetails = () => {
  const { store, actions } = useContext(Context);

  const { id } = useParams();

  let contact = store.ListOfContacts.find((item, index) => {
    if (item.id == id) {
      return item;
    }
  });

  if (contact) {
    return (
      <div className="container-fluid bg-light p-4 m-0">
        <div className="row p-0 m-0 mb-3 d-flex d-inline-column flex-wrap">
          <div className="fs-1">{contact.full_name}</div>

          <div className="col p-0 d-flex align-content-start flex-wrap">
            <div className="col mx-3 mb-3 p-2 bg-primary bg-opacity-25">
              <h4>
                <strong>Full Name:</strong>
              </h4>
              <h5>{contact.full_name}</h5>
            </div>
            <div className="col mx-3 mb-3 p-2 bg-primary bg-opacity-25">
              <h4>
                <strong>Email:</strong>
              </h4>
              <h5>{contact.email}</h5>
            </div>
            <div className="col mx-3 mb-3 p-2 bg-primary bg-opacity-25">
              <h4>
                <strong>Phone:</strong>
              </h4>
              <h5>{contact.phone}</h5>
            </div>
          </div>
        </div>

        <div className="row d-inline-flex justify-content-start p-0 m-0">
          <div className="col p-0 ms-3">
            <Link to={`/EditContact/${id}`}>
              <button type="button" className="btn btn-dark me-3 m-0 fs-5">
                Edit Contact
              </button>
            </Link>

            <button
              type="button"
              className="btn btn-danger fs-5"
              onClick={() => actions.deleteContact(id)}
            >
              Delete
            </button>

            <Link to="/HomePage">
              <button type="button" className="btn btn-secondary me-3 fs-5">
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
