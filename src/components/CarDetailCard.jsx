/* eslint-disable react/prop-types */
const CarDetailCard = (props) => {
  const { carData } = props;
  const { year, model, doors, fuel, ac, rate } = carData;

  return (
    <div className="car-details">
      <div className="car-details-table">
        <h2>{rate} /rent per day</h2>
        <table>
          <tbody>
            {/* <tr>
              <th>{rate} Rent</th>
              <th>Per Day</th>
            </tr> */}
            <tr>
              <td>Year</td>
              <td>{year}</td>
            </tr>
            <tr>
              <td>Model</td>
              <td>{model}</td>
            </tr>
            <tr>
              <td>Doors</td>
              <td>{doors}</td>
            </tr>
            <tr>
              <td>A/C</td>
              <td>{ac}</td>
            </tr>
            <tr>
              <td>Fuel</td>
              <td>{fuel}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CarDetailCard;
