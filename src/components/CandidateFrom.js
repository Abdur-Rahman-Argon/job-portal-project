import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, useWatch } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../features/auth/authApi";

const CandidateFrom = () => {
  const [countries, setCountries] = useState([]);
  const { handleSubmit, register, control } = useForm();
  const term = useWatch({ control, name: "term" });
  console.log(term);
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const [postUser, { isError, isLoading }] = useRegisterMutation();

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const input =
    "border py-[6px] px-2 my-1 rounded-lg border-gray-400 w-full focus:outline-0";

  const onSubmit = (data) => {
    console.log(data);
    postUser({ ...data, role: "Candidates" });
  };

  return (
    <div className="pt-14">
      <button
        onClick={() => navigate("/register")}
        className="cursor-pointer border bg-gray-200 px-5 w-fit mt-5 font-bold flex items-center"
      >
        <i class="fa-solid fa-backward-fast mx-1"></i>
        <p>GO BACK</p>
      </button>
      <div className="flex justify-center items-center overflow-auto p-10">
        <form
          className=" bg-emerald-300  shadow-lg p-10 rounded-2xl flex flex-wrap gap-3 max-w-3xl justify-between"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="w-full text-3xl font-semibold text-center text-primary mb-5">
            Candidate
          </h1>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="firstName">
              First Name
            </label>
            <input
              className={`${input}`}
              type="text"
              id="firstName"
              {...register("firstName")}
            />
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input
              className={`${input}`}
              type="text"
              id="lastName"
              {...register("lastName")}
            />
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="email">
              Email
            </label>
            <input
              className={`${input}`}
              type="email"
              id="email"
              value={user.email}
              {...register("email")}
            />
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <h1 className="mb-3">Gender</h1>
            <div className="flex gap-3">
              <div>
                <input
                  className={`${input}`}
                  type="radio"
                  id="male"
                  {...register("gender")}
                  value="male"
                />
                <label className="ml-2 text-lg" for="male">
                  Male
                </label>
              </div>
              <div>
                <input
                  className={`${input}`}
                  type="radio"
                  id="female"
                  {...register("gender")}
                  value="female"
                />
                <label className="ml-2 text-lg" for="female">
                  Female
                </label>
              </div>
              <div>
                <input
                  className={`${input}`}
                  type="radio"
                  id="other"
                  {...register("gender")}
                  value="other"
                />
                <label className="ml-2 text-lg" for="other">
                  Other
                </label>
              </div>
            </div>
          </div>
          <hr className="w-full mt-2 bg-black" />
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-3" for="country">
              Country
            </label>
            <select
              className={`${input}`}
              {...register("country")}
              id="country"
            >
              {countries
                .sort((a, b) => a?.name?.common?.localeCompare(b?.name?.common))
                .map(({ name }) => (
                  <option value={name.common}>{name.common}</option>
                ))}
            </select>
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="address">
              Street Address
            </label>
            <input
              className={`${input}`}
              type="text"
              {...register("address")}
              id="address"
            />
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="city">
              City
            </label>
            <input
              className={`${input}`}
              type="text"
              {...register("city")}
              id="city"
            />
          </div>
          <div className="flex flex-col w-full max-w-xs">
            <label className="mb-2" htmlFor="postcode">
              Postal Code
            </label>
            <input
              className={`${input}`}
              type="text"
              {...register("postcode")}
              id="postcode"
            />
          </div>

          <div className="flex justify-between items-center w-full mt-3">
            <div className="flex  w-full max-w-xs">
              <input
                className={`${input}`}
                className="mr-3"
                type="checkbox"
                {...register("term")}
                id="terms"
              />
              <label for="terms">I agree to terms and conditions</label>
            </div>
            <button disabled={!term} className="btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default CandidateFrom;
