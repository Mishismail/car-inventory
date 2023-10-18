import React, { useState, useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';

function ListAllCars() {
  const [cars, setCars] = useState([]);

  // Define the fetchCars function within the component's scope
  const fetchCars = async () => {
    try {
      const response = await fetch('/cars/listAllCars', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.status === 200) {
        const data = await response.json();
        setCars(data.cars);
      } else {
        // Handle non-200 status codes, for example:
        if (response.status === 404) {
          console.error('Resource not found');
        } else if (response.status === 500) {
          console.error('Internal server error');
        } else {
          console.error('Error fetching cars. Status:', response.status);
        }
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
    <Container> {/* Wrap the list in a Container component */}
      <h2><b>List of All Cars</b></h2>
      <ul>
        {cars.map((car, index) => (
          <li key={index}>
            Model: {car.model}, 
            Make: {car.make}, 
            Registration Number: {car.registration_number}, 
            Owner: {car.owner}
          </li>
        ))}
      </ul>
      <Button
        variant="primary"
        onClick={fetchCars} 
      >
        Refresh List
      </Button>
    </Container>
  );
}

export default ListAllCars;





