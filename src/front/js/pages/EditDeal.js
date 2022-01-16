import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const listOfDeals = () => {
  const { store, actions } = useContext(Context);

  const [updatedDeal, setUpdatedDeal] = useState({
    full_name: deal.full_name,
    email: deal.full_name,
    phone: deal.full_name,
  });

  const handleChange = (e) =>
    setUpdatedDeal({ ...updatedDeal, [e.target.name]: e.target.value });

  return (
    <div className="container py-4 px-3 text-center text-dark fs-4 my-3">
      <h1 className="text-center my-5">Edit Deal Information</h1>

      <h2>Change deal information on the fields below</h2>

      <form className="text-start">
        <div className="form-group my-1">
          <label>Full Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Edit Full Name"
            name="full_name"
            onChange={handleChange}
            value={updatedDeal.full_name}
          />
        </div>
        <div className="form-group my-1">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Edit email"
            name="email"
            onChange={handleChange}
            value={updatedDeal.email}
          />
        </div>
        <div className="form-group my-1">
          <label>Phone</label>
          <input
            type="text"
            className="form-control"
            placeholder="Edit Phone Number"
            name="phone"
            onChange={handleChange}
            value={updatedDeal.phone}
          />
        </div>
      </form>
      <Link to="/HomePage">
        <button
          className="btn btn-warning btn-lg p-2 w-75 m-auto my-3"
          onClick={() => {
            actions.updateDeal(updatedDeal, deal.id);
          }}
        >
          Save Changes
        </button>
      </Link>
    </div>
  );
};
