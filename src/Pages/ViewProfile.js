import React from "react";
import { useParams } from "react-router-dom";
import { useGetViewUserQuery } from "../features/job/jobApi";

const ViewProfile = () => {
  const { userId } = useParams();
  const { isLoading, data, isError } = useGetViewUserQuery(userId);

  return (
    <div>
      <div className=" w-96 mx-auto my-5 border-emerald-400 text-gray-500  border-[1px] shadow-xl p-3 rounded-2xl">
        <div>
          <h1 className=" font-semibold text-xl text-gray-600">
            {data?.data?.firstName + " " + data?.data?.lastName}
          </h1>
          <h2 className=" font-medium text-base text-gray-600">
            {data?.data?.email}
          </h2>
          <p className=" text-sm my-1">
            <span>
              <i class="fa-solid fa-location-dot"></i>
            </span>
            <span> {"Dhaka"}, Bangladesh</span>
          </p>
        </div>
        <div className=" divider"></div>
        <div className=" flex justify-around items-center gap-2">
          <button class="border-2 font-medium py-[6px] rounded-lg border-emerald-500 bg-green-600 hover:bg-green-700  text-white  w-full ">
            <i class="fa-solid fa-paper-plane"></i> <span>Message</span>
          </button>
          <button class="border-2 font-medium py-[6px] hover:border-emerald-500  hover:bg-gray-200  text-black px-2 my-1 rounded-lg border-gray-400 w-full focus:outline-0">
            <i class="fa-solid fa-plus"></i> <span> Follow</span>
          </button>
          <button class="border-2 font-medium py-[6px] hover:border-emerald-500 bg-white hover:bg-green-100  text-black px-2 my-1 rounded-lg border-gray-400 w-full focus:outline-0">
            <span> See more</span> <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
