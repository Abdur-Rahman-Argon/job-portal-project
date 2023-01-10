import React from "react";
import employ from "../images/employ.png";
import candidate from "../images/candidate.png";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div>
        <div className=" lg:w-[900px] mx-auto grid grid-cols-1 my-10 lg:grid-cols-2 gap-3   justify-center items-center">
          <div className="card w-80 mx-auto p-2 bg-base-100 shadow-xl">
            <Link to="/employ">
              <figure className="px-10 pt-10">
                <img src={employ} alt="employ" className="rounded-xl" />
              </figure>
              <div className="my-4 items-center text-center">
                <h2 className="font-bold text-xl">Employer</h2>
              </div>
            </Link>
          </div>

          <div className="card w-80 mx-auto p-2 bg-base-100 shadow-xl">
            <Link to="/candidate">
              <figure className="px-8 pt-10">
                <img src={candidate} alt="employ" className="rounded-xl" />
              </figure>
              <div className="my-4 items-center text-center">
                <h2 className="font-bold text-xl">Candidate</h2>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
