import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { LogOut } from "lucide-react";
import { Aperture } from "lucide-react";
import { Button } from "antd";

export const Nav = () => {
  const navigate = useNavigate();

  const logouthandler = () => {
    localStorage.removeItem("Token");
    navigate("/");
  };

  return (
    <>
      <div
        className="
       flex items-center 
       border-b-2
       justify-between 
       px-12
       py-4
       "
      >
        <div className="flex">
          <div className="logo text-xl font-bold">
            <Link to="/home">
              <Aperture size={32} />
            </Link>
          </div>
          <ul className="flex items-center space-x-16 ml-20 text-l ">
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
                <div
                  className="
                  flex
                  items-center
                  justify-between

                  text-primary
                  bg-blue-300
                  px-2
                  py-1
                  rounded-md
                  text-white
                  w-24
                  "
                >
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
              class="relative m-0 -mr-0.5 block min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon1"
            />
          </div>
          <div
            className="h-8 w-12  flex items-center justify-center hover:cursor-pointer"
            onClick={logouthandler}
          >
            <LogOut />
          </div>
        </div>
      </div>
    </>
  );
};
