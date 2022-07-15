import React from "react";
import { NavLink } from "react-router-dom";
import { PrimaryButtonWithIcon } from "./Buttons";

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
            <NavLink to="/latest-earthquakes">Latest Earthquakes</NavLink>
          </li>
          <li>
            <NavLink to="/sort">Sort Earthquakes</NavLink>
          </li>
        </ul>
      </div>
      <a
        href="https://github.com/AdabanyaC/futurice-task"
        target="_blank"
        rel="noreferrer"
      >
        <PrimaryButtonWithIcon
          btnText={"Github Repo"}
          bgColor="bg-gradient-to-r from-fuchsia-500 to-purple-500"
          textColor={"text-white"}
        />
      </a>
    </div>
  );
};

export default Navbar;
