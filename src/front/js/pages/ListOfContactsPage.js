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
      <h1 className="text-center mt-2 mb-1">List Of Contacts</h1>
      <div className="row mt-4 d-flex justify-content-center">
        <div className="col-10 d-inline-flex justify-content-center">
          <Link to="/AddContact">
            <button className="btn btn-primary fs-4 p-2 mt-2 mb-4 mx-2">
              Add Contact
            </button>
          </Link>
          <Link to="/HomePage">
            <button className="btn btn-primary fs-4 p-2 mt-2 mb-4 mx-2">
              Home
            </button>
          </Link>
        </div>

        <ListOfContacts />
      </div>
    </div>
  );
};
