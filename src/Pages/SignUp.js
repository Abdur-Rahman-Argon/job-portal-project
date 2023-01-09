import React, { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import pic from "../images/login-image.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../features/auth/authSlice";

const SignUp = () => {
  const { handleSubmit, register, reset, control } = useForm();
  const password = useWatch({ control, name: "password" });
  const confirmPassword = useWatch({ control, name: "confirmPassword" });
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(true);
  const { isLoading, user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (
      password !== undefined &&
      password !== "" &&
      confirmPassword !== undefined &&
      confirmPassword !== "" &&
      password === confirmPassword
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [password, confirmPassword]);

  useEffect(() => {
    if (!isLoading && user.email) {
      navigate("/");
    }
  }, [isLoading, user, navigate]);

  const dispatch = useDispatch();

  const input =
    "  border py-[6px] px-2 my-1 rounded border-gray-400 w-full focus:outline-0";

  const onSubmit = (data) => {
    console.log(data);
    dispatch(createUser({ email: data.email, password: data.password }));
  };
  return (
    <div className=" grid grid-cols-2 items-center justify-center">
      <div className=" flex-1">
        <div>
          <img src={pic} alt="" className=" w-10/12 mx-auto" />
        </div>
      </div>
      <div className="bg-[#FFFAF4] rounded-lg   p-10">
        <h1 className="mb-10 text-gray-600 ml-5 font-medium text-2xl">
          Please Sign up
        </h1>

        <div className=" w-8/12 ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-3">
              <div className="flex flex-col  items-start">
                <label htmlFor="email" className="ml-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  {...register("email")}
                  className={`${input}`}
                />
              </div>

              <div className="flex flex-col items-start">
                <label htmlFor="password" className="ml-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  {...register("password")}
                  className={`${input}`}
                />
              </div>
              <div className="flex flex-col items-start">
                <label htmlFor="confirm-password" className="ml-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  {...register("confirmPassword")}
                  className={`${input}`}
                />
              </div>
              <div className="!mt-8 ">
                <button
                  type="submit"
                  className="font-bold text-white py-3 rounded-full bg-primary w-full disabled:bg-gray-300 disabled:cursor-not-allowed"
                  disabled={disabled}
                >
                  Sign up
                </button>
              </div>
              <div>
                <p>
                  Already have an account?{" "}
                  <span
                    className="text-primary hover:underline cursor-pointer"
                    onClick={() => navigate("/login")}
                  >
                    Login
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

export default SignUp;
