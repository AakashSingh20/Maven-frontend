import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import axios from "axios";

export const VideoPage = () => {
  const [url, seturl] = useState("");
  const { id } = useParams();

  const getMovieUrl = async () => {
    const res = await axios.get(`http://localhost:4000/movies/url/${id}`);
    // console.log("v", res.data);
    seturl(res.data.main_url);
  };

  useEffect(() => {
    getMovieUrl();
  }, []);
  return (
    <>
      <div className="flex items-center justify-center w-[100vw] h-[80vh] mt-6 overflow-hidden ">
        <div className="flex items-center justify-center w-[71vw] h-[80vh] border border-black">
          <ReactPlayer
            url={url}
            controls={true}
            playing={false}
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </>
  );
};
