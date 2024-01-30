import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../Context/Context";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "../index.css";
import { Season } from "../Components/Dropdown/Season";

export const SeriesModal = ({ isVisible }) => {
  const { setmodalVisible, modalMediaId } = useContext(MainContext);
  const [id, setid] = useState("");
  const [data, setdata] = useState({});

  const handleClose = (e) => {
    if (e.target.id === "modalBackground") {
      setmodalVisible(false);
    }
  };

  const specificMovie = async (id = modalMediaId) => {
    if (!id) {
      console.error("ID is undefined");
      return;
    }

    try {
      const response = await axios.get(`http://localhost:4000/movies/${id}`, {
        headers: {
          "Content-Type": "application/json",
          authorization: JSON.parse(localStorage.getItem("Token")),
        },
      });

      setid(response.data.media._id);
      setdata(response.data.media);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  useEffect(() => {
    specificMovie();
  }, [isVisible]);

  if (!isVisible) return null;
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm"
      onClick={handleClose}
      id="modalBackground"
    >
      <div className="bg-white border-4 border-black w-[1000px] h-[560px] rounded-[30px] overflow-hidden flex relative">
        <div
          className="absolute top-6 right-6 hover:cursor-pointer"
          onClick={() => setmodalVisible(false)}
        >
          <img className="h-6" src="/images/close.png" alt="close" />
        </div>
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
              <div className="text-3xl font-bold title">a{data.name}</div>
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
              <Season />

              <div className="border-[1px] border-black rounded-xl lower flex justify-center items-center h-[85%] w-[98%] mt-16 ml-1 px-2">
                <div className="card_holder w-[99%] h-[90%] space-y-4 px-2 overflow-auto ">
                  <div className="card border-black border-2 w-[360px] h-[100px] rounded-xl flex shadow-xl">
                    <div className="image w-[30%] flex items-center justify-center">
                      img
                    </div>
                    <div className="line border-[1px] border-black"></div>
                    <div className="details w-[70%]">
                      <div className="title h-[50%] flex pl-4 pt-4">Title</div>
                      <div className="watch h-[50%] flex items-center justify-end pr-3 pb-2">
                        <div className="season border-2 border-black w-[100px] h-[33px] flex justify-center items-center rounded-[20px] hover:cursor-pointer ">
                          watch now
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card border-black border-2 w-[360px] h-[100px] rounded-xl flex shadow-xl">
                    <div className="image w-[30%] flex items-center justify-center">
                      img
                    </div>
                    <div className="line border-[1px] border-black"></div>
                    <div className="details w-[70%]">
                      <div className="title h-[50%] flex pl-4 pt-4">Title</div>
                      <div className="watch h-[50%] flex items-center justify-end pr-3 pb-2">
                        <div className="season border-2 border-black w-[100px] h-[33px] flex justify-center items-center rounded-[20px] hover:cursor-pointer ">
                          watch now
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card border-black border-2 w-[360px] h-[100px] rounded-xl flex shadow-xl">
                    <div className="image w-[30%] flex items-center justify-center">
                      img
                    </div>
                    <div className="line border-[1px] border-black"></div>
                    <div className="details w-[70%]">
                      <div className="title h-[50%] flex pl-4 pt-4">Title</div>
                      <div className="watch h-[50%] flex items-center justify-end pr-3 pb-2">
                        <div className="season border-2 border-black w-[100px] h-[33px] flex justify-center items-center rounded-[20px] hover:cursor-pointer ">
                          watch now
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card border-black border-2 w-[360px] h-[100px] rounded-xl flex shadow-xl">
                    <div className="image w-[30%] flex items-center justify-center">
                      img
                    </div>
                    <div className="line border-[1px] border-black"></div>
                    <div className="details w-[70%]">
                      <div className="title h-[50%] flex pl-4 pt-4">Title</div>
                      <div className="watch h-[50%] flex items-center justify-end pr-3 pb-2">
                        <div className="season border-2 border-black w-[100px] h-[33px] flex justify-center items-center rounded-[20px] hover:cursor-pointer ">
                          watch now
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
