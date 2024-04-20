import React, { useContext, useEffect, useState } from "react";
import { Content } from "../layouts/Content";
import { MainContext } from "../Context/Context";
import axios from "axios";
import { Nav } from "../layouts/Nav";
import { Modal } from "antd";
import URL from "../utils/API_URL";
import ModalMedia from "../layouts/Modal/ModalMedia";
import Carousels from "../layouts/Carousel";

export const Body = () => {
  const {
    isModalOpen,
    setIsModalOpen,
    modalMediaId,
    setmodalMediaId,
    setmediaType,
  } = useContext(MainContext);
  const [movieArr, setmovieArr] = useState([]);
  const [subArr, setsubArr] = useState([]);
  const [serArr, setserArr] = useState([]);

  const GhostMedia = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const movieData = async () => {
    try {
      await axios
        .get(`${URL}/movies/`, {
          headers: {
            "Content-Type": "application/json",
            authorization: JSON.parse(localStorage.getItem("Token")),
          },
        })
        .then((res) => {
          if (res.data.movie) {
            setmovieArr(res.data.movie);
          }
          if (res.data.subMovie) {
            setsubArr(res.data.subMovie);
          }
          if (res.data.series) {
            // console.log("series", res.data.series);
            setserArr(res.data.series);
          }
        });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    movieData();
  }, []);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Nav />
      <div className="flex items-center justify-center mt-6 ">
        <div className="w-[90vw] rounded-[10px] overflow-hidden">
          <Carousels />
        </div>
      </div>
      <div className="">
        {movieArr.length > 0 ? (
          <Content media={movieArr} type="Movies" />
        ) : (
          <Content media={GhostMedia} type="Ghost" />
        )}
        {serArr.length > 0 ? (
          <Content media={serArr} type="Series" />
        ) : (
          <Content media={GhostMedia} type="Ghost" />
        )}
        {subArr.length > 0 ? (
          <Content media={subArr} type="Premium Content" />
        ) : (
          <Content media={GhostMedia} type="Ghost" />
        )}
      </div>
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        height="fit-content"
        width="fit-content"
        centered={true}
      >
        <ModalMedia />
      </Modal>
    </>
  );
};
