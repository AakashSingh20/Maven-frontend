import React, { useContext } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ButtonGroup } from "../Components/Buttons/ButtonGroup";
import { MainContext } from "../Context/Context";

export const Content = ({ type, media }) => {
  const { setmodalVisible, setmodalMediaId, setmediaType, setIsModalOpen } =
    useContext(MainContext);

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

  const specificMovie = (id) => {
    // console.log("movieID", id);
    // setmodalVisible(true);
    // setmodalMediaId(id);
    // setmediaType(type);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="pt-4 mx-4 px-7">
        <div className="title">
          <h1 className="text-2xl font-bold">{type}</h1>
        </div>
        <div className="relative mx-6 my-4">
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
                  className="border-4 border-black rounded-[20px] h-56 w-44 hover:cursor-pointer overflow-hidden"
                  // onClick={() => specificMovie(item._id)}
                  onClick={specificMovie(item._id)}
                >
                  <img
                    src={item.vimage}
                    alt={item.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
};
