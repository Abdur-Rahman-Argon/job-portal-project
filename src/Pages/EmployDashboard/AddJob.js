import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useCreateJobMutation } from "../../features/job/jobApi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AddJob = () => {
  const { email, role } = useSelector((state) => state.auth.user);
  const { handleSubmit, register, control } = useForm();
  const [jopPost, { isError, isLoading, isSuccess }] = useCreateJobMutation();
  const {
    fields: resFields,
    append: resAppend,
    remove: resRemove,
  } = useFieldArray({ control, name: "responsibilities" });
  const {
    fields: skillFields,
    append: skillAppend,
    remove: skillRemove,
  } = useFieldArray({ control, name: "skills" });
  const {
    fields: reqFields,
    append: reqAppend,
    remove: reqRemove,
  } = useFieldArray({ control, name: "requirements" });

  const input =
    "border py-[6px] px-2 my-1 rounded-lg border-gray-400 w-full focus:outline-0";

  const onSubmit = (data) => {
    console.log(data);
    jopPost({
      ...data,
      email: email,
      status: "Open",
      applicants: [],
      queries: [],
    });
  };

  return (
    <div className="">
      <div className=" bg-slate-600 text-white py-2">
        <h1 className=" text-center font-bold  text-2xl my-2 "> ADD NEW JOB</h1>
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
      <div className="flex justify-center items-center overflow-auto p-10">
        <form
          className=" bg-emerald-300  shadow-lg p-10 rounded-2xl flex flex-wrap gap-3 max-w-3xl justify-between"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="w-full text-2xl text-primary mb-5">
            Add a new position
          </h1>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="position">
              Position
            </label>
            <input
              className={`${input}`}
              type="text"
              id="position"
              {...register("position")}
            />
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="companyName">
              Company Name
            </label>
            <input
              className={`${input}`}
              type="text"
              {...register("companyName")}
            />
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="experience">
              Experience
            </label>
            <input
              className={`${input}`}
              type="text"
              id="experience"
              {...register("experience")}
            />
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="workLevel">
              Work Level
            </label>
            <input
              className={`${input}`}
              type="text"
              id="workLevel"
              {...register("workLevel")}
            />
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="employmentType">
              Employment Type
            </label>
            <input
              className={`${input}`}
              type="text"
              id="employmentType"
              {...register("employmentType")}
            />
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="salaryRange">
              Salary Range
            </label>
            <input
              className={`${input}`}
              type="text"
              id="salaryRange"
              {...register("salaryRange")}
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="mb-2" htmlFor="location">
              Location
            </label>
            <input
              className={`${input}`}
              type="text"
              id="location"
              {...register("location")}
            />
          </div>
          <hr className="w-full mt-2 bg-black" />
          <div className="flex flex-col w-full">
            <label className="mb-2" htmlFor="overview">
              Overview
            </label>
            <textarea
              className={`${input}`}
              rows={8}
              {...register("overview")}
              id="overview"
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="mb-2">Skills</label>
            <div>
              <div>
                {skillFields.map((item, index) => {
                  return (
                    <div
                      key={item.key}
                      className="flex items-center gap-3 mb-5"
                    >
                      <input
                        className={`${input} !w-full`}
                        type="text"
                        {...register(`skills[${index}]`)}
                      />
                      <button
                        type="button"
                        onClick={() => skillRemove(index)}
                        className="grid place-items-center rounded-full flex-shrink-0 bg-red-500/20 border border-red-500 h-11 w-11 group transition-all hover:bg-red-500"
                      >
                        <i class="fa-solid fa-trash text-red-500 group-hover:text-white transition-all"></i>
                      </button>
                    </div>
                  );
                })}
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => skillAppend("")}
                  className="btn"
                >
                  Add Skill
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label className="mb-2">Responsibilities</label>
            <div>
              <div>
                {resFields.map((item, index) => {
                  return (
                    <div
                      key={item.key}
                      className=" mb-5 flex items-center gap-3"
                    >
                      <input
                        className={`${input} !w-full`}
                        type="text"
                        {...register(`responsibilities[${index}]`)}
                      />
                      <button
                        type="button"
                        onClick={() => resRemove(index)}
                        className="grid place-items-center rounded-full flex-shrink-0 bg-red-500/20 border border-red-500 h-11 w-11 group transition-all hover:bg-red-500"
                      >
                        <i class="fa-solid fa-trash text-red-500 group-hover:text-white transition-all"></i>
                      </button>
                    </div>
                  );
                })}
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => resAppend("")}
                  className="btn"
                >
                  Add Responsibility
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label className="mb-2">Requirements</label>
            <div>
              <div>
                {reqFields.map((item, index) => {
                  return (
                    <div
                      key={item.key}
                      className=" mb-5 flex items-center gap-3"
                    >
                      <input
                        className={`${input}!w-full`}
                        type="text"
                        {...register(`requirements[${index}]`)}
                      />
                      <button
                        type="button"
                        onClick={() => reqRemove(index)}
                        className="grid place-items-center rounded-full flex-shrink-0 bg-red-500/20 border border-red-500 h-11 w-11 group transition-all hover:bg-red-500"
                      >
                        <i class="fa-solid fa-trash text-red-500 group-hover:text-white transition-all"></i>
                      </button>
                    </div>
                  );
                })}
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => reqAppend("")}
                  className="btn"
                >
                  Add Requirement
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-end items-center w-full mt-3">
            <button className="btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
