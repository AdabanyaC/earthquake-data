import React, { useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import HeroBg from "./../assets/hero/herobg.svg";

const bgImg = {
  backgroundImage: `url(${HeroBg})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const TopEarthquakes = () => {
  const getEarthquakes = async () => {
    try {
      const earthquakeData = await axios.get(
        "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson"
      );

      console.log(earthquakeData.data);
    } catch (err) {
      console.error(err.message);
    }
    console.log("Hello there");
  };

  useEffect(() => {
    getEarthquakes();
  });

  return (
    <div
      className="px-20 py-12 bg-[#fcf5fe] h-screen overflow-y-hidden"
      style={bgImg}
    >
      <Navbar />
    </div>
  );
};

export default TopEarthquakes;
