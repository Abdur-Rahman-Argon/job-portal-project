import React from "react";
import JobCard from "../components/JobCard";
import { useGetJobQuery } from "../features/job/jobApi";
import { Link } from "react-router-dom";

const Jobs = () => {
  const { isError, data, isLoading, error } = useGetJobQuery();
  return (
    <div>
      <div className=" bg-slate-600 text-white py-2">
        <h1 className=" text-center font-bold  text-2xl my-2 ">
          {" "}
          SHOW ALL JOBS
        </h1>
        <h1 className=" text-center font-semibold  text-lg ">
          {" "}
          <Link to="/">Go Home </Link>
          <span>
            <i class="fa-sharp fa-solid fa-angles-right"></i>
          </span>{" "}
          Jobs
        </h1>
      </div>
      <div>
        {/*  job search & filtering */}
        <div className=" mx-5 mt-7  mb-10 px-2 shadow-md">
          <form>
            <fieldset class="flex flex-col gap-1 md:gap-5 md:flex-row justify-center items-center ">
              <div class="w-full flex-1  ">
                <input
                  type="text"
                  class=" border-2 py-[6px] hover:border-emerald-500 px-2 my-1 rounded-lg border-gray-400 w-full focus:outline-0"
                  placeholder=" Keyword or Job Tittle Or Company"
                />
              </div>
              <div class="  w-full flex-1  md:p-2">
                <select class="border-2 py-[6px] hover:border-emerald-500 px-2 my-1 rounded-lg border-gray-400 w-full focus:outline-0">
                  <option data-display="Location">Location</option>
                  <option value="1">Afghanistan</option>
                  <option value="2">Albania</option>
                  <option value="3">Algeria</option>
                  <option value="4">Brazil</option>
                  <option value="5">Burundi</option>
                  <option value="6">Bulgaria</option>
                  <option value="7">Germany</option>
                  <option value="8">Grenada</option>
                  <option value="9">Guatemala</option>
                  <option value="10" disabled>
                    Iceland
                  </option>
                </select>
              </div>
              <div class="  w-full flex-1  md:p-2">
                <select class="border-2 py-[6px] hover:border-emerald-500 px-2 my-1 rounded-lg border-gray-400 w-full focus:outline-0">
                  <option data-display="Category">Category</option>
                  <option value="1">Software Developer</option>
                  <option value="2">Java Developer</option>
                  <option value="3">Software Engineer</option>
                  <option value="4">Web Developer</option>
                  <option value="5">PHP Developer</option>
                  <option value="6">Python Developer</option>
                  <option value="7">Front end Developer</option>
                  <option value="8">Associate Developer</option>
                  <option value="9">Back end Developer</option>
                  <option value="10">XML Developer</option>
                  <option value="11">.NET Developer</option>
                  <option value="12" disabled>
                    Marketting Developer
                  </option>
                </select>
              </div>
              <div class=" flex-1   md:ml-3  w-full  py-4 px-2">
                <button
                  type="submit"
                  class="border-2 py-[6px] hover:border-emerald-500 hover:bg-white bg-green-600 text-white hover:text-black px-2 my-1 rounded-lg border-gray-400 w-full focus:outline-0"
                >
                  Search
                </button>
              </div>
            </fieldset>
          </form>
        </div>
        <div className=" flex md:px-12 text-gray-500 justify-between items-center">
          <div>
            <h1 className=" font-semibold text-2xl">Jobs & Vacancies</h1>
          </div>
          <div className=" flex justify-end items-center gap-3">
            <div>
              <h1 className=" font-medium text-lg">Sort By</h1>
            </div>
            <div>
              <select class="border-2  py-[6px] hover:border-emerald-500 px-2 my-1 rounded-lg border-gray-400 w-full focus:outline-0">
                <option data-display="Category">Most Resent</option>
                <option data-display="Category">Most View</option>
                <option data-display="Category">Most Search</option>
              </select>
            </div>
            <div>
              <select class="border-2 py-[6px] hover:border-emerald-500 px-2 my-1 rounded-lg border-gray-400 w-full focus:outline-0">
                <option data-display="Category"> Per Page 10 Jobs </option>
                <option data-display="Category"> Per Page 15 Jobs </option>
                <option data-display="Category"> Per Page 20 Jobs </option>
                <option data-display="Category"> Per Page 30 Jobs </option>
              </select>
            </div>
          </div>
        </div>

        <div className=" px-10 grid grid-cols-1 lg:grid-cols-2 gap-5 my-1">
          {data?.data?.map((job) => (
            <JobCard key={job._id} jobData={job}></JobCard>
          ))}
        </div>

        <div>
          <div className=" my-8 flex justify-center gap-4 text-xl items-center">
            <button className=" hover:bg-green-400 py-1 px-2 rounded-full shadow-lg">
              <i class="fa-solid fa-angles-left"></i>
            </button>
            <button className=" hover:bg-green-400 py-1 px-3 rounded-full shadow-lg">
              1
            </button>
            <button className=" hover:bg-green-400 py-1 px-3 rounded-full shadow-lg">
              2
            </button>
            <button className=" hover:bg-green-400 py-1 px-3 rounded-full shadow-lg">
              3
            </button>
            <button className=" hover:bg-green-400 py-1 px-3 rounded-full shadow-lg">
              4
            </button>
            <button className=" hover:bg-green-400 py-1 px-2 rounded-full shadow-lg">
              <i class="fa-sharp fa-solid fa-angles-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
