import React from "react";
import auth from "../firebase.init";
import logo from "../images/logo.png";

const Navbar = () => {
  const user = false;

  const navContent = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>Jobs</a>
      </li>
      {user ? (
        <li>
          <button>LogOut</button>
        </li>
      ) : (
        <li>
          <a>LogIn</a>
        </li>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar px-10  bg-emerald-200">
        <div className="navbar-start">
          <a href="/" className="btn btn-ghost normal-case text-lg">
            <div className=" flex items-center gap-1  justify-center">
              <img src={logo} alt="" className=" w-8" />
              <span className=" uppercase tittle text-slate-600">
                Job Point
              </span>
            </div>
          </a>
        </div>
        <div className="navbar-end ">
          <div className="hidden lg:flex">
            <ul className="menu gap-2 uppercase font-bold menu-horizontal px-1">
              {navContent}
            </ul>
          </div>
          <div className="flex lg:hidden">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact uppercase text-lg text-slate-600 font-semibold dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navContent}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
