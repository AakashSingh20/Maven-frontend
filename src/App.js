import { Body } from "./Components/Body";
// import { Footer } from "./Components/Footer";
import { Nav } from "./Components/Nav";
import { Request } from "./Components/Request";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { VideoPage } from "./Components/VideoPage";
import { Login } from "./Components/Login";
import { Signup } from "./Components/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Body />} />
          <Route exact path="/request" element={<Request />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/play/:id" element={<VideoPage />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
