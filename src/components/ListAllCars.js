import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

function ListAllCars() {
  const [cars, setCars] = useState([]);

  // Define the fetchCars function within the component's scope
  const fetchCars = async () => {
    try {
      // Fetch all cars from your Express API and set them in the state
      const response = await fetch('/cars/listAll', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        const data = await response.json();
        setCars(data.cars);
      } else {
        throw new Error('Error fetching cars');
      }
    } catch (error) {
      console.error('Error fetching cars', error);
    }
  };

  useEffect(() => {
    // Initial fetch when the component mounts
    fetchCars();
  }, []);

  return (
    <div>
      <h2>List of All Cars</h2>
      <Button
        variant="primary"
        onClick={fetchCars} // Use the function defined above
      >
        Refresh List
      </Button>
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



