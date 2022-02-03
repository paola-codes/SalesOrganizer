import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const EditDeal = () => {
  const { store, actions } = useContext(Context);

  const { id } = useParams();

  let deal = store.listOfDeals.find((item, index) => {
    if (item.id == id) {
      return item;
    }
  });

  const [updatedDeal, setUpdatedDeal] = useState(deal);

  const handleChange = (e) =>
    setUpdatedDeal({ ...updatedDeal, [e.target.name]: e.target.value });

  return (
    <div className="container py-4 px-3 text-center text-dark fs-4 my-3">
      <h1 className="text-center mb-2">
        <strong>Edit Deal Information</strong>
      </h1>

      <form className="text-start my-3">
        <div className="form-group my-1">
          <label>Deal Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Edit Deal Title"
            name="deal_title"
            onChange={handleChange}
            value={updatedDeal.deal_title}
          />
        </div>
        <div className="form-group my-2">
          <label>Description</label>
          <input
            type="text"
            className="form-control"
            placeholder="Edit Description"
            name="description"
            onChange={handleChange}
            value={updatedDeal.description}
          />
        </div>
        <div className="form-group my-2">
          <label>Deal Owner</label>
          <input
            type="text"
            className="form-control"
            placeholder="Edit Deal Owner"
            name="deal_owner"
            onChange={handleChange}
            value={updatedDeal.deal_owner}
          />
        </div>
        <div className="form-group my-2">
          <label>Deal Value</label>
          <input
            type="text"
            className="form-control"
            placeholder="Edit Deal Value"
            name="deal_value"
            onChange={handleChange}
            value={updatedDeal.deal_value}
          />
        </div>
        <div className="form-group my-2">
          <label>Client Name</label>
          <label className="list-group-item d-flex align-items-start p-0 m-0">
            <select
              id="inputState"
              className="form-select m-0"
              name="client_name"
              onChange={handleChange}
              defaultValue={"DEFAULT"}
            >
              <option value="DEFAULT">{updatedDeal.client_name}</option>
              {store.listOfContacts.length > 0
                ? store.listOfContacts.map((contact, index) => {
                  return <option key={index}>{contact.full_name}</option>;
                })
                : "Loading..."}
            </select>
          </label>
        </div>
        <div className="form-group my-2">
          <label>Expected Product</label>
          <input
            type="text"
            className="form-control"
            placeholder="Edit Expected Product"
            name="expected_product"
            onChange={handleChange}
            value={updatedDeal.expected_product}
          />
        </div>
        <div className="form-group my-2">
          <label>Status</label>
          <label className="list-group-item d-flex align-items-start p-0 m-0">
            <select
              id="inputState"
              className="form-select m-0"
              name="client_name"
              onChange={handleChange}
              defaultValue={"DEFAULT"}
            >
              <option value="DEFAULT">{updatedDeal.status}</option>
              <option value="Pending">Pending</option>
              <option value="Won">Won</option>
              <option value="Lost">Lost</option>
            </select>
          </label>
        </div>
        <div className="form-group my-2">
          <label>Loss Reasons</label>
          <input
            type="text"
            className="form-control"
            placeholder="Edit Loss Reasons"
            name="loss_reasons"
            onChange={handleChange}
            value={updatedDeal.loss_reasons}
          />
        </div>
        <div className="form-group my-2">
          <label>Win Reasons</label>
          <input
            type="text"
            className="form-control"
            placeholder="Edit Win Reasons"
            name="win_reasons"
            onChange={handleChange}
            value={updatedDeal.win_reasons}
          />
        </div>
        <div className="form-group my-2">
          <label>Notes</label>
          <input
            type="text"
            className="form-control"
            placeholder="Edit Notes"
            name="notes"
            onChange={handleChange}
            value={updatedDeal.notes}
          />
        </div>
        <div className="form-group my-2">
          <label>Estimated Close Date</label>
          <input
            type="text"
            className="form-control"
            placeholder="Edit Estimated Close Date"
            name="estimated_close_date"
            onChange={handleChange}
            value={updatedDeal.estimated_close_date}
          />
        </div>
      </form>
      <div className="row d-inline-flex justify-content-start p-0 m-0">
        <div className="col p-0 m-0">
          <Link to="/HomePage">
            <button
              className="btn btn-dark me-3 mb-3 m-0 fs-5"
              onClick={() => {
                actions.updateDealDetails(updatedDeal, id);
                actions.getDeals();
              }}
            >
              Save Changes
            </button>
          </Link>

          <Link to="/HomePage">
            <button className="btn btn-primary me-3 mb-3 m-0 fs-5">Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
/*

<select class="form-select" aria-label="Default select example">
  <option selected>Select a State</option>
  <option value="started">Started/In Progress</option>
  <option value="won">Won</option>
  <option value="lost">Lost</option>
</select>



const DealsFilter = (deal) => {
    {deal[title].includes("value").lowerCase() || ? true : false }
  };

  const Deals = Object.values(store.listOfDeals).filter(
    DealsFilter
  );



// This holds a list of some fiction people
// Some  have the same name but different age and id
const USERS = [ make a map here
  { id: 1, name: 'Andy', age: 32 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Tom Hulk', age: 40 },
  { id: 4, name: 'Tom Hank', age: 50 },
  { id: 5, name: 'Audra', age: 30 },
  { id: 6, name: 'Anna', age: 68 },
  { id: 7, name: 'Tom', age: 34 },
  { id: 8, name: 'Tom Riddle', age: 28 },
  { id: 9, name: 'Bolo', age: 23 },
];

function App() {
  // the value of the search field 
  const [name, setName] = useState('');

  // the search result
  const [foundUsers, setFoundUsers] = useState(USERS);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = USERS.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(USERS);
      // If the text field is empty, show all users
    }

    setName(keyword);
  };

  return (
    <div className="container">
      <input
        type="search"
        value={name}
        onChange={filter}
        className="input"
        placeholder="Filter"
      />

      <div className="user-list">
        {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((user) => (
            <li key={user.id} className="user">
              <span className="user-id">{user.id}</span>
              <span className="user-name">{user.name}</span>
              <span className="user-age">{user.age} year old</span>
            </li>
          ))
        ) : (
          <h1>No results found!</h1>
        )}
      </div>
    </div>
  );
}

*/
