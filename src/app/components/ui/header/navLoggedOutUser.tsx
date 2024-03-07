import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavLoggedOutUser = () => {
  return (
    <>
      <Nav.Link as={Link} to="/signin">
        войти
      </Nav.Link>
      <Nav.Link as={Link} to="/signup">
        зарегистрироваться
      </Nav.Link>
    </>
  );
};

export { NavLoggedOutUser };
