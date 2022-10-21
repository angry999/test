import React, { useState } from "react";
import "./App.css";
import Locations from "./Locations";

function App() {
  const [lon, setLon] = useState("");
  const [lat, setLat] = useState("");
  // const [lon, setLon] = useState("-80.143059");
  // const [lat, setLat] = useState("25.958055");
  const [locations, setLocations] = useState([]);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });
  };

  const changeLat = (e) => {
    setLat(e.target.value);
  };

  const changeLong = (e) => {
    setLon(e.target.value);
  };

  const handleSearch = async () => {
    if (!lat) {
      alert("Please enter latitude");
      return;
    }
    if (!lon) {
      alert("Please enter longitude");
      return;
    }

    const res = await fetch(
      `https://pinballmap.com/api/v1/locations/closest_by_lat_lon.json?lat=${lat}&lon=${lon}&send_all_within_distance=500`,
      {
        method: "GET",
      }
    );
    let response_json = await res.json();
    if (response_json.locations) {
      setLocations(response_json.locations);
      console.log(response_json.locations)
    }
    if (response_json.errors) {
      alert(response_json.errors);
    }
  };

  return (
    <div className="max-w-screen-xl m-auto">
      <header className="font-bold text-2xl text-blueGray-700 uppercase text-center p-8">
        pinball map
      </header>
      <div className="w-200 flex justify-center flex-col px-4">
        <div className="flex flex-row mb-3">
          <div className="w-40 lg:w-6/12 px-4 mr-4">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                latitude
              </label>
              <input
                type="text"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                onChange={(e) => changeLat(e)}
                value={lat}
              />
            </div>
          </div>
          <div className="w-40 lg:w-6/12 px-4 mr-4">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                longitude
              </label>
              <input
                type="text"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                onChange={(e) => changeLong(e)}
                value={lon}
              />
            </div>
          </div>
          <div className="w-40 lg:w-6/12 px-4 mt-0">
            <div className="relative w-full">
              <button
                className="inline-flex justify-center rounded-md border border-transparent bg-sky-600 px-9 py-4 text-base font-semibold font-'Inter' text-gray-50 hover:bg-sky-800 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 w-full border-2"
                onClick={() => getCurrentLocation()}
              >
                Near Me
              </button>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-6/12 px-4">
          <div className="relative w-full mb-3">
            <button
              className="inline-flex justify-center rounded-md border border-transparent bg-sky-600 px-9 py-4 text-base font-semibold font-'Inter' text-gray-50 hover:bg-sky-800 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 w-full border-2"
              onClick={() => handleSearch()}
            >
              Search
            </button>
          </div>
        </div>
        <Locations locations={locations} />
      </div>
    </div>
  );
}

export default App;
