import {Navigate} from "react-router-dom";
import {FavoritesPage, HistoryPage, HomePage, SigninPage, SignupPage,} from "../components";
import {DefaultLayout} from "../layouts";
import {CardPageMemo} from "../components/pages/card.page";

const routes = (isLoggedIn: boolean) => [
    {
        element: <DefaultLayout/>,
        children: [
            {
                path: "",
                element: <HomePage/>,
            },
            {
                path: "signin",
                element: !isLoggedIn ? <SigninPage/> : <Navigate to="/"/>,
            },
            {
                path: "signup",
                element: !isLoggedIn ? <SignupPage/> : <Navigate to="/"/>,
            },
            {
                path: "favorites",
                element: isLoggedIn ? <FavoritesPage/> : <Navigate to="/signin"/>,
            },
            {
                path: "history",
                element: isLoggedIn ? <HistoryPage/> : <Navigate to="/signin"/>,
            },
            {
                path: "card/:id",
                element: <CardPageMemo/>,
            },

        ],
    },
    {path: "*", element: <Navigate to="/"/>},
];

export {routes};