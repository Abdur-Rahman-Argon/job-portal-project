import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Main from "../layout/Main/Main";
import { createBrowserRouter } from "react-router-dom";
import PrivetRoute from "../shared/PrivetRoute";
import Register from "../components/Register";
import CandidateFrom from "../components/CandidateFrom";
import EmployFrom from "../components/EmployFrom";
import Dashboard from "../layout/Dashboard/Dashboard";
import AddJob from "../Pages/EmployDashboard/AddJob";
import JobDetails from "../components/JobDetails";
import AppliedJobs from "../Pages/CandidatesDashboard/AppliedJobs";
import Jobs from "../Pages/Jobs";
import EmployAllJobs from "../Pages/EmployDashboard/EmployAllJobs";
import OpenJobs from "../Pages/EmployDashboard/OpenJobs";
import ClosedJob from "../Pages/EmployDashboard/ClosedJob";

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
        path: "/jobs",
        element: <Jobs />,
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
        path: "/job-details/:id",
        element: (
          <PrivetRoute>
            <JobDetails />
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
      {
        path: "/dashboard",
        element: (
          <PrivetRoute>
            <Dashboard />
          </PrivetRoute>
        ),
        children: [
          {
            path: "applied-jobs",
            element: (
              <PrivetRoute>
                <AppliedJobs />
              </PrivetRoute>
            ),
          },
          {
            path: "add-jobs",
            element: (
              <PrivetRoute>
                <AddJob />
              </PrivetRoute>
            ),
          },
          {
            path: "my-all-jobs",
            element: (
              <PrivetRoute>
                <EmployAllJobs />
              </PrivetRoute>
            ),
          },
          {
            path: "open-jobs",
            element: (
              <PrivetRoute>
                <OpenJobs />
              </PrivetRoute>
            ),
          },
          {
            path: "closed-jobs",
            element: (
              <PrivetRoute>
                <ClosedJob />
              </PrivetRoute>
            ),
          },
        ],
      },
    ],
  },
]);

export default routes;
