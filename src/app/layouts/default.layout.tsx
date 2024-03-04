import React from "react";
import {Link, Outlet} from "react-router-dom";
import {Container, Image, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {useAppDispatch, useAppSelector} from "#hooks";
import {authRequested, getUserLoadingStatus, getUserName, logOut} from "#store";

const DefaultLayout = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(getUserLoadingStatus);
  const userName = useAppSelector(getUserName);

  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary flex-column text-uppercase">
        <Container>
          <Navbar.Brand href="/">
            <div className="fs-2 fw-bold">heartstone</div>
            <div>top desk</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse className="m-0 justify-content-end" id="basic-navbar-nav">
            <Nav>
              {
                userName
                  ? <>
                    <NavDropdown title="Desk" id="basic-nav-dropdown">
                      <NavDropdown.Item href="desk/3.1">Death Knight Decks</NavDropdown.Item>
                      <NavDropdown.Item href="desk/3.2">Demon Hunter Decks</NavDropdown.Item>
                      <NavDropdown.Item href="desk/3.3" className="text-uppercase">Druid Decks</NavDropdown.Item>
                      <NavDropdown.Divider/>
                      <NavDropdown.Item href="desk/3.4">
                        All
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/favorites">Favorites page</Nav.Link>
                    <Nav.Link href="/history">History page</Nav.Link>
                    <Nav.Link href="#">{userName}</Nav.Link>
                    <Nav.Link href="#">logout</Nav.Link>
                  </>
                  : <>
                    <Nav.Link href="/signin">Signin</Nav.Link>
                    <Nav.Link href="/signin" onClick={handleClick}>Signup</Nav.Link>
                  </>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Image className="w-100" alt="HEARTSTONE"
               src="https://cdn.hearthstonetopdecks.com/wp-content/uploads/2023/10/showdown-in-the-badlands-banner-01.jpg"/>
      </Navbar>
      <Outlet/>
    </>
  );
};

export {DefaultLayout};
