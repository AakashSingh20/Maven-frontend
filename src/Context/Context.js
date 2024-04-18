import { createContext, useState } from "react";
import { useEffect } from "react";

export const MainContext = createContext();

const Context = ({ children }) => {
  const [modalVisible, setmodalVisible] = useState(false);
  const [modalMediaId, setmodalMediaId] = useState("");
  const [mediaType, setmediaType] = useState("");
  const [curseason, setcurseason] = useState("1");
  const [seriesLink, setseriesLink] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    console.log("isModalOpen", isModalOpen);
  }, [isModalOpen]);

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
        isModalOpen,
        setIsModalOpen,
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
