import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../Context/Context";
import axios from "axios";
import { NavLink } from "react-router-dom";

export const MediaModal = ({ isVisible }) => {
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
      className=" fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
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
              <div className="play absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
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
              <div className="title text-3xl font-bold">{data.name}</div>
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
            <div className="watch border-4 border-black w-[200px] h-[70px] flex justify-center items-center rounded-[20px] hover:cursor-pointer ">
              {/* add the watch link here */}

              <NavLink to={`/home/${id}`} className="text-2xl font-bold">
                Watch Now
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
