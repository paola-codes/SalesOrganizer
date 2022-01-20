import React, { useContext, useState } from "react";
import { Context } from "./store/appContext";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { UserNavbar } from "./component/navbar";

//Contacts
import { AddContact } from "./pages/AddContact";
import { EditContact } from "./pages/EditContact";
import { ContactDetails } from "./pages/ContactDetails";
import { ListOfContacts } from "./component/ListOfContacts";
import { ListOfContactsPage } from "./pages/ListOfContactsPage";

//Deals
import { AddDeal } from "./pages/AddDeal";
import { EditDeal } from "./pages/EditDeal";
import { DealDetails } from "./pages/DealDetails";
import { ListOfDeals } from "./component/ListOfDeals";
import { ListOfDealsPage } from "./pages/ListOfDealsPage";

//Profile
import { Profile } from "./pages/Profile";
import { EditProfile } from "./pages/EditProfile";

//Main Home Page
import { SignUpPage } from "./pages/SignUpPage";
import { LoginPage } from "./pages/LoginPage";
import { LoginRequired } from "./pages/LoginRequired";
import { HomePage } from "./pages/HomePage";

import injectContext from "./store/appContext";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  const { store, actions } = useContext(Context);

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/SignUpPage">
              <SignUpPage />
            </Route>
            <Route exact path="/LoginPage">
              <LoginPage />
            </Route>
            <Route exact path="/LoginRequired">
              <LoginRequired />
            </Route>
            <Route exact path="/HomePage">
              <UserNavbar />
              <HomePage />
            </Route>

            <Route exact path="/AddContact">
              <UserNavbar />
              <AddContact />
            </Route>
            <Route exact path="/EditContact/:id">
              <UserNavbar />
              <EditContact />
            </Route>
            <Route exact path="/ContactDetails/:id">
              <UserNavbar />
              <ContactDetails />
            </Route>
            <Route exact path="/ListOfContactsPage">
              <UserNavbar />
              <ListOfContactsPage />
            </Route>

            <Route exact path="/AddDeal">
              <UserNavbar />
              <AddDeal />
            </Route>
            <Route exact path="/EditDeal/:id">
              <UserNavbar />
              <EditDeal />
            </Route>
            <Route exact path="/DealDetails/:id">
              <UserNavbar />
              <DealDetails />
            </Route>
            <Route exact path="/ListOfDealsPage">
              <UserNavbar />
              <ListOfDealsPage />
            </Route>

            <Route exact path="/Profile">
              <UserNavbar />
              <Profile />
            </Route>
            <Route exact path="/EditProfile">
              <UserNavbar />
              <EditProfile />
            </Route>

            <Route>
              <h1>Not found!</h1>
            </Route>
          </Switch>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
