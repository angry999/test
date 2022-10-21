function Locations({ locations }) {
  return (
    <div className="w-full">
      <div className="relative w-full mt-3 mb-4">
        <label
          className="block uppercase text-blueGray-600 text-xl font-semibold mb-2"
          htmlFor="grid-password"
        >
          {locations.length > 0 ? "pinball locations" : "There is no result"}
        </label>
      </div>
      <div className="relative w-full mb-3">
        {locations.length > 0 && (
          <table className="text-center">
            <thead>
              <tr>
                <th>Address</th>
                <th className="w-20">Latitude</th>
                <th className="w-20">Longitude</th>
                <th className="w-20">Distance</th>
              </tr>
            </thead>
            <tbody>
              {locations.map((location) => {
                return (
                  <tr
                    className="text-base font-semibold pb-4"
                    key={location.id}
                  >
                    <td className="text-left"> {`${location.street}, ${location.city}, ${location.country}`} </td>
                    <td> {location.lat} </td>
                    <td> {location.lon} </td>
                    <td className="text-right"> {location.distance} </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Locations;
