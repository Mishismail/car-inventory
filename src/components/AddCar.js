// client/src/components/AddCar.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function AddCar() {
  const [carData, setCarData] = useState({
    make: '',
    model: '',
    registrationNumber: '',
    currentOwner: '',
    address: '',
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to your Express API to add the car
      const response = await fetch('/cars/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(carData),
      });

      if (response.status === 201) {
        const data = await response.json();
        console.log(data); // Handle the response as needed
        // Clear the form after a successful submission
        setCarData({
          make: '',
          model: '',
          registrationNumber: '',
          currentOwner: '',
          address: '',
        });
      } else {
        console.error('Error adding the car');
      }
    } catch (error) {
      console.error('Error adding the car', error);
    }
  };

  return (
    <div>
      <h2>Add a Car</h2>
      <Form onSubmit={handleFormSubmit}>
        {/* Form fields for make, model, registrationNumber, currentOwner, and manufactureYear */}
        <Form.Group controlId="make">
          <Form.Label>Make</Form.Label>
          <Form.Control
            type="text"
            value={carData.make}
            onChange={(e) => setCarData({ ...carData, make: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="model">
          <Form.Label>Model</Form.Label>
          <Form.Control
            type="number"
            value={carData.model}
            onChange={(e) => setCarData({ ...carData, model: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="registrationNumber">
          <Form.Label>Registration Number</Form.Label>
          <Form.Control
            type="text"
            value={carData.registrationNumber}
            onChange={(e) => setCarData({ ...carData, registrationNumber: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="currentOwner">
          <Form.Label>Current Owner</Form.Label>
          <Form.Control
            type="text"
            value={carData.currentOwner}
            onChange={(e) => setCarData({ ...carData, currentOwner: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            value={carData.address}
            onChange={(e) => setCarData({ ...carData, address: e.target.value })}
          />
        </Form.Group>
        <Button type="submit">Add Car</Button>
      </Form>
    </div>
  );
}

export default AddCar;

