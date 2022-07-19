import React from "react";

const SortList = ({
  handleClickNewest,
  handleClickOldest,
  handleClickLargest,
  handleClickSmallest,
}) => {
  return (
    <div className="bg-white h-full w-full lg:w-1/4 shadow-xl rounded-md overflow-auto">
      <div className="p-5 shadow-lg sticky top-0 bg-purple-700 text-white font-bold">
        Sort Earthquakes
      </div>
      <>
        <div
          className="p-5 hover:cursor-pointer hover:bg-gray-100"
          onClick={handleClickNewest}
        >
          <p> Newest First </p>
        </div>
        <hr />
        <div
          className="p-5 hover:cursor-pointer hover:bg-gray-100"
          onClick={handleClickOldest}
        >
          <p> Oldest First </p>
        </div>
        <hr />
        <div
          className="p-5 hover:cursor-pointer hover:bg-gray-100"
          onClick={handleClickLargest}
        >
          <p> Largest Magnitude First </p>
        </div>
        <hr />
        <div
          className="p-5 hover:cursor-pointer hover:bg-gray-100"
          onClick={handleClickSmallest}
        >
          <p> Smallest Magnitude First </p>
        </div>
        <hr />
      </>
    </div>
  );
};

export default SortList;
