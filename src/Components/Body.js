import React, { useContext, useEffect, useState } from "react";
import { Content } from "./Content";
import { MediaModal } from "./MediaModal";
import { MainContext } from "../Context/Context";
import axios from "axios";

export const Body = () => {
  const { modalVisible } = useContext(MainContext);
  const [movieArr, setmovieArr] = useState([]);

  //this data can be accessed from the backend -- this is just dummy data
  // const data = [
  //   {
  //     type: "Movies",
  //     media: [
  //       {
  //         poster: "dummyposter.jpeg",
  //         trailer: "dummy/youtubeurl",
  //         title: "Dummy Title",
  //         genre: "Dummy Genre",
  //         description: "Dummy Description",
  //         link: "dummy movie link",
  //       },
  //       {},
  //       {},
  //       {},
  //       {},
  //       {},
  //       {},
  //       {},
  //       {},
  //     ],
  //   },
  //   {
  //     type: "TV Shows",
  //     media: [
  //       {
  //         poster: "dummyposter.jpeg",
  //         trailer: "dummy/youtubeurl",
  //         title: "Dummy Title",
  //         genre: "Dummy Genre",
  //         description: "Dummy Description",
  //         seasons: [
  //           {
  //             season: 1,
  //             episodes: [
  //               {
  //                 episode: 1,
  //                 title: "Dummy Title",
  //                 thumbanail: "dummythumbnail.jpeg",
  //                 link: "dummy link",
  //               },
  //               {},
  //               {},
  //               {},
  //               {},
  //               {},
  //               {},
  //               {},
  //               {},
  //             ],
  //           },
  //           {},
  //           {},
  //           {},
  //           {},
  //           {},
  //           {},
  //           {},
  //           {},
  //         ],
  //       },
  //       {},
  //       {},
  //       {},
  //       {},
  //       {},
  //       {},
  //       {},
  //       {},
  //     ],
  //   },
  // ];

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
        {/* {data.map((item, index) => {
          return <Content key={index} media={item.media} />;
        })} */}
        <Content media={movieArr} type="Movies" />
      </div>
      <MediaModal isVisible={modalVisible} />
    </>
  );
};
