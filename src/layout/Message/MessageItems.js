import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MessageItems = ({ message }) => {
  const { _id, email, role, firstName, lastName } = useSelector(
    (state) => state.auth.user
  );

  const owner = message?.senderId !== _id;

  return (
    <div>
      <div
        className={` w-8/12 my-1 ${owner ? "mr-auto" : "ml-auto"}  flex ${
          owner ? " flex-row" : " flex-row-reverse"
        } justify-start gap-1  items-start`}
      >
        <div>
          <Link to={`/view-profile/${message?.senderId}`}>
            <div className=" mt-1 w-8">
              <img
                src={
                  (owner &&
                    "https://cdn4.iconfinder.com/data/icons/business-conceptual-part1-1/513/business-woman-512.png") ||
                  "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                }
                alt=""
                className="rounded-full w-11/12"
              />
            </div>
          </Link>
        </div>
        <div className="">
          <div className={` ${owner ? "mr-auto" : "ml-auto"}`}>
            <p
              className={` ${
                owner ? "mr-auto" : "ml-auto"
              } w-full  border-[1px] border-gray-100 rounded-lg shadow bg-gray-50 p-2`}
            >
              {message?.textMessage}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageItems;
