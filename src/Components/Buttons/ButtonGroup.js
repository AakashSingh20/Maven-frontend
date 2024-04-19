import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import { ArrowLeftOutlined } from "@ant-design/icons";

export const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const ButtonOne = ({ onClick, className }) => {
    return (
      <button
        onClick={onClick}
        type="button"
        className={`  text-sm p-2.5 text-center inline-flex items-center mr-2 absolute top-[40%] left-[-50px] carousel-button-two ${className}`}
      >
        <ArrowLeftOutlined className="text-xl font-extrabold " />
      </button>
    );
  };
  const ButtonTwo = ({ onClick, className }) => {
    return (
      <button
        onClick={onClick}
        type="button"
        className={`p-2.5 text-center inline-flex items-center mr-2 absolute top-[40%] right-[-50px] carousel-button-two ${className}`}
      >
        <ArrowRightOutlined className="text-xl font-extrabold " />
      </button>
    );
  };
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div className=" carousel-button-group">
      <ButtonOne onClick={() => previous()} />
      <ButtonTwo onClick={() => next()} />
    </div>
  );
};
