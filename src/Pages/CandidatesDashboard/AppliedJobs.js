import React from "react";
import JobCard from "../../components/JobCard";
import { useSelector } from "react-redux";
import { useGetAppliedJobQuery } from "../../features/job/jobApi";
import Loading from "../../shared/Loading";

const AppliedJobs = () => {
  const user = useSelector((state) => state.auth.user);
  const { data, isError, isLoading } = useGetAppliedJobQuery(user.email);

  if (isLoading) {
    return <Loading />;
  }
  console.log(data);
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-3 items-center m-10">
      {data?.data?.map((job) => (
        <JobCard key={job._id} jobData={job} />
      ))}
    </div>
  );
};

export default AppliedJobs;
