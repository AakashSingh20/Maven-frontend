import React, { useContext, useState } from "react";
import { MainContext } from "../../Context/Context";

export const Season = ({ length }) => {
  const { setcurseason } = useContext(MainContext);
  const [open, setOpen] = useState(false);
  const [selectedSeason, setSelectedSeason] = useState(1);

  const handleSeasonClick = (season) => {
    setSelectedSeason(season);
    setcurseason(season);
    setOpen(false);
  };

  const renderDropdownOptions = () => {
    const options = [];
    for (let i = 1; i <= length; i++) {
      if (i !== selectedSeason) {
        options.push(
          <div
            key={i}
            className="season w-[145px] h-[45px] flex justify-center items-center rounded-[20px] hover:cursor-pointer hover:bg-blue-gray-100"
            onClick={() => handleSeasonClick(i)}
          >
            Season {i}
          </div>
        );
      }
    }
    return options;
  };

  return (
    <>
      <div className="absolute">
        <div
          className="season border-2 border-black w-[145px] h-[45px] flex justify-center items-center rounded-[20px] hover:cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          Season {selectedSeason}
        </div>
        {open && length > 1 && (
          <div className="options border-2 border-black w-[145px] flex flex-col justify-center items-center rounded-[20px] bg-white">
            {renderDropdownOptions()}
          </div>
        )}
      </div>
    </>
  );
};
