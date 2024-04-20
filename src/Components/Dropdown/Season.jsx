import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../../Context/Context";
import { Select } from "antd";

const { Option } = Select;
export const Season = ({ length }) => {
  const { setcurseason } = useContext(MainContext);
  const [options, setOptions] = useState([]);

  const handleSeasonChange = (value) => {
    setcurseason(value);
  };

  const pushObjects = () => {
    let arr = [];
    for (let i = 1; i <= length; i++) {
      arr.push({
        value: i,
        label: `Season ${i}`,
      });
    }
    setOptions(arr);
  };

  useEffect(() => {
   if(length > 0){
     pushObjects();
   }
  }, []);

  return (
    <> 
      <div className="absolute">
        {options.length > 0 && (
          <Select
            defaultValue="Seasons"
            style={{ width: 120, height: 40 }}
            onChange={handleSeasonChange}
          >
            {options.map((option) => (
              <Option key={option.value} value={option.value}>
                {option.label}
              </Option>
            ))}
          </Select>
        )}
      </div>
    </>
  );
};
