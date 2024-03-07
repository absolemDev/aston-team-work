import { Nav, NavDropdown } from "react-bootstrap";
import { logOut } from "#store";
import { useAppDispatch } from "#hooks";
import { Link } from "react-router-dom";
import style from "./header.module.css";

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
        избранное
      </Nav.Link>
      <Nav.Link as={Link} to="/history" href="/history" className="px-3">
        история
      </Nav.Link>
      <Nav.Link as={Link} to="/about" href="/about" className="px-3">
        о сайте
      </Nav.Link>
      <NavDropdown
        title={`(${userName})`}
        id="basic-nav-dropdown"
        className={`${style.dropdown} px-1`}
      >
        <NavDropdown.Item
          as={Link}
          to="/favorites"
          href="#"
          className="px-3 w-100"
          onClick={handleClick}
        >
          Выход
          {/*<i className="bi bi-box-arrow-right m-2"/>*/}
        </NavDropdown.Item>
      </NavDropdown>
    </>
  );
};

export { NavLoggedInUser };
