import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { MainContext } from "../../Context/Context";
import { Movie } from "./Movie";
import { Series } from "./Series";
import axios from "axios";
import { Skeleton } from "antd";

const ModalMedia = () => {
  const { mediaType, isModalOpen, modalMediaId } = useContext(MainContext);
  const [id, setid] = useState("");
  const [data, setdata] = useState({});

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
          console.log("data", id, res.data);
          setid(res.data.media._id);
          setdata(res.data.media);
        });
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  useEffect(() => {
    if (isModalOpen === true) {
      specificMovie();
    }
    if (isModalOpen === false) {
      setdata({});
      setid("");
    }
  }, [isModalOpen]);

  return (
    <>
      <div className="outer_body_modal h-[530px] w-[1000px] flex justify-center">
        <>
          {mediaType === "Series" && <Series data={data} />}
          {mediaType === "Movies" && <Movie data={data} id={id} />}
          {mediaType === "Premium Content" && <Movie data={data} id={id} />}
          {/* {mediaType === "Premium Content" && (
            <>
              {data && data.seasons && data.seasons.length > 0 ? (
                <Movie data={data} id={id} />
              ) : (
                <Skeleton active />
              )}
            </>
          )} */}
        </>
      </div>
    </>
  );
};

export default ModalMedia;
