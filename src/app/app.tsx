import { useRoutes } from "react-router-dom";
import { routes } from "./routes/routes";
import { Container } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "./hooks";
import { getUserLoggedInStatus, loadCardsInfo } from "./store";
import { useEffect } from "react";

function App() {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(getUserLoggedInStatus);
  const elements = useRoutes(routes(isLoggedIn));

  useEffect(() => {
    dispatch(loadCardsInfo());
  }, [dispatch]);

  return <Container className="App m-0 p-0" fluid="true">{elements}</Container>;
}

export { App };
