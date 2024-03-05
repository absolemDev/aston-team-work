import React from "react";
import {Outlet} from "react-router-dom";
import {Header} from "../components/ui";

const DefaultLayout = () => {
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  );
};

export { DefaultLayout };
