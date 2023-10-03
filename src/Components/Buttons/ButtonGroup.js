import React from "react";

export const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const ButtonOne = ({ onClick, className }) => {
    return (
      <button
        onClick={onClick}
        type="button"
        className={` bg-white ring-4 ring-black font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 absolute top-[40%] left-[-50px] carousel-button-two ${className}`}
      >
        <img className=" h-5" src="/images/backward.png" alt="arrow l" />
      </button>
    );
  };
  const ButtonTwo = ({ onClick, className }) => {
    return (
      <button
        onClick={onClick}
        type="button"
        className={`bg-white ring-4 ring-black font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 absolute top-[40%] right-[-50px] carousel-button-two ${className}`}
      >
        <img className=" h-5" src="/images/forward.png" alt="arrow r" />
      </button>
    );
  };
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div className=" carousel-button-group ">
      <ButtonOne
        // className={currentSlide === 0 ? "hidden" : ""}
        onClick={() => previous()}
      />
      <ButtonTwo onClick={() => next()} />
    </div>
  );
};
