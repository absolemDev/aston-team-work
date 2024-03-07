import React from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { useAppSelector } from "#hooks";
import { getUserName } from "#store";
import { Logo, NavLoggedInUser } from "./index";
import { NavLoggedOutUser } from "./index";
import style from "./header.module.css"

const Header = () => {
  const userName = useAppSelector(getUserName);

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary flex-column text-uppercase p-0"
    >
      <Container className={`${style.container} p-0`}>
        <Logo />
        <Navbar className="m-0 justify-content-end" id="basic-navbar-nav">
          <Nav>
            {userName ? (
              <NavLoggedInUser userName={userName} />
            ) : (
              <NavLoggedOutUser />
            )}
          </Nav>
        </Navbar>
      </Container>
      <Image
        className="w-100"
        alt="HEARTSTONE"
        src="https://cdn.hearthstonetopdecks.com/wp-content/uploads/2023/10/showdown-in-the-badlands-banner-01.jpg"
      />
    </Navbar>
  );
};

export { Header };
