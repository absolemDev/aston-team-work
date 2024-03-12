import { Navigate } from "react-router-dom";
import {
  AboutPage,
  FavoritesPage,
  HistoryPage,
  HomePage,
  SigninPage,
  SignupPage,
  NotFoundPage,
  SearchPage,
  CardPage,
} from "#pages";
import { DefaultLayout } from "#layouts";

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
        element: <AboutPage />,
      },
      {
        path: "not_found",
        element: <NotFoundPage />,
      },
    ],
  },
  { path: "*", element: <Navigate to="/" /> },
];

export { routes };
