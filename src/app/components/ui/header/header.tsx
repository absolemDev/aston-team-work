import { Link } from "react-router-dom";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { useAppSelector } from "#hooks";
import { getUserLoggedInStatus, getUserName } from "#store";
import { Logo, NavLoggedInUser, NavLoggedOutUser } from "#ui";
import style from "./header.module.css";

const Header = () => {
  const userName = useAppSelector(getUserName);
  const isLoggedin = useAppSelector(getUserLoggedInStatus);

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary flex-column text-uppercase p-0"
    >
      <Container className={`${style.container} p-0`}>
        <Logo />
        <Navbar className="m-0 justify-content-end" id="basic-navbar-nav">
          <Nav>
            <Nav.Link as={Link} to="/search" href="/about" className="px-3">
              поиск
            </Nav.Link>
            {isLoggedin && (
              <>
                <Nav.Link as={Link} to="/favorites" className="px-3">
                  избранное
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/history"
                  href="/history"
                  className="px-3"
                >
                  история
                </Nav.Link>
              </>
            )}
            <Nav.Link as={Link} to="/about" href="/about" className="px-3">
              о сайте
            </Nav.Link>
            {isLoggedin ? (
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
