import React from "react";
import { Carousel } from "antd";

const contentStyle = {
  height: "500px",
  // width: "90vw",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  // borderRadius: "10px",
};

const Carousels = () => {
  return (
    <Carousel autoplay>
      <div>
        <h3 style={contentStyle}>
          <img src="/images/banner 3.jpg" style={{}} alt="banner" />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img src="/images/banner 2.jpg" alt="banner" />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img
            src="/images/banner 4.jpg"
            style={{ width: "100%", height: "auto", verticalAlign: "middle" }}
            alt="banner"
          />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img src="/images/banner.jpg" alt="banner" />
        </h3>
      </div>
    </Carousel>
  );
};

export default Carousels;
