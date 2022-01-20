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
      <h1 className="text-center mt-3 mb-1">List Of Contacts</h1>
      <div className="row m-0 d-flex justify-content-center">
        <Link to="/AddContact">
          <button className="btn btn-primary btn-lg p-2 w-75 m-auto my-3">
            Add Contact
          </button>
        </Link>
        <Link to="/HomePage">
          <button className="btn btn-primary btn-lg p-2 m-3">
            Back to Home
          </button>
        </Link>
        <div className="my-3">
          <ListOfContacts />
        </div>
      </div>
    </div>
  );
};
