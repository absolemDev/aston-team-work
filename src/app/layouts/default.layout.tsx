import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Header } from "#ui";

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <Container className="pt-3">
        <Outlet />
      </Container>
    </>
  );
};

export { DefaultLayout };
