import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../components/ui";
import { BackButton } from "../components/ui/backButton";

const DefaultLayout = () => {
  const location = useLocation();
  const showBackButton =
    location.pathname !== "/" && location.pathname !== "/search";

  return (
    <>
      <Header />
      {showBackButton && <BackButton />}
      <Outlet />
    </>
  );
};

export { DefaultLayout };
