import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useApplyMutation,
  useCreateAskQuestionMutation,
  useCreateQueAnswerMutation,
  useGetJobByIdQuery,
} from "../features/job/jobApi";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { BsArrowReturnRight } from "react-icons/bs";

const JobDetails = () => {
  const [reply, setReply] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  const { handleSubmit, register, reset } = useForm();
  const user = useSelector((state) => state.auth.user);
  const [apply, { isSuccess }] = useApplyMutation();
  const [askQuestion, {}] = useCreateAskQuestionMutation();
  const [queReply, {}] = useCreateQueAnswerMutation();

  const { data, isError, isLoading, error } = useGetJobByIdQuery(id, {
    pollingInterval: 500,
  });
  //   console.log(data);
  const {
    companyName,
    position,
    location,
    experience,
    workLevel,
    employmentType,
    salaryRange,
    skills,
    requirements,
    responsibilities,
    overview,
    queries,
    _id,
  } = data?.data || {};

  const applied = data?.data?.applicants?.find((ap) => ap.id === user._id);

  const handleApply = () => {
    if (user.role === "employer") {
      alert("Your are employer, Need candidate account for apply");
      return;
    }
    if (user.role === "") {
      navigate("/register");
      return;
    }

    const data = {
      userId: user._id,
      jobId: _id,
      email: user.email,
    };
    apply(data);
    // console.log(data);
  };

  const onSubmit = (data) => {
    const quesData = {
      ...data,
      userId: user._id,
      jobId: _id,
      email: user.email,
    };
    askQuestion(quesData);
    // console.log(data);
    reset();
  };

  const replaySubmit = (id) => {
    const quesData = {
      reply: reply,
      userId: id,
    };
    queReply(quesData);
    // console.log(quesData);
    reset();
  };

  const Apply = (
    <>
      <div>
        {applied ? (
          <p disabled className="   font-semibold text-lg text-error">
            You All-Ready Applied This Job
          </p>
        ) : (
          <button
            // disabled={!user?.role}
            onClick={handleApply}
            className="px-7 text-white bg-green-600 font-medium text-center rounded-md border-emerald-400  py-1 border-[1px]"
          >
            Apply
          </button>
        )}
      </div>
    </>
  );

  return (
    <div>
      <div className=" bg-slate-600 text-white py-2">
        <h1 className=" text-center font-bold  text-2xl my-2 ">
          JOBS DETAILS PAGE
        </h1>
        <h1 className=" text-center font-bold  text-xl ">
          <Link to="/">Go Home </Link>
          <span>
            <i class="fa-sharp fa-solid fa-angles-right"></i>
          </span>
          Jobs Details
        </h1>
      </div>

      {/*  details job */}
      <div className="pt-14 grid grid-cols-12 gap-5">
        {/* Job Details */}
        <div className="col-span-9 mb-10 p-3 border-[1px] border-emerald-200 rounded-lg relative">
          <div className="space-y-5">
            <div className="flex justify-between items-center mt-1">
              <h1 className="text-4xl font-bold text-gray-600">{position}</h1>
            </div>

            <div className="divider"></div>

            <div>
              <h1 className="text-gray-600 text-xl font-medium mb-3">
                <i class="fa-regular fa-hand-back-point-right"></i> Overview
              </h1>
              <p>{overview}</p>
            </div>

            <div className="divider"></div>
            <div>
              <h1 className="text-gray-600 text-xl font-medium mb-3">
                Skills Required
              </h1>
              <ul className=" list-item">
                {skills?.map((skill) => (
                  <li className="flex items-center ">
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className=" "></div>
            <div>
              <h1 className="text-gray-600 text-xl font-medium mb-3">
                Requirements
              </h1>

              {requirements?.map((skill) => (
                <li className="flex items-center">
                  <span>{skill}</span>
                </li>
              ))}
            </div>

            <div className=" "></div>
            <div>
              <h1 className="text-gray-600 text-xl font-medium mb-3">
                Responsibilities
              </h1>
              <ul>
                {responsibilities?.map((skill) => (
                  <li className="flex items-center">
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Apply */}
          <div className=" absolute top-5 right-4">{Apply}</div>

          <hr className="my-5" />
          <div>
            <div>
              <h1 className="text-xl font-bold text-gray-600 mb-5">
                General Q&A
              </h1>
              <div className="text-gray-600 my-2">
                {queries?.map(({ question, email, reply, id }) => (
                  <div>
                    <small>
                      <i class="fa-solid fa-hand-point-right"></i>
                    </small>{" "}
                    <small>{email}</small>
                    <p className="text-xl flex items-center gap-1 font-medium">
                      {" "}
                      <i class="fa-brands fa-quora"></i> :{" "}
                      <span>{question}</span>
                    </p>
                    {reply?.map((item) => (
                      <p className="flex items-center gap-2 relative left-5">
                        <span>
                          <BsArrowReturnRight />
                        </span>
                        <span>{item}</span>
                      </p>
                    ))}
                    {user.role === "employer" && (
                      <div className="flex gap-3 my-5">
                        <input
                          placeholder="Reply"
                          type="text"
                          onBlur={(e) => setReply(e.target.value)}
                          className="border py-[6px] px-2 my-1 rounded-lg border-gray-400 w-full focus:outline-0"
                        />
                        <button
                          type="button"
                          onClick={() => replaySubmit(id)}
                          className="shrink-0 h-14 w-14 bg-primary/10 border border-primary hover:bg-primary rounded-full transition-all  grid place-items-center text-gray-600 hover:text-white"
                        >
                          <i class="fa-solid fa-paper-plane"></i>
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {user.role === "candidates" && (
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex gap-3 my-5">
                    <input
                      placeholder="Ask a question..."
                      type="text"
                      {...register("question")}
                      className="border py-[6px] px-2 my-1 rounded-lg border-gray-400 w-full focus:outline-0"
                    />
                    <button
                      className="shrink-0 h-14 w-14 bg-primary/10 border border-primary hover:bg-primary rounded-full transition-all  grid place-items-center text-gray-600 hover:text-white"
                      type="submit"
                    >
                      <i class="fa-solid fa-paper-plane"></i>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/*  experienced */}
        <div className="col-span-3">
          <div className="rounded-xl bg-primary/10 p-5 text-gray-600 space-y-5">
            <div>
              <p>Experience</p>
              <h1 className="font-bold text-xl">{experience}</h1>
            </div>
            <div>
              <p>Work Level</p>
              <h1 className="font-bold text-xl">{workLevel}</h1>
            </div>
            <div>
              <p>Employment Type</p>
              <h1 className="font-bold text-xl">{employmentType}</h1>
            </div>
            <div>
              <p>Salary Range</p>
              <h1 className="font-bold text-xl">{salaryRange}</h1>
            </div>
            <div>
              <p>Location</p>
              <h1 className="font-bold text-xl">{location}</h1>
            </div>
          </div>
          <div className="mt-5 rounded-xl bg-primary/10 p-5 text-gray-600 space-y-5">
            <div>
              <h1 className="font-bold text-xl">{companyName}</h1>
            </div>
            <div>
              <p>Company Size</p>
              <h1 className="font-bold text-xl">Above 100</h1>
            </div>
            <div>
              <p>Founded</p>
              <h1 className="font-bold text-xl">2001</h1>
            </div>
            <div>
              <p>Email</p>
              <h1 className="font-bold text-xl">company.email@name.com</h1>
            </div>
            <div>
              <p>Company Location</p>
              <h1 className="font-bold text-xl">Los Angeles</h1>
            </div>
            <div>
              <p>Website</p>
              <a className="font-bold text-xl" href="/">
                https://website.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
