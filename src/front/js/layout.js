import React, { useContext, useState } from "react";
import { Context } from "./store/appContext";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { navbar } from "./component/navbar";

//Contacts
import { AddContact } from "./pages/AddContact";
import { EditContact } from "./pages/EditContact";
import { ContactDetails } from "./pages/ContactDetails";
import { ListOfContacts } from "./component/ListOfContacts";
//Deals
import { AddDeal } from "./pages/AddDeal";
import { EditDeal } from "./pages/EditDeal";
import { DealDetails } from "./pages/DealDetails";
import { ListOfDeals } from "./component/ListOfDeals";
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
          <navbar />
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
              <HomePage />
            </Route>

            <Route exact path="/AddContact">
              <AddContact />
            </Route>
            <Route exact path="/EditContact/:id">
              <EditContact />
            </Route>
            <Route exact path="/ContactDetails/:id">
              <ContactDetails />
            </Route>
            <Route exact path="/ListOfContacts">
              <ListOfContacts />
            </Route>

            <Route exact path="/AddDeal">
              <AddDeal />
            </Route>
            <Route exact path="/EditDeal/:id">
              <EditDeal />
            </Route>
            <Route exact path="/DealDetails/:id">
              <DealDetails />
            </Route>
            <Route exact path="/ListOfDeals">
              <ListOfDeals />
            </Route>

            <Route exact path="/Profile">
              <Profile />
            </Route>
            <Route exact path="/EditProfile">
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
