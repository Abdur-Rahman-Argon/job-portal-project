import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideNav = () => {
  const user = useSelector((state) => state.auth.user);

  const candidateRoute = [
    {
      name: "Applied Jobs",
      path: "applied-jobs",
    },
    {
      name: "Applied Jobs",
      path: "applied-jobs",
    },
  ];

  const employerRoute = [
    {
      name: "Add New Job",
      path: "add-jobs",
    },
    {
      name: "My All Jobs",
      path: "my-all-jobs",
    },
    {
      name: "My Open Jobs",
      path: "my-open-jobs",
    },
    {
      name: "Closed Job",
      path: "closed-jobs",
    },
  ];

  return (
    <div className=" bg-emerald-100  col-span-2 h-screen sticky top-0">
      <ul className="flex flex-col gap-2 w-full h-full  p-3">
        <div className=" items-center text-primary my-1">
          {/* <Link to="/" className="flex items-center text-xs">
            <i class="fa-solid fa-backward-fast mx-1"></i>
            <p className=" font-semibold">BACK</p>
          </Link> */}
          <h1 className="text-xl font-bold text-center">Dashboard</h1>
        </div>
        {user.role === "employer" &&
          employerRoute.map(({ name, path }) => (
            <>
              {" "}
              <li>
                <Link
                  className="hover:bg-primary hover:text-white  bg-emerald-300  text-center  font-semibold transition-all w-full block py-2 px-3 rounded-full"
                  to={path}
                >
                  {name}
                </Link>
              </li>
            </>
          ))}

        {user.role === "candidates" &&
          candidateRoute.map(({ name, path }) => (
            <>
              {" "}
              <li>
                <Link
                  className="hover:bg-primary hover:text-white  text-center  font-semibold  bg-emerald-300  transition-all w-full block py-2 px-3 rounded-full"
                  to={path}
                >
                  {name}
                </Link>
              </li>
            </>
          ))}
      </ul>
    </div>
  );
};

export default SideNav;
