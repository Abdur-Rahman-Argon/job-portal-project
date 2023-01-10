import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className=" bg-emerald-100  col-span-2 h-screen sticky top-0">
      <ul className="flex flex-col gap-2 w-full h-full  p-3">
        <div className="flex   items-center text-primary my-1">
          {/* <Link to="/" className="flex items-center text-xs">
            <i class="fa-solid fa-backward-fast mx-1"></i>
            <p className=" font-semibold">BACK</p>
          </Link> */}
          <h1 className="text-xl font-bold text-center">Dashboard</h1>
        </div>
        <li>
          <Link
            className="hover:bg-primary hover:text-white  bg-emerald-300  transition-all w-full block py-2 px-3 rounded-full"
            to="add-jobs"
          >
            Add Job
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
