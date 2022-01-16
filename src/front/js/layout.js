import React, { useContext, useState } from "react";
import { Context } from "./store/appContext";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { LoginRequired } from "./pages/LoginRequired";
import { Navbar } from "./component/navbar";

//PAGES

//Main Home Page
import { SignUpPage } from "./pages/SignUpPage";
import { LoginPage } from "./pages/LoginPage";

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
          <Navbar />
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
