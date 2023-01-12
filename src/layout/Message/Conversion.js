import React from "react";
import { Link } from "react-router-dom";
import { useGetConversionQuery } from "../../features/message/messageApi";
import { useSelector } from "react-redux";
import ConversationMenu from "./ConversationMenu";

const Conversion = () => {
  const { _id, email, role } = useSelector((state) => state.auth.user);

  const { isLoading, data, isError, error } = useGetConversionQuery(_id);

  return (
    <div className=" bg-emerald-100  col-span-2 h-screen sticky top-0">
      <ul className="flex flex-col gap-2 w-full h-full  p-3">
        <div className=" items-center text-gray-700 my-1">
          <h1 className="text-lg font-bold text-center">Message Conversion</h1>
        </div>
        {role &&
          data?.map((con) => (
            <>
              <li>
                <Link
                  className="hover:bg-primary hover:text-white  bg-emerald-300  text-center  font-semibold transition-all w-full block py-2 px-3 rounded-full"
                  to={`conversation/${con._id}`}
                >
                  <ConversationMenu conversation={con}></ConversationMenu>
                </Link>
              </li>
            </>
          ))}
      </ul>
    </div>
  );
};
export default Conversion;
