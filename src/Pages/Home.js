import React from "react";
import { NavLink } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { useUser } from "@clerk/clerk-react";
import { Spin } from "antd";

export const Home = () => {
  const { isSignedIn, user, isLoaded } = useUser();

  if (isSignedIn) {
    window.location.href = "/home";
  }

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
      <div>
        {isLoaded ? (
          <SignedOut>
            <SignInButton className="px-10 py-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-600" />
          </SignedOut>
        ) : (
          <div className="w-[130px] h-[56px] font-bold text-white rounded hover:bg-blue-600 flex items-center justify-center">
            <Spin size="large" />
          </div>
        )}
      </div>
    </div>
  );
};
