import React, { useState, useEffect } from 'react';

function ListCarsOlderThan5Years() {
  const [olderCars, setOlderCars] = useState([]);

  useEffect(() => {
    // Fetch cars older than 5 years from your Express API
    fetch('/cars/listOlderThan5Years', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error('Error fetching older cars');
        }
      })
      .then((data) => setOlderCars(data.cars))
      .catch((error) => console.error('Error fetching older cars', error));
  }, []);

  return (
    <div>
      <h2>List of Cars Older Than 5 Years</h2>
      <ul>
        {olderCars.map((car, index) => (
          <li key={index}>
            Model: {car.model}, Make: {car.make}, Registration Number: {car.registration_number}, Owner: {car.owner}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListCarsOlderThan5Years;
