import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { LogOut } from "lucide-react";
import { Aperture } from "lucide-react";

export const Nav = () => {
  const navigate = useNavigate();

  const logouthandler = () => {
    localStorage.removeItem("Token");
    navigate("/");
  };
  return (
    <>
      <div className="flex items-center justify-between px-12 py-4 border-b-2 ">
        <div className="flex">
          <div className="text-xl font-bold logo">
            <Link to="/home">
              <Aperture size={32} />
            </Link>
          </div>
          <ul className="flex items-center ml-20 space-x-16 text-l ">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/request">Request</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/primium">
                <div className="flex items-center justify-between w-24 px-2 py-1 text-white bg-blue-300 rounded-md  text-primary">
                  <Sparkles size={16} />
                  Primium
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex space-x-3">
          <div className="h-8 w-[300px] flex flex-wrap items-center justify-center space-x-2">
            <input
              type="search"
              className="relative m-0 -mr-0.5 block min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon1"
            />
          </div>
          <div
            className="flex items-center justify-center w-12 h-8 hover:cursor-pointer"
            onClick={logouthandler}
          >
            <LogOut />
          </div>
        </div>
      </div>
    </>
  );
};
