import React, { useEffect } from "react";
import { Season } from "../../Components/Dropdown/Season";
import { useState } from "react";
import { useContext } from "react";
import { MainContext } from "../../Context/Context";
import { NavLink } from "react-router-dom";
import { Skeleton, Typography } from "antd";

const { Title, Text, Paragraph } = Typography;

export const Series = ({ data }) => {
  const { curseason, setseriesLink } = useContext(MainContext);

  const [season, setseason] = useState([]);
  const [ndata, setndata] = useState({});
  const [slength, setslength] = useState(0);

  const link = (url) => {
    setseriesLink(url);
  };

  useEffect(() => {
    if (data && data.seasons && data.seasons.length > 0) {
      setndata(data);
      setslength(data.seasons.length);
    }
  }, [data]);

  useEffect(() => {
    if (ndata && ndata.seasons && ndata.seasons.length > 0) {
      setseason(ndata.seasons[curseason - 1].episodes);
    }
  }, [curseason, ndata]);

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
              <div className="absolute -translate-x-1/2 -translate-y-1/2 play top-1/2 left-1/2">
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
                <Text strong>{data.genre}</Text>
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
          <div className="h-[90%] w-[87%] relative">
            {data.himage ? (
              <Season length={slength} />
            ) : (
              <Skeleton.Input style={{ height: "40px" }} size="small" active />
            )}

            <div className="rounded-xl lower flex justify-center items-center h-[85%] w-[98%] mt-4 ml-1 px-2">
              <div className="card_holder w-[99%] h-[90%] space-y-4 px-2 overflow-auto pt-2">
                {data.himage ? (
                  <>
                    {season.map((item, index) => {
                      return (
                        <div
                          className="card border-grey-300 border-2 bg-[#f8f8f8] w-[360px] h-[100px] rounded-xl flex shadow-sm hover:scale-[103%] transition duration-300 ease-in-out hover:shadow-md hover:border-[#1677ff] hover:border-1 overflow-hidden"
                          key={index}
                        >
                          <div className="image w-[30%] flex items-center justify-center">
                            img
                          </div>
                          <div className="border-[1px] line border-grey-300"></div>
                          <div className="details w-[70%]">
                            <div className="title h-[50%] flex pl-4 pt-4">
                              {item.title}
                            </div>
                            <div className="watch h-[50%] flex items-center justify-end pr-3 pb-2">
                              <NavLink
                                to={`/home/${item._id}`}
                                className="season text-white w-[100px] h-[33px] flex justify-center items-center rounded-[20px] hover:cursor-pointer bg-[#1677ff] hover:text-white "
                                onClick={() => link(item.main_url)}
                              >
                                watch now
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </>
                ) : (
                  <>
                    <div className="card w-[360px] h-[100px] rounded-xl ">
                      <Skeleton.Input
                        style={{ height: "100px" }}
                        block
                        active
                      />
                    </div>

                    <div className="card w-[360px] h-[100px] rounded-xl ">
                      <Skeleton.Input
                        style={{ height: "100px" }}
                        block
                        active
                      />
                    </div>

                    <div className="card w-[360px] h-[100px] rounded-xl ">
                      <Skeleton.Input
                        style={{ height: "100px" }}
                        block
                        active
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
