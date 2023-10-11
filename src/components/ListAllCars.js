// ListAllCars.js
import React, { useState, useEffect } from 'react';

function ListAllCars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Fetch all cars from your Express API and set them in the state
    fetch('/cars/listAll', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error('Error fetching cars');
        }
      })
      .then((data) => setCars(data.cars))
      .catch((error) => console.error('Error fetching cars', error));
  }, []);

  return (
    <div>
      <h2>List of All Cars</h2>
      <ul>
        {cars.map((car, index) => (
          <li key={index}>
            Model: {car.model}, Make: {car.make}, Registration Number: {car.registration_number}, Owner: {car.owner}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListAllCars;

