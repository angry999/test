function Locations({ locations }) {
  return (
    <div className="w-full">
      <div className="relative w-full mt-3 mb-4">
        <label
          className="block uppercase text-blueGray-600 text-2xl font-bold mb-2"
          htmlFor="grid-password"
        >
          {locations.length > 0 ? "pinball locations" : "There is no result"}
        </label>
      </div>
      <div className="relative w-full mb-3">
        {locations && (
          <table>
            <tr>
              <th className="w-20">City</th>
              <th className="w-20">Latitude</th>
              <th className="w-20">Longitude</th>
              <th className="w-20">Distance</th>
            </tr>
            {locations.map((location) => {
              return (
                <tr
                  className="text-base font-semibold pb-4"
                  key={location.id}
                >
                  <td> {location.city} </td>
                  <td> {location.lat} </td>
                  <td> {location.lon} </td>
                  <td className="text-right"> {location.distance} </td>
                </tr>
              );
            })}
          </table>
        )}
      </div>
    </div>
  );
}

export default Locations;
