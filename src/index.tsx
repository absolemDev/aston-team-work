import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store/store";
// import { App } from "./app";
// import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {MainFilters} from './app/components/pages/main_page/main.form'

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    {/* <BrowserRouter>
      <App /> */}
      <MainFilters/>
    {/* </BrowserRouter> */}
  </Provider>
);
