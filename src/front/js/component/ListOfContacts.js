import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const ListOfContacts = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getContacts();
  }, []);

  const [name, setName] = useState("");

  return (
    <div style={{ width: "85%" }} className="text-center text-dark m-auto p-0">
      <ul className="list-group position-relative d-flex justify-content-center">
        <div className="input-group mb-3 mx-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Filter by Name"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            onChange={(e) =>
              setName(e.target.value.toLowerCase().replace(" ", ""))
            }
          />
        </div>
        {store.listOfContacts.length > 0
          ? !name
            ? store.listOfContacts.map((contact, index) => {
                return (
                  <li
                    className="list-group-item d-flex flex-column mb-3 border shadow-lg border-primary border-4 rounded-3 mx-auto"
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
                        <button className="btn btn-primary my-2 me-2 fs-5">
                          Details
                        </button>
                      </Link>
                      <Link to={`/EditContact/${contact.id}`}>
                        <button className="btn btn-dark my-2 me-2 fs-5">
                          Edit
                        </button>
                      </Link>
                      <button
                        type="button"
                        className="btn btn-danger my-2 fs-5"
                        onClick={() => actions.deleteContact(contact.id)}
                      >
                        Delete
                      </button>
                    </p>
                  </li>
                );
              })
            : store.listOfContacts
                .filter((contact, index) => contact.full_name.includes(name))
                .map((contact, index) => {
                  return (
                    <li
                      className="list-group-item d-flex flex-column mb-3 border shadow-lg border-primary border-4 rounded-3 mx-auto"
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
                          <button className="btn btn-primary my-2 me-2 fs-5">
                            Details
                          </button>
                        </Link>
                        <Link to={`/EditContact/${contact.id}`}>
                          <button className="btn btn-dark my-2 me-2 fs-5">
                            Edit
                          </button>
                        </Link>
                        <button
                          type="button"
                          className="btn btn-danger my-2 fs-5"
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
