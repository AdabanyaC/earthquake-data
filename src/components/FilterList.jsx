import React from "react";

const FilterList = ({
  handleClickAll,
  handleClickGreater,
  handleClickLess,
}) => {
  return (
    <div className="bg-white h-full w-full lg:w-1/4 shadow-xl rounded-md overflow-auto">
      <div className="p-5 shadow-lg sticky top-0 bg-purple-700 text-white font-bold">
        Filter Earthquakes
      </div>
      <>
        <div
          className="p-5 hover:cursor-pointer hover:bg-gray-100"
          onClick={handleClickAll}
        >
          <p> All Earthquakes </p>
        </div>
        <hr />
        <div
          className="p-5 hover:cursor-pointer hover:bg-gray-100"
          onClick={handleClickGreater}
        >
          <p> Magnitude Greater than 3 </p>
        </div>
        <hr />
        <div
          className="p-5 hover:cursor-pointer hover:bg-gray-100"
          onClick={handleClickLess}
        >
          <p> Magnitude Less than 3 </p>
        </div>
      </>
    </div>
  );
};

export default FilterList;
