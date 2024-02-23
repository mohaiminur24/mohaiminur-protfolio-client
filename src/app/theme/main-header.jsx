"use client";
import { useEffect, useState } from "react";

const MainHeader = () => {
  const [isOpenLanguage, setOpenLanguage] = useState(false);

  const MainMenu = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>Blog</a>
      </li>
      <li>
        <a>Portfolio</a>
      </li>
      <li>
        <a>Services</a>
      </li>
      <li>
        <a>DevTubeHub</a>
      </li>
      <li>
        <a>About me</a>
      </li>
    </>
  );

  // handle language change
  const handleLanguageChange = () => {
    setOpenLanguage(false);
  };

  useEffect(() => {
    if (!isOpenLanguage) return;
    setTimeout(() => {
      setOpenLanguage(false);
    }, 8000);
  }, [isOpenLanguage]);

  return (
    <div className="navbar px-5 md:px-16 border-b border-opacity-5 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {MainMenu}
          </ul>
        </div>
        <a className="text-xl cursor-default font-semibold">MohaiMinur</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{MainMenu}</ul>
      </div>
      <div className="navbar-end">
        {/* language section  */}
        <div className="relative">
          <div
            className="cursor-default flex flex-row items-center gap-1"
            onClick={() => setOpenLanguage(!isOpenLanguage)}
          >
            <span className="font-mono text-sm">English</span>
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
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <div
            hidden={!isOpenLanguage}
            className="absolute bg-white p-3 shadow-sm rounded-md top-10"
          >
            <ul>
              <li
                onClick={() => handleLanguageChange("Bangla")}
                className="p-1 px-5 cursor-pointer hover:bg-gray-200 hover:text-white rounded-sm text-sm"
              >
                Bangla
              </li>
              <li
                onClick={() => handleLanguageChange("Arabic")}
                className="p-1 px-5 cursor-pointer hover:bg-gray-200 hover:text-white rounded-sm text-sm"
              >
                Arabic
              </li>
              <li
                onClick={() => handleLanguageChange("Germany")}
                className="p-1 px-5 cursor-pointer hover:bg-gray-200 hover:text-white rounded-sm text-sm"
              >
                Germany
              </li>
            </ul>
          </div>
        </div>
        {/* theme color mood  */}
        <label className="swap swap-rotate px-5">
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            className="theme-controller"
            value="synthwave"
          />

          {/* sun icon */}
          <svg
            className="swap-on fill-current w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-off fill-current w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default MainHeader;
