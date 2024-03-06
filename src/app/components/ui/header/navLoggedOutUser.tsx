import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavLoggedOutUser = () => {
  return (
    <>
      <Nav.Link as={Link} to="/signin">
        Signin
      </Nav.Link>
      <Nav.Link as={Link} to="/signup">
        Signup
      </Nav.Link>
    </>
  );
};

export { NavLoggedOutUser };
