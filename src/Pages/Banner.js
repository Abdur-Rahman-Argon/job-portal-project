import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        className="bannar py-10  cover"
        style={{
          backgroundImage: `url("https://www.cheapassignmenthelp.co.uk/wp-content/uploads/2021/02/Careers.jpg") `,
        }}
      >
        <div className=" flex flex-col ">
          <div className=" md:w-[500px] mx-auto">
            <h1 className=" font-bold text-center md:text-left text-3xl md:text-5xl text-white my-4">
              Search Your Jobs
            </h1>
            <h1 className=" font-bold text-center md:text-left text-3xl md:text-5xl text-white my-4">
              Build Your Career
            </h1>
          </div>
          <div>
            <p className=" text-center my-2 md:my-5 text-white">
              <span className=" text-sm md:text-lg  font-bold ">
                Popular Keywords :
              </span>
              <span className=" text-sm md:text-lg   font-medium mx-2 hover:text-green-400 cursor-pointer">
                Web Designer
              </span>
              ,
              <span className=" font-medium mx-2 hover:text-green-400 cursor-pointer text-sm md:text-lg">
                Web Developer
              </span>
              ,
              <span className=" font-medium mx-2 hover:text-green-400 cursor-pointer text-sm md:text-lg">
                IOS Developer
              </span>
              ,
              <span className=" font-medium mx-2 hover:text-green-400 cursor-pointer text-sm md:text-lg">
                Android Developer .
              </span>
            </p>
          </div>

          <div className=" w-10/12 md:w-7/12 mx-auto my-4 md:my-8 md:border-4 md:border-emerald-500 md:rounded-full md:bg-white">
            <div>
              <form>
                <fieldset class="flex flex-col gap-1 md:gap-0 md:flex-row justify-center items-center ">
                  <div class="w-full flex-1  md:rounded-l-full border-r-[1px]">
                    <input
                      type="text"
                      class=" w-full md:rounded-l-full  focus:outline-0 p-2 md:p-4"
                      placeholder="Search Keywords..."
                    />
                  </div>
                  <div class=" border-r-[1px] w-full flex-1  md:p-2">
                    <select class="w-full focus:outline-none p-2">
                      <option data-display="Location">All Country</option>
                      <option value="1">Afghanistan</option>
                      <option value="2">Albania</option>
                      <option value="3">Algeria</option>
                      <option value="4">Brazil</option>
                      <option value="5">Burundi</option>
                      <option value="6">Bulgaria</option>
                      <option value="7">Germany</option>
                      <option value="8">Grenada</option>
                      <option value="9">Guatemala</option>
                      <option value="10" disabled>
                        Iceland
                      </option>
                    </select>
                  </div>
                  <div class=" border-r-[1px] w-full flex-1  md:p-2">
                    <select class="w-full focus:outline-none p-2">
                      <option data-display="Category">Show All</option>
                      <option value="1">Software Developer</option>
                      <option value="2">Java Developer</option>
                      <option value="3">Software Engineer</option>
                      <option value="4">Web Developer</option>
                      <option value="5">PHP Developer</option>
                      <option value="6">Python Developer</option>
                      <option value="7">Front end Developer</option>
                      <option value="8">Associate Developer</option>
                      <option value="9">Back end Developer</option>
                      <option value="10">XML Developer</option>
                      <option value="11">.NET Developer</option>
                      <option value="12" disabled>
                        Marketting Developer
                      </option>
                    </select>
                  </div>
                  <div class=" flex-1  border-r-[1px] md:ml-3  w-full md:rounded-r-full py-4 bg-green-400 px-2">
                    <button type="submit" class=" w-full text-center">
                      Search
                    </button>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
