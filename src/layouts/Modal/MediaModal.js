import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../../Context/Context";
import axios from "axios";
// import { NavLink } from "react-router-dom";
import { Movie } from "./Movie";
import { Series } from "./Series";

export const MediaModal = ({ isVisible, modalMediaId }) => {
  const { setmodalVisible, mediaType } = useContext(MainContext);
  const [id, setid] = useState("");
  const [data, setdata] = useState({});
  // console.log("m,", mediaType);

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
      await axios
        .get(`http://localhost:4000/movies/${id}`, {
          headers: {
            "Content-Type": "application/json",
            authorization: JSON.parse(localStorage.getItem("Token")),
          },
        })
        .then((res) => {
          // console.log("data", id, res.data.media);
          setid(res.data.media._id);
          setdata(res.data.media);
        });
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
          className="absolute z-10 top-6 right-6 hover:cursor-pointer"
          onClick={() => setmodalVisible(false)}
        >
          <img className="h-6" src="/images/close.png" alt="close" />
        </div>
        {mediaType === "Movies" && <Movie data={data} id={id} />}
        {mediaType === "Premium Content" && <Movie data={data} id={id} />}
        {mediaType === "Series" && <Series data={data} />}
      </div>
    </div>
  );
};
