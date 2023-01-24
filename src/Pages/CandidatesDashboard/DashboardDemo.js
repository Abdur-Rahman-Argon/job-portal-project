import React from "react";
import { Link } from "react-router-dom";

const DashboardDemo = () => {
  return (
    <div>
      <div className=" bg-slate-600 text-white py-2">
        <h1 className=" text-center font-bold  text-2xl my-2 "> DashBoard</h1>
        <h1 className=" flex justify-center items-center gap-2 text-center font-semibold  text-base ">
          <Link to="/" className=" hover:text-emerald-500">
            Go Home
          </Link>
          <span>
            <i class="fa-sharp fa-solid fa-angles-right text-sm"></i>
          </span>
          <Link to="/dashboard" className=" hover:text-emerald-500">
            DashBoard
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default DashboardDemo;
