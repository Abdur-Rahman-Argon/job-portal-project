import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { googleUser } from "../features/auth/authSlice";

const SocialLogin = () => {
  const { isLoading, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //navigate
  useEffect(() => {
    if (!isLoading && user.email) {
      navigate("/");
    }
  }, [isLoading, user, navigate]);

  //login
  const handleGoogleLogin = (data) => {
    console.log(data);
    dispatch(googleUser());
  };
  return (
    <div className=" flex flex-col  justify-center items-center gap-4 w-full ">
      <button
        onClick={handleGoogleLogin}
        className="flex justify-around uppercase text-lg  font-bold  text-gray-700 py-3 rounded-full bg-orange-200  px-10 w-full "
      >
        <i className="fa-brands fa-google text-red-700 text-3xl"></i>{" "}
        <span> SignIn With Google</span>
      </button>

      <button className="flex justify-around uppercase text-lg  font-bold text-gray-700 py-3 rounded-full bg-orange-200 px-10 w-full ">
        <i className="fa-brands fa-facebook text-blue-700 text-3xl"></i>{" "}
        <span> SignIn With FaceBook</span>
      </button>

      <button className="flex justify-around uppercase text-lg  font-bold text-gray-700 py-3 rounded-full bg-orange-200 px-10 w-full ">
        <i className="fa-brands fa-github text-black text-3xl"></i>
        <span> SignIn With GitHub</span>
      </button>
    </div>
  );
};

export default SocialLogin;
