import { createContext, useState } from "react";

export const MainContext = createContext();

const Context = ({ children }) => {
  const [modalVisible, setmodalVisible] = useState(false);
  const [modalMediaId, setmodalMediaId] = useState("");
  const [mediaType, setmediaType] = useState("");
  const [curseason, setcurseason] = useState("1");
  const [seriesLink, setseriesLink] = useState("");

  return (
    <MainContext.Provider
      value={{
        modalVisible,
        setmodalVisible,
        modalMediaId,
        setmodalMediaId,
        mediaType,
        setmediaType,
        curseason,
        setcurseason,
        seriesLink,
        setseriesLink,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

// export const MainContext = () => {
//   return useContext(Context);
// };

export default Context;
