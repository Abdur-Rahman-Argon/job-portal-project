import React from "react";
import JobCard from "../../components/JobCard";
import { useSelector } from "react-redux";
import { useGetAppliedJobQuery } from "../../features/job/jobApi";
import Loading from "../../shared/Loading";
import { Link } from "react-router-dom";

const AppliedJobs = () => {
  const user = useSelector((state) => state.auth.user);
  const { data, isError, isLoading } = useGetAppliedJobQuery(user.email);

  if (isLoading) {
    return <Loading />;
  }
  console.log(data);
  return (
    <div>
      <div className=" bg-slate-600 text-white py-2">
        <h1 className=" text-center font-bold  text-2xl my-2 ">
          {" "}
          Applied Jobs
        </h1>
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
          <span>
            <i class="fa-sharp fa-solid fa-angles-right text-sm"></i>
          </span>{" "}
          <span>Add Jobs Page</span>
        </h1>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-3 items-center m-10">
        {data?.data?.map((job) => (
          <JobCard key={job._id} jobData={job} />
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
