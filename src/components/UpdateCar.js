// UpdateCar.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function UpdateCar() {
  const [carData, setCarData] = useState({ registration_number: '', updatedField: '', updatedValue: '' });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a PUT request to your Express API to update the car
      const response = await fetch(`/cars/update/${carData.registration_number}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ field: carData.updatedField, value: carData.updatedValue }),
      });

      if (response.status === 200) {
        const data = await response.json();
        console.log(data); // Handle the response as needed
      } else {
        console.error('Error updating the car');
      }
    } catch (error) {
      console.error('Error updating the car', error);
    }
  };

  return (
    <div>
      <h2>Update a Car</h2>
      <Form onSubmit={handleFormSubmit}>
        {/* Form fields for registration_number, updatedField, and updatedValue */}
        <Form.Group controlId="registration_number">
          <Form.Label>Registration Number</Form.Label>
          <Form.Control
            type="text"
            value={carData.registration_number}
            onChange={(e) => setCarData({ ...carData, registration_number: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="updatedField">
          <Form.Label>Field to Update</Form.Label>
          <Form.Control
            type="text"
            value={carData.updatedField}
            onChange={(e) => setCarData({ ...carData, updatedField: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="updatedValue">
          <Form.Label>New Value</Form.Label>
          <Form.Control
            type="text"
            value={carData.updatedValue}
            onChange={(e) => setCarData({ ...carData, updatedValue: e.target.value })}
          />
        </Form.Group>
        <Button type="submit">Update Car</Button>
      </Form>
    </div>
  );
}

export default UpdateCar;
