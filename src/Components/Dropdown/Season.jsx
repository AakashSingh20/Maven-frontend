import React, { useContext, useState } from "react";
import { MainContext } from "../../Context/Context";
import { Select } from "antd";

const { Option } = Select;

export const Season = ({ length }) => {
  const { curseason, setcurseason } = useContext(MainContext);
  const [selectedSeason, setSelectedSeason] = useState(curseason + 1);

  const handleSeasonChange = (value) => {
    setSelectedSeason(value);
    setcurseason(value - 1);
  };

  const renderSelectOptions = () => {
    const options = [];
    if (length === 0) {
      options.push(
        <Option key={1} value={1}>
          Season 1
        </Option>

      );
    }
    for (let i = 1; i <= length; i++) {
      options.push(
        <Option key={i} value={i}>
          Season {i}
        </Option>
      );
    }
    return options;
  };

  return (
    <Select
      defaultValue={selectedSeason}
      style={{ width: 120 }}
      onChange={handleSeasonChange}
    >
      {renderSelectOptions()}
    </Select>
  );
};