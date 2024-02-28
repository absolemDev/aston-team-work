import { Navigate } from "react-router-dom";
import {
  FavoritesPage,
  HistoryPage,
  HomePage,
  SigninPage,
  SignupPage,
} from "../components";
import { DefaultLayout } from "../layouts";

const routes = () => [
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "signin",
        element: <SigninPage />,
      },
      {
        path: "signup",
        element: <SignupPage />,
      },
      {
        path: "favorites",
        element: <FavoritesPage />,
      },
      {
        path: "history",
        element: <HistoryPage />,
      },
    ],
  },
  { path: "*", element: <Navigate to="/" /> },
];

export { routes };
