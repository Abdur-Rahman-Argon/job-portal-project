import React from "react";
import { useGetJobQuery } from "../features/job/jobApi";
import JobCard from "../components/JobCard";

const Home = () => {
  const { isError, data, isLoading, error } = useGetJobQuery();

  return (
    <div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 my-9">
        {data?.data?.map((job) => (
          <JobCard key={job._id} jobData={job}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
