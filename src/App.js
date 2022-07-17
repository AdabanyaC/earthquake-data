import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilterEarthquakes from "./containers/FilterEarthquakes";
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
        <Route path="/filter" element={<FilterEarthquakes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
