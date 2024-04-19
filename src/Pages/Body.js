import React, { useContext, useEffect, useState } from "react";
import { Content } from "../layouts/Content";
import { MainContext } from "../Context/Context";
import axios from "axios";
import { Nav } from "../layouts/Nav";
import { Modal } from "antd";
import URL from "../utils/API_URL";
import ModalMedia from "../layouts/Modal/ModalMedia";

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
    setmodalMediaId("");
    setmediaType("");
  }, []);

  const handleCancel = () => {
    setIsModalOpen(false);
    setmodalMediaId("");
    setmediaType("");
  };

  return (
    <>
      <Nav />
      <div className="">
        {movieArr.length > 0 ? (
          <Content media={movieArr} type="Movies" />
        ) : null}
        {serArr.length > 0 ? <Content media={serArr} type="Series" /> : null}
        {subArr.length > 0 ? (
          <Content media={subArr} type="Premium Content" />
        ) : null}
      </div>
      <Modal
        // className="h-[100%] w-[100%]"
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
