import React from "react";
import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div className="border-2 border-black h-[100%] w-[100%] ">
        <NavLink to={`/login`} className="font-medium text-gray-900">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Login
          </button>
        </NavLink>
        <NavLink to={`/signup`} className="font-medium text-gray-900">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            signup
          </button>
        </NavLink>
      </div>
    </>
  );
};
