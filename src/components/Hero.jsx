import React from "react";
import { PrimaryButtonLg } from "./Buttons";
import EarthSVG from "./../assets/hero/earth.svg";

const Hero = () => {
  return (
    <div className="mt-12 flex ">
      <div className="mt-6 animate__animated animate__zoomIn">
        <h1 className="text-7xl font-bold capitalize text-main-black mt-12">
          Understand Earthquakes 🌀 through visualized data
        </h1>

        <p className="mt-5">
          We provide you with sufficient data and information in visual format
          that will help you learn about the latest earthquakes provided by the{" "}
          <span className="font-bold">
            United States Geological Survey (USGS).
          </span>
        </p>

        <div className="mt-5">
          <PrimaryButtonLg
            btnText={"View Earthquake Data"}
            bgColor="bg-gradient-to-r from-fuchsia-500 to-purple-500"
            textColor={"text-white"}
          />
        </div>
      </div>
      <img
        src={EarthSVG}
        alt="Earth SVG"
        className="h-[34rem] w-[34rem] animate__animated animate__fadeInRight"
      />
    </div>
  );
};

export default Hero;
