import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <>
      <div
        className="
       border-4
       border-black 
       flex items-center 
       justify-between 
       pl-6 
       pr-2
       py-2
       m-3 
       rounded-[15px]
       "
      >
        <div className="leftNav flex">
          <div className="logo text-4xl font-bold">Maven</div>
          <ul className="flex items-center space-x-16 ml-20 text-xl font-bold">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/request">Request</Link>
            </li>
          </ul>
        </div>
        <div className="flex space-x-3">
          <div className="h-14 w-16 border-4 border-black rounded-[15px] flex items-center justify-center hover:cursor-pointer">
            <img className=" h-8" src="/images/search.png" alt="search"></img>
          </div>
          <NavLink to={`/login`} className="text-2xl font-bold">
            <div className="h-14 w-16 border-4 border-black rounded-[15px] flex items-center justify-center hover:cursor-pointer">
              <img className=" h-8" src="/images/user.png" alt="search"></img>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
};
