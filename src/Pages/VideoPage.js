import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import axios from "axios";
import { Nav } from "../layouts/Nav";
import { useContext } from "react";
import { MainContext } from "../Context/Context";
import URL from "../utils/API_URL";
import { Skeleton } from "antd";

export const VideoPage = () => {
  const { seriesLink } = useContext(MainContext);
  const [url, seturl] = useState("");
  const { id } = useParams();

  const getMovieUrl = async () => {
    try {
      const res = await axios.get(`${URL}/movies/url/${id}`, {
        headers: {
          "Content-Type": "application/json",
          authorization: JSON.parse(localStorage.getItem("Token")),
        },
      });

      if (res && res.data.media.main_url) {
        seturl(res.data.media.main_url);
      }
    } catch (error) {
      console.error(error);
    } finally {
      if (seriesLink) {
        seturl(seriesLink);
      } else {
        console.error("video URL not available");
      }
    }
  };

  useEffect(() => {
    getMovieUrl();
  }, []);
  return (
    <>
      <Nav />
      <div className="flex items-center justify-center w-[100vw] h-[80vh] mt-6 overflow-hidden ">
        {url ? (
          <div className="flex items-center justify-center w-[71vw] h-[80vh] rounded-[10px] overflow-hidden">
            <ReactPlayer
              url={url}
              controls={true}
              playing={false}
              width="100%"
              height="100%"
            />
          </div>
        ) : (
          <div className="" style={{ width: "71vw" }}>
            <Skeleton.Button
              style={{ height: "80vh" }}
              size="large"
              block
              active
            />
          </div>
        )}
      </div>
    </>
  );
};
