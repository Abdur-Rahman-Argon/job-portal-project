import React from "react";
import { MdOutlineWatchLater } from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const JobCard = ({ jobData }) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const { _id, position, companyName, location, employmentType } =
    jobData || {};

  //   console.log(user.role);

  return (
    <div
      key={_id}
      className="border-emerald-400 text-gray-500  border-[1px] shadow-xl p-5 rounded-2xl"
    >
      <div className="flex justify-between ">
        <div>
          <div>
            <h1 className="text-2xl font-semibold text-gray-600">{position}</h1>
          </div>
          <small className=" flex justify-start items-center gap-1  my-2">
            <span>by</span>
            <span className="font-semibold cursor-pointer hover:underline transition-all">
              {companyName}
            </span>
          </small>
          <p className=" my-1">
            <span>
              <i class="fa-solid fa-location-dot"></i>
            </span>
            <span> {location}, Bangladesh</span>
          </p>
        </div>
        <div className=" my-1">
          <p>{employmentType}</p>
        </div>
      </div>

      <div className=" divider"></div>

      <div className="flex justify-between items-center mt-5">
        <p className=" text-sm flex justify-start items-center gap-1">
          <MdOutlineWatchLater /> <span>1 hours ago</span>
        </p>
        <button
          onClick={() => navigate(`/job-details/${jobData._id}`)}
          className="px-7 text-gray-600 font-medium text-center rounded-md border-emerald-400  py-1 border-[1px]"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default JobCard;
