import React, { useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import salesOrg from "../../img/salesOrg.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { actions } = useContext(Context);

  return (
    <Navbar variant="ligt" bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <img
            alt=""
            src={salesOrg}
            width="50"
            className="d-inline-flex align-center p-0 m-0 text-dark"
          />
          <h3 className="d-inline-flex m-0">SalesOrganizer</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
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
            <Link to="/AddDeal" className="text-decoration-none text-dark me-2">
              <Nav.Item>Add Deal</Nav.Item>
            </Link>
            <Link
              to="/AddContact"
              className="text-decoration-none text-dark me-2"
            >
              <Nav.Item>Add Contact</Nav.Item>
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
