import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

function ListCarsOlderThan5Years() {
  const [olderCars, setOlderCars] = useState([]);

  const fetchOlderCars = async () => {
    try {
      // Fetch cars older than 5 years from your Express API
      const response = await fetch('/cars/listOlderThan5Years', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        const data = await response.json();
        setOlderCars(data.cars);
      } else {
        throw new Error('Error fetching older cars');
      }
    } catch (error) {
      console.error('Error fetching older cars', error);
    }
  };

  useEffect(() => {
    // Initial fetch when the component mounts
    fetchOlderCars();
  }, []);

  return (
    <div>
      <h2><b>List of Cars Older Than 5 Years</b></h2>
      <Button
        variant="primary"
        onClick={fetchOlderCars}
      >
        Refresh List
      </Button>
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

