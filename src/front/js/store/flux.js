const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      backEndUrl: process.env.BACKEND_URL,
      loggedUser: {},
      listOfContacts: [],
      listOfDeals: [],
      contactDetails: [],
      dealDetails: [],
    },
    actions: {
      /*Deal Methods--------------------------------------------------*/
      /*Get All Deals*/
      getDeals: () => {
        fetch(`${getStore().backEndUrl}/api/deal`)
          .then((response) => response.json())
          .then((data) => setStore({ listOfDeals: data }))
          .catch((err) => console.error("Error:", err));
      },
      /*Add Deal*/
      addDeal: (newDeal) => {
        fetch(`${getStore().backEndUrl}/api/deal`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newDeal),
        })
          .then((response) => response.json())
          .then((data) => setStore({ listOfDeals: data }))
          .catch((err) => console.error("Error:", err));
      },
      /*Update Deal Details*/
      updateDealDetails: (updatedDeal, deal_id) => {
        fetch(`${getStore().backEndUrl}/api/deal/details/${deal_id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedDeal),
        })
          .then((response) => response.json())
          .catch((err) => console.error("Error:", err));
      },
      /*Update Deal as Won*/
      wonDeal: (wonStatus, deal_id) => {
        fetch(`${getStore().backEndUrl}/api/deal/won/${deal_id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(wonStatus),
        })
          .then((response) => response.json())
          .catch((err) => console.error("Error:", err));
      },
      /*Update Deal as Lost*/
      lostDeal: (lostStatus, deal_id) => {
        fetch(`${getStore().backEndUrl}/api/deal/lost/${deal_id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(lostStatus),
        })
          .then((response) => response.json())
          .catch((err) => console.error("Error:", err));
      },
      /*Update Deal as Pending*/
      pendingDeal: (pendingStatus, deal_id) => {
        fetch(`${getStore().backEndUrl}/api/deal/pending/${deal_id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(pendingStatus),
        })
          .then((response) => response.json())
          .catch((err) => console.error("Error:", err));
      },
      /*Delete Deal*/
      deleteDeal: (id) => {
        fetch(`${getStore().backEndUrl}/api/deal/${id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => setStore({ listOfDeals: data }))
          .catch((err) => console.error("Error:", err));
      },

      /*Contact Methods--------------------------------------------------*/
      /*Get All Contacts*/
      getContacts: () => {
        fetch(`${getStore().backEndUrl}/api/contact`)
          .then((response) => response.json())
          .then((data) => setStore({ listOfContacts: data }))
          .catch((err) => console.error("Error:", err));
      },
      /*Add Contact*/
      addContact: (newContact) => {
        fetch(`${getStore().backEndUrl}/api/contact`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newContact),
        })
          .then((response) => response.json())
          .then((data) => setStore({ listOfContacts: data }))
          .catch((err) => console.error("Error:", err));
      },
      /*Update Contact Details*/
      updateContactDetails: (updatedContact, contact_id) => {
        fetch(`${getStore().backEndUrl}/api/contact/details/${contact_id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedContact),
        })
          .then((response) => response.json())
          .catch((err) => console.error("Error:", err));
      },
      /*Delete Contact*/
      deleteContact: (id) => {
        fetch(`${getStore().backEndUrl}/api/contact/${id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => setStore({ listOfContacts: data }))
          .catch((err) => console.error("Error:", err));
      },

      /*Update Logged User Profile--------------------------------------------*/
      updateUserProfile: (updatedProfile, id) => {
        fetch(`${getStore().backEndUrl}/api/user/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedProfile),
        })
          .then((response) => response.json())
          .then((data) => setStore({ loggedUser: data }))
          .catch((err) => console.error("Error:", err));
      },

      /*Login/Logout Methods--------------------------------------------------*/
      /*Login*/
      updateUser: (loginInfo) => {
        setStore({ loggedUser: loginInfo });
      },
      /*Logout*/
      logOut: () => {
        setStore({ loggedUser: {} });
        setStore({ listOfVehicles: [] });
        setStore({ acceptedRequests: [] });
      },
    },
  };
};

export default getState;
