import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import pic from "../images/login-image.svg";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/auth/authSlice";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const input =
    "border py-[6px] px-2 my-1 rounded border-gray-400 w-full focus:outline-0";

  const onSubmit = (data) => {
    console.log(data);
    dispatch(loginUser({ email: data.email, password: data.password }));
  };
  return (
    <div className=" grid grid-cols-2 items-center justify-center">
      <div className=" flex-1">
        <div>
          <img src={pic} alt="" className=" w-10/12 mx-auto" />
        </div>
      </div>
      <div className="bg-[#FFFAF4] rounded-lg   p-10">
        <h1 className="mb-10 text-gray-600 ml-2 font-medium text-2xl">
          Please Log up
        </h1>

        <div className=" w-8/12 ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-2">
              <div className="flex flex-col items-start">
                <label htmlFor="email" className="ml-2">
                  Email
                </label>
                <input
                  className={`${input}`}
                  type="email"
                  {...register("email")}
                  id="email"
                />
              </div>
              <div className="flex flex-col items-start">
                <label htmlFor="password" className="ml-2">
                  Password
                </label>
                <input
                  className={`${input}`}
                  type="password"
                  id="password"
                  {...register("password")}
                />
              </div>
              <div className="relative !mt-5">
                <button
                  type="submit"
                  className="font-bold text-white py-3 rounded-full bg-primary w-full"
                >
                  Login
                </button>
              </div>
              <div>
                <p className=" ml-5">
                  Don't have an account?{" "}
                  <span
                    className="text-primary hover:underline cursor-pointer"
                    onClick={() => navigate("/signup")}
                  >
                    Sign up
                  </span>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
