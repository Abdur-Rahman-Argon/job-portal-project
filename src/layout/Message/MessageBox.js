import React from "react";
import Conversion from "./Conversion";
import { Outlet } from "react-router-dom";

const MessageBox = () => {
  return (
    <div className="grid grid-cols-12">
      <Conversion />
      <div className=" col-span-10">
        <div className=" h-full max-w-7xl mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MessageBox;
