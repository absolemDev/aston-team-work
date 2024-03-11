import { Navigate } from "react-router-dom";
import {
  AboutPage,
  FavoritesPage,
  HistoryPage,
  HomePage,
  SigninPage,
  SignupPage,
} from "../components";
import { DefaultLayout } from "../layouts";
import { SearchPage } from "../components/pages/search.page";
import { CardPage } from "../components/pages/card.page";

const routes = (isLoggedIn: boolean) => [
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "signin",
        element: !isLoggedIn ? <SigninPage /> : <Navigate to="/" />,
      },
      {
        path: "signup",
        element: !isLoggedIn ? <SignupPage /> : <Navigate to="/" />,
      },
      {
        path: "favorites",
        element: isLoggedIn ? <FavoritesPage /> : <Navigate to="/signin" />,
      },
      {
        path: "card/:id",
        element: <CardPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "history",
        element: isLoggedIn ? <HistoryPage /> : <Navigate to="/signin" />,
      },
      {
        path: "about",
        element: isLoggedIn ? <AboutPage /> : <Navigate to="/signin" />,
      },
    ],
  },
  { path: "*", element: <Navigate to="/" /> },
];

export { routes };
