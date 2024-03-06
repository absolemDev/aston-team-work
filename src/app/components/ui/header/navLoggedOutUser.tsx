import React from 'react';
import {Nav} from "react-bootstrap";

const NavLoggedOutUser = () => {
  return (
    <>
      <Nav.Link href="/signin">Signin</Nav.Link>
      <Nav.Link href="/signup">Signup</Nav.Link>
    </>
  );
};

export { NavLoggedOutUser };
