import React from "react";
import Navbar from "../components/Navbar";
import HeroBg from "./../assets/hero/herobg.svg";
import EarthquakeList from "../components/EarthquakeList";
import EarthquakeMap from "../components/EarthquakeMap";

const bgImg = {
  backgroundImage: `url(${HeroBg})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const LatestEarthquakes = () => {
  return (
    <div
      className="px-8 md:px-20 py-12 bg-[#fcf5fe] h-full md:h-screen"
      style={bgImg}
    >
      <Navbar />
      <div className="flex flex-col md:flex-row gap-8 mt-12">
        <EarthquakeList />
        <EarthquakeMap />
      </div>
    </div>
  );
};

export default LatestEarthquakes;
