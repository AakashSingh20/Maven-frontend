import React from "react";
import { NavLink } from "react-router-dom";

export const Movie = ({ data, id }) => {
  return (
    <>
      <div className="main bg-white flex w-[100%]">
        <div className="left w-[50%] flex flex-col items-center p-4">
          <div className="video border-4 border-black overflow-hidden rounded-[30px] m-4 relative">
            <img
              className="h-[250px] w-[450px] "
              src={data.himage}
              alt={data.name}
            />
            <div className="absolute -translate-x-1/2 -translate-y-1/2 play top-1/2 left-1/2 ">
              <a href={data.trailer_url}>
                <img
                  className="h-20 hover:cursor-pointer"
                  src="/images/play.png"
                  alt="play"
                />
              </a>
            </div>
          </div>
          <div className="detail w-[420px] flex justify-between items-center m-2 ">
            <div className="text-3xl font-bold title">{data.name}</div>
            <div className="genre">{data.genre}</div>
          </div>
          <div className="description w-[410px] mt-6 text-justify">
            {data.description}
          </div>
        </div>
        <div className="center h-[100%] flex items-center justify-center">
          <div className="border-[3px] border-black h-3/4"></div>
        </div>
        <div className="right w-[50%] flex items-center justify-center">
          <div className="watch border-4 border-black w-[200px] h-[70px] flex justify-center items-center rounded-[20px] hover:cursor-pointer ">
            <NavLink to={`/home/${id}`} className="text-2xl font-bold">
              Watch Now
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
