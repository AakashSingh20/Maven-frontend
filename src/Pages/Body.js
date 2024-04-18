import React, { useContext, useEffect, useState } from "react";
import { Content } from "../layouts/Content";
import { MediaModal } from "../layouts/Modal/MediaModal";
import { MainContext } from "../Context/Context";
import axios from "axios";
import { Nav } from "../layouts/Nav";
import { Button, Modal } from "antd";
// import { SeriesModal } from "./SeriesModal";

export const Body = () => {
  const { modalVisible, modalMediaId, isModalOpen, setIsModalOpen } =
    useContext(MainContext);
  const [movieArr, setmovieArr] = useState([]);
  const [subArr, setsubArr] = useState([]);
  const [serArr, setserArr] = useState([]);

  const movieData = async () => {
    try {
      await axios
        .get("http://localhost:4000/movies/", {
          headers: {
            "Content-Type": "application/json",
            authorization: JSON.parse(localStorage.getItem("Token")),
          },
        })
        .then((res) => {
          // console.log("body", res.data);
          if (res.data.movie) {
            setmovieArr(res.data.movie);
          }
          if (res.data.subMovie) {
            setsubArr(res.data.subMovie);
          }
          if (res.data.series) {
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
        title="Basic Modal"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        {/* <MediaModal isVisible={modalVisible} modalMediaId={modalMediaId} /> */}
      </Modal>
      {/* <SeriesModal isVisible={modalVisible}  /> */}
    </>
  );
};
