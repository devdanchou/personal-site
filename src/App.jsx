import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import WorkShowPage from "./pages/WorkShowPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/work" element={<LandingPage />} />
          <Route path="/work/:projectName" element={<WorkShowPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
