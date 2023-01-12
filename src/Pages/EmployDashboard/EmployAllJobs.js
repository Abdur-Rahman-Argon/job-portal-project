import React from "react";
import {
  useClosedJobMutation,
  useGetEmployerJobQuery,
} from "../../features/job/jobApi";
import { useSelector } from "react-redux";
import Loading from "../../shared/Loading";
import { Link } from "react-router-dom";

const EmployAllJobs = () => {
  const { role, email } = useSelector((state) => state.auth.user);
  const { isLoading, data, isError, error } = useGetEmployerJobQuery(email);
  const [close] = useClosedJobMutation();

  if (isLoading) {
    return <Loading />;
  }

  const handleCloseJob = (id) => {
    const data = {
      jobId: id,
    };
    close(data);
  };
  return (
    <div>
      <div className=" bg-slate-600 text-white py-2">
        <h1 className=" text-center font-bold  text-2xl my-2 ">
          {" "}
          EMPLOYER ALL JOB
        </h1>
        <h1 className=" text-center font-semibold  text-lg ">
          {" "}
          <Link to="/" className=" hover:text-emerald-500">
            Go Home{" "}
          </Link>
          <span>
            <i class="fa-sharp fa-solid fa-angles-right"></i>
          </span>{" "}
          All Jobs Page
        </h1>
      </div>

      {/* employer Job table  */}
      <div>
        <div className="overflow-x-auto my-4 mx-2">
          <table className="table table-compact w-full">
            <thead>
              <tr>
                <th className=" text-center"></th>
                <th className=" text-center">Position</th>
                <th className=" text-center">company</th>
                <th className=" text-center">Applicant Qty</th>
                <th className=" text-center">Status</th>
                <th className=" text-center">See Applicant</th>
                <th className=" text-center">Close Job</th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.map((job, index) => (
                <tr>
                  <th className="font-semibold text-center">{index + 1}</th>
                  <td className="font-bold text-center">{job.position}</td>
                  <td className="font-semibold text-center">
                    {job.companyName}
                  </td>
                  <td className="font-semibold text-center">
                    {job?.applicants.length}
                  </td>
                  <td className="font-bold text-center">{job.status}</td>
                  <td className="font-semibold text-center">
                    <button className="btn btn-success  ">
                      see <i class="fa-solid fa-arrow-right mx-1"></i>
                    </button>
                  </td>
                  <td className=" text-center">
                    <button
                      onClick={() => handleCloseJob(job._id)}
                      disabled={job.status === "Closed"}
                      className="btn  text-white btn-error"
                    >
                      Close
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployAllJobs;
