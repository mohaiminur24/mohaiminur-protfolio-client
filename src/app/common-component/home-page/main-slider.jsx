import React from "react";

const MainSlider = () => {
  return (
    <div className="w-full min-h-[400px] grid grid-cols-2 px-20 justify-center items-center bg-slate-50">
      <div>
        <div className="flex flex-row gap-2 border py-2 px-3 w-fit rounded-3xl shadow-md justify-center items-center mb-3">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </span>
          <h3 className="text-xs">Looking for a Developer</h3>
        </div>
        <h1 className="text-5xl font-mono">Here i'am <span className="text-red-400">Mohaiminur</span></h1>
        <h2 className="mt-5">
          Obviously I'm a Web Designer. Web Developer with over 3 years of
          experience. Experienced with all stages of the development
        </h2>
      </div>
      <div></div>
    </div>
  );
};

export default MainSlider;
