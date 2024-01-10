import React, { useContext, useEffect, useState } from "react";
import { Content } from "./Content";
import { MediaModal } from "./MediaModal";
import { MainContext } from "../Context/Context";
import axios from "axios";

export const Body = () => {
  const { modalVisible } = useContext(MainContext);
  const [movieArr, setmovieArr] = useState([]);

  const movieData = async () => {
    try {
      const res = await axios.get("http://localhost:4000/movies/");
      // console.log("body", res.data.movies);
      setmovieArr(res.data.movies);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    movieData();
  }, []);

  return (
    <>
      <div className="">
        <Content media={movieArr} type="Movies" />
      </div>
      <MediaModal isVisible={modalVisible} />
    </>
  );
};
