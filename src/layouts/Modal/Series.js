import React, { useEffect } from "react";
import { Season } from "../../Components/Dropdown/Season";
import { useState } from "react";
import { useContext } from "react";
import { MainContext } from "../../Context/Context";
import { NavLink } from "react-router-dom";

export const Series = ({ data }) => {
  const { curseason, seriesLink, setseriesLink } = useContext(MainContext);

  const [season, setseason] = useState([]);
  const [ndata, setndata] = useState({});
  const [cs, setcs] = useState("0");

  const link = (url) => {
    setseriesLink(url);
    // console.log("link", seriesLink);
  };

  useEffect(() => {
    if (data && data.seasons && data.seasons.length > 0) {
      setndata(data);
    }
  }, [data]);

  useEffect(() => {
    const cs = curseason - 1;
    setcs(cs);
  }, [curseason]);

  useEffect(() => {
    if (ndata && ndata.seasons && ndata.seasons.length > 0) {
      setseason(ndata.seasons[cs].episodes);
    }
  }, [cs, ndata]);

  if (!ndata || !ndata.seasons || ndata.seasons.length === 0) {
    return null;
  }

  return (
    <>
      <div className="main bg-white flex w-[100%]">
        <div className="left w-[50%] flex flex-col items-center p-4">
          <div className="video border-4 border-black overflow-hidden rounded-[30px] m-4 relative">
            {/* add the image here */}
            <img
              className="h-[250px] w-[450px] "
              src={data.himage}
              alt={data.name}
            />
            <div className="absolute -translate-x-1/2 -translate-y-1/2 play top-1/2 left-1/2 ">
              {/* Add the trailer link here */}
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
            {/* add the name here */}
            <div className="text-3xl font-bold title">{data.name}</div>
            {/* add the genre here */}
            <div className="genre">{data.genre}</div>
          </div>
          {/* add the description here */}
          <div className="description w-[410px] mt-6 text-justify">
            {data.description}
          </div>
        </div>
        <div className="center h-[100%] flex items-center justify-center">
          <div className="border-[3px] border-black h-3/4"></div>
        </div>
        <div className="right w-[50%] flex items-center justify-center">
          <div className="h-[90%] w-[87%] relative">
            <Season length={ndata.seasons.length} />

            <div className="rounded-xl lower flex justify-center items-center h-[85%] w-[98%] mt-16 ml-1 px-2">
              <div className="card_holder w-[99%] h-[90%] space-y-4 px-2 overflow-auto ">
                {/* {console.log("season", season)} */}
                {season.map((item, index) => {
                  return (
                    <div
                      className="card border-black border-2 w-[360px] h-[100px] rounded-xl flex shadow-xl"
                      key={index}
                    >
                      <div className="image w-[30%] flex items-center justify-center">
                        img
                      </div>
                      <div className="line border-[1px] border-black"></div>
                      <div className="details w-[70%]">
                        <div className="title h-[50%] flex pl-4 pt-4">
                          {item.title}
                        </div>
                        <div className="watch h-[50%] flex items-center justify-end pr-3 pb-2">
                          <NavLink
                            to={`/home/${item._id}`}
                            className="season border-2 border-black w-[100px] h-[33px] flex justify-center items-center rounded-[20px] hover:cursor-pointer "
                            onClick={() => link(item.main_url)}
                          >
                            watch now
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
