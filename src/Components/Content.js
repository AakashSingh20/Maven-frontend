import React from "react";

export const Content = ({ type, media }) => {
  return (
    <>
      <div className=" mx-4 pt-4 px-7">
        <div className="title">
          <h1 className="text-2xl font-bold">{type}</h1>
        </div>
        <div className=" m-4 flex justify-between">
          {media.map((item, index) => {
            return (
              <div
                key={index}
                className="border-4 border-black rounded-[20px] h-56 w-44 hover:cursor-pointer"
              ></div>
            );
          })}
        </div>
      </div>
    </>
  );
};
