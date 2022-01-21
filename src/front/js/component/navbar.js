import React, { useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Files from "../../img/files.png";
import { Context } from "../store/appContext";

export const UserNavbar = () => {
  const { actions } = useContext(Context);

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <img
            alt=""
            src={Files}
            width="30"
            className="d-inline-flex align-top p-0 me-1 mt-1 m-0 text-dark"
          />
          <h3 className="d-inline-flex align-center p-0 m-0">
            <strong>SalesOrganizer</strong>
          </h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav text-dark">
          <Nav className="ms-auto">
            <Link
              to="/HomePage"
              className="text-decoration-none text-dark me-2"
            >
              <Nav.Item>Home</Nav.Item>
            </Link>
            <Link to="/Profile" className="text-decoration-none text-dark me-2">
              <Nav.Item>Profile</Nav.Item>
            </Link>
            <Link
              to="/ListOfDealsPage"
              className="text-decoration-none text-dark me-2"
            >
              <Nav.Item>Deals</Nav.Item>
            </Link>
            <Link
              to="/ListOfContactsPAge"
              className="text-decoration-none text-dark me-2"
            >
              <Nav.Item>Contacts</Nav.Item>
            </Link>
            <Link to="/" className="text-decoration-none text-dark me-2">
              <Nav.Item>
                <span onClick={() => actions.logOut()}>Log Out</span>
              </Nav.Item>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
