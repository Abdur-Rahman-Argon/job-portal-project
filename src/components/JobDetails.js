import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useApplyMutation,
  useCreateAskQuestionMutation,
  useGetJobByIdQuery,
} from "../features/job/jobApi";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { handleSubmit, register, reset } = useForm();
  const user = useSelector((state) => state.auth.user);
  const [apply, { isSuccess }] = useApplyMutation();
  const [askQuestion, {}] = useCreateAskQuestionMutation();

  const { data, isError, isLoading, error } = useGetJobByIdQuery(id);
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
  console.log(applied);

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
    console.log(data);
    reset();
  };

  return (
    <div className="pt-14 grid grid-cols-12 gap-5">
      <div className="col-span-9 mb-10">
        <div className="h-80 rounded-xl overflow-hidden">
          {/* <img className="h-full w-full object-cover" src={"meeting"} alt="" /> */}
        </div>
        <div className="space-y-5">
          <div className="flex justify-between items-center mt-5">
            <h1 className="text-xl font-semibold text-primary">{position}</h1>
            {applied ? (
              <button disabled className="btn">
                All Ready Applied
              </button>
            ) : (
              <button
                // disabled={!user?.role}
                onClick={handleApply}
                className="btn"
              >
                Apply
              </button>
            )}
          </div>
          <div>
            <h1 className="text-primary text-lg font-medium mb-3">Overview</h1>
            <p>{overview}</p>
          </div>
          <div>
            <h1 className="text-primary text-lg font-medium mb-3">Skills</h1>
            <ul>
              {skills?.map((skill) => (
                <li className="flex items-center">
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className="text-primary text-lg font-medium mb-3">
              Requirements
            </h1>
            <ul>
              {requirements?.map((skill) => (
                <li className="flex items-center">
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className="text-primary text-lg font-medium mb-3">
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
        <hr className="my-5" />
        <div>
          <div>
            <h1 className="text-xl font-semibold text-primary mb-5">
              General Q&A
            </h1>
            <div className="text-primary my-2">
              {queries?.map(({ question, email, reply, id }) => (
                <div>
                  <small>{email}</small>
                  <p className="text-lg font-medium">{question}</p>
                  {reply?.map((item) => (
                    <p className="flex items-center gap-2 relative left-5">
                      {item}
                    </p>
                  ))}

                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex gap-3 my-5">
                      <input
                        placeholder="Reply"
                        type="text"
                        {...register("answer")}
                        className="border py-[6px] px-2 my-1 rounded-lg border-gray-400 w-full focus:outline-0"
                      />
                      <button
                        type="submit"
                        className="shrink-0 h-14 w-14 bg-primary/10 border border-primary hover:bg-primary rounded-full transition-all  grid place-items-center text-primary hover:text-white"
                      >
                        send
                      </button>
                    </div>
                  </form>
                </div>
              ))}
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex gap-3 my-5">
                <input
                  placeholder="Ask a question..."
                  type="text"
                  {...register("question")}
                  className="border py-[6px] px-2 my-1 rounded-lg border-gray-400 w-full focus:outline-0"
                />
                <button
                  className="shrink-0 h-14 w-14 bg-primary/10 border border-primary hover:bg-primary rounded-full transition-all  grid place-items-center text-primary hover:text-white"
                  type="submit"
                >
                  <i class="fa-solid fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="col-span-3">
        <div className="rounded-xl bg-primary/10 p-5 text-primary space-y-5">
          <div>
            <p>Experience</p>
            <h1 className="font-semibold text-lg">{experience}</h1>
          </div>
          <div>
            <p>Work Level</p>
            <h1 className="font-semibold text-lg">{workLevel}</h1>
          </div>
          <div>
            <p>Employment Type</p>
            <h1 className="font-semibold text-lg">{employmentType}</h1>
          </div>
          <div>
            <p>Salary Range</p>
            <h1 className="font-semibold text-lg">{salaryRange}</h1>
          </div>
          <div>
            <p>Location</p>
            <h1 className="font-semibold text-lg">{location}</h1>
          </div>
        </div>
        <div className="mt-5 rounded-xl bg-primary/10 p-5 text-primary space-y-5">
          <div>
            <h1 className="font-semibold text-lg">{companyName}</h1>
          </div>
          <div>
            <p>Company Size</p>
            <h1 className="font-semibold text-lg">Above 100</h1>
          </div>
          <div>
            <p>Founded</p>
            <h1 className="font-semibold text-lg">2001</h1>
          </div>
          <div>
            <p>Email</p>
            <h1 className="font-semibold text-lg">company.email@name.com</h1>
          </div>
          <div>
            <p>Company Location</p>
            <h1 className="font-semibold text-lg">Los Angeles</h1>
          </div>
          <div>
            <p>Website</p>
            <a className="font-semibold text-lg" href="#">
              https://website.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
