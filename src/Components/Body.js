import React, { useContext, useEffect, useState } from "react";
import { Content } from "./Content";
import { MediaModal } from "./MediaModal";
import { MainContext } from "../Context/Context";
import axios from "axios";
import { Nav } from "./Nav";

export const Body = () => {
  const { modalVisible } = useContext(MainContext);
  const [movieArr, setmovieArr] = useState([]);
  const [subArr, setsubArr] = useState([]);

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
        });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    movieData();
  }, []);

  return (
    <>
      <Nav />
      <div className="">
        {movieArr.length > 0 ? (
          <Content media={movieArr} type="Movies" />
        ) : null}
        {subArr.length > 0 ? (
          <Content media={subArr} type="Premium Content" />
        ) : null}
      </div>
      <MediaModal isVisible={modalVisible} />
    </>
  );
};
