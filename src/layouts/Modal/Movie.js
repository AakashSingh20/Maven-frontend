import React from "react";
import { NavLink } from "react-router-dom";
import { Typography, Skeleton, Spin } from "antd";

const { Title, Text, Paragraph } = Typography;

export const Movie = ({ data, id }) => {
  return (
    <>
      <div className="main bg-white flex w-[100%]">
        <div className="left w-[50%] flex flex-col items-center p-4">
          {data.himage ? (
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
          ) : (
            <div className="flex items-center justify-center m-4 ">
              <Skeleton.Image
                style={{ height: "250px", width: "450px" }}
                active
              />
            </div>
          )}

          {data.himage ? (
            <>
              <div className="detail w-[420px] flex justify-between items-center">
                <Title level={2} className="mt-[12px]" strong>
                  {data.name}
                </Title>

                <Text className=" text-[#5d5b5b]" strong>
                  {data.genre}
                </Text>
              </div>
              <div className="description w-[420px] mt-2 text-justify">
                <Paragraph>{data.description}</Paragraph>
              </div>
            </>
          ) : (
            <div className="w-[430px] mt-5 ">
              <Skeleton active />
            </div>
          )}
        </div>
        <div className="center h-[100%] flex items-center justify-center">
          <div className="border-[1px] border-[#8d99ae] h-3/4"></div>
        </div>
        <div className="right w-[50%] flex items-center justify-center">
          {data.himage ? (
            <NavLink to={`/home/${id}`}>
              <button
                className="watch text-2xl font-bold rounded-[8px] w-[200px] h-[60px] bg-[#1677ff] text-white hover:bg-[#4096ff]"
                size="large"
              >
                Watch Now
              </button>
            </NavLink>
          ) : (
            <Skeleton.Button
              active
              size="large"
              // shape="round"
              style={{ width: "200px", height: "60px" }}
            />
          )}
        </div>
      </div>
    </>
  );
};
