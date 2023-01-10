import React from "react";
import { useParams } from "react-router-dom";
import { useGetJobByIdQuery } from "../features/job/jobApi";

const JobDetails = () => {
  const { id } = useParams();

  const { data, isError, isLoading, error } = useGetJobByIdQuery(id);
  console.log(data);
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
  } = {};

  return (
    <div className="pt-14 grid grid-cols-12 gap-5">
      <div className="col-span-9 mb-10">
        <div className="h-80 rounded-xl overflow-hidden">
          <img className="h-full w-full object-cover" src={"meeting"} alt="" />
        </div>
        <div className="space-y-5">
          <div className="flex justify-between items-center mt-5">
            <h1 className="text-xl font-semibold text-primary">
              {data?.data?.position}
            </h1>
            <button className="btn">Apply</button>
          </div>
          <div>
            <h1 className="text-primary text-lg font-medium mb-3">Overview</h1>
            <p>{data?.data?.overview}</p>
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
                  <small>{data?.data?.email}</small>
                  <p className="text-lg font-medium">{data?.data?.question}</p>
                  {reply?.map((item) => (
                    <p className="flex items-center gap-2 relative left-5">
                      {item}
                    </p>
                  ))}

                  <div className="flex gap-3 my-5">
                    <input placeholder="Reply" type="text" className="w-full" />
                    <button
                      className="shrink-0 h-14 w-14 bg-primary/10 border border-primary hover:bg-primary rounded-full transition-all  grid place-items-center text-primary hover:text-white"
                      type="button"
                    ></button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3 my-5">
              <input
                placeholder="Ask a question..."
                type="text"
                className="w-full"
              />
              <button
                className="shrink-0 h-14 w-14 bg-primary/10 border border-primary hover:bg-primary rounded-full transition-all  grid place-items-center text-primary hover:text-white"
                type="button"
              ></button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-3">
        <div className="rounded-xl bg-primary/10 p-5 text-primary space-y-5">
          <div>
            <p>Experience</p>
            <h1 className="font-semibold text-lg">{data?.data?.experience}</h1>
          </div>
          <div>
            <p>Work Level</p>
            <h1 className="font-semibold text-lg">{data?.data?.workLevel}</h1>
          </div>
          <div>
            <p>Employment Type</p>
            <h1 className="font-semibold text-lg">
              {data?.data?.employmentType}
            </h1>
          </div>
          <div>
            <p>Salary Range</p>
            <h1 className="font-semibold text-lg">{data?.data?.salaryRange}</h1>
          </div>
          <div>
            <p>Location</p>
            <h1 className="font-semibold text-lg">{data?.data?.location}</h1>
          </div>
        </div>
        <div className="mt-5 rounded-xl bg-primary/10 p-5 text-primary space-y-5">
          <div>
            <h1 className="font-semibold text-lg">{data?.data?.companyName}</h1>
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
