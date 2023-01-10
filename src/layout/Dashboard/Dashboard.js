import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "./SideNav";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-12">
      <SideNav />
      <div className=" col-span-10">
        <div className=" h-full max-w-7xl mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
