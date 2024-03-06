import React from 'react';
import {Nav} from "react-bootstrap";
import {logOut} from "#store";
import {useAppDispatch} from "#hooks";

interface NavLoggedInUserProps {
  userName: string;
}

const NavLoggedInUser = ( { userName }: NavLoggedInUserProps ) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <>
      <Nav.Link href="/favorites" className="px-3">Favorites page</Nav.Link>
      <Nav.Link href="/history" className="px-3">History page</Nav.Link>
      <Nav.Link href="/about" className="px-3">About us</Nav.Link>
      <Nav.Link href="#" className="px-1" style={{fontWeight: "normal"}}>{`(${userName})`}</Nav.Link>
      <Nav.Link href="#"className="px-0"  onClick={handleClick}>logout</Nav.Link>
    </>
  );
};

export { NavLoggedInUser };
