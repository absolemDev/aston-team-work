import { useRoutes } from "react-router-dom";
import { routes } from "./routes/routes";
import { Container } from "react-bootstrap";
import { useAppSelector } from "./hooks";
import { getUserLoggedInStatus } from "./store";

function App() {
  const isLoggedIn = useAppSelector(getUserLoggedInStatus);
  const elements = useRoutes(routes(isLoggedIn));
  return (
    <Container className="App m-0 p-0" fluid="true">
      {elements}
    </Container>
  );
}

export { App };
