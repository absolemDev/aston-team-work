import { useRoutes } from "react-router-dom";
import { routes } from "./routes/routes";
import { Container } from "react-bootstrap";
import { useAppSelector } from "./hooks";
import { getUserLoadingStatus } from "./store";

function App() {
  const isLoggedIn = useAppSelector(getUserLoadingStatus);
  const elements = useRoutes(routes(isLoggedIn));
  return <Container className="App">{elements}</Container>;
}

export { App };
