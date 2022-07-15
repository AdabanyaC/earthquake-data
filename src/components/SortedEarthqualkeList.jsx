import React from "react";

const SortedEartquakeList = ({
  loading,
  error,
  title,
  length,
  sortedFeatures,
}) => {
  return (
    <div
      className={`bg-white w-full md:w-1/4 h-[33rem] shadow-xl rounded-md overflow-auto`}
    >
      <div className="p-5 shadow-lg sticky top-0 bg-purple-700 text-white">
        {error ? (
          <div>
            <p> {error} </p>
          </div>
        ) : (
          <div>
            <h3 className="font-bold"> {title} </h3>
            <p>
              {loading ? (
                `Loading Earthquakes Data`
              ) : (
                <span className="font-bold">{length} Earthquakes </span>
              )}
            </p>
          </div>
        )}
      </div>
      <hr />
      {sortedFeatures}
    </div>
  );
};

export default SortedEartquakeList;
