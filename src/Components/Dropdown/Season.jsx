import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../../Context/Context";
import { Select } from "antd";

export const Season = ({ length }) => {
  const { curseason, setcurseason } = useContext(MainContext);
  const [selectedSeason, setSelectedSeason] = useState(curseason);
  const [options, setOptions] = useState([]);

  const handleSeasonChange = (value) => {
    setSelectedSeason(value);
    setcurseason(value);
  };

  useEffect(() => {
    function generateOptions(length) {
      const arr = [];
      for (let i = 1; i <= length; i++) {
        arr.push({
          value: i,
          label: 'Season ' + i,
        });
      }
      setOptions(arr);
    }

    generateOptions(length);
  }, [length]);

  return (
    <Select
      defaultValue={selectedSeason}
      style={{ width: 120 }}
      onChange={handleSeasonChange}
      options={options}
    />
  );
};
