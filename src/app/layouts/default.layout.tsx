import React from "react";
import { Link, Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <>
      <h1>Default Layout</h1>
      <ul>
        <li>
          <Link to="/">Home page</Link>
        </li>
        <li>
          <Link to="/signin">Signin page</Link>
        </li>
        <li>
          <Link to="/signup">Signup page</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites page</Link>
        </li>
        <li>
          <Link to="/history">History page</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export { DefaultLayout };
