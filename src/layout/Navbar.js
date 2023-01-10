import React from "react";
import auth from "../firebase.init";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { logout } from "../features/auth/authSlice";

const Navbar = () => {
  const user = useSelector((state) => state.auth.user.email);
  console.log(user);

  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(logout());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navContent = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">Jobs</Link>
      </li>
      {user ? (
        <button onClick={handleSignOut}>LogOut</button>
      ) : (
        <li>
          <Link to="/login">LogIn</Link>
        </li>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar px-10  bg-emerald-200">
        <div className="navbar-start">
          <Link to="/" href="/" className="btn btn-ghost normal-case text-lg">
            <div className=" flex items-center gap-[6px]  justify-center">
              <img src={logo} alt="" className=" w-7" />
              <span className="mt-1 uppercase tittle text-yellow-500">
                Job Point
              </span>
            </div>
          </Link>
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
