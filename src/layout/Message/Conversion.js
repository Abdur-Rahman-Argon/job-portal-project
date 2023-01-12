import React from "react";
import { Link } from "react-router-dom";

const Conversion = () => {
  return (
    <div className=" bg-emerald-100  col-span-2 h-screen sticky top-0">
      <ul className="flex flex-col gap-2 w-full h-full  p-3">
        <div className=" items-center text-primary my-1">
          <h1 className="text-xl font-bold text-center">Conversion</h1>
        </div>
        {/* {user.role === "employer" &&
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
          ))} */}
      </ul>
    </div>
  );
};
export default Conversion;
