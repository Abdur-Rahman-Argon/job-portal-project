import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Main from "../layout/Main";
import { createBrowserRouter } from "react-router-dom";
import PrivetRoute from "../shared/PrivetRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/register",
        element: (
          <PrivetRoute>
            <SignUp />
          </PrivetRoute>
        ),
      },
    ],
  },
]);

export default routes;
