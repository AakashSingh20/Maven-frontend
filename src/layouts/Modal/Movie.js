import React from "react";
import { NavLink } from "react-router-dom";
import { Typography } from "antd";

const { Title, Text, Paragraph } = Typography;

export const Movie = ({ data, id }) => {
  return (
    <>
      <div className="main bg-white flex w-[100%]">
        <div className="left w-[50%] flex flex-col items-center p-4">
          <div className="video overflow-hidden rounded-[10px] m-4 relative">
            <img
              className="h-[250px] w-[450px] "
              src={data.himage}
              alt={data.name}
            />
            <div className="absolute -translate-x-1/2 -translate-y-1/2 play top-1/2 left-1/2 ">
              <a href={data.trailer_url}>
                <img
                  className="h-16 hover:cursor-pointer"
                  src="/images/play.png"
                  alt="play"
                />
              </a>
            </div>
          </div>
          <div className="detail w-[420px] flex justify-between items-center ">
            <Title level={3} className="mt-[12px]" strong>
              {data.name}
            </Title>

            <Text>{data.genre}</Text>
          </div>
          <div className="description w-[410px] mt-6 text-justify">
            {/* {data.description} */}
            <Paragraph>{data.description}</Paragraph>
          </div>
        </div>
        <div className="center h-[100%] flex items-center justify-center">
          <div className="border-[1px] border-[#8d99ae] h-3/4"></div>
        </div>
        <div className="right w-[50%] flex items-center justify-center">
          <NavLink to={`/home/${id}`} className="text-2xl font-bold">
            <button
              className="watch rounded-[8px] w-[200px] h-[60px] bg-[#1677ff] text-white hover:bg-[#4096ff]"
              size="large"
            >
              Watch Now
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};
