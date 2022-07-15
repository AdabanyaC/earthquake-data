import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./containers/LandingPage";
import LatestEarthquakes from "./containers/Latest Earthquakes";
import SortFeature from "./containers/SortFeature";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/latest-earthquakes" element={<LatestEarthquakes />} />
        <Route path="/sort" element={<SortFeature />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
