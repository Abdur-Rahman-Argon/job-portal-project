import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetJobByIdQuery } from "../../features/job/jobApi";

const ViewApplicants = () => {
  const { jodId } = useParams();
  const navigate = useNavigate();
  const { data, isError, isLoading, error } = useGetJobByIdQuery(jodId);

  console.log(data);

  return (
    <div>
      <div className=" bg-slate-600 text-white py-2">
        <h1 className=" text-center font-bold  text-2base my-2 ">
          Applied Applicant
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
          </span>
          <span>View Applicant Page</span>
        </h1>
      </div>

      {/* Jon Short Info */}
      {data && (
        <div>
          <div className=" my-3 flex flex-col justify-center items-center gap-2">
            <h1 className=" text-xl font-semibold text-gray-600">
              <span>On {data?.data?.position} Position</span>
            </h1>
            <h1 className=" text-base font-semibold text-gray-600">
              <span className=" font-bold">Company Name : </span>
              <span> {data?.data?.companyName}</span>
            </h1>
            <h1 className=" text-base font-semibold text-gray-600">
              <span className=" font-bold"> Job Status :</span>{" "}
              <span> {data?.data?.status}</span>
            </h1>

            <div className="flex flex-row justify-between items-center gap-5 lg:gap-10">
              <h1 className=" text-base font-semibold text-gray-600">
                <span className=" font-bold">Applicant Qty : </span>
                <span>Only {data?.data?.applicants.length} Person Applied</span>
              </h1>
              <p className=" text-base font-semibold text-gray-600">
                <span className=" font-bold"> Posted Time : </span>
                <span> {data?.data?.time || "Missing"}</span>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* employer Job table  */}
      <div>
        <div className="overflow-x-auto my-4 mx-2">
          <table className="table table-compact w-full">
            <thead>
              <tr>
                <th className=" text-center"></th>
                <th className=" text-center">Applicant Name</th>
                <th className=" text-center">Email</th>
                <th className=" text-center">Position</th>
                <th className=" text-center">Apply Date</th>
                <th className=" text-center">View Profile</th>
              </tr>
            </thead>
            <tbody className=" ">
              {data?.data?.applicants?.map((app, index) => (
                <tr>
                  <th className=" font-semibold text-center">{index + 1}</th>
                  <td className=" font-bold text-center">
                    {app.companyName || " Applicant Name Missing"}
                  </td>
                  <td className=" font-semibold text-center">{app.email}</td>
                  <td className=" font-bold text-center">
                    {data?.data?.position}
                  </td>
                  <td className=" font-semibold text-center">
                    {app.time || "Time Not Show"}
                  </td>
                  <td className=" font-semibold text-center">
                    <Link
                      to={`/view-profile/${app.id}`}
                      className="btn btn-success"
                    >
                      <i class="fa-regular fa-eye text-base"></i>
                    </Link>
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

export default ViewApplicants;
