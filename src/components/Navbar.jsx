import React from "react";
import { NavLink } from "react-router-dom";
import { PrimaryButton } from "./Buttons";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div className="self-center">
        <h3 className="text-2xl font-semibold">
          <NavLink to="/">Futurice Task.</NavLink>
        </h3>
      </div>
      <div className="self-center">
        <ul className="flex gap-16 font-semibold">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/top-20">Top 20 Earthquakes</NavLink>
          </li>
          <li>
            <NavLink to="/sort">Sort Earthquakes</NavLink>
          </li>
          <li>
            <NavLink to="/our-people">Feature 3</NavLink>
          </li>
          <li>
            <NavLink to="/contact-us">Feature 4</NavLink>
          </li>
        </ul>
      </div>
      <NavLink to="/">
        <PrimaryButton
          btnText={"Github Repo"}
          bgColor="bg-gradient-to-r from-fuchsia-500 to-purple-500"
          textColor={"text-white"}
        />
      </NavLink>
    </div>
  );
};

export default Navbar;
