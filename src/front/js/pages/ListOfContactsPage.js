import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { ListOfContacts } from "../component/ListOfContacts";

export const ListOfContactsPage = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getContacts();
  }, []);

  return (
    <div className="container py-4 px-3 text-center text-dark fs-4 mt-0">
      <div className="row d-flex justify-content-center">
        <h1 className="mb-3">
          <strong>Contacts List</strong>
        </h1>
        <div className="col-10 d-inline-flex justify-content-start p-0">
          <Link to="/AddContact">
            <button className="btn btn-primary fs-5 p-2 mt-2 mb-4 me-2">
              Add Contact
            </button>
          </Link>
          <Link to="/HomePage">
            <button className="btn btn-dark fs-5 p-2 mt-2 mb-4">Home</button>
          </Link>
        </div>

        <ListOfContacts />
      </div>
    </div>
  );
};
