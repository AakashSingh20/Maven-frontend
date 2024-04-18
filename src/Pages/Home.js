import React from "react";
import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-6 text-black">
      <div className="">
        <div className="flex space-x-5">
          <h1 className="mb-4 text-7xl">Welcome to </h1>
          <span className="font-bold text-transparent text-7xl bg-gradient-to-r bg-clip-text from-blue-400 to-blue-800">
            MAVEN
          </span>
        </div>
        <p className="mb-8 text-lg">
          Watch thousands of movies, TV shows, and exclusive content. Anytime.
          Anywhere.
        </p>
      </div>
      <div className="flex space-x-4">
        <NavLink
          to={"/signup"}
          className="px-6 py-3 font-bold text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Sign Up
        </NavLink>

        <NavLink
          to={"/login"}
          className="px-6 py-3 font-bold text-white bg-gray-800 rounded hover:bg-gray-700"
        >
          Log In
        </NavLink>
      </div>
    </div>
  );
};
