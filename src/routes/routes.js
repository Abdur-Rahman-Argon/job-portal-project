import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Main from "../layout/Main";
import { createBrowserRouter } from "react-router-dom";
import PrivetRoute from "../shared/PrivetRoute";
import Register from "../components/Register";
import CandidateFrom from "../components/CandidateFrom";
import EmployFrom from "../components/EmployFrom";

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
            <Register />
          </PrivetRoute>
        ),
      },
      {
        path: "/employ",
        element: (
          <PrivetRoute>
            <EmployFrom />
          </PrivetRoute>
        ),
      },
      {
        path: "/candidate",
        element: (
          <PrivetRoute>
            <CandidateFrom />
          </PrivetRoute>
        ),
      },
    ],
  },
]);

export default routes;
