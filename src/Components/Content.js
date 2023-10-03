import React, { useContext } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ButtonGroup } from "./Buttons/ButtonGroup";
import { MainContext } from "../Context/Context";

export const Content = ({ type, media }) => {
  const { setmodalVisible } = useContext(MainContext);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 9,
      partialVisibilityGutter: 10,
      slidesToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1300 },
      items: 7,
      partialVisibilityGutter: 5,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1300, min: 450 },
      items: 5,
      partialVisibilityGutter: 3,
    },
    mobile: {
      breakpoint: { max: 450, min: 0 },
      items: 1,
      partialVisibilityGutter: 80,
    },
  };

  return (
    <>
      <div className=" mx-4 pt-4 px-7">
        <div className="title">
          <h1 className="text-2xl font-bold">{type}</h1>
        </div>
        <div className="my-4 mx-6 relative">
          <Carousel
            responsive={responsive}
            arrows={false}
            renderButtonGroupOutside={true}
            customButtonGroup={<ButtonGroup />}
            partialVisible={true}
            draggable={false}
            infinite={true}
          >
            {media.map((item, index) => {
              return (
                <div
                  key={index}
                  className="border-4 border-black rounded-[20px] h-56 w-44 hover:cursor-pointer"
                  onClick={() => setmodalVisible(true)}
                ></div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
};
