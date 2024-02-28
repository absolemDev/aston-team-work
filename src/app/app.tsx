import React from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes/routes";
import { Container } from "react-bootstrap";

function App() {
  const elements = useRoutes(routes());
  return <Container className="App">{elements}</Container>;
}

export { App };
