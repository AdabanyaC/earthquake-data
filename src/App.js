import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./containers/LandingPage";
import SortFeature from "./containers/SortFeature";
import TopEarthquakes from "./containers/TopEarthquakes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/top-20" element={<TopEarthquakes />} />
        <Route path="/sort" element={<SortFeature />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
