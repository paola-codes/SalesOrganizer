import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import queryString from "query-string";

export const ListOfContacts = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getContacts();
  }, []);

  useEffect(() => {
    const qs = queryString.parse(location.hash);
    console.log("This is parsed info: ", qs);
    searchFunction(qs.keyword);
  }, [store.listOfContacts]);

  const [contacts, setContacts] = useState(store.listOfContacts);

  const searchFunction = (keyword) => {
    console.log("Search function keyword: ", keyword);
    let filteredArray = store.listOfContacts.filter((item) => {
      if (keyword == "" || keyword == undefined) {
        return item;
      } else if (item.full_name.toLowerCase().includes(keyword.toLowerCase())) {
        return item;
      } else if (item.email.toLowerCase().includes(keyword.toLowerCase())) {
        return item;
      }
    });
    setContacts(filteredArray);
  };

  const searchHash = (event) => {
    searchFunction(event.target.value);
    if (event.target.value == "") {
      setContacts(store.listOfContacts);
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
            placeholder="Filter by Name"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            onChange={(e) => searchHash(e)}
          />
        </div>
        {store.listOfContacts.length > 0
          ? contacts.map((contact, index) => {
              return (
                <li
                  className="list-group-item d-flex flex-column mb-3 border shadow-lg border-primary border-4 rounded-3 mx-auto"
                  key={index}
                  style={{ width: "100%" }}
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
