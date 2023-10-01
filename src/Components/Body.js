import React from "react";
import { Content } from "./Content";

export const Body = () => {
  //this data can be accessed from the backend -- this is just dummy data
  const data = [
    { type: "Movies", media: [{}, {}, {}, {}, {}, {}, {}] },
    { type: "TV Shows", media: [{}, {}, {}, {}, {}, {}, {}] },
  ];
  return (
    <>
      <div className="">
        {data.map((item, index) => {
          return <Content key={index} type={item.type} media={item.media} />;
        })}
      </div>
    </>
  );
};
