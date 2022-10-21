function Locations({ locations }) {
  return (
    <div className="w-full">
      <div className="relative w-full mb-3">
        <label
          className="block uppercase text-blueGray-600 text-2xl font-bold mb-2"
          htmlFor="grid-password"
        >
          pinball locations
        </label>
      </div>
      <div className="relative w-full mb-3">
        {locations &&
          locations.map((location) => {
            return (
              <div
                className="text-base font-bold underline pb-4"
                key={location.id}
              >{`City: ${location.city},  lat: ${location.lat},  lon: ${location.lon},  distance
                : ${location.distance}  `}</div>
            );
          })}
      </div>
    </div>
  );
}

export default Locations;
