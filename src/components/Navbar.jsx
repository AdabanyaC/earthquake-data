import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { PrimaryButtonWithIcon } from "./Buttons";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const handleToggleNav = () => {
    setToggleNav(!toggleNav);
  };

  return (
    <>
      <div className="flex justify-between">
        <div className="self-center">
          <h3 className="text-2xl font-semibold">
            <NavLink to="/">Futurice Task.</NavLink>
          </h3>
        </div>
        <div className="self-center block md:hidden" onClick={handleToggleNav}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-menu-button-wide h-7 w-7"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v2A1.5 1.5 0 0 1 14.5 5h-13A1.5 1.5 0 0 1 0 3.5v-2zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-13z" />
            <path d="M2 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm10.823.323-.396-.396A.25.25 0 0 1 12.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2H1zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2h14zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z" />
          </svg>
        </div>
        <div className="self-center hidden md:block">
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
          className="hidden md:block"
        >
          <PrimaryButtonWithIcon
            btnText={"Github Repo"}
            bgColor="bg-purple-700"
            textColor={"text-white"}
          />
        </a>
      </div>
      {/* Mobile Nav */}
      <div
        className={`mt-5 bg-gray-100 rounded md:hidden ${
          toggleNav ? `block` : `hidden`
        }`}
      >
        <ul className="font-semibold">
          <li className="p-4">
            <NavLink to="/">Home</NavLink>
          </li>
          <hr />
          <li className="p-4">
            <NavLink to="/latest-earthquakes">Latest Earthquakes</NavLink>
          </li>
          <hr />
          <li className="p-4">
            <NavLink to="/sort">Sort Earthquakes</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
