import React from "react";
import { useGetJobQuery } from "../features/job/jobApi";
import JobCard from "../components/JobCard";
import Banner from "./Banner";

const Home = () => {
  const { isError, data, isLoading, error } = useGetJobQuery();

  return (
    <div>
      <div>
        <Banner />
      </div>

      {/*  job filtering */}
      <div class="my-8 flex justify-around items-center ">
        <div>
          <ul class=" flex justify-center items-center ">
            <li class="btn "> Latest Jobs </li>
            <li class="btn "> Papular Jobs </li>
          </ul>
        </div>
        <div>
          <ul class=" flex justify-center items-center ">
            <li class="btn "> Remote </li>
            <li class="btn "> On Site </li>
            <li class="btn "> Hy-bride </li>
          </ul>
        </div>

        <div>
          <ul class=" flex justify-center items-center ">
            <li class="btn "> Full Time </li>
            <li class="btn "> Part Time </li>
            <li class="btn "> Internship </li>
          </ul>
        </div>
      </div>

      {/*  job Showa */}
      <div class="">
        <div className=" px-10 grid grid-cols-1 lg:grid-cols-2 gap-5 my-9">
          {data?.data?.map((job) => (
            <JobCard key={job._id} jobData={job}></JobCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
