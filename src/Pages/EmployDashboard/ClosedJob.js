import React from "react";
import Loading from "../../shared/Loading";
import { useGetEmployerJobQuery } from "../../features/job/jobApi";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const ClosedJob = () => {
  const { role, email } = useSelector((state) => state.auth.user);
  const { isLoading, data, isError, error } = useGetEmployerJobQuery(email);
  const navigate = useNavigate();

  if (isLoading) {
    return <Loading />;
  }

  const closeJob = data?.data?.filter((jb) => jb.status === "Closed");
  // console.log(closeJob);
  return (
    <div>
      <div className=" bg-slate-600 text-white py-2">
        <h1 className=" text-center font-bold  text-2xl my-2 ">
          {" "}
          ALL CLOSED JOB
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
          <span>Closed Jobs Page</span>
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
              </tr>
            </thead>
            <tbody>
              {closeJob?.map((job, index) => (
                <tr>
                  <th className=" font-semibold text-center">{index + 1}</th>
                  <td className=" font-bold text-center">{job.position}</td>
                  <td className=" font-semibold text-center">
                    {job.companyName}
                  </td>
                  <td className=" font-semibold text-center">
                    {job?.applicants.length}
                  </td>
                  <td className=" font-bold text-center">{job.status}</td>
                  <td className=" font-semibold text-center">
                    <button
                      onClick={() =>
                        navigate(`/dashboard/view-applicant/${job._id}`)
                      }
                      className="btn btn-success"
                    >
                      see <i class="fa-solid fa-arrow-right mx-1"></i>
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

export default ClosedJob;
