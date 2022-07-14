import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import HeroBg from "./../assets/hero/herobg.svg";

const bgImg = {
  backgroundImage: `url(${HeroBg})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const LandingPage = () => {
  return (
    <div
      className="px-20 py-12 bg-[#fcf5fe] h-screen overflow-y-hidden"
      style={bgImg}
    >
      <Navbar />
      <Hero />
    </div>
  );
};

export default LandingPage;
