import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import { logOut } from "#store";
import { useAppDispatch } from "#hooks";
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
      <NavDropdown
        title={`(${userName})`}
        id="basic-nav-dropdown"
        className={`${style.dropdown} px-1`}
      >
        <NavDropdown.Item
          as={Link}
          to="/favorites"
          href="#"
          className="px-3 w-100 text-center"
          onClick={handleClick}
        >
          Выход
        </NavDropdown.Item>
      </NavDropdown>
    </>
  );
};

export { NavLoggedInUser };
