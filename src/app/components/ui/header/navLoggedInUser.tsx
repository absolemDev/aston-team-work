import React from "react";
import { Nav } from "react-bootstrap";
import { logOut } from "#store";
import { useAppDispatch } from "#hooks";
import { Link } from "react-router-dom";

interface NavLoggedInUserProps {
  userName: string;
}

const NavLoggedInUser = ({ userName }: NavLoggedInUserProps) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <>
      <Nav.Link as={Link} to="/favorites" className="px-3">
        Favorites page
      </Nav.Link>
      <Nav.Link as={Link} to="/history" href="/history" className="px-3">
        History page
      </Nav.Link>
      <Nav.Link as={Link} to="/about" href="/about" className="px-3">
        About us
      </Nav.Link>
      <Nav.Link
        as={Link}
        to="/favorites"
        href="#"
        className="px-1"
        style={{ fontWeight: "normal" }}
      >{`(${userName})`}</Nav.Link>
      <Nav.Link
        as={Link}
        to="/favorites"
        href="#"
        className="px-0"
        onClick={handleClick}
      >
        logout
      </Nav.Link>
    </>
  );
};

export { NavLoggedInUser };
