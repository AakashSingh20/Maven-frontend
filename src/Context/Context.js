import { createContext, useState } from "react";

export const MainContext = createContext();

const Context = ({ children }) => {
  const [modalVisible, setmodalVisible] = useState(false);

  return (
    <MainContext.Provider value={{ modalVisible, setmodalVisible }}>
      {children}
    </MainContext.Provider>
  );
};

// export const MainContext = () => {
//   return useContext(Context);
// };

export default Context;
