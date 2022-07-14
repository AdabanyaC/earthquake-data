import React from "react";
import Navbar from "../components/Navbar";
import HeroBg from "./../assets/hero/herobg.svg";

const bgImg = {
  backgroundImage: `url(${HeroBg})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const SortFeature = () => {
  return (
    <div
      className="px-20 py-12 bg-[#fcf5fe] h-screen overflow-y-hidden"
      style={bgImg}
    >
      <Navbar />
    </div>
  );
};

export default SortFeature;
