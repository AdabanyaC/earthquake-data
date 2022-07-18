import React, { useState, useEffect } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

const EarthquakeMap = () => {
  const [position, setPosition] = useState([]);
  const [error, setError] = useState("");

  const getEarthquakes = async () => {
    try {
      const earthquakeData = await axios.get(
        "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson"
      );

      let { features } = earthquakeData.data;

      setPosition(features);

      //
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    getEarthquakes();
  }, []);

  return (
    <div className="bg-white w-full md:w-3/4 h-[33rem] lg:h-[85vh] relative shadow-xl rounded-md">
      {!error && (
        <MapContainer
          center={[6.524379, 3.379206]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {position.map((pos) => {
            return (
              <>
                <Marker
                  position={[
                    pos.geometry.coordinates[0],
                    pos.geometry.coordinates[1],
                  ]}
                ></Marker>
              </>
            );
          })}
        </MapContainer>
      )}
    </div>
  );
};

export default EarthquakeMap;
