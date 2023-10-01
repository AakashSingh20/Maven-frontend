import { Body } from "./Components/Body";
// import { Footer } from "./Components/Footer";
import { Nav } from "./Components/Nav";
import { Request } from "./Components/Request";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Body />} />
          <Route exact path="/request" element={<Request />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
